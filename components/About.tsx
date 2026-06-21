'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
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

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left: Image */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/img/SantriCyberLogo.png"
              alt="About SantriCyber"
              className="w-full max-w-sm mx-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">About SantriCyber</h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2007, SantriCyber is dedicated to bridging Islamic education with modern technology. We empower Santri and tech enthusiasts to develop valuable skills in programming, cybersecurity, and AI.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://forum.santricyber.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Explore Our Community
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
