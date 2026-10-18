import CardTimeline from "../components/CardTimeline";
import { jobs } from "../data/experience";
import { fadeUp, staggerContainer, fadeRight } from "../animations";
import { motion } from "motion/react"

export default function Experience() {

  return (
    <section className="px-5 pt-12 xl:px-32 2xl:px-96">
      <motion.h1
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        /Experience
      </motion.h1>
      <motion.div
        className="flex flex-col gap-4 mb-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {jobs.map((job, index) => (
          <motion.div
            variants={fadeUp}
            key={index}
          >
            <CardTimeline
              role={job.role}
              company={job.company}
              address={job.address}
              period={job.period}
              description={job.description}
              KeyContributions={job.KeyContributions}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}