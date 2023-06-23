import { Request } from "node-fetch";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import User from "@/app/components/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // const user = await prisma.test.create({
  //   data: {
  //     name: "asnp",
  //   },
  // });
  //return NextResponse.json(user);
}
