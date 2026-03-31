/**
 * POST /api/robot/chat
 * Robot chat API — ziyaretci sorularina yanit verir
 * Body: { message: string, persona?: string }
 * Response: { ok: true, reply: string }
 */

import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const PERSONA_KNOWLEDGE: Record<string, string> = {
  salon: `YiSA-S, spor tesisleri icin gelistirilmis tam kapsamli bir yonetim sistemidir. 
Sporcu takibi, yoklama, odeme, veli iletisimi ve antrenor yonetimi tek platformdan yapilir. 
900 farkli alanda sporcu degerlendirmesi, PHV buyume plagi takibi ve 6 AI motoru ile fark yaratir. 
Baslangic paketi aylik 2.500 TL'den baslar. Demo talep edebilirsiniz.`,

  yatirimci: `YiSA-S bayilik sistemi bolgesel tekel hakki sunar. 
50.000 TL giris bedeli ile hazir is modeline sahip olursunuz. 
Kapsamli egitim, teknik destek ve pazarlama destegi saglanir. 
Ortalama 6 ayda yatirim geri donusu elde edilir. 
franchise@yisa-s.com adresinden basvuru yapabilirsiniz.`,

  merak: `YiSA-S, cocuk sporcularin gelisimini 900 farkli alanda takip eden, 
buyume plagi korumasi yapan ve 6 yapay zeka motoruyla analiz eden bir platformdur. 
Veli paneli, antrenor paneli, yoklama sistemi, odeme takibi ve robot asistan icerr. 
Detayli bilgi icin demo talep edebilirsiniz.`,
}

const GENERAL_RESPONSES: Record<string, string> = {
  merhaba: 'Merhaba! Ben YiSA-S robot asistaniyim. Size nasil yardimci olabilirim? Ozellikler, fiyatlar veya demo hakkinda soru sorabilirsiniz.',
  fiyat: 'Paketlerimiz: Baslangic 2.500 TL/ay (50 sporcu), Profesyonel 7.500 TL/ay (250 sporcu, 6 AI), Kurumsal 15.000 TL/ay (sinirsiz). Detay icin Fiyatlandirma kartina tiklayabilirsiniz.',
  demo: 'Demo talep etmek icin Demo kartina tiklayabilir veya dogrudan formu doldurabilirsiniz. 30 dakikalik canli gosterim yapiyoruz.',
  ozellik: 'YiSA-S: 900 alan degerlendirme, PHV buyume takibi, 6 AI motoru (CELF, ASK, Mutfak, Havuz, Kasa, Guvenlik), veli paneli, antrenor paneli, robot asistan.',
  franchise: 'Bayilik icin: 50.000 TL giris bedeli, bolgesel tekel hakki, kapsamli egitim ve destek. franchise@yisa-s.com adresine yazabilirsiniz.',
  sporcu: 'YiSA-S ile sporcularinizi 900 farkli alanda takip edebilir, buyume plagi durumlarini izleyebilir ve kisisellestirilmis antrenman programlari olusturabilirsiniz.',
}

function generateReply(message: string, persona?: string): string {
  // Persona bazli yanit
  if (persona && PERSONA_KNOWLEDGE[persona]) {
    return PERSONA_KNOWLEDGE[persona]
  }

  // Anahtar kelime eslestirme
  const lower = message.toLowerCase()
  for (const [keyword, response] of Object.entries(GENERAL_RESPONSES)) {
    if (lower.includes(keyword)) {
      return response
    }
  }

  // Varsayilan yanit
  return 'Merhaba! Ben YiSA-S robot asistaniyim. Ozellikler, fiyatlar, demo veya franchise hakkinda soru sorabilirsiniz. Size yardimci olmaktan mutluluk duyarim!'
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const persona = typeof body.persona === 'string' ? body.persona : undefined

    if (!message && !persona) {
      return NextResponse.json({ error: 'Mesaj zorunludur' }, { status: 400 })
    }

    const reply = generateReply(message, persona)
    return NextResponse.json({ ok: true, reply })
  } catch {
    return NextResponse.json({ error: 'Sunucu hatasi' }, { status: 500 })
  }
}
