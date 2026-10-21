import ContactForm from "../components/ContactForm";
import { CardContact } from "../components/CardContact";
import { contacts } from "../data/contacts";
import { motion } from "motion/react"
import { staggerContainer, fadeRight, fadeDown } from "../animations";

const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="px-5 pt-12 xl:px-32 2xl:px-96 mb-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                variants={fadeRight}
            >
                /Contact
            </motion.h1>

            <motion.div
                className="flex flex-col lg:flex-row gap-4"
                variants={staggerContainer}
            >
                <motion.div
                    className="lg:w-[50%] flex flex-col justify-between"
                    variants={staggerContainer}
                >
                    <motion.div className="mb-2">
                        <motion.h3 className="text-lg md:text-xl lg:text-2xl font-bold" variants={fadeRight}>Let's work together.</motion.h3>
                        <motion.p variants={fadeDown}>Have a project in mind or looking for a frontend developer? Feel free to reach out.</motion.p>
                    </motion.div>

                    <div className="flex flex-col gap-2">
                        {contacts.map((contact, index) => (
                            <CardContact
                                key={index}
                                icon={contact.icon}
                                type={contact.type}
                                data={contact.data}
                            />
                        ))}
                    </div>

                </motion.div>
                <ContactForm />
            </motion.div>
        </motion.section>
    )
}

export default Contact