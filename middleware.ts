import type { NextRequest } from "next/server";

async function redis(command: string, ...params: string[]): Promise<void> {
  const url = `https://usw1-fast-pigeon-33325.upstash.io/${command}/${params.join(
    "/"
  )}`;
  console.log(url);
  await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_KEY ?? ""}`,
    },
  });
}

async function handleAnalytics(request: NextRequest): Promise<void> {
  const path = request.nextUrl.pathname;
  if (path.includes(".") || path.startsWith("/api")) return;
  await redis("incr", `path:${path}`);

  if (path !== "/") return;

  console.log("WILL LOG GEO");
  console.log(request.geo);

  if (request.geo?.country)
    await redis("sadd", "countries", request.geo.country);
  if (request.geo?.city) await redis("sadd", "cities", request.geo.city);
  if (request.geo?.latitude && request.geo.longitude)
    await redis(
      "sadd",
      "lat-lng",
      [request.geo.latitude, request.geo.longitude].join(":")
    );
}

export function middleware(request: NextRequest) {
  (async () => handleAnalytics(request))().catch(console.error);
}

export const config = {
  runtime: "experimental-edge",
};
