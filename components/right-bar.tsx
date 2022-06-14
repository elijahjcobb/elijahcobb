import { SideBar } from "./side-bar";
import Link from "next/link";
import { VerticalLine } from "./vertical-line";

const EMAIL = "elijah@elijahcobb.com";

export function RightBar({ className }: { className?: string }) {
	return <SideBar className={className}>
		<style jsx>{`
			.sidebar {
				background: red;
				width: 64px;
			}
			.item {
				display: flex;
				align-items: center;
				height: 24px;
				width: 22ch;
				transform: rotate(90deg);
				margin-bottom: 90px;
			}
			.item:hover {
				transform: rotate(90deg) scale(1.0625);
			}
			.email {
				display: block;
			}
		`}</style>
		<Link href={`mailto:${EMAIL}`} passHref >
			<a target='_blank' rel='noopener noreferrer' className="item">
				<span className="email">{EMAIL}</span>
			</a>
		</Link>
		<VerticalLine color='var(--foreground)' />
	</SideBar >
}