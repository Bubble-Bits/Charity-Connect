import { Request } from "node-fetch";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import User from "@/app/components/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  //test user
  try {
    const user = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Hello, I am John Doe!',
        address: '123 Main Street',
        itemsClaimed: 0,
        itemsSuccessClaimed: 0,
        blocked: [],
        chats: { create: [] }, // Empty array for chats
        chatIds: [], // Empty array for chatIds
      },
    });
    console.log('User created:', user);
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(error);
  }
}
