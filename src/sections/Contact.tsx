import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineArrowOutward } from "react-icons/md";

const Contact = () => {
    return (
        <section className="px-5 pt-12 xl:px-32 2xl:px-96 mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">/Contact</h1>

            <div className="flex">
                <div>
                    <div>
                        <h3>Get Touch</h3>
                        <p>Have quetions?</p>
                    </div>
                    <div className="">
                        <div className="flex border border-line rounded-lg">
                            <div className="p-2 ">
                                <HiOutlineMail size={20}/>
                            </div>

                            <div>
                                <h5>Email</h5>
                                <p>resyahasan0@gmail.com</p>
                            </div>

                            <a href="#">
                                <MdOutlineArrowOutward />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact