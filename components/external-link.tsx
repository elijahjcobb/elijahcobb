import Link from "next/link";
import type { PropsWithChildren } from "react";

export function ExternalLink({
	href,
	children,
	className,
	onClick
}: PropsWithChildren<{
	href: string,
	className?: string,
	onClick?: () => void;
}>): JSX.Element {
	return <Link onClick={onClick} className={className} href={href} rel="noopener noreferrer" target="_blank">
		{children}
	</Link>
}