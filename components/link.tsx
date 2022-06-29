import Link from "next/link";
import { PropsWithChildren } from "react";

export function ExternalLink({ href, children }: PropsWithChildren<{ href: string }>) {
	return <Link href={href} passHref>
		<a target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	</Link>
}