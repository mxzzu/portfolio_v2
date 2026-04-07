import { LogoItem } from "@/app/components/logoloop";
import React from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostman, SiPostgresql } from 'react-icons/si';
import { TbBrandCSharp, TbBrandAndroid, TbBrandDocker, TbBrandPython, TbBrandMongodb, TbSql  } from "react-icons/tb";

export const web: LogoItem[] = [
    { node: React.createElement(SiReact), title: "React", href: "https://react.dev" },
    { node: React.createElement(SiNextdotjs), title: "Next.js", href: "https://nextjs.org" },
    { node: React.createElement(SiTypescript), title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: React.createElement(SiTailwindcss), title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export const software: LogoItem[] = [
    { node: React.createElement(TbBrandAndroid), title: "Android", href: "https://www.android.com/" },
    { node: React.createElement(TbBrandCSharp), title: "C#", href: "https://react.dev" },
    { node: React.createElement(TbBrandDocker), title: "Docker", href: "https://react.dev" },
    { node: React.createElement(TbBrandPython), title: "Python", href: "https://react.dev" },
];

export const database: LogoItem[] = [
    { node: React.createElement(TbBrandMongodb), title: "MongoDB", href: "https://www.android.com/" },
    { node: React.createElement(TbSql), title: "SQL", href: "https://react.dev" },
    { node: React.createElement(SiPostman), title: "Postman", href: "https://react.dev" },
    { node: React.createElement(SiPostgresql), title: "Postgres", href: "https://react.dev" },
];