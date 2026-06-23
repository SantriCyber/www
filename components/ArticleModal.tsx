'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useState } from 'react'

interface ArticleModalProps {
  isOpen: boolean
  onClose: () => void
}

type Language = 'en' | 'id'

const articleContent = {
  en: {
    title: 'Getting to Know SantriCyber',
    sections: [
      {
        heading: 'The Beginning',
        content: `It all started with a simple intention — to spread the knowledge of Islam. At Pondok Pesantren Fatihul Ulum Al-Mahfudz, Manggisan, East Java, an idea took root: what if Islamic outreach could be done in the digital world? The reach would be wider, the spread faster, and the time unlimited.

Instead of finding a pulpit, the internet became the path.

And so SantriCyber was born in 2007 — starting with its first domain santricyber.org, supported by friends from the hacker community who generously helped build this community from the ground up.`
      },
      {
        heading: 'An Unexpected Journey',
        content: `What makes SantriCyber's story remarkable isn't just the decision to spread Islamic knowledge through the internet — it's what happened after.

To truly master this medium, the world of computers had to be learned. From what is hidden to what is visible. From the offline world to the online. Including the underground layers of the digital world that most people never touch — not for wrongful purposes, but to genuinely understand how this world works from its very roots.

And here something unique happened: an unplanned exchange of knowledge. The santri brought Islamic knowledge out of the pesantren and into the digital community. And the cyber community — friends from the hacker world — brought technological knowledge in, into the understanding of a santri. Two worlds that seemed far apart turned out to complement each other.

Some people study religion but fear technology. Others master technology but have drifted from values. SantriCyber's journey walked through both — not to choose one over the other, but to prove that the two can become a single, unified force.`
      },
      {
        heading: 'A Name With Meaning',
        content: `Santri — derived from the Sanskrit word shastri, meaning someone who studies sacred texts. In the Nusantara context, it refers to a student who diligently studies Islamic knowledge at a pesantren. After completing their studies, a santri does not stop there — they serve, teach, and benefit the community around them. Their knowledge is not meant to be kept for themselves.

Cyber — derived from the Greek word kubernētēs, meaning helmsman or steersman. Today, cyber refers to everything related to computer systems and the internet — storing data, protecting data, processing data, and connecting data. Someone who truly understands the cyber world is not merely a user — they are the one in control.

Put the two together: SantriCyber is someone who deepens their knowledge — both in Islamic studies and in technology — and then spreads it so that it becomes a benefit to others.`
      },
      {
        heading: 'Who Is a SantriCyber?',
        content: `You've heard the word ustaz, right? An ustaz is not simply someone who knows about religion. Many people know about religion. An ustaz is someone who makes their knowledge flow outward — taught, shared, until others are enlightened by it. Their knowledge is not meant to be kept to themselves.

You've heard the word hacker, right? A hacker is not simply someone who can use a computer. Many people can use a computer. A hacker is someone who understands a system more deeply than anyone else — knowing how it works from the inside, seeing what others cannot see, and using that understanding for a greater purpose.

SantriCyber is the combination of both these spirits.

Someone who deepens their Islamic knowledge like a santri — seriously, wholeheartedly. At the same time mastering the digital world like a hacker — understanding from within, not just from the surface.

And most importantly: that knowledge does not stop with themselves. It is spread. It is shared. It is made into something that benefits others.

Anyone who learns and then teaches, who understands and then shares, who masters technology without losing their values and faith — they are a SantriCyber.`
      },
      {
        heading: 'Our Mission',
        content: `SantriCyber recognizes that many within the digital community lack sufficient Islamic knowledge. And on the other side, many santri still have limited knowledge of technology.

So SantriCyber's mission runs in two directions:

The santri bring Islamic knowledge from the pesantren into the cyber world — so that friends outside the pesantren not only master technology, but also have a strong foundation of values to stand on.

And the cyber community brings technological knowledge in — so that santri do not fall behind in a rapidly advancing world, and can spread Islamic knowledge in ways that are more effective, more far-reaching, and more easily received.

That is the exchange that has been happening at SantriCyber since day one.`
      },
      {
        heading: 'Closing',
        content: `In a world that grows more digital by the day, there is a perception that faith and technology cannot walk side by side. SantriCyber exists to prove otherwise.

A Muslim does not need to choose between deepening their religion or mastering technology. Both can — and should — go hand in hand. Islamic knowledge provides direction and values. Mastery of technology provides the ability to carry those values further, faster, and wider.

And when that knowledge is shared, when others are helped, when the community grows — that is where the spirit of SantriCyber truly lives.

Not in a name. Not in a logo. But in every person who learns, then teaches. Who receives a benefit, then passes it on.`
      }
    ]
  },
  id: {
    title: 'Mengenal SantriCyber: Ketika Dakwah Bertemu Dunia Digital',
    sections: [
      {
        heading: 'Awal Mula',
        content: `Semuanya bermula dari satu niat yang sederhana — menyebarkan ilmu agama. Di Pondok Pesantren Fatihul Ulum Al-Mahfudz, Manggisan, Jawa Timur, tumbuh sebuah gagasan: bagaimana kalau dakwah dilakukan di dunia digital? Jangkauannya lebih luas, penyebarannya lebih cepat, dan waktunya tidak terbatas.

Alih-alih menemukan mimbar, justru internet yang menjadi jalannya.

Dari situlah SantriCyber lahir pada tahun 2007 — dengan domain pertamanya santricyber.org, didukung oleh para sahabat dari dunia hacker yang dengan tangan terbuka membantu membangun komuniti ini dari awal.`
      },
      {
        heading: 'Perjalanan yang Tidak Terduga',
        content: `Yang menarik bukan sekadar keputusan untuk berdakwah lewat internet — tapi apa yang terjadi setelahnya.

Untuk menguasai wadah dakwah itu, dunia komputer harus dipelajari. Dari yang tersembunyi hingga yang terlihat. Dari dunia offline hingga online. Termasuk lapisan underground dunia digital yang jarang disentuh orang biasa — bukan untuk tujuan yang menyimpang, tapi untuk benar-benar memahami bagaimana dunia ini bekerja dari akar-akarnya.

Di sinilah terjadi sesuatu yang unik: pertukaran ilmu yang tidak disengaja. Santri membawa ilmu agama keluar pesantren, ke tengah komuniti digital. Dan komuniti cyber — para sahabat dari dunia hacker — membawa ilmu teknologi masuk, ke dalam pemahaman seorang santri. Dua dunia yang tampaknya jauh, justru saling melengkapi.

Ada orang yang belajar agama tapi takut dengan teknologi. Ada orang yang menguasai teknologi tapi jauh dari nilai. Perjalanan SantriCyber menempuh keduanya — tidak untuk memilih salah satu, tapi untuk membuktikan bahwa keduanya bisa menjadi satu kekuatan.`
      },
      {
        heading: 'Nama yang Punya Makna',
        content: `Santri — berasal dari kata Sanskerta shastri, bermaksud seseorang yang mempelajari kitab-kitab suci. Dalam konteks Nusantara, ia merujuk kepada pelajar yang mendalami ilmu agama Islam di pesantren dengan sungguh-sungguh. Setelah selesai belajar, seorang santri tidak berhenti di situ — ia mengabdi, mengajar, dan memberi manfaat kepada masyarakat. Ilmunya bukan untuk disimpan sendiri.

Cyber — berasal dari bahasa Greek kubernētēs, bermaksud juru kemudi. Dalam perkembangannya, cyber merujuk kepada segala sesuatu yang berhubungan dengan sistem komputer dan internet — menyimpan data, melindungi data, memproses data, hingga menghubungkan data. Seseorang yang benar-benar memahami dunia cyber bukan sekadar penggunanya — ia yang mengendalikannya.

Gabungkan keduanya: SantriCyber adalah seseorang yang mendalami ilmu — baik ilmu agama mahupun ilmu teknologi — lalu menyebarkannya sehingga menjadi manfaat bagi orang lain.`
      },
      {
        heading: 'Siapakah SantriCyber Itu?',
        content: `Kamu pernah dengar kata ustaz? Ustaz bukan sekadar orang yang tahu agama. Yang tahu agama banyak. Ustaz adalah orang yang menjadikan ilmunya mengalir keluar — diajarkan, disebarkan, hingga orang lain ikut tercerahkan. Ilmunya bukan untuk disimpan sendiri.

Kamu pernah dengar kata hacker? Hacker bukan sekadar orang yang bisa pakai komputer. Yang bisa pakai komputer juga banyak. Hacker adalah orang yang memahami sistem lebih dalam dari siapapun — tahu cara kerjanya dari dalam, tahu celah yang tidak dilihat orang lain, dan menggunakan pemahaman itu untuk tujuan yang lebih besar.

SantriCyber adalah gabungan jiwa keduanya.

Seseorang yang mendalami ilmu agama seperti seorang santri — sungguh-sungguh, tidak setengah-setengah. Sekaligus menguasai dunia digital seperti seorang hacker — memahami dari dalam, bukan sekadar dari permukaan.

Dan yang terpenting: ilmu itu tidak berhenti pada dirinya sendiri. Ia disebarkan. Ia dibagikan. Ia dijadikan manfaat bagi orang lain.

Siapapun yang belajar lalu mengajar, yang memahami lalu menyebarkan, yang menguasai teknologi tanpa kehilangan nilai dan iman — ia adalah SantriCyber.`
      },
      {
        heading: 'Misi',
        content: `SantriCyber sadar bahwa banyak di kalangan komuniti digital yang ilmu agamanya belum mencukupi. Dan di sisi lain, banyak santri yang ilmu teknologinya masih terbatas.

Maka misi SantriCyber berjalan dua arah:

Para santri membawa ilmu agama yang mereka dapat dari pesantren, ke tengah dunia cyber — supaya sahabat di luar pesantren tidak hanya menguasai teknologi, tapi juga memiliki landasan nilai yang kuat.

Dan komuniti cyber membawa ilmu teknologi masuk — supaya para santri tidak ketinggalan perkembangan dunia yang semakin canggih, dan bisa menyebarkan dakwah dengan cara yang lebih efektif, lebih luas, dan lebih mudah diterima.

Itulah pertukaran yang terus terjadi di SantriCyber sejak hari pertama.`
      },
      {
        heading: 'Penutup',
        content: `Di tengah dunia yang semakin digital, ada kesan seolah-olah iman dan teknologi adalah dua hal yang tidak bisa berjalan beriringan. SantriCyber hadir untuk membuktikan sebaliknya.

Seorang Muslim tidak perlu memilih antara mendalami agama atau menguasai teknologi. Keduanya bisa — dan seharusnya — berjalan bersama. Ilmu agama memberikan arah dan nilai. Penguasaan teknologi memberikan kemampuan untuk membawa nilai itu lebih jauh, lebih cepat, lebih luas.

Dan ketika ilmu itu disebarkan, ketika orang lain terbantu, ketika komuniti tumbuh — di sanalah jiwa SantriCyber benar-benar hidup.

Bukan di nama. Bukan di logo. Tapi di setiap orang yang belajar, lalu mengajar. Yang menerima manfaat, lalu meneruskannya.`
      }
    ]
  }
}

export default function ArticleModal({ isOpen, onClose }: ArticleModalProps) {
  const [language, setLanguage] = useState<Language>('en')
  const content = articleContent[language]

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
              <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-accent p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">{content.title}</h2>
                  <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200 transition-colors"
                    aria-label="Close"
                  >
                    <X size={28} />
                  </button>
                </div>

                {/* Language Toggle */}
                <div className="flex gap-2">
                  {(['en', 'id'] as const).map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        language === lang
                          ? 'bg-white text-gray-900'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {lang === 'en' ? '🇬🇧 English' : '🇮🇩 Bahasa Indonesia'}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <motion.div
                key={language}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 prose prose-lg max-w-none text-gray-800"
              >
                {content.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-900">
                      {section.heading}
                    </h3>
                    {section.content.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="mb-4 leading-relaxed text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}

                <div className="mt-12 text-center">
                  <a
                    href="https://forum.santricyber.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    {language === 'en' ? 'Join Us at Forum' : 'Bergabunglah di Forum'}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
