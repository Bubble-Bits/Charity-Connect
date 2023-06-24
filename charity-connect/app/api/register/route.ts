import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
  //test user
  try {
    const user = await prisma.user.create({
      data: {
        name: "testperson",
        email: "test@testmail.com",
        bio: "Hello, I am test!",
        address: `198 South Young Ave.
        Providence, RI 02904`,
        itemsClaimed: 0,
        itemsSuccessClaimed: 0,
        blocked: [],
        chats: { create: [] }, // Empty array for chats
        chatIds: [], // Empty array for chatIds
      },
    });
    console.log("User created:", user);
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(error);
  }
}
