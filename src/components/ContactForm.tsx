import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailJs from "@emailjs/browser"
import { motion } from "motion/react"
import { fadeInStagger, expandCorner } from "../animations"

type Status = "idle" | "sending" | "success" | "error"

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<Status>("idle")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("sending")
        try {
            await emailJs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );
            setStatus('success')
            formRef.current.reset();
        } catch (err) {
            console.log(err);
            setStatus("error")
        }
    }

    return (
        <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeInStagger}
            className="flex flex-col border border-line rounded-lg lg:w-[50%] p-4 gap-4"
        >
            <motion.input
                name="name"
                placeholder="Name"
                required
                variants={expandCorner}
                className="origin-top-left py-2 px-3 bg-line rounded-lg focus-within:outline-2 focus-within:outline-acc"
            />
            <motion.input
                name="email"
                type="email"
                placeholder="Email"
                required
                variants={expandCorner}
                className="origin-top-left py-2 px-3 bg-line rounded-lg focus-within:outline-2 focus-within:outline-acc"
            />
            <motion.input
                type="hidden"
                name="time"
                value={new Date().toLocaleString("id-ID")}
            />
            <motion.textarea
                name="message"
                rows={5}
                placeholder="Message"
                required
                variants={expandCorner}
                className="origin-top-left py-2 px-3 h-28 bg-line rounded-lg focus-within:outline-2 focus-within:outline-acc"
            />
            <motion.button variants={expandCorner} type="submit" disabled={status === "sending"} className="bg-acc text-white py-2 rounded-lg">
                {status === "sending" ? "Sending..." : "Submit"}
            </motion.button>

            {status === "success" && <p className="text-sm text-green-600">Message sent!</p>}
            {status === "error" && <p className="text-sm text-red-600">Failed to send, try again.</p>}
        </motion.form>
    )
}

export default ContactForm