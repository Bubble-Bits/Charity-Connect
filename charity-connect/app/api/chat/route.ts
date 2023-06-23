import { Request } from "node-fetch";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const bodyText = await request.text();
  const body = JSON.parse(bodyText);
  const {userIds} = body;
  try {
    const chat = await prisma.chat.create({
      data: {
        userIds: userIds,
        messages: {
          create: [
            {
              content: 'Hello, welcome to the chat!',
              sentAt: new Date(),
              sender: 'system',
            },
          ],
        },
      },
      include: {
        messages: true,
      },
    });

    return NextResponse.json(chat);
  } catch (error) {
    console.error('Error creating chat:', error);
    return NextResponse.json(error);
  }
}


