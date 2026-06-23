'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FloatingBackground from '@/components/ui/FloatingBackground'

export default function WhyUs() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [-100, 100])

  const reasons = [
    {
      number: '1',
      title: 'Trusted Community',
      description: 'Join thousands of learners in a safe, supportive environment',
    },
    {
      number: '2',
      title: 'Free Access',
      description: 'All content and community resources are completely free',
    },
    {
      number: '3',
      title: 'Expert Mentorship',
      description: 'Get guidance from experienced professionals and mentors',
    },
    {
      number: '4',
      title: 'Practical Skills',
      description: 'Learn real-world applications through projects and case studies',
    },
    {
      number: '5',
      title: 'Islamic Integration',
      description: 'All content respects and promotes Islamic values and ethics',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="why" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={ref}>
      {/* Floating background */}
      <FloatingBackground count={4} className="opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left: Image with parallax */}
          <motion.div
            className="flex items-center justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: 150, scale: 0.5, rotate: 20 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.9,
              type: 'spring',
              stiffness: 60,
              damping: 20,
            }}
            viewport={{ once: true }}
            style={{ y: imageY }}
          >
            <motion.img
              src="/assets/img/santricyber-meeting.png"
              alt="Why Choose SantriCyber"
              className="w-full rounded-xl shadow-2xl"
              loading="lazy"
              whileHover={{
                scale: 1.15,
                rotate: 8,
                boxShadow: '0 30px 60px rgba(124, 197, 118, 0.5)'
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Why Choose SantriCyber?
            </motion.h2>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -200,
                    rotate: -20,
                    scale: 0.8,
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
                    delay: index * 0.1,
                    duration: 0.8,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group"
                >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                      <motion.span
                        className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        {reason.number}
                      </motion.span>
                      <span className="group-hover:text-accent transition-colors">{reason.title}</span>
                    </h3>
                    <p className="text-gray-600 ml-11">{reason.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
