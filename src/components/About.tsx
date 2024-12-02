import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-lg">
              <p className="text-gray-300/90">
                I'm a passionate full stack developer with experience in building scalable, 
                secure and reliable web applications including frontend and backend. 
                I enjoy solving complex problems and learning new skills.
              </p>
              <p className="text-gray-300/90">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or enjoying outdoor activities.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl" />
                <img 
                  src="/profile.png" 
                  alt="Profile" 
                  className="relative rounded-full w-56 h-56 object-cover object-center-top border-2 border-blue-500/20"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About