import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "../../../generated";
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
    await prisma.$connect(); // Connect to the database
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
    await prisma.$disconnect(); // Connect to the database
    return NextResponse.json(chats);
  } catch (error) {
    console.error("Error creating chat:", error);
    await prisma.$disconnect(); // Connect to the database
    return NextResponse.error();
  }
}
