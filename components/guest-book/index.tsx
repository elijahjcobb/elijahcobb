import { GuestBookMap } from './map';
import styles from "./index.module.css";

export function GuestBook() {
	return <div className={styles.container} id='guestbook'>
		<GuestBookMap />
	</div>
}