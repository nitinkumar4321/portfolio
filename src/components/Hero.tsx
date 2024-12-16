import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { TextGenerateEffect } from './ui/text-generate-effect'
import boyComputerAnimation from '../assets/animations/boy-computer.json'
import LottieAnimation from './ui/lottie-animation'
import { FC } from 'react'
import { FaGithub, FaLinkedin,  } from 'react-icons/fa'
// import { FaTwitter } from 'react-icons/fa'

const Hero: FC = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: 'https://github.com/nitinkumar4321',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/nitinkumar4321',
      label: 'LinkedIn'
    },
    // {
    //   icon: <FaTwitter className="w-6 h-6" />,
    //   href: 'https://twitter.com/yourusername',
    //   label: 'Twitter'
    // }
  ]

  return (
    <div id="hero" className="min-h-screen flex items-center justify-center relative pt-20 pb-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                  Welcome to my portfolio
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold tracking-tight"
              >
                Hi, I'm <span className="text-blue-500">Nitin Kumar</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-400"
            >
              <TextGenerateEffect filter={false} words="A Full-Stack Developer who builds scalable, user-friendly applications from front to back. Let's bring ideas to life!" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center px-8 py-3"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 blur-md transition-all duration-500 group-hover:blur-xl"></span>
                  <span className="relative flex items-center justify-center gap-2 text-white">
                    Get in Touch
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </motion.button>
              </Link>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <LottieAnimation 
                animationData={boyComputerAnimation}
                className="w-full h-[400px]"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
              <span className="text-4xl">⚛️</span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 left-10 w-16 h-16 bg-purple-500/10 rounded-lg backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero