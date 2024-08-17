"use client";

import { LinkPostResponseSchema } from "#/data/schemas";
import { FormEvent, useState } from "react";
import styles from "./page.module.css";

export function LinkBuilder(): JSX.Element {

	const [url, setUrl] = useState("");
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState<boolean>(false);

	const onSubmit = (ev: FormEvent) => {
		ev.preventDefault();
		setDisabled(true);
		setError(false);
		fetch("/api/link", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ href: url })
		})
			.then(res => res.json())
			.then((res) => {
				const { id } = LinkPostResponseSchema.parse(res);
				window.open(`/link/${id}`, "_self")
			})
			.catch((err) => {
				console.error(err);
				setError(true);
			})
			.finally(() => {
				setDisabled(false);
			})
	};

	return <form className={styles.form} onSubmit={onSubmit}>
		<input className={styles.input} disabled={disabled} required value={url} onChange={(ev) => setUrl(ev.target.value)} type="url" placeholder="https://elijahcobb.com" />
		<button className={styles.button} disabled={disabled} type="submit">Shorten</button>
		{error ? <p className={styles.error}>An error occurred. Feel free to check the logs.</p> : null}
	</form>
}