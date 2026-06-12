export interface Social {
  label: string;
  handle: string;
  href: string;
  /** marks the click-to-copy email entry */
  email?: boolean;
}

export const profile = {
  name: "Elijah Cobb",
  role: "Software Engineer",
  bio: "Software engineer working across operating systems, developer tools, and lunar robotics.",
  email: "elijah@elijahcobb.com",
  affiliations: ["Apple", "Vercel", "NASA", "MTU"],
  socials: [
    {
      label: "LinkedIn",
      handle: "in/elijahjcobb",
      href: "https://linkedin.com/in/elijahjcobb",
    },
    {
      label: "GitHub",
      handle: "elijahjcobb",
      href: "https://github.com/elijahjcobb",
    },
    {
      label: "Email",
      handle: "elijah@elijahcobb.com",
      href: "mailto:elijah@elijahcobb.com",
      email: true,
    },
  ] satisfies Social[],
};
