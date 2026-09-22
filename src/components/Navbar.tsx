import { useState, useEffect } from "react";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false);
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
        <nav className={`bg-none px-10 xl:px-32 2xl:px-96 py-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>

            <div className="flex items-center justify-between">
                <div className="display flex items-center font-bold gap-2 md:gap-3 shadow-xl rounded-full px-2 md:px-3 py-1 md:py-2 border-2 border-border text-[14px] md:text-base/6">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500"></div>
                    <span>Available for hire</span>
                </div>
                <div className="space-x-4 md:space-x-20 text-sm md:text-base">
                    <a href="#home" className="">Work</a>
                    <a href="#about" className="">Service</a>
                    <a href="#projects" className="">Experience</a>
                    <a href="#contact" className="">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar