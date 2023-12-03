import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import type { LinkType, SocialType } from "./types";

export const REVALIDATE_DEFAULT = 30;

export const LINKS: LinkType[] = [
  { path: "/", name: "hello" },
  { path: "/resume", name: "resume" },
  { path: "/blog", name: "blog" },
  { path: "/guests", name: "guests", hideMobile: true },
  { path: "/ships", name: "ships" },
  { path: "/snippets", name: "snippets" },
];

export const SOCIAL: SocialType[] = [
  {
    link: "https://twitter.com/elijahjcobb",
    icon: FaXTwitter,
    eventName: "twitter",
  },
  {
    link: "https://www.linkedin.com/in/elijahjcobb/",
    icon: FaLinkedin,
    eventName: "linkedin",
  },
  {
    link: "https://github.com/elijahjcobb",
    icon: FaGithubSquare,
    eventName: "github",
  },
];
