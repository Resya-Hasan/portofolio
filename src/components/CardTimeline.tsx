import type { Job } from "../data/experience"

const CardTimeline = ({ role, company, address, period, description, KeyContributions }: Job) => {
    return (
        <div className="border-2 border-line p-6 rounded-lg">
            <div className="flex justify-between border-b border-line pb-4 mb-4">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{role}</h2>
                    <h4 className="text-lg font-bold">{company}</h4>
                    <span className="text-base text-mute">{address}</span>
                    <span className="md:hidden text-base text-mute">{period}</span>
                </div>
                <div>
                    <span className="hidden md:block text-base">{period}</span>
                </div>
            </div>

            <div>
                <p className="mb-3 text-base">{description}</p>
                <h4 className="text-lg font-bold">Key Contributions</h4>
                <ul className="list-disc pl-5 text-base">
                    {KeyContributions.map((contribution: string, index: number) => (
                        <li key={index}>{contribution}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CardTimeline