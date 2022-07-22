import type { IconType } from "react-icons";

export interface PositionType {
	shortName?: string;
	name: string;
	href: string;
	startDate: string;
	endDate: string;
	position: string;
	tasks: string[];
}

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

export interface GistFile {
	name: string;
	language: string;
	content: string | null;
}
export interface Gist {
	description: string;
	content: string | null;
	createdAt: string;
	updatedAt: string;
	id: string;
	url: string;
	files: GistFile[];
}

export interface RawGithubGistResponse {
	url: string;
	forks_url: string;
	commits_url: string;
	id: string;
	node_id: string;
	git_pull_url: string;
	git_push_url: string;
	html_url: string;
	files: Record<string, RawGithubGistResponseFile>;
	public: boolean;
	created_at: string;
	updated_at: string;
	description: string;
	comments: number;
	user: null;
	comments_url: string;
	owner: RawGithubGistResponseOwner;
	truncated: boolean;
}

export interface RawGithubGistResponseFile {
	filename: string;
	type: string;
	language: string;
	raw_url: string;
	size: number;
}

export interface RawGithubGistResponseOwner {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
}
export interface TrackRequest {
	key: string;
}

export interface TrackResponse {
	message: "OK";
}
