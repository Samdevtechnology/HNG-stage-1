import { NextResponse } from "next/server";

const email = "samdevtechnology@gmail.com";
const current_datetime = new Date().toISOString();
const github_url = "https://github.com/Samdevtechnology/HNG-stage-1";

export async function GET() {
  return NextResponse.json(
    { email, current_datetime, github_url },
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
