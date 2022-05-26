import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useMemo } from "react";
import { GrReactjs } from "react-icons/gr";

export interface TabBarItemProps {
	name: string;
	link: string;
}

export function TabBarItem({
	name,
	link
}: TabBarItemProps): ReactElement {

	const router = useRouter();

	const isActive: boolean = useMemo(() => {
		return router.route === link;
	}, [router.route, link]);

	return <>
		<style jsx>{`
			.container {
				background: var(--${isActive ? "background" : "dark"});
				display: flex;
				align-items: center;
				padding: var(--padding-half) var(--padding);
				transition: 80ms ease-in-out;
				user-select: none;
				color: var(--foreground);
				text-decoration: none;
			}
			.container:hover {
				background: var(--focus);
				cursor: pointer;
			}
			.name {
				margin-left: var(--padding-half);
			}
		`}</style>
		<Link href={link}>
			<a className="container">
				<GrReactjs color="#61afef" size={16} />
				<span className="name">{name}.tsx</span>
			</a>
		</Link>
	</>
}