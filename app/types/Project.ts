export interface Project {
    title: string,
    description: string,
    role: string,
    longDescription: string,
    images: string[],
    imageWidth: number
    imageHeight: number,
    techStack: {
        frontEnd?: string[],
        backEnd?: string[],
        database?: string[],
        architecture: string[],
    },
    keyFeatures: Record<string,string>,
    githubLink: string,
}