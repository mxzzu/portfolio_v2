interface Job {
    role: string,
    company: string,
    dates: string,
    duties: Record<string,string>
}

export const jobs: Job[] = [
    {
        role: "Sales Assistant",
        company: "Lidl Italia srl",
        dates: "2024 - present",
        duties: {
            "Customer Relations": "Provided professional assistance in a fast-paced environment, honing communication and conflict-resolution skills",
            "Logistics & Merchandising": "Handled stock rotation and inventory organization, maintaining high operational standards and efficiency",
            "Problem Solving": "Multi-tasked across various store departments, adapting quickly to shifting priorities and team needs"
        }
    },

    {
        role: "Junior Developer",
        company: "Terranova Software srl",
        dates: "2022",
        duties: {
            "Backend Development": "Developed and maintained robust Windows Services using C#, ensuring high reliability for background processing and system automation",
            "Database Management": "Worked extensively with relational databases to design queries and manage data flow efficiently across software modules",
            "API Integration": "Built and optimized REST APIs to facilitate seamless communication between services and external applications",
            "Technical Documentation": "Authored clear and comprehensive technical documentation to streamline future development and team collaboration"
        }
    }
]