import { useState, useEffect } from "react";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false);
                setIsOpen(false);
            } else if (currentScrollY < lastScrollY) {
                setShowNavbar(true);
            }

            lastScrollY = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, []);

    return (
        <nav className={`bg-white/70 backdrop-blur-md border-b border-black/10 py-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="flex items-center justify-between mx-5 xl:mx-32 2xl:mx-96">
                <div className="bg-white/30 display flex items-center font-bold gap-2 md:gap-3 shadow-lg rounded-full px-2 md:px-3 py-1 md:py-2 border-2 border-border text-[14px] md:text-base/6">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500"></div>
                    <span>Available for hire</span>
                </div>
                <div className="hidden lg:flex gap-14 text-base">
                    <a href="#services" className="hover:text-acc">Services</a>
                    <a href="#projects" className="hover:text-acc">Projects</a>
                    <a href="#experience" className="hover:text-acc">Experience</a>
                    <a href="#skills" className="hover:text-acc">Skills</a>
                    <a href="#aboutMe" className="hover:text-acc">About Me</a>
                    <a href="#contact" className="hover:text-acc">Contact</a>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}></span>
                    <span className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
                </button>
            </div>
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col gap-4 mx-5 text-base">
                    <a href="#about" onClick={() => setIsOpen(false)}>Service</a>
                    <a href="#home" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Experience</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>About Me</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar