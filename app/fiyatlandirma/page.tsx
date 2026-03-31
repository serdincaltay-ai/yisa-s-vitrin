// /app/fiyatlandirma/page.tsx
import { Metadata } from 'next'
import FiyatlandirmaContent from './FiyatlandirmaContent'

export const metadata: Metadata = {
  title: 'Fiyatlandırma',
  description: 'YİSA-S paketleri: Standart, Orta ve Premium. Token tabanlı fiyatlandırma ile ihtiyacınıza uygun planı seçin.',
  openGraph: {
    title: 'YİSA-S Fiyatlandırma — Standart, Orta, Premium',
    description: 'Token tabanlı fiyatlandırma. 14 gün ücretsiz deneme. Kullanılmayan tohumlar bir sonraki aya devreder.',
    url: 'https://yisa-s.com/fiyatlandirma',
  },
}

export default function FiyatlandirmaPage() {
  return <FiyatlandirmaContent />
}
