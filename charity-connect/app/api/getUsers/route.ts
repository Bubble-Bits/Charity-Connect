import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "../../../generated";
const prisma = new PrismaClient();

// export async function POST(request: Request) {
//   const body = await request.json();
//   const { name } = body;

//   return NextResponse.json({ message: "eko" });
// }

export async function GET(request: NextRequest) {


  try {
    await prisma.$connect(); // Connect to the database
    const users = await prisma.user.findMany({});
    await prisma.$disconnect(); // Connect to the database
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    await prisma.$disconnect(); // Connect to the database
    return NextResponse.error();
  }
}
