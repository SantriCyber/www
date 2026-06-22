'use client'

import { motion } from 'framer-motion'

export default function AnimatedGlobe() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.svg
        viewBox="0 0 200 200"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ perspective: '1000px' }}
      >
        {/* Globe background */}
        <defs>
          <radialGradient id="globeGradient" cx="35%" cy="35%">
            <stop offset="0%" stopColor="#7cc576" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2d5f3f" stopOpacity="0.8" />
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer glow circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="#7cc576"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Main globe sphere */}
        <circle cx="100" cy="100" r="90" fill="url(#globeGradient)" filter="url(#glow)" />

        {/* Latitude lines */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
        <ellipse cx="100" cy="100" rx="90" ry="45" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
        <ellipse cx="100" cy="100" rx="90" ry="60" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />

        {/* Longitude lines */}
        <line x1="100" y1="10" x2="100" y2="190" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
        <line x1="55" y1="30" x2="145" y2="170" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
        <line x1="145" y1="30" x2="55" y2="170" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />

        {/* Continents representation with dots */}
        {/* North America */}
        <circle cx="65" cy="70" r="2" fill="#7cc576" opacity="0.8" />
        <circle cx="70" cy="75" r="1.5" fill="#7cc576" opacity="0.7" />
        <circle cx="60" cy="80" r="1" fill="#7cc576" opacity="0.6" />

        {/* South America */}
        <circle cx="70" cy="110" r="1.5" fill="#7cc576" opacity="0.7" />
        <circle cx="75" cy="120" r="1" fill="#7cc576" opacity="0.6" />

        {/* Europe & Africa */}
        <circle cx="110" cy="80" r="2" fill="#7cc576" opacity="0.8" />
        <circle cx="115" cy="85" r="1.5" fill="#7cc576" opacity="0.7" />
        <circle cx="120" cy="95" r="1.5" fill="#7cc576" opacity="0.7" />
        <circle cx="115" cy="105" r="1" fill="#7cc576" opacity="0.6" />
        <circle cx="110" cy="115" r="1.5" fill="#7cc576" opacity="0.7" />

        {/* Asia */}
        <circle cx="130" cy="75" r="1.5" fill="#7cc576" opacity="0.7" />
        <circle cx="140" cy="80" r="1" fill="#7cc576" opacity="0.6" />
        <circle cx="135" cy="90" r="1.5" fill="#7cc576" opacity="0.7" />
        <circle cx="145" cy="95" r="1" fill="#7cc576" opacity="0.6" />

        {/* Australia */}
        <circle cx="145" cy="125" r="1" fill="#7cc576" opacity="0.6" />

        {/* Highlight shine on top */}
        <ellipse
          cx="75"
          cy="60"
          rx="25"
          ry="20"
          fill="#ffffff"
          opacity="0.15"
          filter="url(#glow)"
        />

        {/* Center point (Earth center indicator) */}
        <circle cx="100" cy="100" r="2" fill="#7cc576" opacity="0.5" />
      </motion.svg>
    </div>
  )
}
