import Image from "next/image";
import React from "react";
import styles from "../styles/md.module.css";

type CustomChild = { children: JSX.Element };

function ECText(props: CustomChild) {
	console.log(props);
	return <p className={styles.text}>{props.children}</p>
}

function ECImage(props: { src: string, width?: number, height?: number }) {
	return <Image className={styles.img} {...props} />
}

function ECH1({ children }: CustomChild) {
	return <h1 className={styles.h1}># {children}</h1>
}

function ECH2({ children }: CustomChild) {
	return <h2 className={styles.h2}>## {children}</h2>
}

function ECH3({ children }: CustomChild) {
	return <h3 className={styles.h3}>### {children}</h3>
}

function ECPre({ children }: CustomChild) {
	return <pre className={styles.pre}>{children}</pre>
}

function ECCode({ children }: CustomChild) {
	return <code className={styles.code}>{children}</code>
}

function ECUl({ children }: CustomChild) {
	return <ul className={styles.ul}>{children}</ul>
}

function ECOl({ children }: CustomChild) {
	return <ol className={styles.ol}>{children}</ol>
}

function ECLi({ children }: CustomChild) {
	return <li className={styles.li}>{children}</li>
}

function ECA({ children, href }: CustomChild & { href: string }) {
	return <a
		className={styles.a}
		href={href}
		target="_blank"
		rel="noreferrer noopener"
	>{children}</a>
}

function ECBlockquote({ children }: CustomChild) {
	return <p className={styles.blockquote}>{children}</p>
}

export const components = {
	img: ECImage,
	p: ECText,
	h1: ECH1,
	h2: ECH2,
	h3: ECH3,
	pre: ECPre,
	code: ECCode,
	ul: ECUl,
	ol: ECOl,
	li: ECLi,
	a: ECA,
	blockquote: ECBlockquote
}