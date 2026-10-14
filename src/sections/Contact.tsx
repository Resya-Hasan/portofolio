import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
    return (
        <section className="px-5 pt-12 xl:px-32 2xl:px-96 mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">/Contact</h1>

            <div className="flex gap-4">
                <div className="w-[50%] flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold">Let's work together.</h3>
                        <p>Have a project in mind or looking for a frontend developer? Feel free to reach out.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex border border-line rounded-lg p-3 justify-between">
                            <div className="flex gap-4">
                                <div className="bg-line flex items-center p-2 rounded-lg">
                                    <HiOutlineMail size={40} strokeWidth={1.5}/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h5 className="text-lg font-bold">Email</h5>
                                    <p>Bdull2348@gmail.com</p>
                                </div>
                            </div>

                            <a href="#" className="bg-acc text-white rounded-full self-center p-1">
                                <MdOutlineArrowOutward size={28} />
                            </a>
                        </div>
                        <div className="flex border border-line rounded-lg p-3 justify-between">
                            <div className="flex gap-4">
                                <div className="bg-line flex items-center p-2 rounded-lg">
                                    <BsTelephone size={40} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h5 className="text-lg font-bold">Telephone</h5>
                                    <p>+628******0</p>
                                </div>
                            </div>

                            <a href="#" className="bg-acc text-white rounded-full self-center p-1">
                                <MdOutlineArrowOutward size={28} />
                            </a>
                        </div>
                    </div>
                </div>
                <form className="flex flex-col border border-line rounded-lg w-[50%] p-4 gap-4">
                    <input placeholder="Name" className="py-2 px-3 bg-line rounded-lg focus-within:outline-2 focus-within:outline-acc" />
                    <input placeholder="Email" className="py-2 px-3 bg-line rounded-lg focus-within:outline-2 focus-within:outline-acc" />
                    <textarea placeholder="Message" className="py-2 px-3 h-28 bg-line rounded-lg focus-within:outline-2 focus-within:outline-acc" />
                    <button type="submit" className="bg-acc text-white py-2 rounded-lg">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact