/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../data/redis";
import type {
  ErrorResponse,
  HitRequest,
  TrackResponse,
} from "../../data/types";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<TrackResponse | ErrorResponse>
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.send({ error: "No auth header." });
  const token = authHeader.split(" ")[1];
  if (!token) return res.send({ error: "No token." });
  if (!process.env.MY_SECRET)
    return res.send({ error: "Server token invalid." });
  if (token !== process.env.MY_SECRET)
    return res.send({ error: "Token invalid." });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const body = JSON.parse(req.body) as HitRequest;

  await redis.incr("home");
  if (body.country) await redis.sadd("countries", body.country);
  if (body.city) await redis.sadd("cities", body.city);
  if (body.region) await redis.sadd("regions", body.region);
  if (body.lat && body.lng)
    await redis.sadd("lat-lng", [body.lat, body.lng].join(":"));

  res.send({ message: "OK" });
};
