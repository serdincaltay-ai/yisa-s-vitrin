"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

type VitrinSlot = {
  id: string
  sira_no: number
  sablon_id: string | null
  baslik: string
  onizleme_url: string | null
  aktif: boolean
}

export function VitrinCarousel() {
  const [slots, setSlots] = useState<VitrinSlot[]>([])
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(0)
  const { ref, visible } = useInView()
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    fetch("/api/vitrin")
      .then((r) => r.json())
      .then((d) => setSlots(d.data ?? []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const next = useCallback(() => {
    setActive((p) => (slots.length > 0 ? (p + 1) % slots.length : 0))
  }, [slots.length])

  const prev = useCallback(() => {
    setActive((p) => (slots.length > 0 ? (p - 1 + slots.length) % slots.length : 0))
  }, [slots.length])

  // Auto-advance every 5s
  useEffect(() => {
    if (slots.length <= 1) return
    timerRef.current = setInterval(next, 5000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [next, slots.length])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 5000)
  }, [next])

  if (loading) {
    return (
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center text-white/30 text-sm">
          Vitrin yükleniyor…
        </div>
      </section>
    )
  }

  if (slots.length === 0) return null

  const currentSlot = slots[active]

  return (
    <section className="py-16 md:py-24 relative" ref={ref}>
      <div
        className={`max-w-5xl mx-auto px-4 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Vitrin
          </h2>
          <p className="text-sm md:text-base text-white/50 mt-2 max-w-xl mx-auto">
            Onaylanmış şablonlar ve tasarımlar — spor okulunuz için hazır çözümler
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-8 bg-gradient-to-br from-[#818cf8]/10 via-transparent to-[#00d4ff]/10 rounded-3xl blur-2xl" />

          <div className="relative rounded-xl border border-white/10 bg-[#0a0f1a] shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#e94560]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <span className="text-[10px] text-white/30 font-mono">
                yisa-s.com/vitrin
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-400">
                  CANLI
                </span>
              </div>
            </div>

            {/* Slide content */}
            <div className="min-h-[280px] md:min-h-[300px] lg:min-h-[340px] flex flex-col items-center justify-center p-6 md:p-8 lg:p-10 relative">
              {/* Left/right navigation arrows */}
              {slots.length > 1 && (
                <>
                  <button
                    onClick={() => { prev(); resetTimer() }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all z-10"
                    aria-label="Önceki"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { next(); resetTimer() }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all z-10"
                    aria-label="Sonraki"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Slot preview */}
              <div className="text-center max-w-lg">
                <div className="mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#818cf8]/10 text-[#818cf8] border border-[#818cf8]/30">
                    Sıra #{currentSlot.sira_no}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {currentSlot.baslik}
                </h3>

                {/* Preview frame */}
                {currentSlot.onizleme_url ? (
                  <div className="rounded-lg border border-white/10 bg-white/5 overflow-hidden mt-4">
                    <iframe
                      src={currentSlot.onizleme_url}
                      title={currentSlot.baslik}
                      className="w-full h-48 md:h-64 border-0"
                      sandbox="allow-scripts"
                    />
                    <div className="flex items-center justify-between px-3 py-2 border-t border-white/5">
                      <span className="text-[10px] text-white/40 truncate">{currentSlot.onizleme_url}</span>
                      <a
                        href={currentSlot.onizleme_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-[#00d4ff] flex items-center gap-1 hover:underline"
                      >
                        Aç <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed border-white/10 bg-white/[0.02] p-8 mt-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#818cf8]/20 to-[#00d4ff]/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white/30 font-mono">
                        {currentSlot.sira_no}
                      </span>
                    </div>
                    <p className="text-sm text-white/40">
                      Şablon önizlemesi — yakında burada
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Dot indicators */}
            {slots.length > 1 && (
              <div className="flex items-center justify-center gap-2 py-3 border-t border-white/5 dot-indicator">
                {slots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setActive(i); resetTimer() }}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active
                        ? "w-6 bg-[#818cf8]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Slayt ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Slot quick-nav cards */}
        {slots.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2.5 lg:gap-3 mt-6">
            {slots.slice(0, 8).map((slot, i) => (
              <button
                key={slot.id}
                onClick={() => { setActive(i); resetTimer() }}
                className={`flex items-center gap-2 px-3 py-3 rounded-lg border transition-all text-left ${
                  i === active
                    ? "border-[#818cf8]/50 bg-[#818cf8]/10 text-white"
                    : "border-white/5 bg-white/[0.02] text-white/50 hover:text-white/80 hover:border-white/10"
                }`}
              >
                <span className="text-xs font-mono text-[#00d4ff] flex-shrink-0">
                  #{slot.sira_no}
                </span>
                <span className="text-xs truncate">{slot.baslik}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
