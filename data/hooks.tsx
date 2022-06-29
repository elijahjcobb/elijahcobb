import useSWR from 'swr';
import type { ErrorResponse, SpotifyResponse } from './types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useSpotify() {
	return useSWR<SpotifyResponse>('/api/spotify', fetcher, {
		revalidateOnFocus: true,
		refreshInterval: 2000
	});
}