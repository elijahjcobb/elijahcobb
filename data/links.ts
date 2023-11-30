import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import type { LinkType, SocialType } from "./types";

export const REVALIDATE_DEFAULT = 30;

export const LINKS: LinkType[] = [
  { path: "/", name: "Hello" },
  // { path: "/#guestbook", name: "Guestbook" },
  // { path: "/#work", name: "Work" },
  { path: "/resume", name: "resume" },
  { path: "/ships", name: "Ships" },
  { path: "/snippets", name: "Snippets" },
];

export const SOCIAL: SocialType[] = [
  {
    link: "https://github.com/elijahjcobb",
    icon: FaGithubSquare,
  },
  {
    link: "https://www.linkedin.com/in/elijahjcobb/",
    icon: FaLinkedin,
  },
  {
    link: "https://twitter.com/elijahjcobb",
    icon: FaTwitterSquare,
  },
];
