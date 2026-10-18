import ServiceCard from "../components/ServiceCard"
import { services } from "../data/service"
import { motion } from "motion/react"
import { fadeRight, staggerContainer, scaleIn } from "../animations"

const Service = () => {
    return (
        <section className="pt-4 sm:pt-20 xl:pt-10 px-5 lg:px-12 xl:px-32 2xl:px-96">
            <motion.h1
                className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold"
                variants={fadeRight}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true }}
            >
                /My Service
            </motion.h1>

            {/* service card*/}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={staggerContainer}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true }}
            >
                {services.map((item, index) => (
                    <motion.div key={index} variants={scaleIn}>
                        <ServiceCard
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Service