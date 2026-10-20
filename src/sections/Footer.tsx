import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <section className="relative bg-ink p-8 text-chip">
            <div className="flex justify-between">
                <div>
                    <h5 className="font-bold">Resya Hasan Mubarok</h5>
                    <span>Frontend Developer</span>
                </div>
                <div className="flex text-[1.4rem] gap-3">
                    <FiGithub />
                    <FiLinkedin />
                    <BsTwitterX />
                </div>
            </div>
            <hr className="my-4 border-gray-200/30" />
            <div className="flex justify-between">
                <p>© 2026 Resya Hasan M</p>
                <p>Built with React & Tailwind</p>
            </div>
        </section>
    )
}

export default Footer