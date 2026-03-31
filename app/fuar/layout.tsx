import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fuar Hesaplama',
  description:
    'YİSA-S fuar katılım maliyeti hesaplama aracı. Stand, ekipman ve personel giderlerini planlayın.',
  openGraph: {
    title: 'YİSA-S Fuar Hesaplama',
    description: 'Fuar katılım maliyetinizi hesaplayın ve planlayın.',
    url: 'https://yisa-s.com/fuar',
  },
}

export default function FuarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
