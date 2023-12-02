"use client";
import { useEffect, useRef } from "react";

export function Reporter({ slug }: { slug: string }): JSX.Element {

	const hasReported = useRef(false);

	useEffect(() => {
		if (hasReported.current) return;
		hasReported.current = true;
		fetch(`/blog/${slug}/view`, { method: 'POST' })
	}, [slug]);

	return <></>
}