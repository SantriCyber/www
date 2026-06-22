'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface Flip3DProps {
  front: ReactNode
  back: ReactNode
  className?: string
}

export default function Flip3D({ front, back, className = '' }: Flip3DProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className={`cursor-pointer relative w-full h-full ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{ perspective: 1200 }}
    >
      {/* Front */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: isFlipped ? 0 : 1, pointerEvents: isFlipped ? 'none' : 'auto' }}
        transition={{ duration: 0.3 }}
      >
        {front}
      </motion.div>

      {/* Back */}
      <motion.div
        className="absolute inset-0"
        initial={{ rotateY: 180 }}
        animate={{ opacity: isFlipped ? 1 : 0, pointerEvents: isFlipped ? 'auto' : 'none' }}
        transition={{ duration: 0.3 }}
        style={{ rotateY: 180 }}
      >
        {back}
      </motion.div>
    </motion.div>
  )
}
