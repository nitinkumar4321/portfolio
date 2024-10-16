import { useEffect, useState } from "react"
import { Home, User, Code, Briefcase, Mail, ExternalLink, Menu, MapPin, Calendar, Pen, GraduationCap } from 'lucide-react'
import javaLogo from './assets/java.svg'
import pythonLogo from './assets/python.svg'
import reactLogo from './assets/react.svg'
import nodejsLogo from './assets/nodejs.svg'
import expressLogo from './assets/express.svg'
import postgresLogo from './assets/postgresql.svg'
import gitLogo from './assets/git.svg'
import awsLogo from './assets/aws.svg'
import mongodbLogo from './assets/mongodb.svg'
import typeScriptLogo from './assets/typescript.svg'
import tailwindLogo from './assets/tailwind.svg'
import logo from '/Logo.jpeg'

function App() {

  const skills = [
    {
      name: 'Java',
      logo: javaLogo
    },
    {
      name: 'Python',
      logo: pythonLogo
    },
    {
      name: 'React',
      logo: reactLogo
    },
    {
      name: 'Node.js',
      logo: nodejsLogo
    },
    {
      name: 'Express',
      logo: expressLogo
    },
    {
      name: 'TypeScript',
      logo: typeScriptLogo
    },
    {
      name: 'Tailwind',
      logo: tailwindLogo
    },
    {
      name: 'MongoDB',
      logo: mongodbLogo
    },
    {
      name: 'AWS',
      logo: awsLogo
    },
    {
      name: 'PostgreSQL',
      logo: postgresLogo
    },
    {
      name: 'Git',
      logo: gitLogo
    }
  ]
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => () => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="bg-[#36393F] text-[#DCDDDE] min-h-screen flex">
      {/* Sidebar / Navbar */}
      <aside className={`bg-[#2F3136] w-64 fixed h-full overflow-y-auto transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-50`}>
        <nav className="p-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">Nitin Kumar</h1>
            <p className="text-[#B9BBBE]">Full Stack Developer</p>
          </div>
          <ul className="space-y-2">
            {[
              { id: 'home', text: 'Home', icon: <Home className="w-6 h-6" /> },
              { id: 'about', text: 'About', icon: <User className="w-6 h-6" /> },
              { id: 'skills', text: 'Skills', icon: <Code className="w-6 h-6" /> },
              { id: 'projects', text: 'Projects', icon: <Briefcase className="w-6 h-6" /> },
              { id: 'education', text: 'Education', icon: <GraduationCap className="w-6 h-6" /> },
              { id: 'contact', text: 'Contact', icon: <Mail className="w-6 h-6" /> },
            ].map((item) => (
              <li key={item.id}>
                <NavItem
                  icon={item.icon}
                  text={item.text}
                  active={activeSection === item.id}
                  onClick={scrollToSection(item.id)}
                />
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 lg:ml-64">
        {/* Mobile menu button */}
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#4F545C] rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        <section id="home" className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
          {/* Background image with fade effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src={logo}
              alt="At work"
              className="image opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#36393F] via-transparent to-[#36393F]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#36393F] via-transparent to-[#36393F]"></div>
          </div>

          {/* Content */}
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white animate-fade-in">Welcome to My Portfolio</h1>
            <p className="text-xl text-[#d9dadb] mb-8 animate-fade-in animation-delay-300">Explore my projects and skills</p>
            <button
              onClick={scrollToSection('about')}
              className="bg-[#7289DA] hover:bg-[#677BC4] text-white font-bold py-2 px-4 rounded transition-colors animate-fade-in animation-delay-600"
            >
              Learn More
            </button>
          </div>
        </section>

        <section id="about" className="py-20 px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>About Me</SectionTitle>
            <p className="text-[#B9BBBE] mb-6 text-lg">
              I'm a passionate full stack developer with experience in building scalable, secure and reliable web applications including frontend and backend.
              I enjoy solving complex problems and learning new skills.
            </p>
            <p className="text-[#B9BBBE]">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
              or enjoying outdoor activities.
            </p>
          </div>
        </section>

        <section id="skills" className="py-20 px-8 bg-[#2F3136]">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Skills</SectionTitle>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <SkillTag key={index} logo={skill.logo}>{skill.name}</SkillTag>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Projects</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="More coming here"
                tags={['', '', '', '', '', '']}
                link=""
              />
              <ProjectCard
                title="More coming here"
                tags={['', '', '', '', '', '']}
                link=""
              />
              <ProjectCard
                title="More coming here"
                tags={['', '', '', '', '', '']}
                link=""
              />
              <ProjectCard
                title="More coming here"
                tags={['', '', '', '', '', '']}
                link=""
              />
              {/* <ProjectCard
                title="E-commerce Platform"
                description="A full-featured e-commerce platform with user authentication, product management, and payment integration."
                tags={['React', 'Node.js', 'MongoDB', 'Stripe']}
                link="#"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management application with real-time updates and team features."
                tags={['React', 'Firebase', 'Material-UI']}
                link="#"
              />
              <ProjectCard
                title="Weather Forecast App"
                description="A weather forecast application that provides accurate predictions using third-party APIs."
                tags={['React Native', 'Redux', 'OpenWeatherMap API']}
                link="#"
              />
              <ProjectCard
                title="Personal Finance Tracker"
                description="A web application to help users track their income, expenses, and savings goals."
                tags={['Vue.js', 'Express', 'PostgreSQL', 'Chart.js']}
                link="#"
              /> */}
            </div>
          </div>
        </section>

        <section id="education" className="py-20 px-8 bg-[#2F3136]">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Education</SectionTitle>
            <div className="flex flex-wrap">
              <ul>
                <li className="mb-4 ">
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center"><MapPin className="w-6 h-6 mr-2" /> Bharti Vidyapeeths College of Engineering</h3>
                  <p className="text-[#B9BBBE] mb-2 flex items-center"><GraduationCap className="w-6 h-6 mr-2" /> Bachelor of Technology</p>
                  <p className="text-[#B9BBBE] mb-2 flex items-center"><Pen className="w-6 h-6 mr-2" /> Electronics and communication engineering </p>
                  <p className="text-[#B9BBBE] flex items-center"><Calendar className="w-6 h-6 mr-2" /> 2006 - 2010</p>
                  </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Contact</SectionTitle>
            <p className="text-[#B9BBBE] mb-6">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex space-x-4">
              <a href="mailto:nitinkumar4321@gmail.com" className="text-[#B9BBBE] hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/nitinkumar4321" target="_blank" rel="noopener noreferrer" className="text-[#B9BBBE] hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/nitinkumar4321" target="_blank" rel="noopener noreferrer" className="text-[#B9BBBE] hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const Image = ({ src, alt, className } : { src: string, alt: string, className: string }) => (
  <div className="image-container">
    <img
      src={src}
      alt={alt}
      className={className}
    />
  </div>
)

type NavItemProps = {
  icon: React.ReactNode,
  text: string,
  active: boolean,
  onClick: (e: any) => void
}

const NavItem = ({ icon, text, active, onClick } : NavItemProps) => (
  <a
    onClick={onClick}
    className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
      active ? 'bg-[#393C43] text-white' : 'text-[#8E9297] hover:bg-[#34373C] hover:text-[#DCDDDE]'
    }`}
  >
    {icon}
    <span className="ml-4 text-lg">{text}</span>
  </a>
)

const SectionTitle = ({ children } : { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold mb-6 text-white">{children}</h2>
)

const SkillTag = ({ logo, children } : {logo?: string, children: React.ReactNode }) => (
  <span className="bg-[#4F545C] text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
    <div className="flex items-center">
      {(logo) ? <img src={logo} width={20} height={20} className="mr-2"/> : null}
      {children}
    </div>
  </span>
)

type ProjectCardProps = {
  title?: string
  description?: string
  tags: string[]
  link?: string
}

const ProjectCard = ({ title, description, tags, link } : ProjectCardProps) => (
  <div className="bg-[#2F3136] p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-[#B9BBBE] mb-4">{description}</p>
    <div className="flex flex-wrap mb-4">
      {tags.map((tag, index) => (
        <SkillTag key={index}>{tag}</SkillTag>
      ))}
    </div>
    {(link) ? <a href={link} className="text-[#00B0F4] hover:underline inline-flex items-center">
      View Project <ExternalLink className="ml-2 w-4 h-4" />
    </a> : null}
  </div>
)

export default App
