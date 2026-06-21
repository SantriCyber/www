'use client'

import { motion } from 'framer-motion'
import { Book, Code, Shield, Bot } from 'lucide-react'

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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600">Comprehensive resources for your growth</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:bg-opacity-20 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
