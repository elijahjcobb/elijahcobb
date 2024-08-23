import { createClient, RedisClientType } from "redis";

export const kv = createClient({ url: process.env.KV_URL });
