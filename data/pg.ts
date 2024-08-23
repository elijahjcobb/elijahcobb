import { Client, QueryResult } from "pg";
import { Sql } from "sql-template-tag";

type SupportedValue =
  | string
  | null
  | number
  | SupportedValue[]
  | { [key: string]: SupportedValue };

function sql(
  strings: ReadonlyArray<string>,
  ...values: Array<SupportedValue | Sql>
) {
  return new Sql(strings, values);
}

let client: Client | undefined;

export async function pg(
  strings: ReadonlyArray<string>,
  ...values: Array<SupportedValue | Sql>
): Promise<QueryResult> {
  if (!client) {
    client = new Client(process.env.PG_URL);
    await client.connect();

    const count = await client.query(`SELECT COUNT(*) FROM positions`);
    if (count.rows[0].count == 0) {
      const data = [
        {
          id: 12,
          short_name: "Apple",
          name: "Apple",
          href: "https://apple.com",
          start_year: 2023,
          start_month: 12,
          end_year: null,
          end_month: null,
          position: "Software Engineer",
          tasks: [
            "Contributor to core OS frameworks in Swift and Objective-C. Application engineering using Swift, Objective-C in tandem with SwiftUI and UIKit.",
            "Full-stack application development using Next.js, ExpressJS, TypeScript, etc.",
          ],
          links: [20, 19, 18],
          slug: "apple",
        },
        {
          id: 13,
          short_name: "Vercel",
          name: "Vercel",
          href: "https://vercel.com/home",
          start_year: 2022,
          start_month: 4,
          end_year: 2023,
          end_month: 12,
          position: "Software Engineer",
          tasks: [
            "Tech lead on Vercel Postgres beta, bringing an entirely new product pillar to the company.",
            "Tech lead on Vercel Experiment Engine.",
            "Develop experiments to boost growth at Vercel.",
            "Develop marketing landing pages.",
            "Working on the entire stack from backend billing code, to styling frontend components.",
            "Developing landing pages on Vercel's homepage.",
          ],
          links: [7, 6, 5, 4, 3, 2, 1],
          slug: "vercel",
        },
        {
          id: 15,
          short_name: "PSTDL",
          name: "Planetary Surface Technology Development Lab",
          href: "https://pstdl.com",
          start_year: 2020,
          start_month: 5,
          end_year: 2022,
          end_month: 4,
          position: "Undergraduate / Graduate Researcher",
          tasks: [
            "Created a UI component library for developing robotic systems.",
            "Developed ground control, communication, vision, and mobility software for the NASA award winning T-REX lunar rover prototype.",
            "System design and the development communication, and ground control software for the NASA LuSTR 2020 MTU testing bed, 'HOPLITE'.",
            "Developed an autonomous 3-axis gravity offloading system for the PSTDL's lunar simulant platform.",
            "System design on NASA Watts on the Moon.",
            "Conducted system testing of lunar rover prototypes.",
          ],
          links: [17, 16, 14, 13, 12, 11],
          slug: "pstdl",
        },
        {
          id: 14,
          short_name: null,
          name: "College of Computing, MTU",
          href: "https://mtu.edu/computing",
          start_year: 2020,
          start_month: 11,
          end_year: 2022,
          end_month: 4,
          position: "Undergraduate / Doctoral Researcher",
          tasks: [
            "Development and validation of a language providing an interface between sensor data streams using Racket for research supported by the U.S.Navy through an SBIR(N20A - T010) with Applied Research in Acoustics Inc(ARiA).Work classified and no further information can be shared.",
            "Developed an IDE for undergraduate students to learn the Alloy programming language. The IDE (named shakudo), allow users to drag and drop discrete mathematics structures together using Google's Blockly and dynamically edits the Alloy source code to allow for responsive model simulation.",
            "Maintain a Web-App for a research project funded by the National Science Foundation analyzing the environmental impact. Design and implementation of a MySQL database linking all project data together.Design of a Web - App for researchers to access the database in a visual form.",
          ],
          links: [9, 8],
          slug: "coc",
        },
        {
          id: 16,
          short_name: "Ampel",
          name: "Ampel Feedback",
          href: "https://github.com/ampelfeedback",
          start_year: 2017,
          start_month: 12,
          end_year: 2020,
          end_month: 1,
          position: "Software Engineer",
          tasks: [
            "Designed and implemented open-source packages that were used in the backend infrastructure. Consisted of ORM database connectors, REST API generation, authentication, etc. Used packages to develop the entire backend.",
            "Developed an iOS application using a serverless backend that operated as kiosk collecting in the moment feedback from customers at a wide variety of businesses.",
          ],
          links: [],
          slug: "ampel",
        },
        {
          id: 17,
          short_name: null,
          name: "Solution Studio",
          href: "https://solutionstud.io",
          start_year: 2017,
          start_month: 8,
          end_year: 2017,
          end_month: 12,
          position: "Software Engineering Intern",
          tasks: [
            "Developed MVP for Ampel Feedback",
            "Developed interactive Facebook Messenger bots for businesses to use in marketing campaigns.",
            "AdWords Marketing",
            "AdWords A/B Tracking",
          ],
          links: [],
          slug: "ss",
        },
      ];
      for (const row of data) {
        const s = sql`INSERT INTO positions (short_name, name, href, start_year, start_month, end_year, end_month, position, tasks, slug) VALUES (${row.short_name}, ${row.name}, ${row.href}, ${row.start_year}, ${row.start_month}, ${row.end_year}, ${row.end_month}, ${row.position}, ${row.tasks}, ${row.slug})`;
        await client.query(s.text, s.values);
      }
    }
  }

  const query = sql(strings, ...values);

  return await client.query(query.text, query.values);
}
