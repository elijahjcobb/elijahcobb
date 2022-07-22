import type { NextRequest } from "next/server";
import { redis } from "../data/redis";

async function handleAnalytics(request: NextRequest): Promise<void> {
  const path = request.nextUrl.pathname;
  if (path.includes(".") || path.startsWith("/api")) return;
  await redis.incr(`path:${path}`);
  if (request.geo?.country) await redis.sadd("countries", request.geo.country);
  if (request.geo?.city) await redis.sadd("cities", request.geo.city);
}

export function middleware(request: NextRequest) {
  (async () => handleAnalytics(request))().catch(console.error);
}