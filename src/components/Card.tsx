import { useState } from "react";

type CardProps = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    role: string;
    features: string[];
    iBuilt: string[];
    projectType: string;
    liveDemoUrl: string;
    githubUrl: string;
}

const Card = ({ title, description, image, technologies, role, features, iBuilt, projectType, liveDemoUrl, githubUrl }: CardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Card */}
            <div
                onClick={() => setIsOpen(true)}
                className="w-full h-auto bg-card rounded-2xl shadow-xl cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
                <img
                    src={image}
                    alt="Project"
                    className="w-full h-44 object-cover object-top rounded-t-2xl"
                />

                <div className="p-4 flex flex-col gap-4">

                    <h2 className="text-xl font-bold">
                        {title}
                    </h2>

                    <p className="text-gray-500 line-clamp-3">
                        {description}
                    </p>

                    <div>
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <span className="self-start bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        {role}
                    </span>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-2xl font-bold">
                                {title}
                            </h2>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-2xl"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 flex flex-col gap-6">

                            <img
                                src={image}
                                alt={` ${title} Screenshot`}
                                className="w-full rounded-xl"
                            />

                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    About the Project
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    My Role
                                </h3>

                                <p className="text-gray-600">
                                    {role}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    Key Features
                                </h3>

                                <div className="flex flex-col ml-5">
                                    {features.map((feature, index) => (
                                        <li key={index} className="text-gray-600 mb-1">
                                            {feature}
                                        </li>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    What I Built
                                </h3>

                                <div className="flex flex-col ml-5">
                                    {iBuilt.map((item, index) => (
                                        <li key={index} className="text-gray-600 mb-1">
                                            {item}
                                        </li>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    Technologies
                                </h3>

                                <div className="flex flex-wrap gap-2 text-gray-600">
                                    {technologies.map((tech, index) => (
                                        <span key={index} className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    Project Type
                                </h3>

                                <p className="text-gray-600">
                                    {projectType}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <a
                                    href={liveDemoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-black text-white rounded-lg"
                                >
                                    Live Demo
                                </a>

                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-200 rounded-lg"
                                >
                                    GitHub
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;