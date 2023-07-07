import { PrismaClient } from "../../../generated";
const prisma = new PrismaClient();
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // return NextResponse.json({'hi': 'bye'})
  const body = request.nextUrl.searchParams;
  const bodyText = body.get('userIds') as string;
  const userIds = bodyText.split(',');
  // const chatData: any = {
  //   userIds: { set: userIds },0
  //   messages: {
  //     create: [],
  //   },
  // };
  console.log('userids', userIds);
   
  try {
    await prisma.$connect(); // Connect to the database
    const chat = await prisma.chat.create({
      data: {
        userIds: {set: userIds}, messages: {create: []}
      },
      include: {
        messages: true,
        users: true
      },
    });
    await prisma.$disconnect();
    return NextResponse.json({chat});
  } catch (error) {
    console.error("Error creating chat:", error);
    await prisma.$disconnect(); // Connect to the database
    return NextResponse.json(error);
  }
}
