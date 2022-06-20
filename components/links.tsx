import { IconType } from "react-icons";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export const LINKS: { path: string, name: string }[] = [
	{ path: "/#about", name: "About" },
	{ path: "/#work", name: "Work" },
	{ path: "/projects", name: "Projects" },
	{ path: "/blog", name: "Blog" },
	{ path: "/#contact", name: "Contact" },
];

export const SOCIAL: { icon: IconType, link: string }[] = [
	{
		link: "https://github.com/elijahjcobb",
		icon: FaGithubSquare
	},
	{
		link: "https://www.linkedin.com/in/elijahjcobb/",
		icon: FaLinkedin
	},
	{
		link: "https://twitter.com/elijahjcobb",
		icon: FaTwitterSquare
	}
];