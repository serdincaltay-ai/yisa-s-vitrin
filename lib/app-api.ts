/**
 * Centralized helper for vitrin-to-app API requests.
 * Vitrin (yisa-s.com) acts as a CORS proxy for the app backend (app.yisa-s.com).
 */

import { NextResponse } from 'next/server'

const DEFAULT_APP_API_BASE = 'https://app.yisa-s.com'

export const APP_API_BASE = (
  process.env.NEXT_PUBLIC_APP_API_URL || DEFAULT_APP_API_BASE
).replace(/\/$/, '')

const ALLOWED_ORIGINS = [
  'https://yisa-s.com',
  'https://www.yisa-s.com',
  process.env.NEXT_PUBLIC_SITE_URL,
].filter(Boolean) as string[]

function normalizePath(path: string): string {
  if (!path) return '/'
  return path.startsWith('/') ? path : `/${path}`
}

export function buildAppApiUrl(path: string): string {
  return `${APP_API_BASE}${normalizePath(path)}`
}

/** Simple fetch helper (kept for backward compat) */
export async function fetchAppApi(path: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers)
  if (!headers.has('Content-Type') && options.body !== undefined) {
    headers.set('Content-Type', 'application/json')
  }

  return fetch(buildAppApiUrl(path), {
    ...options,
    headers,
    cache: options.cache ?? 'no-store',
  })
}

/** Standard CORS headers for proxy responses */
export function corsHeaders(requestOrigin?: string | null): Record<string, string> {
  const origin =
    requestOrigin && ALLOWED_ORIGINS.includes(requestOrigin)
      ? requestOrigin
      : ALLOWED_ORIGINS[0]

  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}

/** Preflight (OPTIONS) response with CORS headers */
export function corsOptions(requestOrigin?: string | null): NextResponse {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(requestOrigin),
  })
}

/** Attach CORS headers to an existing NextResponse */
export function withCors(
  response: NextResponse,
  requestOrigin?: string | null
): NextResponse {
  const headers = corsHeaders(requestOrigin)
  for (const [key, value] of Object.entries(headers)) {
    response.headers.set(key, value)
  }
  return response
}

/** Proxy a request to the app backend and return the response with CORS headers */
export async function proxyToApp(
  path: string,
  options: RequestInit = {},
  requestOrigin?: string | null
): Promise<NextResponse> {
  const headers = new Headers(options.headers)
  if (!headers.has('Content-Type') && options.body !== undefined) {
    headers.set('Content-Type', 'application/json')
  }

  try {
    const upstream = await fetch(buildAppApiUrl(path), {
      ...options,
      headers,
      cache: 'no-store',
    })

    const body = await upstream.text()
    const res = new NextResponse(body, {
      status: upstream.status,
      headers: { 'Content-Type': upstream.headers.get('Content-Type') || 'application/json' },
    })
    return withCors(res, requestOrigin)
  } catch (err) {
    console.error(`[app-api] Proxy error for ${path}:`, err)
    const res = NextResponse.json(
      { error: 'Üst sunucuya ulaşılamadı.' },
      { status: 502 }
    )
    return withCors(res, requestOrigin)
  }
}
