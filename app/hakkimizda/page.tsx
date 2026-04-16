import HakkimizdaContent from './HakkimizdaContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Hakkımızda',
  description: 'YİSA-S ekibi, misyonumuz ve iletişim bilgileri.',
  path: '/hakkimizda',
})

export default function HakkimizdaPage() {
  return <HakkimizdaContent />
}
