import Image from "next/image";
import React from "react";

type CustomChild = { children: JSX.Element };

function ECText(props: CustomChild) {
	console.log(props);
	return <p>{props.children}</p>
}

function ECImage(props: { src: string, width?: number, height?: number }) {
	return <Image {...props} />
}

function ECH1({ children }: CustomChild) {
	return <h1 style={{

	}}># {children}</h1>
}

function ECH2({ children }: CustomChild) {
	return <h2>## {children}</h2>
}

function ECH3({ children }: CustomChild) {
	return <h3>### {children}</h3>
}

function ECPre({ children }: CustomChild) {
	return <pre>{children}</pre>
}

function ECCode({ children }: CustomChild) {
	return <code>{children}</code>
}


function ECUl() {
	return <span>oijoij</span>
}

function ECLi() {
	return <span>oijoij</span>
}

function ECA() {
	return <span>oijoij</span>
}

function ECBlockquote({ children }: CustomChild) {
	return <span>//{children}</span>
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
	li: ECLi,
	a: ECA,
	blockquote: ECBlockquote
}