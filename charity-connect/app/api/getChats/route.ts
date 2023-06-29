import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// export async function POST(request: Request) {
//   const body = await request.json();
//   const { name } = body;

//   return NextResponse.json({ message: "eko" });
// }

export async function GET(request: NextRequest) {

  const body = request.nextUrl.searchParams;
  const userId = body.get('userId') as string;

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
