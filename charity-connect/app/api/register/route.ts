import { NextResponse, NextRequest } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;
  return NextResponse.json({ message: "eko" });
}


export async function GET(request: Request) {
  // const body = await request.json();
  // const { name } = body;
  // console.log('fokeifoeirjfoie');
  return NextResponse.json({ message: "eko" });
}