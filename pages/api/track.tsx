/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { NextApiRequest, NextApiResponse } from 'next'
import { redis } from '../../data/redis';
import type { ErrorResponse, TrackRequest, TrackResponse } from '../../data/types';

export default async (req: NextApiRequest, res: NextApiResponse<TrackResponse | ErrorResponse>) => {
	try {
		const query = req.query as unknown as TrackRequest;
		if (typeof query.key !== "string") {
			res.status(400).send({ error: "You must define a key." });
			return;
		}
		await redis.incr(`track:${query.key}`);
	} catch (e) {
		console.error(e);
		res.status(500).send({ error: "Error saving item." });
		return;
	}
	res.send({ message: "OK" });
}