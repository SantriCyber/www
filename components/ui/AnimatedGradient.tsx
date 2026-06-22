'use client'

import { motion } from 'framer-motion'

interface AnimatedGradientProps {
  className?: string
  colors?: string[]
  duration?: number
}

export default function AnimatedGradient({
  className = '',
  colors = ['#7cc576', '#2d5f3f', '#1A1A1A'],
  duration = 10,
}: AnimatedGradientProps) {
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `linear-gradient(
          45deg,
          ${colors[0]},
          ${colors[1]},
          ${colors[2]}
        )`,
        backgroundSize: '400% 400%',
      }}
      animate={{
        backgroundPosition: [
          '0% 50%',
          '100% 50%',
          '0% 50%',
        ],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
