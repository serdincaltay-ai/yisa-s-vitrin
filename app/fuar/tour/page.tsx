"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, QrCode, ChevronRight, Volume2, Mic } from "lucide-react"
import { SITE_INTEGRATION_LINKS } from "@/lib/knowledge/yisas"

const TOUR_DURATION_SEC = 90
const STEPS = [
  { title: "YİSA-S Nedir?", desc: "Yapay zeka destekli çocuk sporcu analiz ve spor okulu yönetim sistemi.", duration: 15 },
  { title: "900 Alan Değerlendirme", desc: "30 kategori × 30 alt alan ile Türkiye'nin en kapsamlı sporcu değerlendirmesi.", duration: 15 },
  { title: "6 AI Motoru", desc: "Claude, GPT, Gemini, LLaMA, Together ve Ollama ile analiz ve raporlama.", duration: 15 },
  { title: "PHV Takibi", desc: "Büyüme plağı koruması ile sakatlık önleme ve bilimsel antrenman planı.", duration: 15 },
  { title: "Veli & Eğitmen Paneli", desc: "Yoklama, aidat, gelişim raporu ve mesajlaşma tek platformda.", duration: 15 },
  { title: "Demo Talep Et", desc: "14 gün ücretsiz deneyin. Hemen aşağıdaki butondan veya ana siteden talep edin.", duration: 15 },
]

export default function FuarTourPage() {
  const [remaining, setRemaining] = useState(TOUR_DURATION_SEC)
  const [runId, setRunId] = useState(0)
  const [narrationEnabled, setNarrationEnabled] = useState(false)

  useEffect(() => {
    const startedAt = Date.now()
    const t = setInterval(() => {
      const elapsedSec = Math.floor((Date.now() - startedAt) / 1000)
      const nextRemaining = Math.max(TOUR_DURATION_SEC - elapsedSec, 0)
      setRemaining(nextRemaining)
      if (nextRemaining === 0) {
        clearInterval(t)
      }
    }, 250)
    return () => clearInterval(t)
  }, [runId])

  const stepIndex = Math.min(Math.floor((TOUR_DURATION_SEC - remaining) / 15), STEPS.length - 1)

  const tourUrl = typeof window !== "undefined" ? window.location.href : ""
  const qrUrl = tourUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(tourUrl)}`
    : ""
  const progress = ((TOUR_DURATION_SEC - remaining) / TOUR_DURATION_SEC) * 100

  const yenidenBaslat = () => {
    setRemaining(TOUR_DURATION_SEC)
    setRunId((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-20 pb-16">
      <div className="pt-0">
        <section className="px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#00d4ff]" />
                  <span className="text-xs font-mono text-[#00d4ff] uppercase tracking-wider">Fuar Demo Modu</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  90 Saniyede YİSA-S
                </h1>
                <p className="text-white/60 mb-8">
                  Fuarda bu sayfayı açtığınız anda tur otomatik başlar. Ziyaretçiler QR kodu okutup aynı akışı telefonundan izleyebilir.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#0f3460]/50 border border-[#00d4ff]/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-[#00d4ff] font-mono">{remaining}</span>
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Kalan süre</p>
                      <p className="text-white font-medium">saniye</p>
                    </div>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-2 bg-[#00d4ff] transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
                    <p className="text-xs font-mono text-[#00d4ff] uppercase tracking-wider mb-2">
                      Adım {stepIndex + 1} / {STEPS.length}
                    </p>
                    <h2 className="text-xl font-bold text-white mb-2">{STEPS[stepIndex].title}</h2>
                    <p className="text-white/70">{STEPS[stepIndex].desc}</p>
                  </div>

                  <div className="rounded-2xl border border-[#00d4ff]/25 bg-[#00d4ff]/5 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white flex items-center gap-2">
                          <Volume2 className="w-4 h-4 text-[#00d4ff]" />
                          Robot Sesli Anlatım Alanı
                        </p>
                        <p className="text-xs text-white/60 mt-1">
                          Bu alan şimdilik yer tutucu olarak çalışır. Sonraki sürümde adımlar otomatik olarak seslendirilecektir.
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setNarrationEnabled((prev) => !prev)}
                        className="border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10"
                      >
                        <Mic className="w-4 h-4 mr-2" />
                        {narrationEnabled ? "Yer Tutucu Açık" : "Yer Tutucu Kapalı"}
                      </Button>
                    </div>
                  </div>

                  {remaining === 0 && (
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 space-y-4">
                      <p className="text-emerald-400 font-medium">Tur tamamlandı.</p>
                      <div className="flex flex-wrap gap-3">
                        <Link href="/franchise">
                          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white">
                            Franchise Başvurusu
                            <ChevronRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={yenidenBaslat}
                          className="border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/10"
                        >
                          Turu Yeniden Başlat
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-64 shrink-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col items-center">
                <QrCode className="w-8 h-8 text-[#00d4ff]/70 mb-3" />
                <p className="text-xs text-white/50 uppercase tracking-wider mb-3">Fuar QR Kodu</p>
                {qrUrl ? (
                  <img src={qrUrl} alt="90 sn tur sayfası QR kodu" width={160} height={160} loading="lazy" className="w-40 h-40 rounded-lg bg-white" />
                ) : (
                  <div className="w-40 h-40 rounded-lg bg-white/10 flex items-center justify-center text-white/40 text-sm">
                    Yükleniyor...
                  </div>
                )}
                <p className="text-[10px] text-white/40 mt-3 text-center break-all max-w-[200px]">
                  Bu sayfanın linki
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/fuar">
                <Button variant="outline" className="border-white/20 text-white bg-transparent">
                  Fuar Hesaplama
                </Button>
              </Link>
              <a
                href={SITE_INTEGRATION_LINKS.patron.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-white/20 text-white bg-transparent">
                  Patron Paneli
                </Button>
              </a>
              <Link href={SITE_INTEGRATION_LINKS.tenant.href}>
                <Button variant="outline" className="border-white/20 text-white bg-transparent">
                  Tenant Sitesi Kur
                </Button>
              </Link>
              <Link href="/franchise">
                <Button className="bg-[#e94560] hover:bg-[#e94560]/90 text-white">
                  Franchise Başvurusu
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-white/20 text-white bg-transparent">
                  Ana Sayfa
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
