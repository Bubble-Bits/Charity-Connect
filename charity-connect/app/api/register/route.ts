import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@/generated";
import { json } from "stream/consumers";

const prisma = new PrismaClient();


export async function GET(request: NextRequest) {
  const localId = request.nextUrl.searchParams.get("localId"); //use these methods to get param objs for get reqs
  console.log("Current user localId: ", localId);
  //here, use localId to fetch a user from the db
  const user = await prisma.user.findFirstOrThrow({
    where: {
      localId: localId!
    }
  }).catch((error) => {
    console.log(error);
    return NextResponse.json({ status: 204 });
  });

  return NextResponse.json({ user: user });
}

export async function POST(request: NextRequest) {
  const body = await request.json(); //use this method to get param objs for post reqs
  const newUser = body.params.newUser;
  const { localId, name, email, bio, profilePic, address } = newUser;
  //check if user is already in db using localId
  let userCount = await prisma.user.count({
    where: {
      localId: localId
    }
  });

  if (userCount === 0) {
    //if not, create new user, and send the obj in response
    await prisma.user.create({
      data:
      {
        localId: localId,
        name: name,
        email: email,
        bio: bio,
        profilePic: profilePic,
        address: address,
        itemsClaimed: 0,
        itemsSuccessClaimed: 0,
      }
    }).catch((error) => {
      console.log("ERROR: ", error);
    }).then((res) => {
      console.log("new user: ", res);
      return NextResponse.json({ status: 201 });
    });
  } else {
    return NextResponse.json({ message: "a user with id: " + localId + " already exists." });
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json(); //use this method to get param objs for put reqs
  const updatedUser = body.params.updatedUser;
  const { localId, name, email, bio, profilePic, address } = updatedUser;
  //console.log("Updated user: ", updatedUser);
  //here update user info and save to db
  prisma.user.update({
    where: { name: name }, //should be based off of localId, though. prisma won't let me bc localId isn't tagged unique
    data: {
      name: name,
      bio: bio,
      profilePic: profilePic,
    }
  }).catch((error) => {
    console.log(error);
  });
  return NextResponse.json({ updatedUser: updatedUser });
}