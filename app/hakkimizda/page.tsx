// /app/hakkimizda/page.tsx
import { Metadata } from 'next'
import HakkimizdaContent from './HakkimizdaContent'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'YİSA-S ekibi, misyonumuz ve iletişim bilgileri.',
  openGraph: {
    title: 'Hakkımızda — YİSA-S',
    description: 'YİSA-S ekibi, misyonumuz ve iletişim bilgileri.',
    url: 'https://yisa-s.com/hakkimizda',
  },
}

export default function HakkimizdaPage() {
  return <HakkimizdaContent />
}
