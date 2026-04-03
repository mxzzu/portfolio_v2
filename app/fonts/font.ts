import { Oswald, Baskervville, Tangerine, Roboto_Condensed } from "next/font/google";

export const oswald = Oswald({
    weight: ["700"],
    subsets: ["latin"],
    variable: "--font-oswald",
});

export const baskervville = Baskervville({
    subsets: ["latin"],
    variable: "--font-baskervville",
});

export const tangerine = Tangerine({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-tangerine",
});

export const robotoCondensed = Roboto_Condensed({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-roboto-condensed",
});