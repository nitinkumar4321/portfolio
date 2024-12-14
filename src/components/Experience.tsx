import { motion } from 'framer-motion'
import { Timeline } from './ui/timeline'
import { timelineData } from '../data'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium inline-flex items-center gap-2">
            <FaBriefcase className="w-4 h-4" />
            Professional Journey
          </span>
          <h2 className="text-4xl font-bold mt-4">Work Experience</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A track record of delivering impactful solutions and driving innovation across various roles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full font-sans md:px-10"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <Timeline data={timelineData} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
