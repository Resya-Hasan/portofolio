import TimelineItem from "../components/TimelineItem";
import { jobs } from "../data/experience";
import { useTimelineProgress } from "../hooks/userTimelineProgress";

export default function Experience() {
  const { tlRef, nodeRefs, active, done } = useTimelineProgress(jobs.length);

  return (
    <section
      aria-labelledby="exp"
      className="mx-auto max-w-[720px] px-6 pb-[max(120px,35vh)] pt-[72px]"
    >
      <h2
        id="exp"
        className="mb-[72px] font-display text-[clamp(2.6rem,9vw,4.75rem)] font-bold leading-none tracking-[-0.035em]"
      >
        Experience
      </h2>

      <div ref={tlRef} className="relative">
        {/* rail */}
        <div aria-hidden="true" className="absolute inset-y-0 left-[10px] w-0.5 bg-line">
          <div className="absolute inset-0 origin-top bg-acc [transform:scaleY(var(--p,0))]" />
        </div>

        {jobs.map((job, i) => (
          <TimelineItem
            key={job.role + job.period}
            job={job}
            on={active[i] ?? false}
            nodeRef={(el) => {
              nodeRefs.current[i] = el;
            }}
          />
        ))}

        {/* panah akhir */}
        <span
          aria-hidden="true"
          className={`absolute -bottom-3.5 left-[3px] size-0 border-8 border-transparent border-b-0 border-t-[11px] transition-[border-top-color] duration-[400ms] ${
            done ? "border-t-acc" : "border-t-line"
          }`}
        />
      </div>
    </section>
  );
}