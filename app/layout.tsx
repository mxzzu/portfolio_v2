import type { Metadata } from "next";
import { oswald, tangerine, baskervville, robotoCondensed } from "@/app/fonts/font";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Mazzu - Software Developer Portfolio",
  description: "Software Developer",
  keywords: [
    "software developer",
    "app developer",
    "portfolio",
  ],

  openGraph: {
    title: "Mazzu - Software Developer Portfolio",
    description: "Software Developer",
    url: "https://www.portfolio.mxzzu.it",
    type: "website",
    images: [
      {
        url: "https://www.portfolio.mxzzu.it/logo.webp",
        width: 3038,
        height: 580,
        alt: "Mazzu Portfolio Preview",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${tangerine.variable} ${baskervville.variable} ${robotoCondensed.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
