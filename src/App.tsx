import { FC } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
// import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Availability from './components/Availability'

const App: FC = () => {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Availability />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App 