import Link from "next/link";
import type { PropsWithChildren } from "react";

export function ExternalLink({
	href,
	children,
	className,
}: PropsWithChildren<{
	href: string,
	className?: string,
}>): JSX.Element {
	return <Link className={className} href={href} rel="noopener noreferrer" target="_blank">
		{children}
	</Link>
}