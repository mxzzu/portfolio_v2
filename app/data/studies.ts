interface Study {
    school: string,
    description: string,
    course: string,
    dates: string,
}

export const studies: Study[] = [
    {
        school: "ITIS Gugliemo Marconi",
        course: "Computer Science",
        description: "At ITIS Guglielmo Marconi, I built a solid technical foundation by focusing on the fundamentals of computer science and software development. Throughout five years of study, I mastered logical problem-solving and gained practical experience in programming, networking, and database management, which sparked my passion for building efficient digital solutions.",
        dates: "2018 - 2023",
    },

    {
        school: "Università degli Studi di Verona",
        course: "Course Science",
        description: "During my time at the University of Verona, I deepened my understanding of advanced computer science principles, including algorithm design, software engineering, and complex systems architecture. This academic journey allowed me to refine my technical expertise and apply theoretical knowledge to real-world projects, preparing me for a professional career in the tech industry.",
        dates: "2023 - present",
    }
]