import { redis } from "@/lib/redis";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();

  const hasVisited = cookieStore.has("portfolio-view");

  if (!hasVisited) {
    await redis.incr("portfolio:views");
  }

  const views = (await redis.get<number>("portfolio:views")) ?? 0;

  const response = NextResponse.json({
    views,
  });

  if (!hasVisited) {
    response.cookies.set("portfolio-view", "true", {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  }

  return response;
}
