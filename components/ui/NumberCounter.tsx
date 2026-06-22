'use client'

import { useEffect, useState } from 'react'

interface NumberCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export default function NumberCounter({
  end,
  duration = 2000,
  suffix = ''
}: NumberCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration])

  return <span>{count.toLocaleString()}{suffix}</span>
}
