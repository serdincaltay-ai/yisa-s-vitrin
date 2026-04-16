import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

const GEMINI_MODEL = 'gemini-2.0-flash'
const GEMINI_API_BASE =
  'https://generativelanguage.googleapis.com/v1beta/models'

function buildSystemPrompt(): string {
  return [
    'Sen YİSA-S vitrininin halka açık robot asistanısın.',
    'Cevapların Türkçe, net, samimi ve kısa olmalı.',
    'Öncelikli hedefin kullanıcıyı /demo formuna yönlendirmek.',
    'Fiyat bilgisinde 3 paket + 3000 USD aktivasyon modelini doğru anlat.',
    'Teknik veya emin olmadığın konuda uydurma yapma, kısa yönlendirme ver.',
    'Tehlikeli, zararlı veya uygunsuz içerik taleplerini reddet.',
  ].join(' ')
}

async function askGemini(message: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GEMINI_API_KEY
  if (!apiKey) {
    throw new Error('Gemini API anahtari tanimli degil.')
  }

  const url = `${GEMINI_API_BASE}/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(
    apiKey
  )}`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: buildSystemPrompt() }],
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: message }],
        },
      ],
      generationConfig: {
        temperature: 0.5,
        topP: 0.9,
        maxOutputTokens: 350,
      },
    }),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Gemini yanit hatasi: ${response.status}`)
  }

  const json = (await response.json()) as {
    candidates?: Array<{
      content?: {
        parts?: Array<{ text?: string }>
      }
    }>
  }

  const reply = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim()
  if (!reply) {
    throw new Error('Gemini yanit metni bos dondu.')
  }

  return reply
}

export async function POST(req: NextRequest) {
  const clientIp = getClientIp(req.headers)
  const rate = checkRateLimit(`robot:${clientIp}`, { limit: 10, windowMs: 60_000 })
  if (!rate.allowed) {
    return NextResponse.json(
      { error: 'Cok hizli istek gonderdiniz. Lutfen bir dakika bekleyin.' },
      { status: 429 }
    )
  }

  try {
    const body = (await req.json()) as { message?: unknown; persona?: unknown }
    const message = typeof body.message === 'string' ? body.message.trim() : ''

    if (!message) {
      return NextResponse.json(
        { error: 'Mesaj alani zorunludur.' },
        { status: 400 }
      )
    }

    const reply = await askGemini(message)
    return NextResponse.json({ ok: true, reply, mode: 'public' })
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Robot yaniti olusturulamadi. Lutfen tekrar deneyin.',
      },
      { status: 500 }
    )
  }
}
