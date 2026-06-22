'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

class TextScramble {
  el: HTMLElement
  chars: string
  queue: Array<{
    from: string
    to: string
    start: number
    end: number
    char?: string
  }>
  frame: number
  frameRequest: number
  resolve: (value: void | PromiseLike<void>) => void

  constructor(el: HTMLElement) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#'
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.update = this.update.bind(this)
  }

  setText(newText: string) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise<void>((resolve) => (this.resolve = resolve))
    this.queue = []

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 180)
      const end = start + Math.floor(Math.random() * 220)
      this.queue.push({ from, to, start, end })
    }

    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ''
    let complete = 0

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

export default function Hero() {
  const fullText = 'A community where Islamic knowledge meets cutting-edge technology. Learn programming, cybersecurity, and AI while strengthening your faith.'
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const scramblerRef = useRef<TextScramble | null>(null)

  useEffect(() => {
    if (titleRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(titleRef.current)
      scramblerRef.current.setText('Welcome to SantriCyber')
    }
  }, [])

  useEffect(() => {
    if (isComplete) return

    const timer = setTimeout(() => {
      if (displayText.length < fullText.length) {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      } else {
        setIsComplete(true)
      }
    }, 30)

    return () => clearTimeout(timer)
  }, [displayText, isComplete, fullText])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const logoHover = {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.3 },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <section id="hero"
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/assets/img/hero-bg.png)',
        backgroundRepeat: 'repeat',
        backgroundPosition: '0 0',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
      }}
    >

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={logoVariants}
          className="mb-8"
          whileHover={logoHover}
        >
          <motion.img
            src="/assets/img/SantriCyberLogo.png"
            alt="SantriCyber"
            className="mx-auto mb-8 cursor-pointer drop-shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            loading="eager"
            style={{
              maxWidth: '400px',
              height: 'auto',
              aspectRatio: '400/395',
            }}
          />
        </motion.div>

        <motion.h1
          ref={titleRef}
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          style={{ fontFamily: 'monospace' }}
        >
          Welcome to SantriCyber
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          {displayText}
          {!isComplete && <span className="animate-pulse">|</span>}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://forum.santricyber.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Join Our Forum
          </motion.a>
          <motion.div
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link href="#about" className="btn-secondary block">
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .dud {
          color: #7cc576;
          opacity: 0.8;
          text-shadow: 0 0 8px rgba(124, 197, 118, 0.6);
        }
      `}</style>
    </section>
  )
}
