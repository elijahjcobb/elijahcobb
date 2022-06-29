import { SideBar } from "../../side-bar";
import Link from "next/link";
import { VerticalLine } from "../../vertical-line";
import { SOCIAL } from "../../../data";
import styles from "./index.module.css";

export function LeftBar({ className }: { className?: string }) {
	return <SideBar className={className}>
		{SOCIAL.map(({ link, icon: Icon }) => (
			<Link key={link} href={link} passHref >
				<a target='_blank' rel='noopener noreferrer'>
					<Icon size={32} className={styles.icon} />
				</a>
			</Link>
		))}
		<VerticalLine color='var(--foreground)' />
	</SideBar >
}