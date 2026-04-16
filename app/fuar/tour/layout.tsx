import { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: '90 Saniyede YİSA-S — Fuar Demo Turu',
  description:
    'YİSA-S platformunu 90 saniyede keşfedin. Fuarda otomatik başlayan interaktif tur ile 900 alan değerlendirme, 6 AI motoru ve PHV takibini tanıyın.',
  path: '/fuar/tour',
})

export default function FuarTourLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
