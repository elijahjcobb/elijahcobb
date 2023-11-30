import { Icon } from "../icon"
import Link from "next/link";
import { MobileNavBar } from "../mobile-nav-bar";
import { LINKS } from "../../data/links";
import styles from "./index.module.css";

export function NavBar(): JSX.Element {
	return <nav className={styles.nav}>
		<div className={styles.left}>
			<Link aria-label="Go to the home page" className='home' href="/">
				<Icon animate />
			</Link>
		</div>
		<ul className={styles.list}>
			{LINKS.map(({ name, path }) => {
				return <li className={styles.item} key={name}>
					<Link aria-label={`go to ${path}`} className={styles.link} href={path}>
						{name}
					</Link>
				</li>
			})}
		</ul>
		<div className={styles.mobile}>
			<MobileNavBar />
		</div>
	</nav>
}