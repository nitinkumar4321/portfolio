import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { TextGenerateEffect } from './ui/text-generate-effect'
import boyComputerAnimation from '../assets/animations/boy-computer.json'
import LottieAnimation from './ui/lottie-animation'
import { FC } from 'react'

// Enhanced Hero section with scroll animations
const Hero: FC = () => {
  return (
    <div id="hero" className="h-screen flex items-center justify-center relative pt-32">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm <span className="text-blue-500">Nitin Kumar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            <TextGenerateEffect filter={false} words="A Full-Stack Developer who builds scalable, user-friendly applications from front to back. Let's bring ideas to life!" />
          </motion.p>
          <motion.div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
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
          </motion.div>
        </motion.div>
        
        {/* Enhanced 3D model container with new effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] w-full"
        >
          {/* Geometric gradient effects */}
          <div className="absolute inset-0 -z-10">
            {/* Top right gradient */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rotate-12 transform-gpu blur-3xl" />
            
            {/* Bottom left gradient */}
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/20 -rotate-12 transform-gpu blur-3xl" />
            
            {/* Center accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rotate-45 transform-gpu blur-2xl" />
          </div>
          
          {/* Animated lines */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-[spin_8s_linear_infinite]">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                  style={{
                    transform: `rotate(${i * 30}deg) translateY(-50%)`,
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* 3D Model */}
          <div className="relative z-10 h-full flex justify-center items-center -translate-y-20">
            <LottieAnimation 
              animationData={boyComputerAnimation}
              className="w-80 h-64 mt-2"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero