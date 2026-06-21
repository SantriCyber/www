'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-gray-900">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ready to Join Our Community?
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Start your journey towards Islamic values and modern technology today
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://forum.santricyber.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-white font-semibold rounded hover:bg-green-700 transition-colors"
          >
            Join Forum Now
          </a>
          <a
            href="https://santricyber.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-gray-900 transition-colors"
          >
            Read Our Blog
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
