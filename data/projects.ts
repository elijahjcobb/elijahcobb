/**
 * @File   : projects.ts
 * @Author : Elijah Cobb, elijahcobb.com
 * @Date   : 3/27/2022, 8:18:35 PM
 */

import {ProjectRowProps, ProjectType} from "../components/ProjectRow";

export interface IProject {
	title: string;
	slug: string;
	date: [number, number?];
	description: string;
	chips: string[];
	img: string;
	type?: ProjectType;
	link?: string;
	github?: string;
}

export const projects: IProject[] = [
	{
		title: "dotmd",
		slug: "dotmd",
		img: "/dotmd.png",
		description: "A web-based markdown editor accessible on any device. Simply sign in with Google and all your files will be synced automatically. Full markdown support, LaTeX, Github syntax highlighting, and much more!",
		date: [2021],
		chips: ["TypeScript", "NextJS", "MongoDB", "REST", "NextAuth", "SCSS", "MD"],
		link: "dotmd.app/about",
		github: "elijahjcobb/dotmd"
	}
];