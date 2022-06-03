import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";

export function Terminal() {

	const [items, setItems] = useState<string[]>([]);
	const [stdin, setStdin] = useState<string>("");
	const field = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		field.current.focus();
	}, []);

	const handleStdin = useCallback(() => {
		const input = stdin.trim();
		if (input.length === 0) return;
		setItems([...items, input]);
		setStdin("");
	}, [stdin]);

	return <>
		<style jsx>{`
			.terminal {
				width: calc(100vw - var(--side-bar-width));
				height: 30vh;
				left: var(--side-bar-width);
				position: relative;
				background-color: var(--dark);
				overflow-y: auto;
				padding: var(--padding-half);
				font-family: "Roboto Mono", monospace;
			}
			.row {

			}
			.input {
				display: flex;
				align-items: center;
			}
			.sep {
				padding: 0 1ch;
			}
			.field {
				flex-grow: 1;
				outline: none;
				background: none;
				border: none;
				color: var(--white);
				font-family: "Roboto Mono", monospace;
				font-size: var(--size);
			}
		`}</style>
		<div className="terminal" onClick={() => field.current.focus()}>
			{items.map(i =>
				<p className="row">{i}</p>
			)}
			<div className="input">
				<span style={{ color: "var(--blue)" }}>guest</span>
				<span style={{ color: "var(--cyan)" }}>@</span>
				<span style={{ color: "var(--yellow)" }}>elijahcobb.dev</span>
				<span style={{ color: "var(--cyan)" }} className="sep">~</span>
				<span style={{ color: "var(--green)" }}>main</span>
				<span style={{ color: "var(--cyan)" }} className="sep">λ</span>
				<input
					className="field"
					value={stdin}
					ref={field}
					onKeyUp={ev => {
						if (ev.key === "Enter") handleStdin();
					}}
					onChange={ev => setStdin(ev.currentTarget.value)} />
			</div>
		</div>
	</>
}