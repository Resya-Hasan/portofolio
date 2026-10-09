import type { Job } from "../data/experience";

interface Props {
    job: Job;
    on: boolean;
    nodeRef: (el: HTMLSpanElement | null) => void;
}

export default function TimelineItem({ job, on, nodeRef }: Props) {
    return (
        <article
            data-on={on}
            className="group relative pb-[72px] pl-14 last-of-type:pb-10"
        >
            <time className="mb-3.5 block font-display font-medium tabular-nums text-mute transition-colors duration-500 group-data-[on=true]:text-ink">
                {job.period}
            </time>

            <div className="opacity-40 transition-opacity duration-[600ms] group-data-[on=true]:opacity-100">
                <div className="relative">
                    <span
                        ref={nodeRef}
                        aria-hidden="true"
                        className="absolute -left-14 top-[.55rem] size-[22px] rounded-full border-2 border-line bg-bg transition-[background-color,border-color] duration-[350ms] group-data-[on=true]:border-acc group-data-[on=true]:bg-acc"
                    >
                        <span className="absolute -inset-0.5 rounded-full border-2 border-acc opacity-0 group-data-[on=true]:animate-ping-once" />
                    </span>
                    <h3 className="font-display text-[clamp(1.5rem,4.5vw,2rem)] font-bold leading-[1.2] tracking-[-0.02em]">
                        {job.role}
                    </h3>
                </div>

                <p className="mb-[18px] mt-0.5 font-medium text-acc">{job.company}</p>

                <p className="mb-5 max-w-[44ch] text-mute transition-colors duration-[600ms] group-data-[on=true]:text-ink">
                    {job.description}
                </p>

                <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                    {job.stack.map((s, i) => (
                        <li
                            key={s}
                            style={{ transitionDelay: `${i * 110 + 250}ms` }}
                            className="rounded-full border border-dashed border-line px-3 py-[3px] text-sm transition-[background-color,border-color] duration-[450ms] group-data-[on=true]:border-solid group-data-[on=true]:border-transparent group-data-[on=true]:bg-chip"
                        >
                            {s}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}