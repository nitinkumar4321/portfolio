import { motion } from 'framer-motion'
import { Timeline } from './ui/timeline'
import { timelineData } from '../data'

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
          <h2 className="text-3xl font-bold">Experience</h2>
          <p className="text-gray-400 mt-2">My professional journey</p>
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
