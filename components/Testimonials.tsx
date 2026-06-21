'use client'

import { ScrollReelTestimonials } from '@/components/ui/scroll-reel-testimonials'

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
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Islamic Wisdom
          </h2>
          <p className="text-lg text-gray-600">
            Hadith and guidance for spiritual growth
          </p>
        </div>

        <div className="flex justify-center">
          <ScrollReelTestimonials
            testimonials={testimonials}
            charStaggerMs={8}
          />
        </div>
      </div>
    </section>
  )
}
