import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Service from './sections/Service'
import Experience from './sections/Experience'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Projects />
      <Experience />
    </div>
  )
}

export default App
