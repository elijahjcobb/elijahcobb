import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { useSpotifyContext } from "../../data/hooks";
import styles from "./index.module.css";

export function SpotifyWidget() {

	const { data, error } = useSpotifyContext();
	if (!data || error) return null;

	return <Link href="/#spotify" passHref>
		<a className={styles.link}>
			<div className={styles.container}>
				<FaSpotify color='var(--spotify-icon)' size={24} />
			</div>
		</a>
	</Link>
}