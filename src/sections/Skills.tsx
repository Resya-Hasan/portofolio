import {
    SiReact, SiTailwindcss, SiTypescript, SiNextdotjs,
    SiExpress, SiPostgresql, SiGit, SiPostman, SiDocker,
} from "react-icons/si";
import { LuLayoutTemplate, LuServer, LuWrench } from "react-icons/lu";

const groups = [
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

export default function Skills() {
    return (
        <section className="px-5 pt-12 xl:px-32 2xl:px-96 mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">/Skills</h1>

            <div className="grid gap-5 md:grid-cols-3">
                {groups.map(({ title, icon: GroupIcon, desc, items }) => (
                    <div key={title} className="rounded-lg border border-gray-200 p-5">
                        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-gray-100">
                            <GroupIcon className="text-lg" />
                        </div>
                        <h3 className="mb-2 font-semibold">{title}</h3>
                        <p className="mb-5 text-sm leading-relaxed text-gray-600">{desc}</p>

                        <ul className="flex flex-wrap gap-2">
                            {items.map(({ name, icon: Icon }) => (
                                <li
                                    key={name}
                                    className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-800"
                                >
                                    <Icon />
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}