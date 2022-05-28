import { PropsWithChildren } from "react";

export interface ChangeProps {
	type?: "add" | "del" | "static";
}

export function Change({
	type = "static",
	children
}: PropsWithChildren<ChangeProps>) {

	function typeString() {
		switch (type) {
			case "add":
				return "+";
			case "del":
				return "-";
			default:
				return "•";
		}
	}

	function typeColor() {
		switch (type) {
			case "add":
				return "green";
			case "del":
				return "red";
			default:
				return "white";
		}
	}

	return <div className="change">
		<style jsx>{`
			.change {
				display: flex;
				align-items: center;
				color: 
			}
			.type {
				color: var(--${typeColor()});
				margin-right: var(--padding-half);
			}
		`}</style>
		<span className="type">{typeString()}</span>
		<span>{children}</span>
	</div>
}