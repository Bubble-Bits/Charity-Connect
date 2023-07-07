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
    prisma.$disconnect;
    return NextResponse.json({ error: error });
  });
  prisma.$disconnect;
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
    const newUser: any = await prisma.user.create({
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
      prisma.$disconnect;
    })
    console.log("new user: ", newUser);
    prisma.$disconnect;
    return NextResponse.json({ message: "new user created", user: newUser });

  } else {
    //if user already exists
    prisma.$disconnect;
    return NextResponse.json({ message: "a user with id: " + localId + " already exists.", localId: localId });
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json(); //use this method to get param objs for put reqs
  const updatedUser = body.params.updatedUser;
  const { localId, chatIds, chats, postedItems, claimedItems, name, email, bio, profilePic, address, itemsClaimed, itemsSuccessClaimed, blocked } = updatedUser;
  //console.log("Updated user: ", updatedUser);
  //here update user info and save to db
  prisma.user.update({
    where: { email: email }, //should be based off of localId, though. prisma won't let me bc localId isn't tagged unique
    data: {
      // chatIds: chatIds,
      // chats: chats,
      // postedItems: postedItems,
      // claimedItems: postedItems,
      name: name,
      email: email,
      bio: bio,
      profilePic: profilePic,
      address: address,
      itemsClaimed: itemsClaimed,
      itemsSuccessClaimed: itemsSuccessClaimed,
      // blocked: blocked
    }
  }).catch((error) => {
    console.log(error);
    prisma.$disconnect;
  });
  prisma.$disconnect;
  return NextResponse.json({ updatedUser: updatedUser });
}