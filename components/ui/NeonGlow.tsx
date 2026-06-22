'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface NeonGlowProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export default function NeonGlow({
  children,
  className = '',
  glowColor = '#7cc576',
}: NeonGlowProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      {/* Neon glow layers */}
      <motion.div
        className="absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-100"
        style={{
          background: glowColor,
          filter: `blur(20px)`,
        }}
        animate={{
          boxShadow: [
            `0 0 20px ${glowColor}`,
            `0 0 40px ${glowColor}`,
            `0 0 20px ${glowColor}`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Inner neon border */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
        animate={{
          boxShadow: [
            `inset 0 0 10px ${glowColor}, 0 0 20px ${glowColor}`,
            `inset 0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
            `inset 0 0 10px ${glowColor}, 0 0 20px ${glowColor}`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
