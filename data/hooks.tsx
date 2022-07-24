import { useEffect, useState, createContext, useContext } from 'react';
import useSWR from 'swr';
import type { SpotifyResponse } from './types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useSpotify() {
	return useSWR<SpotifyResponse>('/api/spotify', fetcher, {
		revalidateOnFocus: true,
		refreshInterval: 2000
	});
}

export function truncate(value: string, length: number) {
	let truncated = value.substring(0, length);
	if (truncated.length !== value.length)
		truncated += "...";
	return truncated;
}

export interface SpotifyContextProps {
	data?: SpotifyResponse;
	error?: Error;
	progress: number;
}

const SpotifyContext = createContext({} as SpotifyContextProps);

export function SpotifyProvider(props: { children?: React.ReactNode }) {
	const { data, error } = useSpotify();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		setProgress(data?.progress ?? 0);
		if (!data?.isPlaying) return;
		const interval = setInterval(() => {
			setProgress(v => v + 1000);
		}, 1000);
		return () => clearInterval(interval);
	}, [data?.progress, data?.isPlaying]);

	return <SpotifyContext.Provider value={{
		data,
		error,
		progress
	}}>
		{props.children}
	</SpotifyContext.Provider>
}

export function useSpotifyContext(): SpotifyContextProps {
	return useContext(SpotifyContext);
}