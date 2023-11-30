import type { PositionType } from "../types";

const POSITIONS: PositionType[] = [
  {
    name: "Apple",
    shortName: "▲ Apple",
    href: "https://apple.com",
    startDate: { month: 12, year: 2023 },
    position: "Software Engineer",
    tasks: [],
  },
  {
    name: "Vercel",
    shortName: "▲ Vercel",
    href: "https://vercel.com/home",
    startDate: { month: 4, year: 2022 },
    endDate: { month: 12, year: 2023 },
    position: "Software Engineer",
    tasks: [
      "Tech lead on Vercel Postgres beta, bringing an entirely new product pillar to the company.",
      "Tech lead on Vercel Experiment Engine.",
      "Develop experiments to boost growth at Vercel.",
      "Develop marketing landing pages.",
      "Working on the entire stack from backend billing code, to styling frontend components.",
      "Developing landing pages on Vercel's homepage.",
    ],
    links: [
      "https://vercel.com/changelog/vercel-postgres",
      "https://vercel.com/blog/zero-cls-experiments-nextjs-edge-config",
      "https://vercel.com/blog/vercel-storage",
      "https://vercel.com/blog/designing-the-vercel-virtual-product-tour",
      "https://vercel.com/product-tour",
      "https://vercel.com/edge",
      "https://vercel.com/analytics",
    ],
  },
  {
    name: "Planetary Surface Technology Development Lab",
    shortName: "PSTDL",
    href: "https://pstdl.com/members/ejcobb",
    startDate: { month: 5, year: 2020 },
    endDate: { month: 4, year: 2022 },
    position: "Undergraduate / Graduate Researcher",
    tasks: [
      "Created a UI component library for developing robotic systems.",
      "Developed ground control, communication, vision, and mobility software for the NASA award winning T-REX lunar rover prototype.",
      "System design and the development communication, and ground control software for the NASA LuSTR 2020 MTU testing bed, 'HOPLITE'.",
      "Developed an autonomous 3-axis gravity offloading system for the PSTDL's lunar simulant platform.",
      "System design on NASA Watts on the Moon.",
      "Conducted system testing of lunar rover prototypes.",
    ],
    links: [
      "https://www.nasa.gov/centers-and-facilities/langley/tech-designed-by-university-students-could-shine-light-on-extreme-lunar-environments/",
      "https://www.nasa.gov/centers-and-facilities/marshall/nasa-awards-500k-in-first-phase-of-5m-watts-on-the-moon-challenge/",
      "https://www.nasa.gov/directorates/stmd/game-changing-development-program/universities-to-develop-lunar-power-and-resource-utilization-tech-for-nasa/",
      "https://pstdl.com/members/ejcobb",
    ],
  },
  {
    name: "College of Computing, MTU",
    shortName: "CoC",
    href: "https://mtu.edu/computing",
    startDate: { month: 11, year: 2020 },
    endDate: { month: 4, year: 2022 },
    position: "Undergraduate / Doctoral Researcher",
    tasks: [
      "Development and validation of a language providing an interface between sensor data streams using Racket for research supported by the U.S.Navy through an SBIR(N20A - T010) with Applied Research in Acoustics Inc(ARiA).Work classified and no further information can be shared.",
      "Developed an IDE for undergraduate students to learn the Alloy programming language. The IDE (named shakudo), allow users to drag and drop discrete mathematics structures together using Google's Blockly and dynamically edits the Alloy source code to allow for responsive model simulation.",
      "Maintain a Web-App for a research project funded by the National Science Foundation analyzing the environmental impact. Design and implementation of a MySQL database linking all project data together.Design of a Web - App for researchers to access the database in a visual form.",
    ],
    links: [
      "https://blogs.mtu.edu/math/category/awards/undergraduate-awards/",
      "https://blogs.mtu.edu/computing/2020/05/12/elijah-cobb-awarded-college-of-computing-undergraduate-research-fellowship/",
    ],
  },
  {
    name: "Ampel Feedback",
    shortName: "Ampel",
    href: "https://github.com/ampelfeedback",
    startDate: { month: 12, year: 2017 },
    endDate: { month: 1, year: 2020 },
    position: "Software Engineer",
    tasks: [
      "Designed and implemented open-source packages that were used in the backend infrastructure. Consisted of ORM database connectors, REST API generation, authentication, etc. Used packages to develop the entire backend.",
      "Developed an iOS application using a serverless backend that operated as kiosk collecting in the moment feedback from customers at a wide variety of businesses.",
    ],
  },
  {
    name: "Solution Studio",
    shortName: "SS",
    href: "https://solutionstud.io",
    startDate: { month: 8, year: 2017 },
    endDate: { month: 12, year: 2017 },
    position: "Software Engineering Intern",
    tasks: [
      "Developed MVP for Ampel Feedback",
      "Developed interactive Facebook Messenger bots for businesses to use in marketing campaigns.",
      "AdWords Marketing",
      "AdWords A/B Tracking",
    ],
  },
];

function sortablePosition({ startDate }: PositionType): number {
  const date = new Date(`${startDate.month}-1-${startDate.year}`);
  return date.getTime();
}

export function fetchPositions(): (PositionType & { key: string })[] {
  return POSITIONS.sort(
    (a, b) => sortablePosition(b) - sortablePosition(a)
  ).map((v) => ({
    ...v,
    key: `${v.name}-${v.position}`,
  }));
}
