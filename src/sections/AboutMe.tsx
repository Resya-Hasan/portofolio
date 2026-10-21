import { highlights } from "../data/highlights";
import { motion } from "motion/react"
import { staggerContainer, fadeRight, fadeDown, scaleInStagger, growLine } from "../animations";

const AboutMe = () => {
    return (
        <motion.section
            id="aboutMe"
            className="px-5 pt-12 xl:px-32 2xl:px-96 mb-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                variants={fadeRight}
            >
                /About Me
            </motion.h1>

            <motion.div
                className="rounded-lg border border-gray-200 p-6 md:p-8"
                variants={scaleInStagger}
            >
                <motion.p variants={fadeRight} className="text-lg md:text-xl font-medium leading-relaxed mb-4">
                    I'm a developer with a background in full-stack JavaScript development and
                    professional experience building web applications.
                </motion.p>
                <motion.p variants={fadeDown} className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
                    I enjoy turning ideas into practical, user-friendly interfaces and understanding
                    how each part of an application works together. Currently, I'm focusing on
                    frontend development, improving my approach to UI implementation, application
                    architecture, and maintainable code.
                </motion.p>

                <motion.div
                    className="relative grid gap-4 pt-6 md:grid-cols-3"
                    variants={staggerContainer}
                >
                    <motion.span
                        variants={growLine}
                        className="absolute left-0 top-0 h-px w-full origin-left bg-chip"
                    />

                    {highlights.map(({ icon: Icon, title, desc }) => (
                        <motion.div key={title} variants={fadeRight} className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100">
                                <Icon className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold">{title}</h3>
                                <p className="text-sm text-gray-600">{desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default AboutMe