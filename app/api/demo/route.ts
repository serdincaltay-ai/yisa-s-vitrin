import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabaseAdmin } from '@/lib/supabase-admin'

const PHONE_REGEX = /^[1-9][0-9]{9}$/
const PLATFORM_OWNER_EMAIL =
  process.env.PLATFORM_OWNER_EMAIL || process.env.PATRON_EMAIL || 'serdincaltay@gmail.com'
const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || 'YiSA-S Vitrin <onboarding@resend.dev>'

type DemoFormPayload = {
  name?: string
  phone?: string
  city?: string
  branch?: string
}

function toSafeText(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

async function sendPlatformOwnerEmail(data: Required<DemoFormPayload>): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return
  }

  const resend = new Resend(apiKey)
  await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: [PLATFORM_OWNER_EMAIL],
    subject: 'Yeni demo talebi alındı',
    text: [
      'YİSA-S vitrin üzerinden yeni demo talebi alındı.',
      '',
      `Ad Soyad: ${data.name}`,
      `Telefon: ${data.phone}`,
      `Şehir: ${data.city}`,
      `Branş: ${data.branch}`,
      '',
      'Kaynak: yisa-s-vitrin',
    ].join('\n'),
  })
}

async function insertDemoRequest(data: Required<DemoFormPayload>): Promise<null | string> {
  if (!supabaseAdmin) {
    return 'Sunucu yapılandırması eksik.'
  }

  const primaryPayload = {
    name: data.name,
    phone: data.phone,
    city: data.city,
    branch: data.branch,
    source: 'vitrin',
    status: 'new',
  }

  const { error } = await supabaseAdmin.from('demo_requests').insert(primaryPayload)
  if (!error) {
    return null
  }

  const legacyPayload = {
    name: data.name,
    email: `${data.phone}@demo.yisa-s.local`,
    phone: data.phone,
    company_name: data.city,
    interested_package: data.branch,
    message: `Şehir: ${data.city}\nBranş: ${data.branch}`,
    source: 'vitrin',
    utm_source: 'vitrin',
    status: 'new',
  }

  const { error: fallbackError } = await supabaseAdmin
    .from('demo_requests')
    .insert(legacyPayload)

  if (fallbackError) {
    return 'Demo talebi kaydedilemedi.'
  }

  return null
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 })
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as DemoFormPayload
    const name = toSafeText(body.name)
    const phone = toSafeText(body.phone)
    const city = toSafeText(body.city)
    const branch = toSafeText(body.branch)

    if (!name || !phone || !city || !branch) {
      return NextResponse.json(
        { error: 'Ad, telefon, şehir ve branş alanları zorunludur.' },
        { status: 400 }
      )
    }

    if (!PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { error: 'Telefon numarası başında 0 olmadan 10 hane olmalıdır.' },
        { status: 400 }
      )
    }

    const normalizedPayload: Required<DemoFormPayload> = {
      name,
      phone,
      city,
      branch,
    }

    const insertError = await insertDemoRequest(normalizedPayload)
    if (insertError) {
      return NextResponse.json({ error: insertError }, { status: 500 })
    }

    await sendPlatformOwnerEmail(normalizedPayload)

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'Demo talebi alınırken bir hata oluştu.' },
      { status: 500 }
    )
  }
}
