'use client'

import { motion } from 'framer-motion'
import { ScrollReelTestimonials } from '@/components/ui/scroll-reel-testimonials'
import FloatingBackground from '@/components/ui/FloatingBackground'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Convey from me, even if it is just one verse.',
      author: 'Prophet Muhammad ﷺ',
      source: 'Narrated by Al-Bukhari',
      image: '/assets/img/featured-1.png',
      alt: 'Islamic Wisdom',
      useIcon: true,
    },
    {
      quote: 'When a person dies, all their deeds come to an end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for them.',
      author: 'Prophet Muhammad ﷺ',
      source: 'Narrated by Muslim',
      image: '/assets/img/featured-2.png',
      alt: 'Islamic Knowledge',
      useIcon: true,
    },
    {
      quote: 'The best of you are those who learn the Quran and teach it.',
      author: 'Prophet Muhammad ﷺ',
      source: 'Narrated by Al-Bukhari',
      image: '/assets/img/featured-3.png',
      alt: 'Quranic Learning',
      useIcon: true,
    },
    {
      quote: 'Seeking knowledge is an obligation upon every Muslim.',
      author: 'Prophet Muhammad ﷺ',
      source: 'HR. Ibn Majah',
      image: '/assets/img/featured-1.png',
      alt: 'Seeking Knowledge',
      useIcon: true,
    },
    {
      quote: 'Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise.',
      author: 'Prophet Muhammad ﷺ',
      source: 'HR. Muslim, No. 2699',
      image: '/assets/img/featured-2.png',
      alt: 'Path to Paradise',
      useIcon: true,
    },
    {
      quote: 'Whoever goes out in search of knowledge is in the path of Allah until he returns.',
      author: 'Prophet Muhammad ﷺ',
      source: 'HR. Tirmidzi',
      image: '/assets/img/featured-3.png',
      alt: 'Allah\'s Path',
      useIcon: true,
    },
    {
      quote: 'Whoever desires happiness in this world, let him seek knowledge. Whoever desires happiness in the hereafter, let him seek knowledge. And whoever desires both, let him seek knowledge.',
      author: 'Prophet Muhammad ﷺ',
      source: 'HR. Bukhari & Muslim',
      image: '/assets/img/featured-1.png',
      alt: 'Knowledge for Happiness',
      useIcon: true,
    },
    {
      quote: 'The superiority of a scholar over a worshipper is like the superiority of the full moon over all the stars.',
      author: 'Prophet Muhammad ﷺ',
      source: 'HR. Abu Dawud (3641)',
      image: '/assets/img/featured-2.png',
      alt: 'Scholar\'s Excellence',
      useIcon: true,
    },
    {
      quote: 'Learn, and teach others, be humble toward your teachers, and be kind to those who teach you.',
      author: 'Prophet Muhammad ﷺ',
      source: 'HR. Thabrani',
      image: '/assets/img/featured-3.png',
      alt: 'Learning & Teaching',
      useIcon: true,
    },
    {
      quote: 'Scholars are the inheritors of the prophets. The prophets did not leave behind gold or silver — they left behind knowledge.',
      author: 'Prophet Muhammad ﷺ',
      source: 'HR. Abu Dawud & Tirmidzi',
      image: '/assets/img/featured-1.png',
      alt: 'Knowledge Inheritance',
      useIcon: true,
    },
    {
      quote: 'Everything in the heavens and the earth seeks forgiveness for the scholar — even the fish in the depths of the sea.',
      author: 'Prophet Muhammad ﷺ',
      source: 'HR. Abu Dawud',
      image: '/assets/img/featured-2.png',
      alt: 'Creation & Scholars',
      useIcon: true,
    },
    {
      quote: 'Knowledge is not what is merely memorized — it is what benefits.',
      author: 'Imam Shafi\'i',
      source: '150–204 H',
      image: '/assets/img/featured-3.png',
      alt: 'Beneficial Knowledge',
      useIcon: true,
    },
    {
      quote: 'If you cannot endure the fatigue of learning, you will bear the burden of ignorance.',
      author: 'Imam Shafi\'i',
      source: 'Islamic Scholar',
      image: '/assets/img/featured-1.png',
      alt: 'Learning\'s Challenge',
      useIcon: true,
    },
    {
      quote: 'Seeking knowledge is an act of piety. Conveying it is worship. Reviewing it is remembrance of Allah. Pursuing it is jihad.',
      author: 'Imam Al-Ghazali',
      source: 'Ihya\' Ulumuddin',
      image: '/assets/img/featured-2.png',
      alt: 'Knowledge as Worship',
      useIcon: true,
    },
    {
      quote: 'Many people remain poor in knowledge because of their inability to stay silent and truly listen.',
      author: 'Ibn Qayyim Al-Jawziyyah',
      source: '691–751 H',
      image: '/assets/img/featured-3.png',
      alt: 'The Art of Listening',
      useIcon: true,
    },
    {
      quote: 'Knowledge is of two kinds: that which is absorbed and that which is merely heard. What is only heard is of no benefit unless it is absorbed.',
      author: 'Ali ibn Abi Talib',
      source: 'Companion of Prophet',
      image: '/assets/img/featured-1.png',
      alt: 'True Understanding',
      useIcon: true,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Floating background */}
      <FloatingBackground count={3} className="opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Islamic Wisdom
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hadith and guidance for spiritual growth
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ScrollReelTestimonials
            testimonials={testimonials}
            charStaggerMs={8}
          />
        </motion.div>
      </div>
    </section>
  )
}
