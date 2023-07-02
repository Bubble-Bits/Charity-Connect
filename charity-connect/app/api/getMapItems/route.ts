import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "../../../generated";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const items = await prisma.item.findMany();
    return NextResponse.json({ items: items });
  } catch (error) {
    console.error("An error occurred:", error);
  }
  // close prisma after fetching
  await prisma.$disconnect();
}
