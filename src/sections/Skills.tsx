import { skills } from "../data/skills";
import { motion } from "motion/react"
import { fadeRight, scaleIn, staggerContainer } from "../animations";
import { CardSkills } from "../components/CardSkills";

export default function Skills() {
    const MotionCardSkills = motion.create(CardSkills)

    return (
        <section className="px-5 pt-12 xl:px-32 2xl:px-96 mb-6">
            <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                variants={fadeRight}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
            >
                /Skills
            </motion.h1>

            <motion.div
                className="grid gap-5 md:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
            >
                {skills.map(({ title, icon: GroupIcon, desc, items }) => (
                    <MotionCardSkills
                        key={title}
                        variants={scaleIn}
                        title={title}
                        icon={GroupIcon}
                        desc={desc}
                        items={items}
                    />
                ))}
            </motion.div>
        </section>
    );
}