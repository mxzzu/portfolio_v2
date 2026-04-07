import { LogoItem } from "@/app/components/logoloop";
import { web, software, database } from "./logos";

interface Skill {
    title: string,
    description: string,
    level: string,
    icons?: LogoItem[]
}

export const skills: Skill[] = [
    {
        title: "Web Developement",
        description: "Focusing on building responsive and intuitive user interfaces, I combine modern frameworks with clean code to create seamless digital experiences. I bridge the gap between design and functionality to ensure high performance across all devices",
        level: "Basic",
        icons: web,
    },

    {
        title: "Software Developement",
        description: "Experienced in the full software development life cycle, I specialize in building scalable applications using C# and .NET. My approach prioritizes modular architecture, maintainability, and the implementation of efficient backend logic",
        level: "Intermediate",
        icons: software,
    },

    {
        title: "Database Management",
        description: "Skilled in designing and optimizing relational databases, I focus on data integrity and query performance. I manage complex data structures to ensure that applications remain fast, secure, and capable of handling growing workloads",
        level: "Intermediate",
        icons: database,
    },

    {
        title: "Problem Solving",
        description: "I approach complex technical challenges with an analytical mindset, breaking down problems into manageable tasks. My experience in fast-paced environments has refined my ability to debug efficiently and find creative, robust solutions under pressure",
        level: "Soft Skill",
    },
]