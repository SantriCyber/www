'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps extends MotionProps {
  children: ReactNode
  className?: string
  index?: number
}

export default function GlassCard({
  children,
  className = '',
  index = 0,
  ...motionProps
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -12,
        scale: 1.03,
        boxShadow: '0 20px 40px rgba(124, 197, 118, 0.15)'
      }}
      transition={{
        duration: 0.3
      }}
      className={`
        relative p-6 rounded-2xl backdrop-blur-md
        bg-white/30 border border-white/20
        hover:bg-white/40 hover:border-white/30
        transition-all duration-300
        ${className}
      `}
      {...motionProps}
    >
      {/* Shine effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
