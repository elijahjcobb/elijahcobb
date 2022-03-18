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
	link: string;
	positions: Position[];
}

export const positions: Company[] = [
	{
		name: "Vercel",
		location: "Remote",
		image: "/vercel.jpg",
		link: "http://vercel.com",
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
		image: "/pstdl.jpg",
		link: "https://pstdl.com",
		positions: [
			{
				title: "Graduate Researcher",
				start: "1/1/2022",
				end: "3/1/2022"
			},
			{
				title: "Undergraduate Researcher",
				start: "5/1/2020",
				end: "12/31/2021"
			}
		]
	},
	{
		name: "Michigan Technological University",
		location: "Houghton, MI",
		image: "/mtu.jpg",
		link: "http://mtu.edu",
		positions: [
			{
				title: "Doctoral Researcher",
				start: "1/1/2022",
				end: "3/1/2022"
			},
			{
				title: "Undergraduate Research Fellow",
				start: "5/1/2020",
				end: "12/1/2021"
			}
		]
	},
	{
		name: "Ampel Feedback",
		location: "Traverse City, MI",
		image: "/ampel.jpg",
		link: "https://www.linkedin.com/company/79548021",
		positions: [
			{
				title: "iOS Software Engineer",
				start: "12/1/2017",
				end: "8/1/2018"
			},
			{
				title: "Backend Software Engineer",
				start: "8/1/2018",
				end: "2/1/2020"
			},
		]
	},
	{
		name: "Solution Studio",
		location: "Traverse City, MI",
		image: "/ss.jpg",
		link: "https://solutionstud.io",
		positions: [
			{
				title: "Software Engineer",
				start: "8/1/2017",
				end: "12/1/2017"
			}
		]
	}
];