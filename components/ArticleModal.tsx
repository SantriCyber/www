'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ArticleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ArticleModal({ isOpen, onClose }: ArticleModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-accent p-6 flex items-center justify-between border-b border-gray-200">
                <h2 className="text-2xl font-bold text-white">Getting to Know SantriCyber</h2>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                  aria-label="Close"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 prose prose-lg max-w-none text-gray-800">
                <h3 className="text-2xl font-bold mt-6 mb-4">The Beginning</h3>
                <p>
                  It all started with a simple intention — to spread the knowledge of Islam. At Pondok Pesantren Fatihul Ulum Al-Mahfudz, Manggisan, East Java, an idea took root: what if Islamic outreach could be done in the digital world? The reach would be wider, the spread faster, and the time unlimited.
                </p>
                <p>
                  Instead of finding a pulpit, the internet became the path.
                </p>
                <p>
                  And so SantriCyber was born in 2007 — starting with its first domain <code>santricyber.org</code>, supported by friends from the hacker community who generously helped build this community from the ground up.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">An Unexpected Journey</h3>
                <p>
                  What makes SantriCyber's story remarkable isn't just the decision to spread Islamic knowledge through the internet — it's what happened after.
                </p>
                <p>
                  To truly master this medium, the world of computers had to be learned. From what is hidden to what is visible. From the offline world to the online. Including the underground layers of the digital world that most people never touch — not for wrongful purposes, but to genuinely understand how this world works from its very roots.
                </p>
                <p>
                  And here something unique happened: an unplanned exchange of knowledge. The santri brought Islamic knowledge out of the pesantren and into the digital community. And the cyber community — friends from the hacker world — brought technological knowledge in, into the understanding of a santri. Two worlds that seemed far apart turned out to complement each other.
                </p>
                <p>
                  Some people study religion but fear technology. Others master technology but have drifted from values. SantriCyber's journey walked through both — not to choose one over the other, but to prove that the two can become a single, unified force.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">A Name With Meaning</h3>
                <p>
                  <strong>Santri</strong> — derived from the Sanskrit word <em>shastri</em>, meaning someone who studies sacred texts. In the Nusantara context, it refers to a student who diligently studies Islamic knowledge at a pesantren. After completing their studies, a santri does not stop there — they serve, teach, and benefit the community around them. Their knowledge is not meant to be kept for themselves.
                </p>
                <p>
                  <strong>Cyber</strong> — derived from the Greek word <em>kubernētēs</em>, meaning helmsman or steersman. Today, cyber refers to everything related to computer systems and the internet — storing data, protecting data, processing data, and connecting data. Someone who truly understands the cyber world is not merely a user — they are the one in control.
                </p>
                <p>
                  Put the two together: <strong>SantriCyber</strong> is someone who deepens their knowledge — both in Islamic studies and in technology — and then spreads it so that it becomes a benefit to others.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Who Is a SantriCyber?</h3>
                <p>
                  You've heard the word <strong>ustaz</strong>, right? An ustaz is not simply someone who knows about religion. Many people know about religion. An ustaz is someone who makes their knowledge flow outward — taught, shared, until others are enlightened by it. Their knowledge is not meant to be kept to themselves.
                </p>
                <p>
                  You've heard the word <strong>hacker</strong>, right? A hacker is not simply someone who can use a computer. Many people can use a computer. A hacker is someone who understands a system more deeply than anyone else — knowing how it works from the inside, seeing what others cannot see, and using that understanding for a greater purpose.
                </p>
                <p>
                  <strong>SantriCyber is the combination of both these spirits.</strong>
                </p>
                <p>
                  Someone who deepens their Islamic knowledge like a santri — seriously, wholeheartedly. At the same time mastering the digital world like a hacker — understanding from within, not just from the surface.
                </p>
                <p>
                  And most importantly: that knowledge does not stop with themselves. It is spread. It is shared. It is made into something that benefits others.
                </p>
                <p>
                  Anyone who learns and then teaches, who understands and then shares, who masters technology without losing their values and faith — they are a SantriCyber.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Our Mission</h3>
                <p>
                  SantriCyber recognizes that many within the digital community lack sufficient Islamic knowledge. And on the other side, many santri still have limited knowledge of technology.
                </p>
                <p>
                  So SantriCyber's mission runs in two directions:
                </p>
                <p>
                  The santri bring Islamic knowledge from the pesantren into the cyber world — so that friends outside the pesantren not only master technology, but also have a strong foundation of values to stand on.
                </p>
                <p>
                  And the cyber community brings technological knowledge in — so that santri do not fall behind in a rapidly advancing world, and can spread Islamic knowledge in ways that are more effective, more far-reaching, and more easily received.
                </p>
                <p>
                  That is the exchange that has been happening at SantriCyber since day one.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Platform</h3>
                <p>
                  SantriCyber is now accessible through two doors:
                </p>
                <ul>
                  <li><strong><a href="https://santri.dev" className="text-accent hover:underline">santri.dev</a></strong> — the landing page that serves as the face of the SantriCyber community on the internet.</li>
                  <li><strong><a href="https://forum.santricyber.dev" className="text-accent hover:underline">forum.santricyber.dev</a></strong> — a Discourse-based community forum where members discuss, share knowledge, and support one another in their learning journey — both in Islamic studies and in technology.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Closing</h3>
                <p>
                  In a world that grows more digital by the day, there is a perception that faith and technology cannot walk side by side. SantriCyber exists to prove otherwise.
                </p>
                <p>
                  A Muslim does not need to choose between deepening their religion or mastering technology. Both can — and should — go hand in hand. Islamic knowledge provides direction and values. Mastery of technology provides the ability to carry those values further, faster, and wider.
                </p>
                <p>
                  And when that knowledge is shared, when others are helped, when the community grows — that is where the spirit of SantriCyber truly lives.
                </p>
                <p>
                  Not in a name. Not in a logo. But in every person who learns, then teaches. Who receives a benefit, then passes it on.
                </p>

                <div className="mt-12 text-center">
                  <a
                    href="https://forum.santricyber.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Join Us at Forum
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
