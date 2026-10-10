import CardTimeline from "../components/CardTimeline";
import { jobs } from "../data/experience";


export default function Experience() {

  return (
    <section className="px-5 pt-12 xl:px-32 2xl:px-96">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">/Experience</h1>
      <div className="flex flex-col gap-4 mb-4">
        {jobs.map((job, index) => (
          <CardTimeline
            key={index}
            role={job.role}
            company={job.company}
            address={job.address}
            period={job.period}
            description={job.description}
            KeyContributions={job.KeyContributions}
          />
        ))}
      </div>
    </section>
  );
}