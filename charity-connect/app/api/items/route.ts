import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(request: Request) {
  // const body = await request.json();
  const newItem = await prisma.item.create({
    data: {
      name: 'Alice',
      category: 'alice@prisma.io',
      description: ,
      features: ,
      timeOwned: ,
      photos: ,
      address: ,
      pickup: ,
      shipping: ,
      status: ,
      poster: ,
      posterId: ,
      claimer: ,
      claimerId: ,
    },
  })

  return NextResponse.json({ message: "eko" });
}

export async function PUT(request: Request) {
  const claimed = await prisma.item.updateOne(
    {_id: ObjectId('INSERTNUMBERSHERE')}, {$set: {status: 'Pending', claimerId: 'INSERTUSER FROM FIND'}}
    )

  return NextResponse.json({ message: "eko" });
}

export async function GET(request: Request) {
  // const body = await request.json();

  return NextResponse.json({ message: "eko" });
}

export async function DELETE(request: Request) {
  // const body = await request.json();

  return NextResponse.json({ message: "eko" });
}