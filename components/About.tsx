'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { useRef } from 'react'
import FloatingBackground from '@/components/ui/FloatingBackground'
import NeonGlow from '@/components/ui/NeonGlow'
import MorphingBlob from '@/components/ui/MorphingBlob'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])

  const features = [
    {
      title: 'Community-Driven',
      description: 'Learn from peers and mentors in a supportive environment',
    },
    {
      title: 'Islamic Values',
      description: 'All learning aligned with Islamic principles and ethics',
    },
    {
      title: 'Modern Tech',
      description: 'Stay updated with the latest in tech and cybersecurity',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Floating background */}
      <FloatingBackground count={3} className="opacity-25" />

      {/* Morphing blobs - responsive */}
      <MorphingBlob className="hidden sm:block w-96 h-96 -top-20 -left-20 opacity-20" delay={1} />

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
            className="flex justify-center md:block"
            initial={{ opacity: 0, x: -150, scale: 0.5, rotate: -20 }}
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
              src="/assets/img/SantriCyberLogo.png"
              alt="About SantriCyber"
              className="w-full max-w-sm mx-auto drop-shadow-xl"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
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
              About SantriCyber
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Founded in 2007, SantriCyber is dedicated to bridging Islamic education with modern technology. We empower Santri and tech enthusiasts to develop valuable skills in programming, cybersecurity, and AI.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    className="flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <CheckCircle2 className="text-accent" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-accent transition-colors">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="https://forum.santricyber.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Community
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
