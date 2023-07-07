import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "../../../generated";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = request.nextUrl.searchParams;
  const chatId = body.get('chatId') as string;

  try {
    await prisma.$connect(); // Connect to the database

    // // Retrieve all related messages for the chat
    // const messages = await prisma.message.findMany({
    //   where: {
    //     chat: {
    //       id: chatId,
    //     },
    //   },
    // });

    // Delete the related messages
    await prisma.message.deleteMany({
      where: {
        chat: {
          id: chatId,
        },
      },
    });

    // Delete the chat itself
    const deletedChat = await prisma.chat.delete({
      where: {
        id: chatId,
      },
    });

    await prisma.$disconnect(); // Disconnect from the database

    return NextResponse.json(deletedChat);
  } catch (error) {
    console.error("Error deleting chat:", error);
    await prisma.$disconnect(); // Disconnect from the database
    return NextResponse.error();
  }
}