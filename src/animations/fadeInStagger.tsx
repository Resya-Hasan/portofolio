import type { Variants } from "motion/react"

export const fadeInStagger: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.4,
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
}