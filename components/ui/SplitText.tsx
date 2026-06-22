'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  animationType?: 'slide' | 'blur' | 'scale' | 'rotate'
}

export default function SplitText({
  text,
  className = '',
  delay = 0,
  animationType = 'slide',
}: SplitTextProps) {
  const words = text.split(' ')

  const getVariants = () => {
    switch (animationType) {
      case 'blur':
        return {
          hidden: { opacity: 0, filter: 'blur(10px)' },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.8 },
          },
        }
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
          },
        }
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -20, scale: 0.8 },
          visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: { duration: 0.7 },
          },
        }
      default: // slide
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          },
        }
    }
  }

  const variants = getVariants()

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      transition={{
        staggerChildren: 0.08,
        delayChildren: delay,
      }}
      viewport={{ once: true }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={variants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
