import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    src: "https://cloud.umami.is/script.js",
    websiteId: process.env.WEBSITE_ID,
  });
}
