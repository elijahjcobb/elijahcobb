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
  // {
  //   slug: "",
  //   name: "",
  //   short_name: "",
  //   href: "",
  //   position: "",
  //   links: [],
  //   tasks: [],
  //   start_month: 0,
  //   start_year: 0,
  //   end_month: 0,
  //   end_year: 0,
  // },
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
