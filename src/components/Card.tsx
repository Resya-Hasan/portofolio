import dashboardFacenuxImg from "../assets/images/projects/facenux/dashboard.png"


const Card = () => {
    return (
        <div className="w-full h-auto bg-card rounded-2xl shadow-xl">
            <img src={dashboardFacenuxImg} alt="Project" className="w-full h-1/2 object-cover rounded-t-lg" />
            <div className="p-4 flex flex-col gap-2 justify-between">
                <h2 className="text-xl font-bold">Face Recognition API Platform</h2>
                <p className="text-gray-500 line-clamp-3">A web platform for developers and businesses to manage and integrate face recognition APIs. I was responsible for developing the frontend and backend of the API portal, building the user interface, API management functionality, and backend services for handling application data and requests.

                    The portal connects to a separate face recognition API developed by another team, supporting capabilities such as age and gender prediction, emotion recognition, facial landmarks, and liveness verification.</p>
                <div className="flex flex-wrap justify-between">
                    <span>React.js, Express.js, PostgreSQL</span>
                    <span>Fullstack</span>
                </div>
            </div>
        </div>
    )
}

export default Card