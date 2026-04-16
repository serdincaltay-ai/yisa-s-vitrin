import { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Fuar Hesaplama',
  description:
    'YİSA-S fuar katılım maliyeti hesaplama aracı. Stand, ekipman ve personel giderlerini planlayın.',
  path: '/fuar',
})

export default function FuarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
