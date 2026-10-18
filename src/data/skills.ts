import {
    SiReact, SiTailwindcss, SiTypescript, SiNextdotjs,
    SiExpress, SiPostgresql, SiGit, SiPostman, SiDocker, SiMongodb
} from "react-icons/si";
import { LuLayoutTemplate, LuServer, LuWrench } from "react-icons/lu";
import type {IconType} from "react-icons"

export interface TechItem {
    name: string;
    icon: IconType;
}

export interface SkillCategory {
    title: string;
    icon: IconType;
    desc: string;
    items: TechItem[];
}

export const skills: SkillCategory[] = [
    {
        title: "Frontend",
        icon: LuLayoutTemplate,
        desc: "Building responsive, accessible interfaces with a component-based approach.",
        items: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        title: "Backend",
        icon: LuServer,
        desc: "Developing RESTful APIs, authentication, and database-driven features.",
        items: [
            { name: "Express.js", icon: SiExpress },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDb", icon: SiMongodb}
        ],
    },
    {
        title: "Tools",
        icon: LuWrench,
        desc: "Version control, design handoff, and everyday development workflow.",
        items: [
            { name: "Git", icon: SiGit },
            { name: "Postman", icon: SiPostman},
            { name: "Docker", icon: SiDocker },
        ],
    },
];