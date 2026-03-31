import { NextRequest } from 'next/server'
import { corsOptions, proxyToApp } from '@/lib/app-api'

/**
 * POST /api/demo — MultiStepDemoForm proxy
 * Vitrin demo formu bu endpoint'e POST yapar.
 * İstek patron API'sine (app.yisa-s.com/api/demo-requests) proxy edilir.
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
