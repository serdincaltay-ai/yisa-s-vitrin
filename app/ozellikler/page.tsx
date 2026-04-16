import OzelliklerContent from './OzelliklerContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Özellikler',
  description:
    '900 alan değerlendirme, 6 AI motoru, PHV takibi ve 10 branş desteği ile YİSA-S özelliklerini keşfedin.',
  path: '/ozellikler',
})

export default function OzelliklerPage() {
  return <OzelliklerContent />
}
