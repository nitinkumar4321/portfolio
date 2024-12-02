"use client";
import { WorldMap } from "./ui/world-map";
import { motion } from "framer-motion";

export default function Availability() {
  return (
    <section id="availability" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold">Availability</h2>
          <p className="text-gray-400 mt-2 w-1/2">Available remotely and across time zones, ensuring seamless collaboration regardless of your location.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent -z-10 rounded-lg blur-xl" />
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
