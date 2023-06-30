import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
import { where } from "firebase/firestore";

const prisma = new PrismaClient();


export async function GET(request: NextRequest) {
  const localId = request.nextUrl.searchParams.get("localId"); //use these methods to get param objs for get reqs
  console.log("Current user localId: ", localId);
  //here, use localId to fetch a user from the db

  try {prisma.user.findFirstOrThrow({where: {

    localId: localId

  }}) } catch (error) {

  }

  return NextResponse.json({ localId: localId });
}

export async function POST(request: NextRequest) {
  const body = await request.json(); //use this method to get param objs for post reqs
  const newUser = body.params.newUser;
  console.log("New user: ", newUser);
  //here, create new user and save to db
  return NextResponse.json({ newUser: newUser });
}

export async function PUT(request: NextRequest) {
  const body = await request.json(); //use this method to get param objs for put reqs
  const updatedUser = body.params.updatedUser;
  console.log("New user: ", updatedUser);
  //here update user info and save to db
  return NextResponse.json({ updatedUser: updatedUser });
}