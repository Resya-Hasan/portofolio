import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useRef, useState, type FormEvent } from "react"
import emailJs from "@emailjs/browser"

type Status = "idle" | "sending" | "success" | "error"

const Contact = () => {
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
        <section className="px-5 pt-12 xl:px-32 2xl:px-96 mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">/Contact</h1>

            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-[50%] flex flex-col justify-between">
                    <div className="mb-2">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Let's work together.</h3>
                        <p>Have a project in mind or looking for a frontend developer? Feel free to reach out.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex border border-line rounded-lg p-3 justify-between">
                            <div className="flex gap-4">
                                <div className="bg-line flex items-center p-2 rounded-lg">
                                    <HiOutlineMail className="text-[1.5rem] lg:text-[2.5rem]" strokeWidth={1.2} />
                                </div>
                                <div className="flex flex-col gap-1 justify-between">
                                    <h5 className="text-[0.8rem] lg:text-md xl:text-[1.1rem] font-bold">Email</h5>
                                    <p className="text-[0.8rem] lg:text-md xl:text-[1rem]">Bdull2348@gmail.com</p>
                                </div>
                            </div>

                            <a href="#" className="bg-acc text-white rounded-full self-center p-1">
                                <MdOutlineArrowOutward className="text-[1.4rem] lg:text-[1.8rem]" />
                            </a>
                        </div>
                        <div className="flex border border-line rounded-lg p-3 justify-between">
                            <div className="flex gap-4">
                                <div className="bg-line flex items-center p-2 rounded-lg">
                                    <FiPhone className="text-[1.5rem] lg:text-[2.5rem]" strokeWidth={1.2} />
                                </div>
                                <div className="flex flex-col gap-1 justify-between">
                                    <h5 className="text-[0.8rem] lg:text-md xl:text-[1.1rem] font-bold">Telephone</h5>
                                    <p className="text-[0.8rem] lg:text-md xl:text-[1rem]">+628******0</p>
                                </div>
                            </div>

                            <a href="#" className="bg-acc text-white rounded-full self-center p-1">
                                <MdOutlineArrowOutward className="text-[1.4rem] lg:text-[1.8rem]" />
                            </a>
                        </div>
                    </div>
                </div>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col border border-line rounded-lg lg:w-[50%] p-4 gap-4"
                >
                    <input
                        name="name"
                        placeholder="Name"
                        required
                        className="py-2 px-3 bg-line rounded-lg focus-within:outline-2 focus-within:outline-acc"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="py-2 px-3 bg-line rounded-lg focus-within:outline-2 focus-within:outline-acc"
                    />
                    <input
                        type="hidden"
                        name="time"
                        value={new Date().toLocaleString("id-ID")}
                    />
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Message"
                        required
                        className="py-2 px-3 h-28 bg-line rounded-lg focus-within:outline-2 focus-within:outline-acc"
                    />
                    <button type="submit" disabled={status === "sending"} className="bg-acc text-white py-2 rounded-lg">
                        {status === "sending" ? "Sending..." : "Submit"}
                    </button>

                    {status === "success" && <p className="text-sm text-green-600">Message sent!</p>}
                    {status === "error" && <p className="text-sm text-red-600">Failed to send, try again.</p>}
                </form>
            </div>
        </section>
    )
}

export default Contact