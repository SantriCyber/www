'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface HoverGlowProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export default function HoverGlow({
  children,
  className = '',
  glowColor = 'rgba(124, 197, 118, 0.4)',
}: HoverGlowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect following cursor */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"
        style={{
          background: `radial-gradient(circle 150px at ${x}px ${y}px, ${glowColor}, transparent 80%)`,
          pointerEvents: 'none',
        }}
      />

      {children}
    </motion.div>
  )
}
