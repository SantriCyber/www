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
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="forum" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Forum Categories</h2>
          <p className="text-xl text-gray-600">Explore our diverse community discussions</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group bg-gradient-to-br ${category.color} p-6 rounded-lg text-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <div className="mb-3">
                  <IconComponent size={40} className="text-white" />
                </div>
                <h3 className="font-semibold text-sm md:text-base leading-tight group-hover:scale-105 transition-transform">
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
