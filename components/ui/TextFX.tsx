'use client'

import { motion } from 'framer-motion'

interface TextFXProps {
  text: string
  className?: string
  animationType?: 'burst' | 'wave' | 'fall' | 'spin'
  delay?: number
}

export default function TextFX({
  text,
  className = '',
  animationType = 'burst',
  delay = 0,
}: TextFXProps) {
  const chars = text.split('')

  const getInitial = () => {
    switch (animationType) {
      case 'burst':
        return { opacity: 0, scale: 0, rotate: -45 }
      case 'wave':
        return { opacity: 0, y: 20 }
      case 'fall':
        return { opacity: 0, y: -50, rotate: -15 }
      case 'spin':
        return { opacity: 0, scale: 0, rotate: 180 }
      default:
        return { opacity: 0 }
    }
  }

  const getAnimate = () => {
    switch (animationType) {
      case 'burst':
        return { opacity: 1, scale: 1, rotate: 0 }
      case 'wave':
        return { opacity: 1, y: 0 }
      case 'fall':
        return { opacity: 1, y: 0, rotate: 0 }
      case 'spin':
        return { opacity: 1, scale: 1, rotate: 0 }
      default:
        return { opacity: 1 }
    }
  }

  const getDuration = () => {
    switch (animationType) {
      case 'burst':
        return 0.6
      case 'wave':
        return 0.5
      case 'fall':
        return 0.7
      case 'spin':
        return 0.6
      default:
        return 0.5
    }
  }

  return (
    <motion.span className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={getInitial()}
          whileInView={getAnimate()}
          transition={{
            duration: getDuration(),
            delay: delay + i * 0.05,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          className="inline-block"
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
