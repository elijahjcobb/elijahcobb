import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import type { LinkType, SocialType } from "./types";

export const REVALIDATE_DEFAULT = 30;

export const LINKS: LinkType[] = [
  { path: "/", name: "Hello" },
  { path: "/guests", name: "Guests" },
  { path: "/resume", name: "resume" },
  { path: "/ships", name: "Ships" },
  { path: "/snippets", name: "Snippets" },
];

export const SOCIAL: SocialType[] = [
  {
    link: "https://twitter.com/elijahjcobb",
    icon: FaXTwitter,
  },
  {
    link: "https://www.linkedin.com/in/elijahjcobb/",
    icon: FaLinkedin,
  },
  {
    link: "https://github.com/elijahjcobb",
    icon: FaGithubSquare,
  },
];
