import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa'

const highlights = [
  {
    icon: <FaCode className="w-6 h-6 text-blue-400" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code"
  },
  {
    icon: <FaLaptopCode className="w-6 h-6 text-blue-400" />,
    title: "Modern Tech Stack",
    description: "Using latest technologies and best practices"
  },
  {
    icon: <FaServer className="w-6 h-6 text-blue-400" />,
    title: "Scalable Solutions",
    description: "Building robust and scalable applications"
  },
  {
    icon: <FaMobileAlt className="w-6 h-6 text-blue-400" />,
    title: "Responsive Design",
    description: "Creating seamless experiences across devices"
  }
]

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -bottom-24 -left-48 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
            Get to Know Me
          </span>
          <h2 className="text-4xl font-bold mt-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-invert">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-300/90 leading-relaxed"
              >
                I'm a passionate full stack developer with experience in building scalable, 
                secure and reliable web applications including frontend and backend. 
                I enjoy solving complex problems and learning new skills.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-300/90 leading-relaxed"
              >
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or enjoying outdoor activities.
              </motion.p>
            </div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-blue-500/20 transition-colors"
                >
                  <div className="bg-blue-500/10 rounded-lg w-10 h-10 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-1 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl" />
                <img 
                  src="/profile.png" 
                  alt="Profile" 
                  className="relative rounded-3xl w-full h-full object-cover object-center border border-white/10"
                />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 bg-blue-500/10 backdrop-blur-sm rounded-lg p-2 border border-white/10"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-6 -left-6 bg-purple-500/10 backdrop-blur-sm rounded-lg p-2 border border-white/10"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About