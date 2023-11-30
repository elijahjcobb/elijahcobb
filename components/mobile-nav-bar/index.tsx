'use client';
import { Divide as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { LINKS, SOCIAL } from '../../data/links';
import { BsChevronRight } from 'react-icons/bs';
import styles from "./index.module.css";
import cn from "clsx";

interface MobileNavItemsProps {
	setIsOpen: (value: boolean) => void;
	isOpen: boolean;
}

function MobileNavItems({ setIsOpen, isOpen }: MobileNavItemsProps): JSX.Element {

	const close = useCallback(() => { setIsOpen(false) }, [setIsOpen]);

	return <div className={cn(styles.container, isOpen && styles.isOpen)}>
		<ul className={styles.list}>
			{LINKS.map(({ name, path }) => {
				return <li key={name}>
					<Link className={styles.item} href={path} onClick={close}>
						<span>{name}</span>
						<BsChevronRight />
					</Link>
				</li>
			})}
		</ul>
		<div className={styles.socials}>
			{SOCIAL.map(({ icon: Icon, link }) => {
				return <Link href={link} key={link} onClick={close} passHref rel='noopener noreferrer' target='_blank'>
					<Icon className={styles.icon} size={32} />
				</Link>
			})}
		</div>
		<div className={styles.socials}>
			<Link href="mailto:elijah@elijahcobb.com" rel='noopener noreferrer' target='_blank'>
				elijah@elijahcobb.com
			</Link>
		</div>
	</div>
}

export function MobileNavBar(): JSX.Element {

	const [isOpen, setIsOpen] = useState(false);

	return <>
		<Hamburger color='var(--primary)' toggle={setIsOpen} toggled={isOpen} />
		<MobileNavItems isOpen={isOpen} setIsOpen={setIsOpen} />
	</>
}