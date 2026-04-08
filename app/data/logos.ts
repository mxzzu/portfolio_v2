import { LogoItem } from "@/app/components/logoloop";
import React from "react";
import Image from "next/image" 

export const web: LogoItem[] = [
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/react/mono.svg", alt:"React", width: 48, height: 48 }), title: "React", href: "https://react.dev" },
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/nextdotjs/mono.svg", alt:"NextJS", width: 48, height: 48 }), title: "Next.js", href: "https://nextjs.org" },
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/typescript/mono.svg", alt:"TypeScript", width: 48, height: 48 }), title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/tailwind-css/mono.svg", alt:"TailwindCSS", width: 48, height: 48 }), title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export const software: LogoItem[] = [
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/android/mono.svg", alt:"Android", width: 48, height: 48 }), title: "Android", href: "https://www.android.com/" },
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/c/mono.svg", alt:"C", width: 48, height: 48 }), title: "C", href: "https://www.c-language.org/" },
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/docker/mono.svg", alt:"Docker", width: 48, height: 48 }), title: "Docker", href: "https://docker.com" },
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/python/mono.svg", alt:"Python", width: 48, height: 48 }), title: "Python", href: "https://python.org" },
];

export const database: LogoItem[] = [
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/mongodb/mono.svg", alt:"MongoDB", width: 48, height: 48 }), title: "MongoDB", href: "https://www.mongodb.com/" },
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/mysql/mono.svg", alt:"MySQL", width: 64, height: 64 }), title: "SQL", href: "https://mysql.com" },
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/postman/mono.svg", alt:"Postman", width: 48, height: 48 }), title: "Postman", href: "https://postman.com" },
    { node: React.createElement(Image, { src: "https://thesvg.org/icons/postgresql/mono.svg", alt:"Postgres", width: 48, height: 48 }), title: "Postgres", href: "https://postgresql.org" },
];