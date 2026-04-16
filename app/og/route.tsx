import { ImageResponse } from 'next/og'
import { BRAND } from '@/lib/knowledge/yisas'

export const runtime = 'edge'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || `${BRAND.name} Kurumsal Yazılım Platformu`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background:
            'linear-gradient(140deg, rgba(6,10,19,1) 0%, rgba(15,23,42,1) 55%, rgba(26,32,59,1) 100%)',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '999px',
              background: '#818cf8',
              boxShadow: '0 0 18px rgba(129, 140, 248, 0.8)',
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700 }}>{BRAND.name}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.12, maxWidth: '1040px' }}>
            {title}
          </div>
          <div style={{ fontSize: 30, color: '#cbd5e1', maxWidth: '980px' }}>{BRAND.description}</div>
        </div>
      </div>
    ),
    size
  )
}
