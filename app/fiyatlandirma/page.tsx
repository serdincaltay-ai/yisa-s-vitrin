// /app/fiyatlandirma/page.tsx
import { Metadata } from 'next'
import FiyatlandirmaContent from './FiyatlandirmaContent'

export const metadata: Metadata = {
  title: 'Fiyatlandırma',
  description: 'YİSA-S paketleri: Standart, Standart + 1.500 Token ve Standart + 2.500 Token. Tek seferlik lisans + AI token paketi ile ihtiyacınıza uygun planı seçin.',
  openGraph: {
    title: 'YİSA-S Fiyatlandırma — Standart, Standart + 1.500 Token, Standart + 2.500 Token',
    description: 'Tek seferlik $3.000 lisans + AI token paketi. 14 gün ücretsiz deneme. 2 token = 1 TL.',
    url: 'https://yisa-s.com/fiyatlandirma',
  },
}

export default function FiyatlandirmaPage() {
  return <FiyatlandirmaContent />
}
