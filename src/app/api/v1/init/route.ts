// app/api/init-views/route.ts

import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET() {
  await redis.set("portfolio:views", 1030);

  return NextResponse.json({
    success: true,
    views: 1030,
  });
}