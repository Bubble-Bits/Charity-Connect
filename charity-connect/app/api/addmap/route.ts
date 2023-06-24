import { Request } from "node-fetch";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();
import User from "@/app/components/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // const profile: User = {
  //   id: "232323",
  //   profilePic: "eddw",
  //   name: "exaplmepo",
  //   email: "mdw0i",
  //   bio: "string",
  //   address: ",d-w",
  //   itemsClaimed: 0,
  //   itemsSuccessClaimed: 0,
  //   blocked: ["323"],
  // };
  // const user = await prisma.item.create({
  //   data: {
  //     name: "Alvin's ITEM!!!",
  //     description: "From lalaland",
  //     features: ["hello", "there"],
  //     photos: ["HELLO!!!!"],
  //     address: "6823 Vista Place Brooklyn NY 11220",
  //     poster: { connect: { posterId: id } },
  //     posterId: "6495fab420529e88f6120674",
  //   },
  // });
  return NextResponse.json({temp: 'data});
}
