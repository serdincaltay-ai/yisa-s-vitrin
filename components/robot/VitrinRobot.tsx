'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Building2, TrendingUp, HelpCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const NEON_CYAN = '#00d4ff'
const NEON_PINK = '#e94560'

type PersonaKey = 'salon' | 'yatirimci' | 'merak' | null

const PERSONA_RESPONSES: Record<
  Exclude<PersonaKey, null>,
  { title: string; text: string; cta: { label: string; href: string } }
> = {
  salon: {
    title: 'Salon Sahibi misiniz?',
    text: 'YİSA-S ile tesisinizde sporcu takibi, yoklama, ödeme ve veli iletişimini tek platformdan yönetin. 900 alan değerlendirme ve 6 AI motoru ile fark yaratın.',
    cta: { label: 'Demo Talep Et', href: '/demo' },
  },
  yatirimci: {
    title: 'Yatırımcı mısınız?',
    text: 'Bölgesel tekel hakkı ile YİSA-S bayisi olun. ₺50.000 giriş bedeli, kapsamlı eğitim ve teknik destek ile hızlı ROI elde edin.',
    cta: { label: 'Bayilik Başvurusu', href: '/franchise' },
  },
  merak: {
    title: 'Merak mı ediyorsunuz?',
    text: 'YİSA-S, çocuk sporcuların gelişimini 900 farklı alanda takip eden, büyüme plağı koruması yapan ve 6 yapay zeka motoruyla analiz eden bir platformdur.',
    cta: { label: 'Özellikleri Keşfet', href: '/ozellikler' },
  },
}

export default function VitrinRobot() {
  const [open, setOpen] = useState(false)
  const [persona, setPersona] = useState<PersonaKey>(null)

  return (
    <>
      {/* Floating robot toggle */}
      <button
        onClick={() => {
          setOpen(!open)
          if (open) setPersona(null)
        }}
        className="fixed bottom-6 left-6 z-[60] w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
        style={{
          background: open
            ? 'rgba(255,255,255,0.08)'
            : `linear-gradient(135deg, ${NEON_CYAN}, ${NEON_PINK})`,
          boxShadow: open
            ? 'none'
            : `0 0 24px ${NEON_CYAN}40, 0 0 48px ${NEON_PINK}20`,
        }}
        aria-label={open ? 'Robotu kapat' : 'Robotu aç'}
      >
        {open ? (
          <X className="w-5 h-5 text-white/60" />
        ) : (
          /* Simple CSS robot face */
          <div className="relative w-10 h-10">
            {/* Head */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${NEON_CYAN}30, ${NEON_PINK}30)`,
                border: `1.5px solid ${NEON_CYAN}60`,
              }}
            />
            {/* Eyes */}
            <div className="absolute top-2.5 left-2 w-2 h-2 rounded-full animate-pulse"
              style={{ background: NEON_CYAN, boxShadow: `0 0 6px ${NEON_CYAN}` }} />
            <div className="absolute top-2.5 right-2 w-2 h-2 rounded-full animate-pulse"
              style={{ background: NEON_CYAN, boxShadow: `0 0 6px ${NEON_CYAN}` }} />
            {/* Mouth */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full"
              style={{ background: `${NEON_PINK}80` }} />
            {/* Antenna */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 rounded-full"
              style={{ background: NEON_CYAN }} />
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full animate-ping"
              style={{ background: `${NEON_CYAN}60` }} />
          </div>
        )}
      </button>

      {/* Robot panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 left-6 z-[60] w-[340px] sm:w-[380px] rounded-2xl border overflow-hidden"
            style={{
              background: 'rgba(10, 15, 30, 0.97)',
              backdropFilter: 'blur(20px)',
              borderColor: `${NEON_CYAN}25`,
              boxShadow: `0 0 40px ${NEON_CYAN}10, 0 8px 32px rgba(0,0,0,0.5)`,
            }}
          >
            {/* Robot face header */}
            <div
              className="relative px-6 py-5 flex items-center gap-4"
              style={{
                background: `linear-gradient(135deg, ${NEON_CYAN}08, ${NEON_PINK}08)`,
                borderBottom: `1px solid ${NEON_CYAN}15`,
              }}
            >
              {/* Animated robot face */}
              <div className="relative w-12 h-12 shrink-0">
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${NEON_CYAN}20, ${NEON_PINK}20)`,
                    border: `2px solid ${NEON_CYAN}40`,
                  }}
                />
                <div className="absolute top-3 left-2.5 w-2.5 h-2.5 rounded-full"
                  style={{ background: NEON_CYAN, boxShadow: `0 0 8px ${NEON_CYAN}`, animation: 'pulse 2s infinite' }} />
                <div className="absolute top-3 right-2.5 w-2.5 h-2.5 rounded-full"
                  style={{ background: NEON_CYAN, boxShadow: `0 0 8px ${NEON_CYAN}`, animation: 'pulse 2s infinite 0.3s' }} />
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-1.5 rounded-full"
                  style={{ background: `${NEON_PINK}60` }} />
              </div>

              {/* Speech bubble */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/90 leading-relaxed">
                  Merhaba, ben <span className="font-semibold" style={{ color: NEON_CYAN }}>YİSA-S</span>.
                  Tesisinizi yönetebilirim...
                </p>
              </div>
            </div>

            {/* Content area */}
            <div className="p-5">
              <AnimatePresence mode="wait">
                {!persona ? (
                  <motion.div
                    key="buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <p className="text-xs text-white/40 mb-3">Size nasıl yardımcı olabilirim?</p>
                    <button
                      onClick={() => setPersona('salon')}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-white/90 transition-all hover:scale-[1.02]"
                      style={{
                        background: `${NEON_CYAN}08`,
                        border: `1px solid ${NEON_CYAN}20`,
                      }}
                    >
                      <Building2 size={18} style={{ color: NEON_CYAN }} />
                      Salon sahibiyim
                    </button>
                    <button
                      onClick={() => setPersona('yatirimci')}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-white/90 transition-all hover:scale-[1.02]"
                      style={{
                        background: `${NEON_PINK}08`,
                        border: `1px solid ${NEON_PINK}20`,
                      }}
                    >
                      <TrendingUp size={18} style={{ color: NEON_PINK }} />
                      Yatırımcıyım
                    </button>
                    <button
                      onClick={() => setPersona('merak')}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-white/90 transition-all hover:scale-[1.02]"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <HelpCircle size={18} className="text-white/60" />
                      Merak ediyorum
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={persona}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <h3 className="text-base font-semibold text-white">
                      {PERSONA_RESPONSES[persona].title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {PERSONA_RESPONSES[persona].text}
                    </p>
                    <div className="flex gap-2 pt-1">
                      <Link
                        href={PERSONA_RESPONSES[persona].cta.href}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:brightness-110"
                        style={{
                          background: `linear-gradient(135deg, ${NEON_CYAN}, ${NEON_PINK})`,
                        }}
                      >
                        {PERSONA_RESPONSES[persona].cta.label}
                        <ArrowRight size={16} />
                      </Link>
                      <button
                        onClick={() => setPersona(null)}
                        className="px-4 py-3 rounded-xl text-sm text-white/60 border border-white/10 hover:bg-white/5 transition-colors"
                      >
                        Geri
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
