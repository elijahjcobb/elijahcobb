import { Icon } from "../icon"
import Link from "next/link";
import { MobileNavBar } from "../mobile-nav-bar";
import { LINKS } from "../../data";
import styles from "./index.module.css";
import { SpotifyWidget } from "../spotify-widget";

export function NavBar() {
	return <nav className={styles.nav}>
		<div className={styles.left}>
			<Link href="/">
				<a className='home'>
					<Icon />
				</a>
			</Link>
			<SpotifyWidget />
		</div>
		<ul className={styles.list}>
			{LINKS.map(({ name, path }) => {
				return <li className={styles.item} key={name}>
					<Link href={path}>
						<a className={styles.link}>{name}</a>
					</Link>
				</li>
			})}
		</ul>
		<div className={styles.mobile}>
			<MobileNavBar />
		</div>
	</nav>
}