import { MdOutlineArrowOutward } from "react-icons/md";
import type { Contact } from "../data/contacts";
import { motion } from "motion/react"
import { fadeInStagger, scaleIn, fadeRight } from "../animations";

export const CardContact = ({ icon: Icon, type, data }: Contact) => {
    return (
        <motion.div className="flex border border-line rounded-lg p-3 justify-between" variants={fadeInStagger}>
            <div className="flex gap-4">
                <motion.div className="bg-line flex items-center p-2 rounded-lg" variants={scaleIn}>
                    <Icon className="text-[1.5rem] lg:text-[2.5rem]" strokeWidth={1.2} />
                </motion.div>
                <motion.div className="flex flex-col gap-1 justify-between" variants={fadeRight}>
                    <h5 className="text-[0.8rem] lg:text-md xl:text-[1.1rem] font-bold">{type}</h5>
                    <p className="text-[0.8rem] lg:text-md xl:text-[1rem]">{data}</p>
                </motion.div>
            </div>

            <motion.a href="#" className="bg-acc text-white rounded-full self-center p-1" variants={scaleIn}>
                <MdOutlineArrowOutward className="text-[1.4rem] lg:text-[1.8rem]" />
            </motion.a>
        </motion.div>
    )
}