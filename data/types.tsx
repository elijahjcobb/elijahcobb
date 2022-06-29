import type { IconType } from "react-icons";

export type PositionType = {
	shortName?: string;
	name: string;
	href: string;
	startDate: string;
	endDate: string;
	position: string;
	tasks: string[];
};

export interface SocialType {
	icon: IconType;
	link: string;
}

export interface LinkType {
	path: string;
	name: string;
}

export interface SpotifyResponse {
	progress: number;
	duration: number;
	name: string;
	album: string;
	artist: string;
	cover: string;
	isPlaying: boolean;
	error?: string;
}

export interface ErrorResponse {
	error: string;
}
