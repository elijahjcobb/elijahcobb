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
	img?: string;
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
		chips: ["TypeScript", "NextJS", "ReactJS", "MongoDB", "REST", "NextAuth", "SCSS", "MD", "NGINX", "Ubuntu", "NodeJS"],
		link: "dotmd.app/about",
		github: "elijahjcobb/dotmd"
	},
	{
		title: "wramble",
		slug: "wramble",
		img: "/wramble.png",
		description: "Wordl meets Scrabble, built with Expo & React Native.",
		date: [2022],
		chips: ["TypeScript", "React Native", "Expo", "NodeJS", "CSS"],
		github: "elijahjcobb/wramble"
	},
	{
		title: "typr",
		slug: "typr",
		description: "A recursive run-time type checking package that is simple to use yet provides all the functionality you will ever need. Written by and for Typescript.",
		date: [2021],
		chips: ["TypeScript"],
		github: "elijahjcobb/typr"
	},
	{
		title: "chlorine",
		slug: "chlorine",
		description: "An abstracted, async, easy to use, type-safe function invocation event handler framework.",
		date: [2020],
		chips: ["TypeScript"],
		github: "element-ts/chlorine"
	},
	{
		title: "silicon",
		slug: "silicon",
		description: "silicon is a MongoDB driver. It wraps the official driver provided by MongoDB found here on NPM. silicon simplifies many processes by providing a type-safe object-oriented wrapper of the MongoDB driver. Also included in silicon is a powerful type-safe query driver.",
		date: [2020],
		chips: ["TypeScript", "MongoDB", "NodeJS"],
		github: "element-ts/silicon"
	},
	{
		title: "astra",
		slug: "astra",
		description: "A set of React components for developing interactive mission control software for aerospace applications.",
		date: [2022],
		chips: ["TypeScript", "React", "SCSS", "Redux"],
		github: "elijahjcobb/astra",
		type: ProjectType.PROFESSIONAL
	},
	{
		title: "neon",
		slug: "neon",
		description: "Neon is a simple package the provides really helpful logging. With even just the default options, Neon makes console.log() look like a smudge on a rock. It provides the type of the logged value, the stack it came from, and prints using the colors package.",
		date: [2020],
		chips: ["TypeScript", "NodeJS"],
		github: "element-ts/neon"
	},
	{
		title: "hydrogen",
		slug: "hydrogen",
		description: "Hydrogen is a jack of all trades for managing APIs. You can get a big project off the ground quickly with its ease of use and vast functionality.",
		date: [2019],
		chips: ["TypeScript", "NodeJS", "HTTP", "Rest", "JWT"],
		github: "element-ts/hydrogren",
		type: ProjectType.PROFESSIONAL
	},
	{
		title: "pstdl.com",
		slug: "pstdl",
		description: "A website for an aerospace robotics research laboratory.",
		date: [2021],
		chips: ["TypeScript", "NextJS", "SCSS", "MD", "Redux", "Linux", "NGINX"],
		link: "pstdl.com",
		github: "mtu-pstdl/pstdl.com",
		type: ProjectType.PROFESSIONAL
	},
	{
		title: "Vacation Village",
		slug: "vacation-village",
		description: "A website for a mobile home park in Elk Rapids, MI.",
		date: [2018],
		chips: ["HTML", "CSS", "Linux", "NGINX"],
		link: "vacationvillageelkrapids.com",
		github: "elijahjcobb/vacation-village",
		type: ProjectType.PROFESSIONAL
	},
	{
		title: "tmplit",
		slug: "tmplit",
		description: "A CLI that helps you create new files from a specific template. It supports meta variables as well as dynamic variables from prompts.",
		date: [2022],
		chips: ["TypeScript", "NodeJS"],
		github: "elijahjcobb/tmplit"
	},
	{
		title: "Abadi Lab",
		slug: "abadi",
		description: "A website for a medical labratory at Michigan Tech.",
		date: [2018, 2019],
		chips: ["HTML", "CSS", "JS"],
		link: "https://abadi.me.mtu.edu"
	}
];