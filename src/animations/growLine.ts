import type { Variants } from "motion/react"

export const growLine: Variants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 1, ease: "easeInOut" } },
}