import { IconType } from "react-icons/lib"

export interface SideBarItemProps {
	icon: IconType;
	href?: string;
	onClick?: () => void;
}

export function SideBarItem({
	icon: Icon,
	href,
	onClick
}: SideBarItemProps) {
	return <>
		<style jsx>{`
			.icon {
				color: var(--gray);
				transition: color 100ms ease;
			}
			.icon:hover {
				color: var(--white);
				cursor: pointer;
			}
		`}</style>
		<Icon size={24} className="icon" onClick={() => {
			if (href) window.open(href, "_blank");
			else if (onClick) onClick();
		}} />
	</>
}