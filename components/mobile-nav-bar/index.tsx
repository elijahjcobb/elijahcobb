import { Divide as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import { useState } from 'react';
import { LINKS, SOCIAL } from '../../data/links';
import { BsChevronRight } from 'react-icons/bs';
import { useRouter } from 'next/router';
import styles from "./index.module.css";

interface MobileNavItemsProps {
	setIsOpen: (value: boolean) => void;
}

function MobileNavItems(props: MobileNavItemsProps) {
	const router = useRouter();
	return <div className={styles.container}>
		<ul className={styles.list}>
			{LINKS.map(({ name, path }) => {
				return <li key={name}>
					<button className={styles.item} onClick={() => {
						props.setIsOpen(false);
						void router.push(path);
					}} type='button'>
						<span>{name}</span>
						<BsChevronRight />
					</button>
				</li>
			})}
		</ul>
		<div className={styles.socials}>
			{SOCIAL.map(({ icon: Icon, link }) => {
				return <Link href={link} key={link} passHref>
					<a href={link} onClick={() => props.setIsOpen(false)} rel='noopener noreferrer' target='_blank'>
						<Icon className={styles.icon} size={32} />
					</a>
				</Link>
			})}
		</div>
		<div className={styles.socials}>
			<Link href="mailto:elijah@elijahcobb.com" passHref>
				<a href="mailto:elijah@elijahcobb.com" rel='noopener noreferrer' target='_blank'>
					elijah@elijahcobb.com
				</a>
			</Link>
		</div>
	</div>
}

export function MobileNavBar() {

	const [isOpen, setIsOpen] = useState(false);

	return <>
		<Hamburger color='var(--primary)' toggle={setIsOpen} toggled={isOpen} />
		{isOpen && <MobileNavItems setIsOpen={setIsOpen} />}
	</>
}