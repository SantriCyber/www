'use client'

import { motion } from 'framer-motion'

export default function WhyUs() {
  const reasons = [
    {
      number: '1',
      title: 'Trusted Community',
      description: 'Join thousands of learners in a safe, supportive environment',
    },
    {
      number: '2',
      title: 'Free Access',
      description: 'All content and community resources are completely free',
    },
    {
      number: '3',
      title: 'Expert Mentorship',
      description: 'Get guidance from experienced professionals and mentors',
    },
    {
      number: '4',
      title: 'Practical Skills',
      description: 'Learn real-world applications through projects and case studies',
    },
    {
      number: '5',
      title: 'Islamic Integration',
      description: 'All content respects and promotes Islamic values and ethics',
    },
  ]

  return (
    <section id="why" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left: Image */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/img/santricyber-meeting.png"
              alt="Why Choose SantriCyber"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose SantriCyber?</h2>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold mr-3">
                      {reason.number}
                    </span>
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 ml-11">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
