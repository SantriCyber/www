'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  BookOpen,
  Heart,
  Users,
  Zap,
  GraduationCap,
  Shield,
  ShoppingCart,
  Building,
} from 'lucide-react'
import Link from 'next/link'
import FloatingBackground from '@/components/ui/FloatingBackground'

export default function ForumCategories() {
  const categories = [
    { name: 'DISCUSS of ISLAMIC', Icon: BookOpen, color: 'from-blue-400 to-blue-600' },
    { name: 'PILLAR of IMAN and ISLAM', Icon: Heart, color: 'from-purple-400 to-purple-600' },
    { name: 'FAMILY and SOCIETY', Icon: Users, color: 'from-pink-400 to-pink-600' },
    { name: 'LIFESTYLE AND HEALTH', Icon: Zap, color: 'from-green-400 to-green-600' },
    { name: 'EDUCATIONAL', Icon: GraduationCap, color: 'from-yellow-400 to-yellow-600' },
    { name: 'IT CyberSecurity', Icon: Shield, color: 'from-red-400 to-red-600' },
    { name: 'BAZAR MARKET', Icon: ShoppingCart, color: 'from-orange-400 to-orange-600' },
    { name: 'Pesantren', Icon: Building, color: 'from-indigo-400 to-indigo-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="forum" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Floating background */}
      <FloatingBackground count={3} className="opacity-30" />

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
            Forum Categories
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our diverse community discussions
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category, index) => {
            const IconComponent = category.Icon
            return (
              <motion.a
                key={index}
                href="https://forum.santricyber.dev"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -8, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className={`group bg-gradient-to-br ${category.color} p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden`}
              >
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />

                <motion.div
                  className="mb-3 relative z-10"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <IconComponent size={40} className="text-white" />
                </motion.div>

                <h3 className="font-semibold text-sm md:text-base leading-tight relative z-10">
                  {category.name}
                </h3>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://forum.santricyber.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <MessageSquare size={20} />
            <span>Visit Full Forum</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
