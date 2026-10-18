import Card from "../components/Card"
import { projects } from "../data/projects"
import { motion } from "motion/react"
import { fadeRight, scaleIn, staggerContainer } from "../animations"

const Projects = () => {
    return (
        <section className="px-5 pt-12 xl:px-32 2xl:px-96">
            <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                variants={fadeRight}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true }}
            >
                /Projects
            </motion.h1>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={scaleIn}
                    >
                        <Card
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            role={project.role}
                            features={project.features}
                            iBuilt={project.iBuilt}
                            projectType={project.projectType}
                            liveDemoUrl={project.liveDemoUrl}
                            githubUrl={project.githubUrl}
                        />
                    </motion.div>
                ))}

            </motion.div>
        </section>
    )
}

export default Projects