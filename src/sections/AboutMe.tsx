import { LuCode, LuLayoutTemplate, LuBlocks } from "react-icons/lu";

const highlights = [
    {
        icon: LuCode,
        title: "Full-stack JavaScript",
        desc: "Background building web applications end to end.",
    },
    {
        icon: LuLayoutTemplate,
        title: "Frontend focus",
        desc: "Turning ideas into practical, user-friendly interfaces.",
    },
    {
        icon: LuBlocks,
        title: "Maintainable code",
        desc: "Improving UI implementation and application architecture.",
    },
];

const AboutMe = () => {
    return (
        <section className="px-5 pt-12 xl:px-32 2xl:px-96 mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">/About Me</h1>

            <div className="rounded-lg border border-gray-200 p-6 md:p-8">
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-4">
                    I'm a developer with a background in full-stack JavaScript development and
                    professional experience building web applications.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
                    I enjoy turning ideas into practical, user-friendly interfaces and understanding
                    how each part of an application works together. Currently, I'm focusing on
                    frontend development, improving my approach to UI implementation, application
                    architecture, and maintainable code.
                </p>

                <div className="grid gap-4 border-t border-gray-200 pt-6 md:grid-cols-3">
                    {highlights.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100">
                                <Icon className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold">{title}</h3>
                                <p className="text-sm text-gray-600">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutMe