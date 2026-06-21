'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Twitter, Instagram, Github, Facebook, Youtube, Music2, Globe, Share2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Globe, href: 'https://santri.dev', label: 'Website' },
    { icon: Facebook, href: 'https://www.facebook.com/santricyber.dev/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/santricyber', label: 'X (Twitter)' },
    { icon: Instagram, href: 'https://www.instagram.com/santricyber.dev', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@santricyberdev', label: 'YouTube' },
    { icon: Music2, href: 'https://www.tiktok.com/@santricyber.dev?_t=ZS-8u89fh6WxQP&_r=1', label: 'TikTok' },
    { icon: Github, href: 'https://github.com/santricyber', label: 'GitHub' },
    { icon: Share2, href: 'https://www.threads.com/@santricyber.dev', label: 'Threads' },
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
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo & Description */}
          <motion.div variants={itemVariants}>
            <img
              src="/assets/img/logo.png"
              alt="SantriCyber"
              className="h-12 mb-4"
              loading="lazy"
            />
            <p className="text-sm text-gray-400">
              A community uniting Islamic knowledge with modern technology.
            </p>
          </motion.div>

          {/* Community Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://forum.santricyber.dev"
                  className="hover:text-accent transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Forum
                </a>
              </li>
              <li>
                <a
                  href="https://santricyber.org"
                  className="hover:text-accent transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SantriCyber"
                  className="hover:text-accent transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://quran.com"
                  className="hover:text-accent transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quran
                </a>
              </li>
              <li>
                <a
                  href="https://sunnah.com"
                  className="hover:text-accent transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sunnah
                </a>
              </li>
              <li>
                <a
                  href="http://salah.com"
                  className="hover:text-accent transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prayer Times
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <motion.p
            className="text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} SantriCyber. All rights reserved. | Designed with care by syafmovic
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
