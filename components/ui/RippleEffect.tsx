'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'

interface RippleEffectProps {
  children: ReactNode
  className?: string
}

interface Ripple {
  id: number
  x: number
  y: number
}

export default function RippleEffect({ children, className = '' }: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const ref = useRef<HTMLDivElement>(null)
  let rippleId = 0

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = rippleId++

    setRipples((prev) => [...prev, { id, x, y }])

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
  }

  return (
    <motion.div
      ref={ref}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute bg-white/30 rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 0,
              height: 0,
            }}
            animate={{
              width: 400,
              height: 400,
              left: ripple.x - 200,
              top: ripple.y - 200,
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          />
        ))}
      </AnimatePresence>

      {children}
    </motion.div>
  )
}
