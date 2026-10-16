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
        <div className="border border-line rounded-md w-full h-auto flex flex-col p-4 gap-4">
            <div className="self-start bg-gray-200 p-2 rounded-lg">
                <Icon size={29} strokeWidth={1.4}/>
            </div>
            <h2 className="text-md lg:text-xl font-bold">{title}</h2>
            <p className="text-base">{description}</p>
        </div>
    )
}

export default ServiceCard