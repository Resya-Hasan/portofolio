import { LuCode, LuLayoutTemplate, LuBlocks } from "react-icons/lu";
import type {IconType} from "react-icons"

export interface Highlight {
    icon: IconType;
    title: string;
    desc: string;
}

export const highlights = [
    {
        icon: LuCode,
        title: "Full-stack JavaScript",
        desc: "Background building web applications end to end.",
    },
    {
        icon: LuLayoutTemplate,
        title: "Frontend focus",
        desc: "Turning ideas into practical, user-friendly interfaces.",
    },
    {
        icon: LuBlocks,
        title: "Maintainable code",
        desc: "Improving UI implementation and application architecture.",
    },
];