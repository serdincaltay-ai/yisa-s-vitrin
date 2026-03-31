'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bot, ArrowRight } from 'lucide-react'

export default function RobotFaceSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, #0f3460/20% 50%, transparent 100%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Avatar çerçeve — yuvarlak, neon çizgiler */}
          <div className="relative mb-8 group">
            <div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center border-2 transition-all duration-300"
              style={{
                borderColor: 'rgba(0, 212, 255, 0.5)',
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.3), inset 0 0 30px rgba(0, 212, 255, 0.05)',
                background: 'radial-gradient(circle at 30% 30%, #0f3460, #0a0a1a)',
              }}
            >
              <Bot className="w-16 h-16 sm:w-20 sm:h-20 text-[#00d4ff]" strokeWidth={1.5} aria-hidden />
              {/* Konuşma hissi — pulse */}
              <span className="absolute inset-0 rounded-full border-2 border-[#00d4ff]/30 animate-robot-pulse pointer-events-none" aria-hidden />
            </div>
            {/* Dış halka pulse */}
            <div
              className="absolute inset-[-4px] rounded-full border border-[#e94560]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: '0 0 25px rgba(233, 69, 96, 0.2)' }}
            />
          </div>

          <p className="text-slate-300 text-center text-lg sm:text-xl max-w-md mb-6">
            Ben YİSA-S. Spor okulunuzu yönetmenize yardımcı oluyorum.
          </p>

          <Link
            href="/ozellikler"
            className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-xl font-medium text-white border-2 border-[#00d4ff]/50 transition-all duration-300 hover:border-[#00d4ff] hover:shadow-neon-cyan"
          >
            Detaylı Tanı
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
