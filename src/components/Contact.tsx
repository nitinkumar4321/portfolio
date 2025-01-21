import { motion } from 'framer-motion'
import { FaGlobe, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import LottieAnimation from './ui/lottie-animation'
import contactAnimation from '../assets/animations/contact.json'
import { useState, useRef } from 'react'
import { toast } from 'sonner'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('https://formsubmit.co/nitinkumar4321@gmail.com', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        toast.success('Message sent successfully!')
        formRef.current?.reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Send error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-white/10 relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium inline-flex items-center gap-2">
            <FaEnvelope className="w-4 h-4" />
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold mt-4">Contact Me</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl" />
              <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl border border-white/5 p-8">
                <div className="flex justify-center mb-8">
                  <LottieAnimation 
                    animationData={contactAnimation}
                    className="w-64 h-64"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="bg-blue-500/10 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <FaEnvelope className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a 
                        href="mailto:nitinkumar4321@gmail.com"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        nitinkumar4321@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="bg-blue-500/10 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <FaGlobe className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Website</p>
                      <a 
                        href="https://info.kumarnit.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        info.kumarnit.in
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl" />
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative bg-black/20 backdrop-blur-sm rounded-2xl border border-white/5 p-8 space-y-6"
              >
                {/* FormSubmit configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <input type="hidden" name="_next" value="https://info.kumarnit.in" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-3 bg-black/20 rounded-lg border border-white/5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    required
                    disabled={isLoading}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/20 rounded-lg border border-white/5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    required
                    disabled={isLoading}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-black/20 rounded-lg border border-white/5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
                    required
                    disabled={isLoading}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact