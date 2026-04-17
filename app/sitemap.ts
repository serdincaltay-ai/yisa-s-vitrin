import type { MetadataRoute } from 'next'

const SITE_URL = 'https://yisa-s.com'

const BLOG_SLUGS = [
  '900-alan-degerlendirme-sistemi-nasil-calisir',
  'cocuk-sporcularda-veri-guvenligi-ve-kvkk',
  'phv-nedir-cocuk-sporcularda-buyume-plagi-korunmasi',
  'yapay-zeka-spor-egitiminde-nasil-kullanilir',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...BLOG_SLUGS.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
