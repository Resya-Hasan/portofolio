export interface Job {
    period: string;
    role: string;
    company: string;
    description: string;
    stack: string[];
}

export const jobs: Job[] = [
    {
        period: "2024 — 2025", role: "Software Developer", company: "Pastel Solution",
        description: "Developed and maintained web applications across frontend and backend.",
        stack: ["React.js", "Express.js", "PostgreSQL"]
    },
    {
        period: "2023 — 2024", role: "Junior Web Developer", company: "Company Name",
        description: "Built responsive pages and fixed bugs in an existing product.",
        stack: ["JavaScript", "Tailwind CSS", "MySQL"]
    },
    {
        period: "2022 — 2023", role: "Freelance Developer", company: "Self-employed",
        description: "Delivered landing pages and small business sites for local clients.",
        stack: ["HTML", "CSS", "JavaScript"]
    },
];