import { Icon } from "./icon"
import Link from "next/link";

export function NavBar() {
	return <nav className="nav">
		<style jsx>{`
			.nav {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 var(--padding);
				height: var(--nav-height);
			}
			.list {
				display: flex;
				align-items: center;
				gap: var(--padding-xl);
			}
			.item {
				font-size: 14px;
				color: var(--primary);
				font-family: var(--font-mono);
			}

			.link {
				text-decoration: none;
				text-transform: capitalize;
				color: var(--foreground);
				font-size: 18px;
				font-family: var(--font);
			}

			.item, .link {
				transition: 250ms ease-in-out;
			}

			.item:hover .link {
				color: var(--primary);
			}

			.item:hover {
				transform: scale(1.25);
			}

			
		`}</style>
		<Icon />
		<ol className="list" start={0}>
			{["about", "work", "projects", "contact"].map(page => {
				return <li className="item" key={page}>
					<Link href={`/#${page}`}>
						<a className="link">{page}</a>
					</Link>
				</li>
			})}
		</ol>
	</nav>
}