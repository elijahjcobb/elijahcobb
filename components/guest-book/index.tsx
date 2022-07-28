import { GuestBookMap } from './map';
import styles from "./index.module.css";

export function GuestBook() {
	return <div className={styles.container} id='guestbook'>
		<GuestBookMap />
		<span className={styles.description}>
			Your IP has been used to <a
				href='https://github.com/elijahjcobb/elijahcobb/blob/dev/middleware.ts'
				rel="noopener" target="_blank"
			>anonymously</a> add your region to my guestbook.</span>
	</div>
}