// export function POST(req: any, res: any) {
//   if (req.method === 'POST') {
//     // Process a POST request
//     console.log('here');
//     res.send(200);
//   } else {
//     // Handle any other HTTP method
//   }
// }

import { NextResponse, NextRequest } from "next/server";

export async function POST(request: Request) {
  // const body = await request.json();

  return NextResponse.json({ message: "eko" });
}