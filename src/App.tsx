import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Service from './sections/Service'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Projects />
      <Experience />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
