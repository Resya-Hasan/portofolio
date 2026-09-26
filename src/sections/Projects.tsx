import Card from "../components/Card"

const Projects = () => {
    return (
        <section className="min-h-[100svh] px-5 pt-12 xl:px-32 2xl:px-96">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-6">/Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default Projects