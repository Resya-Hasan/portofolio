import type { Service } from "../data/service";
import type { CSSProperties, Ref } from "react";

type ServiceCardProps = Service & {
    className?: string
    style: CSSProperties
    ref: Ref<HTMLDivElement>
}

const ServiceCard = ({
    icon: Icon,
    title,
    description,
    className,
    style,
    ref
}: ServiceCardProps) => {
    return (
        <div
        ref={ref}
        style={style}
            className={`border border-line rounded-md w-full h-auto flex flex-col p-4 gap-4 ${className ?? ""}`}
        >
            <div className="self-start bg-gray-200 p-2 rounded-lg">
                <Icon size={29} strokeWidth={1.4} />
            </div>
            <h2 className="text-md lg:text-xl font-bold">{title}</h2>
            <p className="text-base">{description}</p>
        </div>
    )
}

export default ServiceCard