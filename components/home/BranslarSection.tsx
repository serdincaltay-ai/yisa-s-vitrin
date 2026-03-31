'use client'

import { motion } from 'framer-motion'
import {
  Dumbbell,
  Waves,
  CircleDot,
  Volleyball,
  Target,
  Activity,
  Trophy,
  Zap,
  Medal,
} from 'lucide-react'

const BRANSLAR = [
  { name: 'Artistik Jimnastik', icon: CircleDot },
  { name: 'Ritmik Jimnastik', icon: Medal },
  { name: 'Trambolin', icon: Zap },
  { name: 'Yüzme', icon: Waves },
  { name: 'Futbol', icon: Target },
  { name: 'Basketbol', icon: Target },
  { name: 'Voleybol', icon: Volleyball },
  { name: 'Tenis', icon: CircleDot },
  { name: 'Masa Tenisi', icon: CircleDot },
  { name: 'Atletizm', icon: Activity },
  { name: 'Boks', icon: Trophy },
  { name: 'Taekwondo', icon: Zap },
  { name: 'Judo', icon: Dumbbell },
]

export default function BranslarSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0f3460]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
        >
          Hangi Branşlarda?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center mb-12"
        >
          YİSA-S ile birçok branşta değerlendirme ve yönetim.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {BRANSLAR.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
              className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 py-4 px-3 min-h-[44px] touch-manipulation hover:border-[#00d4ff]/30 hover:bg-white/10 transition-all"
            >
              <b.icon className="w-6 h-6 text-[#00d4ff] mb-2 flex-shrink-0" aria-hidden />
              <span className="text-slate-300 text-xs sm:text-sm text-center font-medium leading-tight">
                {b.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
