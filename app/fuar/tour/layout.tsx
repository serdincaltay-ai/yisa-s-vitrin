import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '90 Saniyede YİSA-S — Fuar Demo Turu',
  description:
    'YİSA-S platformunu 90 saniyede keşfedin. Fuarda otomatik başlayan interaktif tur ile 900 alan değerlendirme, 6 AI motoru ve PHV takibini tanıyın.',
  openGraph: {
    title: '90 Saniyede YİSA-S — Fuar Demo Turu',
    description: 'Fuarda otomatik başlayan interaktif demo turu.',
    url: 'https://yisa-s.com/fuar/tour',
  },
}

export default function FuarTourLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
