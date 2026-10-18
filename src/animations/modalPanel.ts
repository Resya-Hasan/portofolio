import type { Variants } from "motion/react"

export const modalPanel: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: { duration: 0.15 },
    },
}