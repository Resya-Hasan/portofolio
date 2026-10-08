import type { IconType } from "react-icons"

interface ServiceCardProps {
    icon: IconType;
    title: string;
    description: string;
}
const ServiceCard = ({
    icon: Icon,
    title,
    description,
}: ServiceCardProps) => {
    return (
        <div className="border border-gray-400 w-full h-auto flex flex-col p-4 gap-4">
            <div className="self-start bg-gray-200 p-3 rounded-lg">
                <Icon size={32} />
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-lg">{description}</p>
        </div>
    )
}

export default ServiceCard