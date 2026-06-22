'use client'

import { motion } from 'framer-motion'
import { Book, Code, Shield, Bot } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'
import FloatingBackground from '@/components/ui/FloatingBackground'
import MorphingBlob from '@/components/ui/MorphingBlob'

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
    <section id="services" className="w-full bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Floating background */}
      <FloatingBackground count={4} className="opacity-40" />

      {/* Morphing blobs - responsive sizes */}
      <MorphingBlob className="hidden sm:block w-96 h-96 top-0 right-0 opacity-25" delay={0} />
      <MorphingBlob className="hidden sm:block w-80 h-80 bottom-20 left-0 opacity-20" delay={3} />

      <div className="w-full flex flex-col gap-6 px-4 sm:px-6 relative z-10 py-12 sm:py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive resources for your growth
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const fromLeft = index % 2 === 0
            const rotateVal = fromLeft ? -30 : 30

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -300,
                  rotate: -30,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 70,
                  damping: 14,
                  delay: (index % 3) * 0.12,
                  duration: 0.8,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -20,
                  rotate: 3,
                  boxShadow: '0 30px 60px rgba(124, 197, 118, 0.3)',
                }}
                whileTap={{ scale: 0.92 }}
              >
                <GlassCard index={index}>
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
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
