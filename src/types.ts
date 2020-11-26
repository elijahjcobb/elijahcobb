/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export type Skills = {
	title: string,
	skills: string[];
};

export type Project = {
	title: string,
	url: string,
	description?: string
}

export type Reference = {
	name: string,
	position: string,
	organization: string,
	email: string
}

export type Degree = {
	level?: string,
	major: string,
	gpa?: string,
	start: string,
	end: string
}

export type Education = {
	college: string,
	img: string,
	degrees: Degree[];
}

export type Position = {
	title: string,
	start: string,
	end: string,
	description: string
}

export type Experience = {
	title: string,
	subtitle?: string,
	location: string,
	url?: string,
	positions: Position[]
};

export type Publication = {
	title: string;
	date: {month: number, day: number, year: number};
	publication: string;
	authors: string[];
	url?: string;
};
