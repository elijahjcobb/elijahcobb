import type { IconType } from "react-icons";

export interface PositionType {
	shortName: string | null;
	name: string;
	href: string;
	startDate: string;
	endDate: string | null;
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

export interface HitRequest {
	city: string | null;
	country: string | null;
	region: string | null;
	lat: string | null;
	lng: string | null;
}

export interface TrackResponse {
	message: "OK";
}

export interface ContentFullResponse<T> {
	total: number;
	skip: number;
	limit: number;
	items: {
		fields: T
	}[];
}

export type ContentFullResponsePosition = ContentFullResponse<{
	name: string,
	href: string,
	startDate: string;
	endDate?: string;
	position: string;
	shortName?: string;
	tasks: {
		content: {
			content: {
				value: string;
			}[]
		}[]
	}
}>;

export type ContentFullResponseShips = ContentFullResponse<{
	id: string;
}>;

export interface GithubRepo {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: GitHubOwner;
	html_url: string;
	description: string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: string;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: string;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	forks_count: number;
	mirror_url: null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: null;
	allow_forking: boolean;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: string[];
	visibility: string;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
	temp_clone_token: null;
	network_count: number;
	subscribers_count: number;
}

export interface GitHubOwner {
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


export interface Ship {
	slug: string;
	fullName: string;
	name: string;
	description: string;
	updatedAt: string;
	createdAt: string;
	year: number;
	stars: number;
	forks: number;
	languages: Record<string, number>;
}