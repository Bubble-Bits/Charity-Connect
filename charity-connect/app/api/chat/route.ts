import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest | Request) {
  const bodyText = await request.text();
  const body = JSON.parse(bodyText);
  const { userIds } = body;
  try {
    const chat = await prisma.chat.create({
      data: {
        userIds: userIds,
        messages: {
          create: [],
        },
      },
      include: {
        messages: true,
      },
    });

    return NextResponse.json(chat);
  } catch (error) {
    console.error("Error creating chat:", error);
    return NextResponse.json(error);
  }
}
