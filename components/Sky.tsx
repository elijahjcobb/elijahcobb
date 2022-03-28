/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import { FC } from "react";
import styles from "../styles/Mountain.module.scss";

export interface SkyProps {
	className?: string;
}

export const Sky: FC<SkyProps> = props => {

	return <svg className={props.className} preserveAspectRatio={"xMidYMid slice"} viewBox="0 0 1920 1440" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_5_8)">
			<rect width="1920" height="941" fill="url(#paint0_linear_5_8)" />
			<ellipse className={styles.sun} cx="1250" cy="259" rx="68" ry="67" fill="#FFF3B0" />
		</g>
		<defs>
			<linearGradient id="paint0_linear_5_8" x1="2088" y1="-598.818" x2="-91.4936" y2="-197.161" gradientUnits="userSpaceOnUse">
				<stop stopColor="#E09F3E" />
				<stop offset="1" stopColor="#A23F7D" />
			</linearGradient>
			<clipPath id="clip0_5_8">
				<rect width="1920" height="1440" fill="white" />
			</clipPath>
		</defs>
	</svg>


};