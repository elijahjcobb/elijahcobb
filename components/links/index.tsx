"use client";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { OGMetadataSchema, type OGMetadataType } from "#/data/schemas";
import { PiSpinnerBold } from "react-icons/pi";
import { MdImageNotSupported } from "react-icons/md";
import { MdError } from "react-icons/md";


export function OGLink({ id, href }: { id: number, href?: string }): JSX.Element {

	const { data, isLoading: loadingOGData } = useOGData(id);
	const [imageError, setImageError] = useState(false);

	const handleImageError = useCallback(() => {
		setImageError(imageError)
	}, []);

	if (loadingOGData) {
		return <div className={styles.card}>
			<PiSpinnerBold className={styles.spinner} />
		</div>
	}

	if (!data || imageError) {

		let url: URL | null

		try {
			url = new URL(href ?? "");
		} catch (_) {
			url = null;
		}

		if (url) {
			return <Link href={url} target="_blank" className={styles.card}>
				<MdImageNotSupported className={styles.placeholderIcon} />
			</Link>
		} else {
			return <div className={styles.card}>
				<MdError className={styles.placeholderIcon} />
			</div>
		}
	}

	return <Link href={href ?? data.url} target="_blank" className={styles.card}>
		{data.image ? <img onError={handleImageError} className={styles.image} src={data.image} /> : <div className={styles.placeholder}><MdImageNotSupported className={styles.placeholderIcon} /></div>}
		<div className={styles.container}>
			<p className={styles.title}>{data.title ?? data.domain ?? "-"}</p>
			<p className={styles.domain}>{data.domain ?? "-"}</p>
		</div>
	</Link>
}

async function fetchOGData(id: number): Promise<OGMetadataType> {
	const response = await fetch(`/api/og/${id}`);
	const json = await response.json();
	return OGMetadataSchema.parse(json)
}

function useOGData(id: number) {

	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState<null | OGMetadataType>(null);

	useEffect(() => {
		setIsLoading(true)
		fetchOGData(id)
			.then(setData)
			.catch((err) => {
				console.error(err)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return {
		isLoading,
		data
	}
}