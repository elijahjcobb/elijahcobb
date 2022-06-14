import { SideBar } from "./side-bar";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import type { IconType } from "react-icons";
import Link from "next/link";
import { VerticalLine } from "./vertical-line";

const ITEMS: { icon: IconType, link: string }[] = [
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

export function LeftBar({ className }: { className?: string }) {
	return <SideBar className={className}>
		<style jsx>{`
			.icon {
				color: var(--primary);
				transition: 250ms ease-in-out;
			}
			.icon:hover {
				color: var(--secondary);
				transform: scale(1.125) translateY(-2px);
			}
		`}</style>
		{ITEMS.map(({ link, icon: Icon }) => (
			<Link key={link} href={link} passHref >
				<a target='_blank' rel='noopener noreferrer'>
					<Icon size={32} className='icon' />
				</a>
			</Link>
		))}
		<VerticalLine color='var(--foreground)' />
	</SideBar >
}