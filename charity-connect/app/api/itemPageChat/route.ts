import { PrismaClient } from "../../../generated";
const prisma = new PrismaClient();
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = request.nextUrl.searchParams;
  const userIdText = body.get('userIds') as string;
  const userIds = userIdText.split(',');
  const content = body.get('content') as string;


  try {
    await prisma.$connect(); // Connect to the database
    const chat = await prisma.chat.findFirst({
      where: {
        userIds: {
          hasEvery: userIds,
        },
      },
    })
    let newChat;
    if (chat) {
      newChat = chat;
    } else {
      newChat = await prisma.chat.create({
        data: {
          userIds: {set: userIds}, messages: {create: []}
        },
      });
    }

    const message = await prisma.message.create({
      data: {
        chat: { connect: { id: newChat.id } }, // Connect the message to a chat using the chatId
        content: content,
        sentAt: new Date(),
        sender: userIds[1], // Connect the message to a user using the userId
      },
    });

    await prisma.$disconnect();
    return NextResponse.json({message});
  } catch (error) {
    console.error("Error sending new chat:", error);
    await prisma.$disconnect(); // Connect to the database
    return NextResponse.json(error);
  }
}
