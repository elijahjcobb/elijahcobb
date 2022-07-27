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
  console.log("HI");
  const body = JSON.parse(req.body) as HitRequest;
  console.log(body);
  res.send({ message: "OK" });
};
