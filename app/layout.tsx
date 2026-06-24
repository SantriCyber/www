import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SantriCyber - Official | Islamic & Tech Learning Hub',
  description: 'SantriCyber is a community for Santri and tech enthusiasts to share and learn about Islam, programming, cybersecurity, and technology.',
  keywords: 'SantriCyber, Islamic Tech, Programming, Cybersecurity, Ethical Hacking, AI, Machine Learning',
  authors: [{ name: 'SantriCyber' }],
  creator: 'SantriCyber',
  metadataBase: new URL('https://santri.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://santri.dev',
    title: 'SantriCyber - Official | Islamic & Tech Learning Hub',
    description: 'Join SantriCyber to explore programming, cybersecurity, AI, and Islamic knowledge.',
    images: [
      {
        url: 'https://santri.dev/assets/img/SantriCyber.png',
        width: 400,
        height: 395,
        alt: 'SantriCyber Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SantriCyber - Official | Islamic & Tech Learning Hub',
    description: 'Join SantriCyber community today.',
    images: ['https://santri.dev/assets/img/SantriCyber.png'],
    creator: '@SantriCyber',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://santri.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#7cc576" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" type="image/png" href="/assets/img/SantriCyber.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
