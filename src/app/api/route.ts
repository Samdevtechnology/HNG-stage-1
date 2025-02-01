import { NextResponse } from "next/server";

const email = "samdevtechnology@gmail.com";
const timestamp = new Date().toISOString();
const gitUrl = "https://github.com/Samdevtechnology/HNG-stage-1";

export async function GET() {
  return NextResponse.json(
    { email, timestamp, gitUrl },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
