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
import { ParallaxBackground } from './components/ParallaxBackground'
import { Toaster } from 'sonner'

const App: FC = () => {
  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="relative w-full overflow-x-hidden">
        <ParallaxBackground />
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
    </>
  )
}

export default App 