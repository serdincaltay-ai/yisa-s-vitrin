'use client'

import Script from 'next/script'

/**
 * ManyChat / üçüncü parti sohbet widget (B9).
 * Vercel’de `NEXT_PUBLIC_MANYCHAT_SCRIPT_URL` tanımlanınca yüklenir; .env’e Cursor ile yazılmaz.
 */
export default function ManyChatEmbed() {
  const src = process.env.NEXT_PUBLIC_MANYCHAT_SCRIPT_URL
  if (!src || src.length === 0) return null
  return <Script src={src} strategy="lazyOnload" />
}
