import Link from "next/link";
import type { PropsWithChildren } from "react";

export function ExternalLink({
	href,
	children,
	className,
}: PropsWithChildren<{
	href: string,
	className?: string,
}>) {
	return <Link href={href} passHref>
		<a className={className} rel="noopener noreferrer" target="_blank">
			{children}
		</a>
	</Link>
}