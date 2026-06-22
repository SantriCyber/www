'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SwingInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function SwingIn({
  children,
  className = '',
  delay = 0
}: SwingInProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: -500,
        rotate: -45,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        x: 0,
        rotate: 0,
        scale: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 14,
        delay,
        duration: 0.9,
      }}
      style={{
        transformOrigin: 'top right',
      }}
    >
      {children}
    </motion.div>
  )
}
