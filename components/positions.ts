/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

export interface Position {
	title: string;
	start: string;
	end?: string;
	content?: string;
}

export interface Company {
	name: string;
	location: string;
	image: string;
	positions: Position[];
}

export const positions: Company[] = [
	{
		name: "Vercel",
		location: "Remote",
		image: "https://media-exp1.licdn.com/dms/image/C560BAQHzRmUo-uRc3g/company-logo_100_100/0/1587463448826?e=1655942400&v=beta&t=l-gn_9BHKQ1exFX-b1Yy2p62wqukvm3cwUyfpZBshXM",
		positions: [
			{
				title: "Full Stack Engineer",
				start: "4/1/2022"
			}
		]
	},
	{
		name: "Planetary Surface Technology Development Lab",
		location: "Houghton, MI",
		image: "https://media-exp1.licdn.com/dms/image/C4E0BAQHmdlqIq-Tzgw/company-logo_100_100/0/1626099021072?e=1655942400&v=beta&t=deSRjC2VV9HhoejLUZE-baDH7BwRrdHR7RLUGaqMeKI",
		positions: [
			{
				title: "Graduate Researcher",
				start: "1/1/2022"
			}
		]
	},
	{
		name: "Ampel Feedback",
		location: "Traverse City, MI",
		image: "https://media-exp1.licdn.com/dms/image/C560BAQEBv9kVTZVP9Q/company-logo_100_100/0/1647615326312?e=1655942400&v=beta&t=1-vLv0LjMiUWSgggp3Q4TrzsBy-rzXZpJa3nMnkLm6Y",
		positions: [
			{
				title: "iOS Software Engineer",
				start: "1/1/2013",
				end: "1/1/2015"
			},
			{
				title: "Backend Software Engineer",
				start: "1/1/2015",
				end: "1/1/2015"
			},
		]
	},
	{
		name: "Solution Studio",
		location: "Traverse City, MI",
		image: "https://media-exp1.licdn.com/dms/image/C4E0BAQFG-W2__S3JMA/company-logo_100_100/0/1590842777906?e=1655942400&v=beta&t=dO-w0hBv1xVxDLP4rJE3kiziYolrmu7coqgCXttNY9g",
		positions: [
			{
				title: "Software Engineer",
				start: "1/1/2012",
				end: "1/1/2013"
			}
		]
	}
];