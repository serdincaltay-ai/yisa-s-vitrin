'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { BRAND } from '@/lib/knowledge/yisas'

const SLIDES = [
  'Tesisinizi Kuralım, Siz Yönetin',
  'Tüm Verileri Size Sunalım',
  'Dijital Dönüşümün Adresi',
]

export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Arka plan: koyu gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a1a 0%, #0f3460 40%, #0a0a1a 100%)',
        }}
      />
      {/* Animasyonlu grid (CSS only) */}
      <div
        className="absolute inset-0 opacity-[0.08] animate-grid-move"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Slider / carousel üstte */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <div className="relative rounded-xl bg-[#0f3460]/40 border border-[#00d4ff]/20 px-4 py-3 sm:px-6 sm:py-4 min-h-[44px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={slideIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-[#00d4ff] text-center text-sm sm:text-base font-medium"
              >
                {SLIDES[slideIndex]}
              </motion.p>
            </AnimatePresence>
            <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex gap-1.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slayt ${i + 1}`}
                  onClick={() => setSlideIndex(i)}
                  className={`w-2 h-2 rounded-full min-w-[8px] min-h-[8px] transition-colors touch-manipulation ${
                    i === slideIndex ? 'bg-[#00d4ff]' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* YİSA-S logosu — neon glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            style={{
              textShadow: '0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.3)',
            }}
          >
            {BRAND.name}
          </span>
          <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#00d4ff]" aria-hidden />
        </motion.div>

        {/* Ana başlık */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight mb-4"
        >
          Teknolojiyi Spora Başlattık
        </motion.h1>

        {/* Alt başlık */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-lg sm:text-xl text-[#00d4ff]/90 text-center mb-2"
        >
          Tuzla Cimnastik Spor Kulübü & Hobi GYM
        </motion.p>

        {/* Açıklama */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-10"
        >
          AI Destekli Spor Okulu Yönetim Platformu
        </motion.p>

        {/* CTA — Demo Talep Et, neon #e94560 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex justify-center"
        >
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 min-h-[44px] min-w-[44px] px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:opacity-95"
            style={{
              background: '#e94560',
              boxShadow: '0 0 20px rgba(233, 69, 96, 0.5), 0 0 40px rgba(233, 69, 96, 0.2)',
            }}
          >
            Demo Talep Et
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </div>

    </section>
  )
}
