import { SideBar } from "../../side-bar";
import Link from "next/link";
import { VerticalLine } from "../../vertical-line";
import { SOCIAL } from "../../../data";
import styles from "./index.module.css";

export function LeftBar({ className }: { className?: string }) {
	return <SideBar className={className}>
		{SOCIAL.map(({ link, icon: Icon }) => (
			<Link href={link} key={link} passHref >
				<a href={link} rel='noopener noreferrer' target='_blank'>
					<Icon className={styles.icon} size={32} />
				</a>
			</Link>
		))}
		<VerticalLine color='var(--foreground)' />
	</SideBar >
}