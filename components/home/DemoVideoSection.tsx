'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function DemoVideoSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0a0a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border-2 border-white/20 overflow-hidden bg-[#0f3460]/30"
        >
          {/* TV ekranı placeholder */}
          <div className="aspect-video flex items-center justify-center relative min-h-[200px]">
            <div className="absolute inset-0 flex items-center justify-center bg-[#0f3460]/40">
              <span className="text-slate-500 text-lg sm:text-xl">Demo Video Yakında</span>
            </div>
            {/* Play butonu — ortada, neon glow */}
            <button
              type="button"
              disabled
              aria-label="Demo video oynat"
              className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-2 border-[#00d4ff]/50 text-[#00d4ff] transition-all min-w-[44px] min-h-[44px] touch-manipulation"
              style={{
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.2)',
              }}
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1" fill="currentColor" aria-hidden />
            </button>
          </div>
          <p className="text-center text-slate-400 py-4 px-4 text-sm sm:text-base">
            Sistemimizi yakından tanıyın
          </p>
        </motion.div>
      </div>
    </section>
  )
}
