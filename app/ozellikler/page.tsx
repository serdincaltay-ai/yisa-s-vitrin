// /app/ozellikler/page.tsx
import { Metadata } from 'next'
import OzelliklerContent from './OzelliklerContent'

export const metadata: Metadata = {
  title: 'Özellikler',
  description: '900 alan değerlendirme, 6 AI motoru, PHV takibi ve 10 branş desteği ile YİSA-S özelliklerini keşfedin.',
  openGraph: {
    title: 'YİSA-S Özellikleri',
    description: '900 alan değerlendirme, 6 AI motoru, PHV takibi ve 10 branş desteği.',
    url: 'https://yisa-s.com/ozellikler',
  },
}

export default function OzelliklerPage() {
  return <OzelliklerContent />
}
