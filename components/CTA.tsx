'use client'

import { motion } from 'framer-motion'
import FloatingBackground from '@/components/ui/FloatingBackground'
import AnimatedGradient from '@/components/ui/AnimatedGradient'
import MagicButton from '@/components/ui/MagicButton'
import MorphingBlob from '@/components/ui/MorphingBlob'

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

      {/* Morphing blobs - hidden on mobile */}
      <MorphingBlob className="hidden sm:block w-96 h-96 top-0 left-0 opacity-20" delay={0} />
      <MorphingBlob className="hidden sm:block w-80 h-80 bottom-0 right-0 opacity-15" delay={2} />

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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -300,
              rotate: -30,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              scale: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 70,
              damping: 14,
              delay: 0,
              duration: 0.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <MagicButton
              onClick={() => window.open('https://forum.santricyber.dev', '_blank')}
              className="bg-gradient-to-r from-accent to-green-500"
            >
              Join Forum Now
            </MagicButton>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 300,
              rotate: 30,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
              scale: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 70,
              damping: 14,
              delay: 0.1,
              duration: 0.8,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href="https://santricyber.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base border-2 border-white text-white font-semibold rounded-lg hover:shadow-xl transition-all group relative overflow-hidden block"
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.92, rotate: -2 }}
            >
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-10" />
              <span className="relative z-10 group-hover:text-gray-900 transition-colors">Read Our Blog</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
