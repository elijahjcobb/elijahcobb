import { Icon } from "../icon"
import Link from "next/link";
import { useRouter } from "next/router";
import { MobileNavBar } from "../mobile-nav-bar";
import { LINKS } from "../../data";
import styles from "./index.module.css";

export function NavBar() {
	const router = useRouter();
	return <nav className={styles.nav}>
		<Link href={`/`}>
			<a className='home'>
				<Icon />
			</a>
		</Link>
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