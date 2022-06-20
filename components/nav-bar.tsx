import { Icon } from "./icon"
import Link from "next/link";
import { useRouter } from "next/router";
import { MobileNavBar } from "./mobile-nav-bar";
import { LINKS } from "./links";


export function NavBar() {
	const router = useRouter();
	return <nav className="nav">
		<style jsx>{`
			.nav {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 var(--padding);
				height: var(--nav-height);
				position: sticky;
				background: var(--background);
				z-index: 9;
				top: 0;
				left: 0;
				width: 100vw;
			}
			.list {
				display: none;
				align-items: center;
				gap: var(--padding-xl);
			}
			.item {
				font-size: 14px;
				color: var(--foreground);
				font-family: var(--font-mono);
				padding: var(--padding-xs)
			}

			.link {
				text-decoration: none;
				text-transform: capitalize;
				color: var(--primary);
				font-size: 18px;
				font-family: var(--font);
			}

			.item, .link {
				transition: 250ms ease-in-out;
			}

			.item:hover .link {
				color: var(--secondary);
			}

			.item:hover {
				transform: scale(1.0625) translateY(-2px);
				color: var(--secondary);
			}

			.home:hover {
				cursor: pointer;
			}

			@media (min-width: 800px) {
				.list {
					display: flex;
				}
				.mobile {
					display: none;
				}
			}
			
		`}</style>
		<Link href={`/`}>
			<a className='home'>
				<Icon />
			</a>
		</Link>
		<ol className="list" start={0}>
			{LINKS.map(({ name, path }) => {
				return <li className="item" key={name}>
					<Link href={path}>
						<a className="link">{name}</a>
					</Link>
				</li>
			})}
		</ol>
		<div className="mobile">
			<MobileNavBar />
		</div>
	</nav>
}