import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return NextResponse.json({'mess': 'hi'});
  // const body = request.nextUrl.searchParams;
  // const bodyText = body.get('userIds') as string;
  // const userIds = bodyText.split(',');
  // // const chatData: any = {
  // //   userIds: { set: userIds },0
  // //   messages: {
  // //     create: [],
  // //   },
  // // };

  // try {

  //   const chat = await prisma.chat.create({
  //     data: {
  //       userIds: {set: userIds}, messages: {create: []}
  //     },
  //     include: {
  //       messages: true,
  //     },
  //   });

  //   return NextResponse.json({chat});
  // } catch (error) {
  //   console.error("Error creating chat:", error);
  //   return NextResponse.json(error);
  // }
}
