'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why' },
    { label: 'Forum', href: '#forum' },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img
              src="/assets/img/SantriCyberSmall.png"
              alt="SantriCyber Logo"
              className="h-10"
              loading="eager"
            />
            <span className="hidden sm:inline font-bold text-lg text-gray-900">SantriCyber</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-accent transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://forum.santricyber.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Join Forum
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gray-200"
            >
              <div className="py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-accent/10 hover:text-accent rounded-md transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://forum.santricyber.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 bg-accent text-white font-semibold rounded-md hover:bg-green-700 transition-all duration-300 text-center mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Forum
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
