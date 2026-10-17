import type { Variants } from "motion/react"

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
}