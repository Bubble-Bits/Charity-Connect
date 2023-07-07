import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "../../../generated";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    await prisma.$connect();
    const items = await prisma.item.findMany();
    await prisma.$disconnect();
    return NextResponse.json({ items: items });
  } catch (error) {
    await prisma.$disconnect();
    console.error("An error occurred:", error);
  }
}
