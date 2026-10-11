import {
    SiReact, SiTailwindcss, SiTypescript, SiNextdotjs,
    SiExpress, SiPostgresql, SiGit, SiFigma
} from "react-icons/si";

const groups = [
    {
        title: "Frontend",
        items: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Express.js", icon: SiExpress },
            { name: "PostgreSQL", icon: SiPostgresql },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "Git", icon: SiGit },
            { name: "Figma", icon: SiFigma },
        ],
    },
];

export default function Skills() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
                <div>
                    <h2 className="text-3xl font-bold mb-3">/Skills</h2>
                    <p className="text-gray-600 mb-4">
                        Tools and technologies I use to build web applications, from interface to API.
                    </p>
                    <p className="text-sm text-gray-500">
                        Currently learning: <span className="font-medium text-gray-800">Next.js, Docker</span>
                    </p>
                </div>

                <div className="space-y-6">
                    {groups.map((g) => (
                        <div key={g.title}>
                            <h3 className="text-sm font-semibold mb-3">{g.title}</h3>
                            <ul className="flex flex-wrap gap-3">
                                {g.items.map(({ name, icon: Icon }) => (
                                    <li
                                        key={name}
                                        className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800"
                                    >
                                        <Icon className="text-base" />
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}