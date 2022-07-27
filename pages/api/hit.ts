/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { NextApiRequest, NextApiResponse } from "next";
// import { redis } from "../../data/redis";
import type {
  ErrorResponse,
  HitRequest,
  TrackResponse,
} from "../../data/types";

export default (
  req: NextApiRequest,
  res: NextApiResponse<TrackResponse | ErrorResponse>
) => {
  console.log("HI");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const body = JSON.parse(req.body) as HitRequest;
  console.log(body);
  res.send({ message: "OK" });
};
