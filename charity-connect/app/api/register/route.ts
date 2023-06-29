import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const localId = request.nextUrl.searchParams.get("localId"); //use these methods to get param objs for get reqs
  console.log("Current user localId: ", localId);
  return NextResponse.json({ localId: localId });
}

export async function POST(request: NextRequest) {
  const body = await request.json(); //use this method to get param objs for post reqs
  const newUser = body.params.newUser;
  console.log("New user: ", newUser);
  return NextResponse.json({ newUser: newUser });
}

export async function PUT(request: NextRequest) {
  const body = await request.json(); //use this method to get param objs for put reqs
  const updatedUser = body.params.updatedUser;
  console.log("New user: ", updatedUser);
  return NextResponse.json({ updatedUser: updatedUser });
}