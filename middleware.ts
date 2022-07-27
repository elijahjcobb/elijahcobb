import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  fetch(`${process.env.HIT_API_ENDPOINT ?? ""}/api/hit`, {
    headers: {
      Authorization: `Bearer ${process.env.MY_SECRET ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify({
      city: request.geo?.city ?? null,
      country: request.geo?.country ?? null,
      region: request.geo?.region ?? null,
      lat: request.geo?.latitude ?? null,
      lng: request.geo?.longitude ?? null,
    }),
  }).catch(console.error);
}

export const config = {
  matcher: "/",
};
