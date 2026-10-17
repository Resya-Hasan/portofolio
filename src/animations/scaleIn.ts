import type { Variants } from "motion/react"

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: "easeOut" },
    },
}