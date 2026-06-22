'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface MagicButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export default function MagicButton({
  children,
  onClick,
  className = '',
}: MagicButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { damping: 20, stiffness: 300 })
  const springY = useSpring(y, { damping: 20, stiffness: 300 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const distX = e.clientX - (rect.left + centerX)
    const distY = e.clientY - (rect.top + centerY)

    x.set(distX * 0.3)
    y.set(distY * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative px-8 py-4 font-bold rounded-lg overflow-hidden group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {/* Magic gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent via-green-500 to-accent"
        animate={{
          backgroundPosition: ['0%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={{
          x: ['−100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        }}
      />

      {/* Particle burst on hover */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: [0, 1, 0],
            x: Math.cos((i / 6) * Math.PI * 2) * 100,
            y: Math.sin((i / 6) * Math.PI * 2) * 100,
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.05,
          }}
        />
      ))}

      <span className="relative z-10 text-white">{children}</span>
    </motion.button>
  )
}
