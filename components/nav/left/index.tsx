import { SideBar } from "../../side-bar";
import Link from "next/link";
import { VerticalLine } from "../../vertical-line";
import { SOCIAL } from "../../../data/links";
import styles from "./index.module.css";

export function LeftBar({ className }: { className?: string }): JSX.Element {
	return <SideBar className={className}>
		{SOCIAL.map(({ link, icon: Icon }) => (
			<Link aria-label={`go to ${link} social site`} href={link} key={link} rel='noopener noreferrer' target='_blank'>
				<Icon className={styles.icon} size={32} />
			</Link>
		))}
		<VerticalLine color='var(--foreground)' />
	</SideBar >
}