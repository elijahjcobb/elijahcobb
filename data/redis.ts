import { Redis } from "@upstash/redis";
import type { MapPin } from "./map-data";

export const redis = new Redis({
  url: process.env.UPSTASH_URL as string,
  token: process.env.UPSTASH_KEY as string,
});

export async function fetchPins(): Promise<MapPin[]> {
  const points = await redis.smembers("lat-lng");
  return points.map((point) => {
    const [lat, lng] = point.split(":");
    return { lat, lng } as unknown as MapPin;
  });
}
