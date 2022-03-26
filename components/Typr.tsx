/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {FC} from "react";
//@ts-ignore
import TypeAnimation from "react-type-animation";


export interface TyprProps {
	content: (string | number)[];
	cursor?: boolean;
	className?: string;
	count?: number;
	wrapper?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
}

export const Typr: FC<TyprProps> = props => {

	return (<TypeAnimation
		className={props.className}
		cursor={props.cursor ?? false}
		sequence={props.content}
		repeat={props.count ?? 1}
		wrapper={props.wrapper ?? "span"}
	/>);

};