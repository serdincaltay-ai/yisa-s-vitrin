// /app/sitemap.ts
import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }> = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/ozellikler', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/fiyatlandirma', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/demo', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/hakkimizda', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/fuar', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/fuar/tour', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/demo/tesekkurler', changeFrequency: 'monthly', priority: 0.4 },
    { path: '/kvkk', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/gizlilik', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/kullanim-sartlari', changeFrequency: 'yearly', priority: 0.3 },
  ]

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
