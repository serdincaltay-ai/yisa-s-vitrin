import { NextRequest } from 'next/server'
import { corsOptions, proxyToApp } from '@/lib/app-api'

/**
 * CORS proxy for demo requests → app.yisa-s.com/api/demo-requests
 */

export async function OPTIONS(request: NextRequest) {
  return corsOptions(request.headers.get('origin'))
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  const body = await request.text()

  return proxyToApp('/api/demo-requests', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json' },
  }, origin)
}

export async function GET(request: NextRequest) {
  const origin = request.headers.get('origin')
  const { searchParams } = new URL(request.url)
  const qs = searchParams.toString()
  const path = qs ? `/api/demo-requests?${qs}` : '/api/demo-requests'

  return proxyToApp(path, { method: 'GET' }, origin)
}
