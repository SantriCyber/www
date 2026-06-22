'use client'

import { motion } from 'framer-motion'

interface FloatingBackgroundProps {
  count?: number
  className?: string
}

export default function FloatingBackground({ count = 5, className = '' }: FloatingBackgroundProps) {
  const floatingElements = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-accent/10 to-accent/5 blur-3xl"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.left}%`,
            top: `${element.top}%`,
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
