import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_URL as string,
  token: process.env.UPSTASH_KEY as string,
});
