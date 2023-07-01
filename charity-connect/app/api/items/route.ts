import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '../../../generated';
const prisma = new PrismaClient()

export async function POST(request: Request) {
  const body = await request.json();
  let features = body.features.split(/[ ,]+/)

  try {
    const userId = await prisma.user.findUnique({
      where: {
        //! Need current user's id to be passed in frontend
        //! email: body.user
        email: "john.doe@example.com"
      }
    })
    if (userId) {
    //? Creates item based on whether delivery is shipping or pickup
    if (body.delivery === "Pickup") {
        const newItem = await prisma.item.create({
        data: {
          name: body.name,
          category: body.category,
          description: body.description,
          features: features,
          timeOwned: body.owned,
          photos: body.images,
          address: body.address,
          pickup: true,
          posterId: userId.id
        }
      })
      //! Issue where User's postedItems array wont push
      // await prisma.user.update({
      //   where: {
      //     id: userId?.id
      //   },
      //   data: {
      //     postedItems : {
      //       push: newItem
      //     }
      //   }
      // })
    } else {
      const newItem = await prisma.item.create({
        data: {
          name: body.name,
          category: body.category,
          description: body.description,
          features: features,
          timeOwned: body.owned,
          photos: body.images,
          address: body.address,
          shipping: true,
          posterId: userId.id
        }
      })
    }
  }
}
  catch (err) {
    console.log('ERROR: ', err);
  }

  return NextResponse.json({ status: 201 });
}

export async function PUT(request: Request) {
  const body = await request.json();
  try {
    const userId = await prisma.user.findUnique({
      where: {
        //! Need current user's id to be passed in frontend
        //! email: body.user
        email: "john.doe@example.com"
      }
    })
    if (userId) {
    await prisma.item.update({
      where: {
        //! Needs item id to be passed into prop of claim button
        id: body.item
      },
      data: {
        status: "Pending",
        claimerId: userId.id
        }
      })
    }
  }
  catch (err) {
    console.log('ERROR: ', err);
  }
  // const claimed = await prisma.item.updateOne(
  //   {_id: ObjectId(`${body.item}`)}, {$set: {status: 'Pending', claimerId: userId}}
  //   )

  return NextResponse.json({ status: 202 });
}

export async function GET(request: Request) {
  // const body = await request.json();

  return NextResponse.json({ message: "eko" });
}

export async function DELETE(request: Request) {
  // const body = await request.json();

  return NextResponse.json({ message: "eko" });
}