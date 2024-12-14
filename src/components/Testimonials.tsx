import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { FaQuoteLeft } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { testimonials } from '../data'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 border-t border-white/10 relative overflow-hidden">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium inline-flex items-center gap-2 justify-center">
            <FaQuoteLeft className="w-4 h-4" />
            Feedback
          </span>
          <h2 className="text-4xl font-bold mt-4">What People Say</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Hear from clients and colleagues about their experiences working with me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative px-4"
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-500'
            }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-colors"
                >
                  <div className="relative">
                    <div className="absolute -top-2 -left-2">
                      <FaQuoteLeft className="w-8 h-8 text-blue-500/20" />
                    </div>
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover relative border border-white/10"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-blue-400 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 relative z-10 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials