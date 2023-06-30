import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  console.log(request.url);

  var itemId = request.url.split("=")[1];

  //This id item is now in a string that has been extracted from the url params.

  const item = await prisma.item.findUnique({
    where: {
      id: itemId, // Replace with the appropriate condition to identify the item
    },
  });

  console.log(item);
  const donor = await prisma.user.findUnique({
    where: {
      id: item?.posterId,
    },
  });

  console.log(donor);

  return NextResponse.json({ item: item, donor: donor });
}
