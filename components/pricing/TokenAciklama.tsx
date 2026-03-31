'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sprout, TrendingDown, Package } from 'lucide-react'

const NEON_CYAN = '#00d4ff'
const NEON_PINK = '#e94560'

const TOKEN_TIERS = [
  { students: '1–50', costPerToken: '$0.15', monthly: '1.000 tohum', saving: '' },
  { students: '51–150', costPerToken: '$0.10', monthly: '3.000 tohum', saving: '%30 tasarruf' },
  { students: '151–300', costPerToken: '$0.06', monthly: '10.000 tohum', saving: '%60 tasarruf' },
  { students: '300+', costPerToken: '$0.04', monthly: 'Özel anlaşma', saving: '%76 tasarruf' },
]

const TOKEN_FAQ = [
  {
    q: 'Tohum (token) nedir?',
    a: 'Tohum, YİSA-S platformundaki AI işlemleri için kullanılan birimdir. Sporcu analizi, rapor oluşturma, PHV hesaplama gibi işlemler tohum tüketir.',
  },
  {
    q: 'Kullanılmayan tohumlar ne olur?',
    a: 'Kullanılmayan tohumlar bir sonraki aya devreder. Hiçbir tohum boşa gitmez.',
  },
  {
    q: 'Tohumum biterse ne olur?',
    a: 'Ek tohum paketi satın alabilirsiniz. Temel işlevler (yoklama, ödeme takibi vb.) tohum tüketmez.',
  },
  {
    q: 'Hangi işlemler tohum tüketir?',
    a: 'AI analiz raporları, 900 alan değerlendirme hesaplaması, PHV takibi, görsel analiz ve otomatik veli bildirimleri tohum tüketir.',
  },
  {
    q: 'Ek paket satın alabilir miyim?',
    a: 'Evet. İhtiyaç duyduğunuz kadar ek tohum paketi satın alabilirsiniz. Parça parça alım mümkündür.',
  },
]

export default function TokenAciklama() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="space-y-16">
      {/* Tohum Nedir? Infographic */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-white mb-3">
            <span style={{ color: NEON_CYAN }}>Tohum</span> Nedir?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            YİSA-S&apos;in AI motorlarını besleyen birimdir. Daha fazla sporcu, daha düşük maliyet.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Sprout,
              title: 'Tohum = AI Kredisi',
              desc: 'Her AI analizi, rapor ve değerlendirme tohum tüketir. Temel işlevler ücretsizdir.',
              color: NEON_CYAN,
            },
            {
              icon: TrendingDown,
              title: 'Hacim Arttıkça Ucuzlar',
              desc: 'Öğrenci sayısı arttıkça tohum başına maliyet %76\'ya kadar düşer.',
              color: NEON_PINK,
            },
            {
              icon: Package,
              title: 'Ek Paket Al',
              desc: 'Tohumunuz biterse parça parça ek paket satın alabilirsiniz. Devreden tohumlar kaybolmaz.',
              color: '#10B981',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl p-6 text-center"
              style={{
                background: `${item.color}06`,
                border: `1px solid ${item.color}20`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${item.color}15` }}
              >
                <item.icon size={24} style={{ color: item.color }} />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cost Table */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Öğrenci Arttıkça Maliyet Düşer
          </h2>
          <p className="text-slate-400 text-sm">Tohum başına maliyet tablosu</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-xl overflow-hidden border border-slate-700/50"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-slate-800/80">
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Öğrenci Sayısı
                </th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Tohum / Birim
                </th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Aylık Tohum
                </th>
                <th className="px-5 py-3.5 text-right text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Tasarruf
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {TOKEN_TIERS.map((tier, i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-800/40 transition-colors"
                >
                  <td className="px-5 py-4 text-sm text-white font-medium">{tier.students}</td>
                  <td className="px-5 py-4 text-sm" style={{ color: NEON_CYAN }}>{tier.costPerToken}</td>
                  <td className="px-5 py-4 text-sm text-slate-300">{tier.monthly}</td>
                  <td className="px-5 py-4 text-sm text-right">
                    {tier.saving ? (
                      <span
                        className="px-2 py-1 rounded-md text-xs font-medium"
                        style={{ background: `${NEON_PINK}15`, color: NEON_PINK }}
                      >
                        {tier.saving}
                      </span>
                    ) : (
                      <span className="text-slate-500">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="text-center text-xs text-slate-500 mt-4">
          * Kullanılmayan tohumlar bir sonraki aya devreder
        </p>
      </section>

      {/* FAQ Accordion */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Sık Sorulan Sorular</h2>
          <p className="text-slate-400 text-sm">Tohum sistemi hakkında merak edilenler</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {TOKEN_FAQ.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-slate-700/50 overflow-hidden"
              style={{
                background:
                  openFaq === i ? `rgba(0, 212, 255, 0.03)` : 'rgba(30, 41, 59, 0.3)',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-white">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                    openFaq === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-4"
                >
                  <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
