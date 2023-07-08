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
        email: body.user
        // localId: "Ks5S9W6xEZTUmJmFDXumwC2xA6t1"
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
      // //! Issue where User's postedItems array wont push
      await prisma.user.update({
        where: {
          id: userId.id
        },
        data: {
          postedItemIds :
            {push: newItem.id}
          }
        })
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
      // //! Issue where User's postedItems array wont push
      await prisma.user.update({
        where: {
          id: userId.id
        },
        data: {
          postedItemIds :
            {push: newItem.id}
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
        localId: body.user
        // localId: "Ks5S9W6xEZTUmJmFDXumwC2xA6t1"
      }
    })
    if (userId) {
    const claimedItem = await prisma.item.update({
      where: {
        //! Needs item id to be passed into prop of claim button
        id: body.item
      },
      data: {
        status: "Pending",
        claimerId: userId.id
        }
      })
    await prisma.user.update({
        where: {
          id: userId.id
        },
        data: {
          claimedItemIds :
            {push: claimedItem.id}
          }
        })
    }
  }
  catch (err) {
    console.log('ERROR: ', err);
  }

  return NextResponse.json({ status: 202 });
}

export async function GET(request: Request) {
  type storage = {
    posted: Object[],
    claimed: Object[]
  }

  let Storage:storage = {
    posted: [],
    claimed: []
  }

  const body = await request.json();
  try {
    const userInfo = await prisma.user.findUnique({
      where: {
        localId: body.user
      }
    })
    if (userInfo) {
      if (userInfo.postedItemIds.length) {
        for (let i = 0; i < userInfo.postedItemIds.length; i++) {
          const postItem = await prisma.item.findUnique({
            where: {
              id: userInfo.postedItemIds[i]
            }
          })
          if (postItem) {
            Storage.posted.push(postItem);
          }
        }
      }
      if (userInfo.claimedItemIds.length) {
        for (let j = 0; j < userInfo.claimedItemIds.length; j++) {
          const claimItem = await prisma.item.findUnique({
            where: {
              id: userInfo.claimedItemIds[j]
            }
          })
          if (claimItem) {
            Storage.claimed.push(claimItem);
          }
        }
      }
    }
  }
  catch (err) {
      console.log('ERROR: ', err);
  }
  return NextResponse.json(Storage);
}