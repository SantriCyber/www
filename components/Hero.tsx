'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import FloatingBackground from '@/components/ui/FloatingBackground'
import MorphingBlob from '@/components/ui/MorphingBlob'
import MagicButton from '@/components/ui/MagicButton'
import TextFX from '@/components/ui/TextFX'

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
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

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
      ref={sectionRef}
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Parallax background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/img/hero-bg.png)',
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0',
          y: bgY,
          zIndex: 0,
        }}
      />

      {/* Overlay gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(26,26,26,0.3) 0%, rgba(124,197,118,0.1) 100%)',
          zIndex: 1,
        }}
      />

      {/* Floating background particles */}
      <FloatingBackground count={5} className="opacity-50" />

      {/* Morphing blobs for magic effect */}
      <MorphingBlob className="w-96 h-96 top-20 -left-20 opacity-40" delay={0} />
      <MorphingBlob className="w-80 h-80 bottom-10 -right-10 opacity-30" delay={2} />
      <MorphingBlob className="w-72 h-72 top-1/2 left-1/3 opacity-20" delay={4} />

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 10 }}
      >
        <motion.div
          className="mb-8"
          whileHover={logoHover}
          initial={{ opacity: 0, scale: 0, y: -200, x: 100, rotate: -45 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            rotate: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            type: 'spring',
            stiffness: 80,
            damping: 15,
            ease: 'easeOut',
          }}
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
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          style={{ fontFamily: 'monospace' }}
          initial={{ opacity: 0, filter: 'blur(20px)', y: 50 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: 'easeOut',
          }}
        >
          Welcome to SantriCyber
        </motion.h1>

        <motion.p
          className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, filter: 'blur(15px)', y: 30 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: 'easeOut',
          }}
        >
          {displayText}
          {!isComplete && <span className="animate-pulse">|</span>}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.3,
            ease: 'easeOut',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <MagicButton
              onClick={() => window.open('https://forum.santricyber.dev', '_blank')}
              className="bg-accent text-white shadow-lg"
            >
              Join Our Forum
            </MagicButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
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
