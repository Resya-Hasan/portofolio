import ServiceCard from "../components/ServiceCard"
import { services } from "../data/service"

const Service = () => {
    return (
        <section className="pt-4 sm:pt-20 xl:pt-10 px-5 lg:px-12 xl:px-32 2xl:px-96">
            <h1 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold">/My Service</h1>

            {/* service card*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((item, index) => (
                    <ServiceCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Service