import type { Ship } from "../types";

const SHIPS: Ship[] = [
  {
    name: "tiny-roads",
    year: 2022,
    description:
      "A game where you build your own city with realistic traffic simulations.",
    githubSlug: "elijahjcobb/tiny-roads",
    url: "https://tinyroads.app/",
    wip: true,
  },
  {
    name: "nhl",
    year: 2022,
    description:
      "A mobile web app to view stats on NHL teams and league standings.",
    githubSlug: "elijahjcobb/nhl",
    url: "https://nhl.elijahcobb.app/",
    wip: true,
  },
  {
    name: "acorn.social",
    year: 2022,
    description:
      "A social network very similar to a popular one with a bird, but this was has nuts.",
    githubSlug: "elijahjcobb/ticker",
    url: "https://acorn.social",
    wip: true,
    trophy: true,
  },
  {
    name: "theatre",
    year: 2022,
    description:
      "A full screen media player for the Tesla infotainment system.",
    githubSlug: "elijahjcobb/theatre",
    url: "https://theatre.elijahcobb.app/",
  },
  {
    name: "wordle",
    year: 2022,
    description:
      "A wordle client using the current NYT wordle of the day, but with a nice UI.",
    githubSlug: "elijahjcobb/wordle",
    url: "https://wordle.elijahcobb.app/",
  },
  {
    name: "hn",
    year: 2022,
    description:
      "A HackerNews client I built with modern web technologies + it looks nice.",
    githubSlug: "elijahjcobb/hn",
    url: "https://hn.elijahcobb.com",
  },
  {
    name: "elijahcobb",
    year: 2022,
    description: "The site you are looking at right now! :)",
    url: "https://elijahcobb.dev",
    githubSlug: "elijahjcobb/elijahcobb",
  },
  {
    name: "wow",
    year: 2021,
    description: "View every Owen Wilson 'wow' at random.",
    githubSlug: "elijahjcobb/wow",
    url: "https://wowen-wilson.vercel.app/",
  },
  {
    name: "wramble",
    year: 2022,
    description: "Wordle meets Scrabble, built with Expo & React Native.",
    githubSlug: "elijahjcobb/wramble",
  },
  {
    name: "dotmd",
    year: 2021,
    description:
      "A web-based markdown editor accessible on any device. Simply sign in with Google and all your files will be synced automatically. Full markdown support, LaTeX, Github syntax highlighting, and much more!",
    githubSlug: "elijahjcobb/dotmd",
    url: "https://dotmd.app/about",
    trophy: true,
  },
  {
    name: "cmd",
    year: 2021,
    description:
      "An abstracted, async, easy to use, type-safe function invocation event handler framework.",
    githubSlug: "elijahjcobb/cmd",
  },
  {
    name: "typr",
    year: 2020,
    description:
      "A recursive run-time type checking package that is simple to use yet provides all the functionality you will ever need. Written by and for Typescript.",
    githubSlug: "elijahjcobb/typr",
    trophy: true,
  },
  {
    name: "▲/edge",
    year: 2022,
    description: "The Vercel edge function marketing page.",
    url: "https://vercel.com/edge",
    work: true,
  },
  {
    name: "▲/analytics",
    year: 2022,
    description: "The Vercel analytics marketing page.",
    url: "https://vercel.com/analytics",
    work: true,
  },
  {
    name: "▲/product-tour",
    year: 2022,
    description: "Tech lead on the Vercel product tour.",
    url: "https://vercel.com/product-tour",
    work: true,
  },
  {
    name: "pstdl",
    year: 2021,
    description:
      "The website for the Planetary Surface Technology Development Laboratory at Michigan Technological University.",
    url: "https://pstdl.com",
    work: true,
    githubSlug: "mtu-pstdl/pstdl.com",
  },
  {
    name: "abadi",
    year: 2019,
    description:
      "The website for Abadi Labs at Michigan Technological University.",
    url: "https://abadi.me.mtu.edu/",
    work: true,
  },
  {
    name: "NMC Music",
    year: 2020,
    description:
      "A web app for member of the Northwestern Michigan College Choirs to access resources.",
    url: "https://nmcmusic.jeffreycobb.com/",
  },
  {
    name: "Vacation Village",
    year: 2020,
    description: "A web site for a mobile home park in Northern Michigan.",
    url: "https://vacationvillageelkrapids.com/",
  },
];

export function fetchShips(): Ship[] {
  return SHIPS.sort(
    (a, b) =>
      (b.wip ? 1 : -1) - (a.wip ? 1 : -1) ||
      (b.trophy ? 1 : -1) - (a.trophy ? 1 : -1) ||
      b.year - a.year ||
      a.name.localeCompare(b.name)
  );
}
