import { GuestBookMap } from './map';
import styles from "./index.module.css";
import { useCookies } from 'react-cookie';

export function GuestBook() {
	const [cookies] = useCookies();
	const cityName = String(cookies['city'] ?? "Earth");
	console.log(cookies);
	return <div className={styles.container} id='guestbook'>
		<GuestBookMap />
		<div className={styles.overlay}>
			<span className={styles.title}>{`Hello, ${cityName}!`}</span>
		</div>
	</div>
}