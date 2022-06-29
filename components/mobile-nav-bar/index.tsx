import { Divide as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import { useState } from 'react';
import { LINKS, SOCIAL } from '../../data';
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
					<a onClick={() => {
						props.setIsOpen(false);
						router.push(path);
					}} className={styles.item}>
						<span>{name}</span>
						<BsChevronRight />
					</a>
				</li>
			})}
		</ul>
		<div className={styles.socials}>
			{SOCIAL.map(({ icon: Icon, link }) => {
				return <Link key={link} href={link} passHref>
					<a onClick={() => props.setIsOpen(false)} target='_blank' rel='noopener noreferrer'>
						<Icon size={32} className={styles.icon} />
					</a>
				</Link>
			})}
		</div>
		<div className={styles.socials}>
			<Link href={'mailto:elijah@elijahcobb.com'} passHref>
				<a target='_blank' rel='noopener noreferrer'>
					elijah@elijahcobb.com
				</a>
			</Link>
		</div>
	</div>
}

export function MobileNavBar() {

	const [isOpen, setIsOpen] = useState(false);

	return <>
		<Hamburger color='var(--primary)' toggled={isOpen} toggle={setIsOpen} />
		{isOpen && <MobileNavItems setIsOpen={setIsOpen} />}
	</>
}