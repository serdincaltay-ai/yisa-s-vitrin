import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://yisa-s.com'
const OG_IMAGE = '/landing/teknolojiyi-spora-baslattik-1.png'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'YİSA-S | Teknolojiyi Spora Başlattık',
    template: '%s | YİSA-S',
  },
  description:
    'Çocukların spor gelişimini yapay zeka ile ölçen veli odaklı platform. 900 alanlı değerlendirme, şeffaf raporlar.',
  keywords: [
    'YİSA-S',
    'çocuk spor',
    'spor yapay zeka',
    'spor ölçüm',
    'veli paneli',
    'cimnastik',
    'BJK Tuzla',
    '900 alan değerlendirme',
    'PHV',
    'çocuk sporcu gelişimi',
  ],
  authors: [{ name: 'YİSA-S' }],
  creator: 'YİSA-S',
  publisher: 'YİSA-S',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: 'YİSA-S',
    title: 'YİSA-S | Teknolojiyi Spora Başlattık',
    description:
      'Çocukların spor gelişimini yapay zeka ile ölçen veli odaklı platform.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'YİSA-S — Teknolojiyi Spora Başlattık',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YİSA-S | Teknolojiyi Spora Başlattık',
    description:
      'Çocukların spor gelişimini yapay zeka ile ölçen veli odaklı platform.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: '#0e7490',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  )
}
