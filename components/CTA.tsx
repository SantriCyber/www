'use client'

import { motion } from 'framer-motion'
import FloatingBackground from '@/components/ui/FloatingBackground'
import AnimatedGradient from '@/components/ui/AnimatedGradient'

export default function CTA() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated gradient background */}
      <AnimatedGradient
        colors={['rgba(26,26,26,1)', 'rgba(124,197,118,0.2)', 'rgba(26,26,26,1)']}
        duration={12}
        className="opacity-40"
      />

      {/* Floating background */}
      <FloatingBackground count={3} className="opacity-30" />

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to Join Our Community?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start your journey towards Islamic values and modern technology today
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://forum.santricyber.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-10" />
            <span className="relative z-10">Join Forum Now</span>
          </motion.a>

          <motion.a
            href="https://santricyber.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:shadow-xl transition-all group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-10" />
            <span className="relative z-10 group-hover:text-gray-900 transition-colors">Read Our Blog</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
