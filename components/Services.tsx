'use client'

import { motion } from 'framer-motion'
import { Book, Code, Shield, Bot } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import FloatingBackground from '@/components/ui/FloatingBackground'

export default function Services() {
  const services = [
    {
      icon: Book,
      title: 'Islamic Content',
      description: 'Quality Islamic resources and discussions for spiritual growth',
    },
    {
      icon: Code,
      title: 'Programming',
      description: 'Learn development skills from basics to advanced concepts',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Master digital security and ethical hacking practices',
    },
    {
      icon: Bot,
      title: 'AI & Innovation',
      description: 'Explore artificial intelligence and emerging technologies',
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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Floating background */}
      <FloatingBackground count={4} className="opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive resources for your growth
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <GlassCard key={index} index={index}>
                <motion.div
                  className="w-12 h-12 bg-accent bg-opacity-20 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className="text-accent" size={24} />
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </GlassCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
