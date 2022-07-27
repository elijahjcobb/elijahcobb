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
					<Icon animate />
				</a>
			</Link>
		</div>
		<ul className={styles.list}>
			{LINKS.map(({ name, path }) => {
				if (name === 'Spotify') return <SpotifyWidget key='spotify' />
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