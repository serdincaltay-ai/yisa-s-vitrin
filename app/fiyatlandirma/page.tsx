import FiyatlandirmaContent from './FiyatlandirmaContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Fiyatlandırma',
  description:
    'YİSA-S paketleri: Standart, Standart + 1.500 Token ve Standart + 2.500 Token. Tek seferlik lisans + AI token paketi ile ihtiyacınıza uygun planı seçin.',
  path: '/fiyatlandirma',
})

export default function FiyatlandirmaPage() {
  return <FiyatlandirmaContent />
}
