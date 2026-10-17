import type { Variants } from "motion/react"

export const fadeLeft: Variants = {
    hidden: {opacity: 0, x: 36},
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut"}
    },
}