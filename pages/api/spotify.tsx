import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorResponse, SpotifyResponse } from '../../data/types';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string;
const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const getAccessToken = async () => {
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${auth}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token
		})
	});

	return response.json();
};

export default async (_: NextApiRequest, res: NextApiResponse<SpotifyResponse | ErrorResponse>) => {
	const { access_token } = await getAccessToken();
	let spotify: SpotifyResponse;
	try {
		const apiRes = await fetch(
			"https://api.spotify.com/v1/me/player/currently-playing",
			{
				headers: {
					'Authorization': `Bearer ${access_token}`
				}
			}).then(r => r.json());
		spotify = {
			progress: apiRes['progress_ms'],
			duration: apiRes['item']['duration_ms'],
			name: apiRes['item']['name'],
			album: apiRes['item']['album']['name'],
			artist: apiRes['item']['artists'][0]['name'],
			cover: apiRes['item']['album']['images'][0]['url'],
			isPlaying: apiRes['is_playing']
		}
	} catch (e) {
		console.error(e);
		return res.status(500).json({ error: "Error communicating with Spotify." });
	}
	res.status(200).json(spotify);
}