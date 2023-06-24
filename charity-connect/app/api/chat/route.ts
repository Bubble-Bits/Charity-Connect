import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse, NextRequest } from "next/server";
import { Chat } from '.prisma/client';

export async function POST(request: NextRequest | Request) {
  const bodyText = await request.text();
  const body = JSON.parse(bodyText);
  const { userIds } = body;
  try {
    // const chatData: any = {
    //   userIds: { set: userIds },
    //   messages: {  
    //     create: [],
    //   },
    // };
    // const chat: Chat = await prisma.chat.create({
    //   data: chatData,
    //   include: {
    //     messages: true,
    //   },
    // });

    return NextResponse.json({temp: 'data'});
  } catch (error) {
    console.error("Error creating chat:", error);
    return NextResponse.json(error);
  }
}
