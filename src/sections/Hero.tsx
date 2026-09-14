import profileImage from "../assets/images/profile.png"

const Hero = () => {
    return (
        <section className="min-h-screen pt-40 px-16 flex flex-col overflow-hidden">
            {/* Name */}
            <div className="flex justify-center">
                <h1 className="text-4xl md:text-[11rem] font-extrabold">RESYA HASAN M</h1>
            </div>

            {/* Information */}
            <div className="container mx-auto flex gap-4 mt-auto">
                {/* Description */}
                <div className="max-w-sm flex flex-col gap-4 mb-20">
                    <h1 className="text-2xl font-bold">Frontend Developer</h1>
                    <p>I build digital experiences that combine thoughtful design,<br/>
                    clean interfaces, and reliable functionality to create fast, responsive, and enjoyable web experiences<br/>
                    that users can easily navigate.</p>
                    <button className="bg-primary text-light rounded-full px-6 py-2 w-2/5">Hire Me</button>
                </div>

                {/* Profile Image */}
                <div className="w-[750px] overflow-hidden">
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                </div>

                {/* Social Media */}
                <div className="flex flex-col gap-4 mb-20">
                    <h1 className="text-2xl font-bold">Social Media</h1>
                    <div className="flex flex-col gap-2">
                        <a href="https://www.linkedin.com/in/resya-hasan-m-1b0b4b1b9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/resya-hasan-m" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero