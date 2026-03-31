'use client'

import { motion } from 'framer-motion'
import { Building2, Settings, TrendingUp } from 'lucide-react'

const HIZMETLER = [
  {
    id: 'kuruyoruz',
    title: 'Kuruyoruz',
    description: 'Tesisinizi dijital altyapıyla kuruyoruz. Donanım ve yazılım entegrasyonu ile spor okulunuz bir günde operasyonel hale gelir.',
    icon: Building2,
  },
  {
    id: 'yonetiyoruz',
    title: 'Yönetiyoruz',
    description: 'Öğrenci, yoklama, aidat ve personel yönetimini tek platformda topluyoruz. Tüm verileriniz güvende ve erişilebilir.',
    icon: Settings,
  },
  {
    id: 'gelistiriyoruz',
    title: 'Geliştiriyoruz',
    description: 'AI analiz, raporlama ve sürekli güncelleme ile sisteminizi geleceğe taşıyoruz. Her gün daha iyiye.',
    icon: TrendingUp,
  },
]

export default function HizmetlerSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0a0a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
        >
          Ne Yapıyoruz?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-12"
        >
          Spor okulunuz için uçtan uca çözüm sunuyoruz.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {HIZMETLER.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl p-6 sm:p-8 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#00d4ff]/30 hover:bg-white/[0.08] hover:shadow-neon-cyan"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 border border-[#00d4ff]/20 text-[#00d4ff] group-hover:border-[#00d4ff]/50 group-hover:shadow-neon-cyan transition-all"
                style={{ minWidth: 44, minHeight: 44 }}
              >
                <item.icon className="w-7 h-7" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
