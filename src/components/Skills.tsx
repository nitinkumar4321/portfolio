import { motion } from 'framer-motion'
import { skills } from '../data'
import { FaCertificate } from 'react-icons/fa'
import { certifications } from '../data'

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 from-blue-500/5 via-transparent to-transparent" />
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

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium inline-flex items-center gap-2">
            <FaCertificate className="w-4 h-4" />
            Certifications
          </span>
          <h2 className="text-4xl font-bold mt-4">Professional Certifications</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cloud and commerce technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
          <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group flex flex-col lg:flex-row items-center gap-6 p-6 rounded-xl
                    bg-gradient-to-b from-white/5 to-transparent hover:from-blue-500/10 hover:to-purple-500/10
                    border border-white/5 hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <img 
                      src={cert.badge}
                      alt={`${cert.title} Badge`}
                      className="relative w-32 h-32 object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                    <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="mt-4 flex flex-col gap-2">
                      <p className="text-sm text-gray-400">
                        <span className="font-medium">Issued by:</span> {cert.issuer}
                      </p>
                      <p className="text-sm text-gray-400">
                        <span className="font-medium">Issue Date:</span> {cert.date}
                      </p>
                      <p className="text-sm text-gray-400 break-words">
                        <span className="font-medium">ID:</span> {cert.validationId}
                      </p>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-sm text-blue-400 hover:text-blue-300 inline-flex items-center justify-center lg:justify-start gap-1"
                      >
                        Verify Certificate <span>→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
            Tech Stack
          </span>
          <h2 className="text-4xl font-bold mt-4">Skills & Expertise</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Proficient in a wide range of modern technologies and frameworks, 
            constantly learning and adapting to industry best practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Backdrop blur container */}
          <div className="absolute inset-0 from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
          <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group flex flex-col items-center justify-center p-4 rounded-xl
                    bg-gradient-to-b from-white/5 to-transparent hover:from-blue-500/10 hover:to-purple-500/10
                    border border-white/5 hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <skill.icon className="relative w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <span className="mt-4 text-sm text-gray-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills