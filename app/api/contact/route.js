import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  console.log(fullname);
  console.log(email);
  console.log(message);
  return NextResponse.json({msg : ["i m contact server"] })
}
