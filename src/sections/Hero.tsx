import profileImage from "../assets/images/profile.png"
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6"
import { RiFileDownloadLine } from "react-icons/ri";
import { motion, } from "motion/react"
import { staggerContainer, fadeUp, slideInRight, fadeRight, fadeLeft } from "../animations"

const Hero = () => {
    return (
        <section className="min-h-[100svh] pt-4 sm:pt-20 xl:pt-10 px-5 lg:px-12 xl:px-32 2xl:px-96 flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-10 lg:gap-10">
                {/* left content */}
                <div className="w-full lg:max-w-[clamp(10rem,55vw,40rem)] h-auto lg:h-[30rem] xl:h-[clamp(30rem,32vw,38rem)] flex flex-col justify-between">
                    {/* info */}
                    <motion.div variants={staggerContainer} initial={"hidden"} animate={"show"}>
                        {/* greeting */}
                        <motion.p variants={fadeUp} className="text-2xl font-bold mb-4">
                            Welcome to My Portfolio
                        </motion.p>

                        {/* name & profession */}
                        <motion.h1 variants={fadeUp} className="text-[clamp(2rem,3.2vw,8rem)] font-[1000] mb-1 xl:mb-4"><span>Hi, I'm </span>Resya Hasan M</motion.h1>
                        <motion.p variants={fadeUp} className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-extrabold mb-4"><span>A Profesional </span><span>Frontend Developer</span></motion.p>

                        {/* image - mobile/tablet */}
                        <motion.div variants={fadeUp} className="lg:hidden w-full h-[clamp(10rem,70vw,40rem)] overflow-hidden rounded-md bg-gray-100 mx-auto my-8">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* description */}
                        <motion.p variants={fadeUp} className="text-[clamp(1rem,1.2vw,1.5rem)] items-end leading-[1.8]">I’m a Frontend Developer passionate about creating modern, responsive, and engaging web
                            experiences. I turn ideas and designs into clean, intuitive interfaces using modern web
                            technologies, with a focus on usability, performance, and maintainable code.
                        </motion.p>
                    </motion.div>
                </div>

                {/* right content */}
                {/* profile image */}
                <motion.div
                    className="hidden lg:block lg:w-[48rem] lg:h-[30rem] xl:w-[clamp(30rem,30vw,38rem)] xl:h-[clamp(30rem,30vw,38rem)] overflow-hidden rounded-md bg-gray-100"
                    variants={slideInRight}
                    initial={"hidden"}
                    animate={"show"}
                >
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

            </div>
            {/* action */}
            <div className="flex justify-between lg:mt-4 items-end">
                {/* social media links */}
                <div className="flex flex-col gap-6">
                    <motion.span
                        className="text-[clamp(1rem,2vw,1.25rem)] font-semibold"
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                    >
                        Find me on
                    </motion.span>
                    <motion.div
                        className="flex gap-3.5 md:gap-6"
                        variants={staggerContainer}
                        initial={"hidden"}
                        animate={"show"}
                    >
                        <motion.a
                            href="https://www.linkedin.com/in/resya-hasan-5080b8368/?isSelfProfile=true"
                            target="_blank"
                            className="bg-gray-200 w-[2.2rem] md:w-[3.5rem] h-[2.2rem] md:h-[3.5rem] flex items-center justify-center"
                            variants={fadeRight}
                        >
                            <FaLinkedinIn className="text-xl md:text-2xl" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/Resya-Hasan"
                            target="_blank"
                            className="bg-gray-200 w-[2.2rem] md:w-[3.5rem] h-[2.2rem] md:h-[3.5rem] flex items-center justify-center"
                            variants={fadeRight}
                        >
                            <FaGithub className="text-xl md:text-2xl" />
                        </motion.a>
                        <motion.a
                            href="https://x.com/Resyhsn"
                            target="_blank"
                            className="bg-gray-200 w-[2.2rem] md:w-[3.5rem] h-[2.2rem] md:h-[3.5rem] flex items-center justify-center"
                            variants={fadeRight}
                        >
                            <FaXTwitter className="text-xl md:text-2xl" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* resume download */}
                <div className="flex flex-col gap-6">
                    <motion.span
                        className="text-[clamp(1rem,2vw,1.25rem)] font-semibold"
                        variants={fadeUp}
                        initial={"hidden"}
                        animate={"show"}
                    >
                        Download my CV
                    </motion.span>
                    <motion.a
                        href="#"
                        target="_blank"
                        className="h-[2.2rem] md:h-[3.5rem] px-[clamp(1rem,6vw,1.5rem)] flex items-center justify-center bg-gray-200 text-[clamp(1rem,2vw,1.4rem)] font-[500]"
                        variants={fadeLeft}
                        initial={"hidden"}
                        animate={"show"}
                    >
                        Download CV
                        <span className="ml-2"><RiFileDownloadLine className="text-[clamp(1rem,2vw,1.875rem)]" /></span>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

export default Hero