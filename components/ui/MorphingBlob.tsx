'use client'

import { motion } from 'framer-motion'

interface MorphingBlobProps {
  className?: string
  delay?: number
}

export default function MorphingBlob({ className = '', delay = 0 }: MorphingBlobProps) {
  const blobVariants = {
    animate: {
      borderRadius: [
        '60% 40% 30% 70%/60% 30% 70% 40%',
        '30% 60% 70% 40%/50% 60% 30% 60%',
        '70% 30% 66% 33%/33% 66% 33% 66%',
        '100% 60% 60% 100%/100% 100% 60% 60%',
        '60% 40% 30% 70%/60% 30% 70% 40%',
      ],
      scale: [1, 1.1, 0.95, 1.05, 1],
    },
  }

  return (
    <motion.div
      className={`absolute bg-gradient-to-br from-accent/40 to-accent/10 blur-3xl ${className}`}
      variants={blobVariants}
      animate="animate"
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  )
}
