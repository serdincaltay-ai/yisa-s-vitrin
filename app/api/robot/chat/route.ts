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
Standart paket $3.000 tek seferlik lisans. Token paketleri ile AI ozelliklerini etkinlestirebilirsiniz. Demo talep edebilirsiniz.`,

  merak: `YiSA-S, cocuk sporcularin gelisimini 900 farkli alanda takip eden, 
buyume plagi korumasi yapan ve 6 yapay zeka motoruyla analiz eden bir platformdur. 
Veli paneli, antrenor paneli, yoklama sistemi, odeme takibi ve robot asistan icerir. 
Detayli bilgi icin demo talep edebilirsiniz.`,
}

const GENERAL_RESPONSES: Record<string, string> = {
  merhaba: 'Merhaba! Ben YiSA-S robot asistaniyim. Size nasil yardimci olabilirim? Ozellikler, fiyatlar veya demo hakkinda soru sorabilirsiniz.',
  fiyat: 'Paketlerimiz: Standart ($3.000 tek sefer — temel yazilim), Standart + 1.500 Token ($3.000 + 1.500 token), Standart + 2.500 Token ($3.000 + 2.500 token). 2 token = 1 TL. Detay icin Fiyatlandirma kartina tiklayabilirsiniz.',
  demo: 'Demo talep etmek icin Demo kartina tiklayabilir veya dogrudan formu doldurabilirsiniz. 30 dakikalik canli gosterim yapiyoruz.',
  ozellik: 'YiSA-S: 900 alan degerlendirme, PHV buyume takibi, 6 AI motoru (CELF, ASK, Mutfak, Havuz, Kasa, Guvenlik), veli paneli, antrenor paneli, robot asistan.',
  sporcu: 'YiSA-S ile sporcularinizi 900 farkli alanda takip edebilir, buyume plagi durumlarini izleyebilir ve kisisellestirilmis antrenman programlari olusturabilirsiniz.',
  randevu: 'Demo randevusu almak icin Demo kartindan formu doldurun veya info@yisa-s.com adresine yazin. 30 dakikalik ucretsiz gosterim yapiyoruz.',
  cocuk: 'YiSA-S, cocugunuzun spor gelisimini 900 farkli alanda takip eder. Veli panelinden yoklama, odeme ve gelisim raporlarini gorebilirsiniz.',
  veli: 'Veli paneline giris icin kayit sirasinda verilen telefon numaranizi ve son 4 haneyi kullanabilirsiniz. Detay icin tesisinize danisabilirsiniz.',
  tesis: 'YiSA-S ile tesisinizi dijitallestirin: sporcu kayit, yoklama, odeme takibi, antrenor yonetimi, veli iletisimi ve AI destekli analizler tek platformda.',
}

function generateReply(message: string, persona?: string): string {
  // Anahtar kelime eslestirme (once mesaji kontrol et)
  const lower = message.toLowerCase()
  if (lower) {
    for (const [keyword, response] of Object.entries(GENERAL_RESPONSES)) {
      if (lower.includes(keyword)) {
        return response
      }
    }
  }

  // Persona bazli yanit (mesajda anahtar kelime bulunamazsa)
  if (persona && PERSONA_KNOWLEDGE[persona]) {
    return PERSONA_KNOWLEDGE[persona]
  }

  // Varsayilan yanit
  return 'Merhaba! Ben YiSA-S robot asistaniyim. Ozellikler, fiyatlar veya demo hakkinda soru sorabilirsiniz. Size yardimci olmaktan mutluluk duyarim!'
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
