import { PrismaClient } from "../../../generated";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;

  return NextResponse.json({ message: "eko" });
}