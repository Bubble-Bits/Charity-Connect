import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse, NextRequest } from "next/server";


export async function POST(request: NextRequest) {
  const body = request.nextUrl.searchParams;
  const chatId = body.get('chatId') as string;
  const chatInput = body.get('chatInput') as string;
  const userId = body.get('userId') as string;
  try {
    const message = await prisma.message.create({
      data: {
        chat: { connect: { id: chatId } }, // Connect the message to a chat using the chatId
        content: chatInput,
        sentAt: new Date(),
        sender: userId, // Connect the message to a user using the userId
      },
    });

    console.log("Message created:", message);
    return NextResponse.json(message);
  } catch (error) {
    console.error("Error creating message:", error);
    return NextResponse.json(error);
  }
}
