import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import ContactForm from "../components/ContactForm";

const Contact = () => {
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
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact