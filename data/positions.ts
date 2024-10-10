import { PositionType } from "./schemas";

const positions: Omit<PositionType, "id">[] = [
  {
    slug: "apple",
    name: "Apple",
    short_name: null,
    href: "https://apple.com",
    position: "Software Engineer",
    links: [
      "https://www.apple.com/apple-intelligence",
      "https://www.apple.com/ios/ios-18-preview",
      "https://www.apple.com/macos/macos-sequoia-preview",
    ],
    tasks: [
      "Contributor to core OS frameworks in Swift and Objective-C. Application engineering using Swift, Objective-C in tandem with SwiftUI and UIKit.",
      "Full-stack application development using Next.js, ExpressJS, TypeScript, etc.",
    ],
    start_month: 12,
    start_year: 2023,
    end_month: null,
    end_year: null,
  },
  {
    slug: "vercel",
    name: "Vercel",
    short_name: null,
    href: "https://vercel.com/home",
    position: "Software Engineer",
    links: [
      "https://vercel.com/changelog/vercel-postgres",
      "https://vercel.com/blog/zero-cls-experiments-nextjs-edge-config",
      "https://vercel.com/blog/vercel-storage",
      "https://vercel.com/blog/designing-the-vercel-virtual-product-tour",
      "https://vercel.com/product-tour",
      "https://vercel.com/edge",
      "https://vercel.com/analytics",
    ],
    tasks: [
      "Tech lead on Vercel Postgres beta, bringing an entirely new product pillar to the company.",
      "Tech lead on Vercel Experiment Engine.",
      "Develop experiments to boost growth at Vercel.",
      "Develop marketing landing pages.",
      "Working on the entire stack from backend billing code, to styling frontend components.",
    ],
    start_month: 4,
    start_year: 2022,
    end_month: 12,
    end_year: 2023,
  },
  {
    slug: "pstdl",
    name: "Planetary Surface Technology Development Lab",
    short_name: "PSTDL",
    href: "https://pstdl.com",
    position: "Undergraduate / Doctoral Researcher",
    links: [
      "https://www.nasa.gov/centers-and-facilities/langley/tech-designed-by-university-students-could-shine-light-on-extreme-lunar-environments",
      "https://www.nasa.gov/centers-and-facilities/marshall/nasa-awards-500k-in-first-phase-of-5m-watts-on-the-moon-challenge",
      "https://www.nasa.gov/directorates/stmd/game-changing-development-program/universities-to-develop-lunar-power-and-resource-utilization-tech-for-nasa",
      "https://pstdl.com/members/ejcobb",
      "https://digitalcommons.mtu.edu/michigantech-p/15979",
      "https://bigidea.nianet.org/wp-content/uploads/2020-BIG-Idea-Technical-Paper_MTU.pdf",
    ],
    tasks: [
      "Created a UI component library for developing robotic systems.",
      "Developed ground control, communication, vision, and mobility software for the NASA award winning T-REX lunar rover prototype.",
      "System design and the development communication, and ground control software for the NASA LuSTR 2020 MTU testing bed, 'HOPLITE'.",
      "Developed an autonomous 3-axis gravity offloading system for the PSTDL's lunar simulant platform.",
      "System design on NASA Watts on the Moon.",
      "Conducted system testing of lunar rover prototypes.",
    ],
    start_month: 5,
    start_year: 2020,
    end_month: 4,
    end_year: 2022,
  },
  {
    slug: "coc",
    name: "College of Computing, MTU",
    short_name: null,
    href: "https://mtu.edu/computing",
    position: "Undergraduate / Doctoral Researcher",
    links: [
      "https://blogs.mtu.edu/math/category/awards/undergraduate-awards",
      "https://blogs.mtu.edu/computing/2020/05/12/elijah-cobb-awarded-college-of-computing-undergraduate-research-fellowship",
    ],
    tasks: [
      "Development and validation of a language providing an interface between sensor data streams using Racket for research supported by the U.S.Navy through an SBIR(N20A - T010) with Applied Research in Acoustics Inc(ARiA).Work classified and no further information can be shared.",
      "Developed an IDE for undergraduate students to learn the Alloy programming language. The IDE (named shakudo), allow users to drag and drop discrete mathematics structures together using Google's Blockly and dynamically edits the Alloy source code to allow for responsive model simulation.",
      "Maintain a Web-App for a research project funded by the National Science Foundation analyzing the environmental impact. Design and implementation of a MySQL database linking all project data together.Design of a Web - App for researchers to access the database in a visual form.",
    ],
    start_month: 11,
    start_year: 2020,
    end_month: 4,
    end_year: 2022,
  },
  {
    slug: "ampel",
    name: "Ampel Feedback",
    short_name: "Ampel",
    href: "https://github.com/ampelfeedback",
    position: "Software Engineer",
    links: null,
    tasks: [
      "Designed and implemented open-source packages that were used in the backend infrastructure. Consisted of ORM database connectors, REST API generation, authentication, etc. Used packages to develop the entire backend.",
      "Developed an iOS application using a serverless backend that operated as kiosk collecting in the moment feedback from customers at a wide variety of businesses.",
    ],
    start_month: 12,
    start_year: 2017,
    end_month: 1,
    end_year: 2020,
  },
  {
    slug: "ss",
    name: "Solution Studio",
    short_name: null,
    href: "https://solutionstud.io",
    position: "Software Engineering Intern",
    links: null,
    tasks: [
      "Developed MVP for Ampel Feedback",
      "Developed interactive Facebook Messenger bots for businesses to use in marketing campaigns.",
      "AdWords Marketing",
      "AdWords A/B Tracking",
    ],
    start_month: 8,
    start_year: 2017,
    end_month: 12,
    end_year: 2017,
  },
];

export function fetchPositions(): PositionType[] {
  return positions.map((old, i) => ({ ...old, id: i }));
}

export function positionForID(id: number | string): PositionType | null {
  let idNumber = typeof id == "string" ? parseInt(id) : id;
  for (const position of fetchPositions()) {
    if (position.id === idNumber) return position;
  }
  return null;
}
