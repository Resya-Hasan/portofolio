import { useState } from "react";
import dashboardFacenuxImg from "../assets/images/projects/facenux/dashboard.png";

const Card = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Card */}
            <div
                onClick={() => setIsOpen(true)}
                className="w-full h-auto bg-card rounded-2xl shadow-xl cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            >
                <img
                    src={dashboardFacenuxImg}
                    alt="Project"
                    className="w-full h-44 object-cover object-top rounded-t-2xl"
                />

                <div className="p-4 flex flex-col gap-4">

                    <h2 className="text-xl font-bold">
                        Facenux
                    </h2>

                    <p className="text-gray-500 line-clamp-3">
                        A web platform for developers and businesses to manage
                        and integrate face recognition APIs. I was responsible
                        for developing the frontend and backend of the API
                        portal, building the user interface, API management
                        functionality, and backend services for handling
                        application data and requests.

                        The portal connects to a separate face recognition API
                        developed by another team, supporting capabilities such
                        as age and gender prediction, emotion recognition,
                        facial landmarks, and liveness verification.
                    </p>

                    <div className="flex flex-wrap justify-between items-center">

                        <div>
                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                React.js
                            </span>

                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                Express.js
                            </span>

                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                PostgreSQL
                            </span>
                        </div>

                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                            Fullstack
                        </span>

                    </div>
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
                                Facenux
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
                                src={dashboardFacenuxImg}
                                alt="Facenux Dashboard"
                                className="w-full rounded-xl"
                            />

                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    About the Project
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    A web platform for developers and businesses
                                    to manage and integrate face recognition
                                    APIs.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    My Role
                                </h3>

                                <p className="text-gray-600">
                                    Fullstack Developer
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    Technologies
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    <span>React.js</span>
                                    <span>Express.js</span>
                                    <span>PostgreSQL</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-black text-white rounded-lg"
                                >
                                    Live Demo
                                </a>

                                <a
                                    href="#"
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