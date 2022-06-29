import type { IconType } from "react-icons";

export type PositionType = {
	shortName?: string;
	name: string;
	href: string;
	startDate: string;
	endDate: string;
	position: string;
	tasks: string[];
};

export interface SocialType {
	icon: IconType;
	link: string;
}

export interface LinkType {
	path: string;
	name: string;
}