import { Request } from 'node-fetch';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {

  console.log(req.body);

  return NextResponse.json('success');

}

