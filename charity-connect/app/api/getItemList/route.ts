import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "../../../generated";


const prisma = new PrismaClient();

export async function GET(request: Request) {
  console.log(request.url);

  try {
    console.log("Attempting to retrieve items for ItemList route");
    let data = await prisma.item.findMany({
      select: {
        id: true,
        category: true,
        address: true,
        description: true,
        photos: true
      }
    });

    await prisma.$disconnect();
    console.log("Items obtained:", data);
    return NextResponse.json(data);

  } catch (error) {
    let errMessage = `There was an error retrieving data from database: ${error}`
    console.log(errMessage);
    return NextResponse.json({"error": errMessage});
  }
}