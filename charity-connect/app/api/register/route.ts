import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();
import User from "@/app/components/User";

export async function POST(request: NextRequest) {
  const user = {};
}
