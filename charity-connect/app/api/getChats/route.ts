import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest | Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") ?? undefined;

  try {
    const chats = await prisma.chat.findMany({
      where: {
        userIds: {
          has: userId,
        },
      },
      include: {
        users: {
          select: {
            id: true,
            name: true,
          },
        },
        messages: {
          select: {
            id: true,
            content: true,
            sentAt: true,
            sender: true,
          },
        },
      },
    });
    console.log(chats);
    return NextResponse.json(chats);
  } catch (error) {
    console.error("Error creating chat:", error);
    return NextResponse.error();
  }
}
