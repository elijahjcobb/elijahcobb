import Image from "next/image";
import React from "react";

type CustomChild = { children: JSX.Element };

function ECText(props: CustomChild) {
	return <p spellCheck={false} contentEditable={true} className="text">{props.children}</p>
}

function ECImage(props: { src: string, width?: number, height?: number }) {
	return <Image className="img" {...props} />
}

function ECH1({ children }: CustomChild) {
	return <h1 spellCheck={false} contentEditable={true} className="h1">{children}</h1>
}

function ECH2({ children }: CustomChild) {
	return <h2 spellCheck={false} contentEditable={true} className="h2">{children}</h2>
}

function ECH3({ children }: CustomChild) {
	return <h3 spellCheck={false} contentEditable={true} className="h3">{children}</h3>
}

function ECPre({ children }: CustomChild) {
	return <pre spellCheck={false} contentEditable={true} className="pre">{children}</pre>
}

function ECCode({ children }: CustomChild) {
	return <code spellCheck={false} contentEditable={true} className="code">{children}</code>
}

function ECUl({ children }: CustomChild) {
	return <ul className="ul">{children}</ul>
}

function ECOl({ children }: CustomChild) {
	return <ol className="ol">{children}</ol>
}

function ECLi({ children }: CustomChild) {
	return <li spellCheck={false} contentEditable={true} className="li">{children}</li>
}

function ECA({ children, href }: CustomChild & { href: string }) {
	return <a
		className="a"
		href={href}
		target="_blank"
		rel="noreferrer noopener"
		contentEditable={false}
	>{children}</a>
}

function ECBlockquote({ children }: CustomChild) {
	return <div className="blockquote">{children}</div>
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