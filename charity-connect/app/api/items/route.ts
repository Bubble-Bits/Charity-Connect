import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '../../../generated';
const prisma = new PrismaClient()

export async function POST(request: Request) {
  console.log('hello');
  // const body = await request.json();
  // await prisma.$connect();
  // let features = body.features.split(/[ ,]+/)
  // try {
    const userId = await prisma.user.findUnique({
      where: {
        //! email: body.user
        email: "john.doe@example.com"
      }
    })
    console.log(userId);
  //   await prisma.$disconnect();
  // }
  // catch (err) {
  //   console.log('ERROR: ', err);
  // }
  // const newItem = await prisma.item.create({
  //   data: {
  //     name:,
  //     category: 'alice@prisma.io',
  //     description: ,
  //     features: ,
  //     timeOwned: ,
  //     photos: ,
  //     address: ,
  //     pickup: ,
  //     shipping: ,
  //     status: ,
  //     poster: ,
  //     posterId: ,
  //     claimer: ,
  //     claimerId: ,
  //   },
  // })

  return NextResponse.json({ message: "eko" });
}

export async function PUT(request: Request) {
  const body = await request.json();
  try {
    const userId = await prisma.user.findUnique({
      where: {
        email: body.user
      }
    })
    console.log(userId);
    // await prisma.$disconnect();
  }
  catch (err) {
    console.log('ERROR: ', err);
  }
  // const claimed = await prisma.item.updateOne(
  //   {_id: ObjectId(`${body.item}`)}, {$set: {status: 'Pending', claimerId: userId}}
  //   )

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