import type { Metadata } from 'next'
import { BRAND } from '@/lib/knowledge/yisas'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://yisa-s.com').replace(
  /\/$/,
  ''
)

export function buildOgImageUrl(title: string): string {
  return `${SITE_URL}/og?title=${encodeURIComponent(title)}`
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
}

export function createPageMetadata(input: PageMetadataInput): Metadata {
  const fullTitle = `${input.title} | ${BRAND.name}`
  const absoluteUrl = `${SITE_URL}${input.path}`
  const imageUrl = buildOgImageUrl(fullTitle)

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url: absoluteUrl,
      siteName: BRAND.name,
      locale: 'tr_TR',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: input.description,
      images: [imageUrl],
    },
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND.name,
  legalName: BRAND.fullName,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: BRAND.email,
  telephone: BRAND.phone,
  sameAs: ['https://www.instagram.com/yisas_official'],
}

export const sportsActivityLocationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: `${BRAND.name} Spor Okulu Yönetim Platformu`,
  url: SITE_URL,
  description: BRAND.description,
  telephone: BRAND.phone,
  email: BRAND.email,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TR',
    addressLocality: 'İstanbul',
  },
}
