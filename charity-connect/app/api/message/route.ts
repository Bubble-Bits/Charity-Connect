import { Request } from "node-fetch";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const bodyText = await request.text();
  const body = JSON.parse(bodyText);
  const {chatId, chatInput, userId} = body;
  try {
    const message = await prisma.message.create({
      data: {
        chat: { connect: { id: chatId } }, // Connect the message to a chat using the chatId
        content: chatInput,
        sentAt: new Date(),
        sender: userId, // Connect the message to a user using the userId
      },
    });

    console.log('Message created:', message);
    return NextResponse.json(message);
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json(error);
  }
}

