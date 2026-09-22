import profileImage from "../assets/images/profile.png"
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6"
import { RiFileDownloadLine } from "react-icons/ri";

const Hero = () => {
    return (
        <section className="min-h-screen pt-16 xl:pt-10 px-5 lg:px-12 xl:px-32 2xl:px-96 flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
                {/* left content */}
                <div className="w-full lg:max-w-[clamp(10rem,55vw,40rem)] h-auto lg:h-[clamp(10rem,30vw,40rem)] flex flex-col justify-between">
                    {/* info */}
                    <div>
                        {/* greeting */}
                        <p className="text-2xl font-bold mb-4">Welcome to My Portfolio</p>

                        {/* name & profession */}
                        <h1 className="text-[clamp(2rem,3.2vw,8rem)] font-[1000] mb-1 xl:mb-4"><span>Hi, I'm </span>Resya Hasan M</h1>
                        <p className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-extrabold mb-4"><span>A Profesional </span><span>Frontend Developer</span></p>

                        {/* image - mobile/tablet */}
                        <div className="lg:hidden w-full h-[clamp(10rem,70vw,40rem)] overflow-hidden rounded-md bg-gray-100 mx-auto my-8">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* description */}
                        <p className="text-[clamp(1rem,1.2vw,1.5rem)] items-end leading-[1.8]">I’m a Frontend Developer passionate about creating modern, responsive, and engaging web
                            experiences. I turn ideas and designs into clean, intuitive interfaces using modern web
                            technologies, with a focus on usability, performance, and maintainable code.
                        </p>
                    </div>
                </div>

                {/* right content */}
                {/* profile image */}
                <div className="hidden lg:block w-[clamp(10rem,30vw,40rem)] h-[clamp(10rem,30vw,40rem)] overflow-hidden rounded-md bg-gray-100">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
            {/* action */}
            <div className="flex justify-between lg:mt-4 items-end">
                {/* social media links */}
                <div className="flex flex-col gap-6">
                    <span className="text-[clamp(1rem,2vw,1.25rem)] font-semibold">Find me on</span>
                    <div className="flex gap-6">
                        <a href="#" target="_blank" className="bg-gray-200 w-[clamp(1rem,6vw,4rem)] h-[clamp(1rem,6vw,4rem)] flex items-center justify-center"><FaLinkedinIn className="text-[clamp(1rem,2.8vw,1.875rem)]" /></a>
                        <a href="#" target="_blank" className="bg-gray-200 w-[clamp(1rem,6vw,4rem)] h-[clamp(1rem,6vw,4rem)] flex items-center justify-center"><FaGithub className="text-[clamp(1rem,2.8vw,1.875rem)]" /></a>
                        <a href="#" target="_blank" className="bg-gray-200 w-[clamp(1rem,6vw,4rem)] h-[clamp(1rem,6vw,4rem)] flex items-center justify-center"><FaXTwitter className="text-[clamp(1rem,2.8vw,1.875rem)]" /></a>
                    </div>
                </div>

                {/* resume download */}
                <div className="flex flex-col gap-6">
                    <span className="text-[clamp(1rem,2vw,1.25rem)] font-semibold">Download my CV</span>
                    <a
                        href="#"
                        target="_blank"
                        className="h-[clamp(1rem,6vw,4rem)] px-[clamp(1rem,6vw,1.5rem)] flex items-center justify-center bg-gray-200 text-[clamp(1rem,2vw,1.4rem)] font-[500]">
                        Download CV <span className="ml-2"><RiFileDownloadLine className="text-[clamp(1rem,2vw,1.875rem)]" /></span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero