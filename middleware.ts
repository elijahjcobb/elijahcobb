import type { NextRequest } from "next/server";

async function redis(command: string, ...params: string[]): Promise<void> {
  const url = `https://usw1-fast-pigeon-33325.upstash.io/${command}/${params.join(
    "/"
  )}`;
  console.log(url);
  console.log(process.env.UPSTASH_KEY);
  const r = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_KEY ?? ""}`,
    },
  });
  console.log("STATUS: ", r.status);
}

async function handleAnalytics(request: NextRequest): Promise<void> {
  console.log(request.geo);
  await redis("incr", `home`);
  await redis("sadd", "countries", request.geo?.country ?? "localhost");
  await redis("sadd", "cities", request.geo?.city ?? "localhost");
  await redis("sadd", "regions", request.geo?.region ?? "localhost");
  await redis(
    "sadd",
    "lat-lng",
    [
      request.geo?.latitude ?? "localhost",
      request.geo?.longitude ?? "localhost",
    ].join(":")
  );
}

export function middleware(request: NextRequest) {
  (async () => handleAnalytics(request))().catch(console.error);
}

export const config = {
  runtime: "experimental-edge",
  matcher: "/",
};
