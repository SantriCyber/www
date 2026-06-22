export function useMobileAnimation() {
  const isMobile = typeof window !== 'undefined'
    ? window.innerWidth < 768
    : false

  // Reduce animation complexity on mobile
  return {
    isMobile,
    // Shorter durations for mobile
    duration: isMobile ? 0.4 : 0.8,
    // Less delay stagger for mobile
    delay: isMobile ? 0.05 : 0.1,
    // Simpler spring physics for mobile
    springConfig: isMobile
      ? { type: 'spring', stiffness: 200, damping: 25 }
      : { type: 'spring', stiffness: 120, damping: 18 },
    // Reduce scale animations on mobile
    scaleOnMobile: isMobile ? 0.5 : 0.3,
  }
}

// Mobile-safe animation presets
export const mobileAnimationPresets = {
  entrance: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}
