import { Divide as Hamburger } from 'hamburger-react'
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { LINKS, SOCIAL } from './links';
import { BsChevronRight } from 'react-icons/bs';
import { useRouter } from 'next/router';

interface MobileNavItemsProps {
	setIsOpen: (value: boolean) => void;
}

function MobileNavItems(props: MobileNavItemsProps) {
	const router = useRouter();
	return <div className='container'>
		<style jsx>{`
			@keyframes slideIn {
				from { transform: translateY(100%) scale(0.5); }
				to { transform: translateY(0%) scale(1); }
			}
			.container {
				transform-origin: center;
				animation: slideIn 600ms ease-in-out;
				padding: 8px;
				position: absolute;
				top: var(--nav-height);
				left: 0;
				width: 100vw;
				height: calc(100vh - var(--nav-height));
				background: var(--background);
				display: flex;
				flex-direction: column;
				z-index: 4;
			}
			.list {
				display: flex;
				flex-direction: column;
				gap: 1px;
				background: var(--accent-4);
				list-style: none;
			}
			.item {
				display: flex;
				align-items: center;
				padding: var(--padding) var(--padding);
				background: var(--background);
			}
			.item:hover {
				transform: none;
				cursor: pointer;
			}
			.item span {
				flex-grow: 1;
			}
			.socials {
				display: flex;
				justify-content: center;
				padding: var(--padding);
				gap: var(--padding);
				align-items: flex-end;
				width: 100%;
			}
		`}</style>
		<ul className='list'>
			{LINKS.map(({ name, path }) => {
				return <li key={name}>
					<a onClick={() => {
						props.setIsOpen(false);
						router.push(path);
					}} className='item'>
						<span>{name}</span>
						<BsChevronRight />
					</a>
				</li>
			})}
		</ul>
		<div className='socials'>
			{SOCIAL.map(({ icon: Icon, link }) => {
				return <Link key={link} href={link} passHref>
					<a onClick={() => props.setIsOpen(false)} target='_blank' rel='noopener noreferrer'>
						<Icon size={32} className='icon' />
					</a>
				</Link>
			})}
		</div>
		<div className='socials'>
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