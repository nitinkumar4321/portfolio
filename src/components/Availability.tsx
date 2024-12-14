"use client";
import { WorldMap } from "./ui/world-map";
import { motion } from "framer-motion";
import { FaClock, FaGlobeAmericas, FaCalendarCheck } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const timeZones = [
  { city: "Los Angeles", time: "PST", offset: "-8:00" },
  { city: "New York", time: "EST", offset: "-5:00" },
  { city: "London", time: "GMT", offset: "+0:00" },
  { city: "Dubai", time: "GST", offset: "+4:00" },
  { city: "Singapore", time: "SGT", offset: "+8:00" },
];

const features = [
  {
    icon: <FaClock className="w-6 h-6 text-blue-400" />,
    title: "Flexible Hours",
    description: "Available during your business hours, regardless of time zones"
  },
  {
    icon: <FaGlobeAmericas className="w-6 h-6 text-blue-400" />,
    title: "Global Reach",
    description: "Working with clients worldwide, adapting to different cultures"
  },
  {
    icon: <BsLightningChargeFill className="w-6 h-6 text-blue-400" />,
    title: "Quick Response",
    description: "Fast communication and regular progress updates"
  },
  {
    icon: <FaCalendarCheck className="w-6 h-6 text-blue-400" />,
    title: "Scheduled Meetings",
    description: "Regular sync-ups at times that work for you"
  }
];

export default function Availability() {
  return (
    <section id="availability" className="py-20 border-t border-white/5 relative overflow-hidden">
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
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Available Worldwide
          </span>
          <h2 className="text-4xl font-bold mb-4">Global Availability</h2>
          <p className="text-gray-400 max-w-2xl">
            Working across time zones to deliver exceptional results. Your project deserves attention 
            when you need it, regardless of your location.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-blue-500/20 transition-colors"
            >
              <div className="bg-blue-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Time Zones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16 overflow-x-auto"
        >
          <div className="flex justify-center space-x-4 min-w-max px-4">
            {timeZones.map((zone, index) => (
              <motion.div
                key={zone.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/5"
              >
                <div className="text-sm text-gray-400">{zone.city}</div>
                <div className="text-xl font-semibold">{zone.time}</div>
                <div className="text-sm text-blue-400">{zone.offset}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent -z-10 rounded-lg blur-xl" />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-white/5"
          >
            <WorldMap
              dots={[
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: 34.0522, lng: -118.2437 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: -29.7975, lng: -67.8919 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: 38.7223, lng: 7.1393 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: 43.1332, lng: 131.9113 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: 1.2921, lng: 48.8219 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: 1.3521, lng: 103.8198 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: 25.2048, lng: 55.2708 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: 43.8566, lng: 21.3522 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: 22.3193, lng: 114.1694 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: -38.8688, lng: 131.2093 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: -24.2866, lng: 144.7756 },
                },
                {
                  start: { lat: 10.6139, lng: 77.209 },
                  end: { lat: 43.6532, lng: -79.3832 },
                },
              ]}
              lineColor="#3b82f6"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
