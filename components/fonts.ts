import { Lato, Roboto_Mono } from "@next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "optional",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "optional",
});
