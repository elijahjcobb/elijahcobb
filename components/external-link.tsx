import Link from "next/link";
import type { PropsWithChildren } from "react";

export function ExternalLink({ href, children }: PropsWithChildren<{ href: string }>) {
	return <Link href={href} passHref>
		<a rel="noopener noreferrer" target="_blank">
			{children}
		</a>
	</Link>
}