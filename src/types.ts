/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */


export type Research = {
	title: string,
	url?: string,
	description?: string
}

export type Reference = {
	name: string,
	position: string,
	organization: string,
	email: string
}

export type Education = {
	college: string,
	img: string,
	degrees: {
		level?: string,
		major: string,
		gpa?: string,
		start: string,
		end: string
	}[];
}

export type Experience = {
	title: string,
	subtitle?: string,
	location: string,
	url?: string,
	positions: {
		title: string,
		start: string,
		end: string,
		description: string
	}[]
};

export type Publication = {
	title: string;
	date: {month: number, day: number, year: number};
	publication: string;
	authors: string[];
	url?: string;
};

export type DefaultItem = {
	title: string;
	date?: {month: number, day: number, year: number};
	description?: string;
	url?: string;
}
