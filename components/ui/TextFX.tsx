'use client'

import { motion } from 'framer-motion'

interface TextFXProps {
  text: string
  className?: string
  animationType?: 'burst' | 'wave' | 'fall' | 'spin'
  delay?: number
}

export default function TextFX({
  text,
  className = '',
  animationType = 'burst',
  delay = 0,
}: TextFXProps) {
  const chars = text.split('')

  const getVariants = () => {
    switch (animationType) {
      case 'burst':
        return {
          hidden: { opacity: 0, scale: 0, rotate: Math.random() * 360 },
          visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              delay: delay + i * 0.05,
              duration: 0.6,
              ease: 'easeOut',
            },
          }),
        }
      case 'wave':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: delay + i * 0.08,
              duration: 0.5,
              ease: 'easeOut',
            },
          }),
        }
      case 'fall':
        return {
          hidden: { opacity: 0, y: -50, rotate: -15 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
              delay: delay + i * 0.05,
              duration: 0.7,
              ease: 'easeOut',
            },
          }),
        }
      case 'spin':
        return {
          hidden: { opacity: 0, scale: 0, rotate: 180 },
          visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              delay: delay + i * 0.06,
              duration: 0.6,
              ease: 'easeOut',
            },
          }),
        }
      default:
        return {}
    }
  }

  const variants = getVariants()

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          className="inline-block"
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
