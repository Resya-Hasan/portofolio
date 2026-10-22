import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <section className="relative bg-ink py-6 px-5 xl:px-32 2xl:px-96 text-chip text-sm lg:text-lg">
            <div className="flex justify-between">
                <div>
                    <h5 className="font-bold">Resya Hasan Mubarok</h5>
                    <span>Frontend Developer</span>
                </div>
                <div className="flex text-[1.2rem] lg:text-[1.4rem] gap-3">
                    <a href="https://github.com/Resya-Hasan" target="_blank" className="transition-colors duration-300 ease-in-out hover:text-acc"><FiGithub /></a>
                    <a href="https://www.linkedin.com/in/resya-hasan-5080b8368/?isSelfProfile=true" target="_blank" className="transition-colors duration-300 ease-in-out hover:text-acc"><FiLinkedin /></a>
                    <a href="https://x.com/Resyhsn" target="_blank" className="transition-colors duration-300 ease-in-out hover:text-acc"><BsTwitterX /></a>
                </div>
            </div>
            <hr className="my-4 border-gray-200/30" />
            <div className="flex justify-between text-[0.7rem] md:text-[0.9rem] text-acc">
                <p>© 2026 Resya Hasan M</p>
                <p>Built with React & Tailwind</p>
            </div>
        </section>
    )
}

export default Footer