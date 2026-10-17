import type { Variants } from "motion/react"

export const staggerContainer: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}