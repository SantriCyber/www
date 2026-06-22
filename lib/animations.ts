import { Variants } from 'framer-motion'

// Text reveal animations
export const textVariants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: custom,
    },
  }),
}

export const letterVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Glassmorphism + hover effects
export const glassCardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: { duration: 0.3 },
  },
}

// Floating animations
export const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Staggered container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Slide in variants
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

// Scale + fade
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Blur reveal
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8 },
  },
}

// Rotate + scale
export const rotateScaleVariants: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.8 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}
