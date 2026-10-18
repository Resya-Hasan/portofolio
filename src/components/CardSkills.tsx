import type { SkillCategory } from "../data/skills"
import type { CSSProperties, Ref } from "react"

type CardSkillsProps = SkillCategory & {
    className?:string
    style?:CSSProperties
    ref?: Ref<HTMLDivElement>
}

export const CardSkills = ({title, icon: GroupIcon, desc, items, className, style, ref}: CardSkillsProps) => {
    return (
        <div 
        ref={ref}
        style={style}
        className={`rounded-lg border border-gray-200 p-5 ${className ?? ""}`}>
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-gray-100">
                <GroupIcon className="text-lg" />
            </div>
            <h3 className="mb-2 font-semibold">{title}</h3>
            <p className="mb-5 text-sm leading-relaxed text-gray-600">{desc}</p>

            <ul className="flex flex-wrap gap-2">
                {items.map(({ name, icon: Icon }) => (
                    <li
                        key={name}
                        className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-800"
                    >
                        <Icon />
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}