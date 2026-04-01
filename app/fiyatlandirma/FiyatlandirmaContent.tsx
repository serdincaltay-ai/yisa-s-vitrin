// /app/fiyatlandirma/FiyatlandirmaContent.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import PaketKarti from '@/components/pricing/PaketKarti'
import type { PaketData } from '@/components/pricing/PaketKarti'
import TokenAciklama from '@/components/pricing/TokenAciklama'
import { FRANCHISE } from '@/lib/knowledge/yisas'

const PAKETLER: PaketData[] = [
  {
    id: 'standart',
    name: 'Standart',
    price: 3000,
    currency: '$',
    period: 'tek sefer',
    studentLimit: '50 kullanıcı',
    tokenLimit: 'Token yok',
    popular: false,
    cta: 'Paket Seç',
    ctaHref: '/demo',
    features: [
      { text: 'Temel yazılım lisansı', included: true },
      { text: 'Kurulum ve yapılandırma', included: true },
      { text: 'Yoklama sistemi', included: true },
      { text: 'Ödeme takibi', included: true },
      { text: 'E-posta desteği', included: true },
      { text: 'Temel raporlama', included: true },
      { text: 'AI token paketi', included: false },
      { text: 'Gelişmiş analiz', included: false },
    ],
  },
  {
    id: 'profesyonel',
    name: 'Profesyonel',
    price: 3000,
    currency: '$',
    period: 'tek sefer',
    studentLimit: '150 kullanıcı',
    tokenLimit: '1.200 AI token',
    popular: true,
    cta: 'Paket Seç',
    ctaHref: '/demo',
    features: [
      { text: 'Standart paketin tüm özellikleri', included: true },
      { text: '1.200 AI token (600 TL değerinde)', included: true },
      { text: 'Gelişmiş raporlama', included: true },
      { text: '900 alan değerlendirme', included: true },
      { text: 'WhatsApp entegrasyonu', included: true },
      { text: '6 AI motoru analizi', included: true },
      { text: 'Öncelikli destek', included: true },
    ],
  },
  {
    id: 'kurumsal',
    name: 'Kurumsal',
    price: 3000,
    currency: '$',
    period: 'tek sefer',
    studentLimit: 'Sınırsız kullanıcı',
    tokenLimit: '2.500 AI token',
    popular: false,
    cta: 'Paket Seç',
    ctaHref: '/demo',
    features: [
      { text: 'Profesyonel paketin tüm özellikleri', included: true },
      { text: '2.500 AI token (1.250 TL değerinde)', included: true },
      { text: 'Sınırsız kullanıcı', included: true },
      { text: 'Çoklu şube desteği', included: true },
      { text: 'Beyaz etiket (kendi logonuz)', included: true },
      { text: 'API erişimi', included: true },
      { text: 'Dedicated hesap yöneticisi', included: true },
      { text: 'SLA garantisi', included: true },
    ],
  },
]

export default function FiyatlandirmaContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-gradient">Fiyatlandırma</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              İhtiyacınıza uygun paketi seçin. Tüm paketlerde 14 gün ücretsiz deneme.
            </p>
            <p className="text-sm text-slate-500 mt-3">
              Tek seferlik lisans + isteğe bağlı AI token paketi. 2 token = 1 TL.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PAKETLER.map((paket, i) => (
              <PaketKarti key={paket.id} paket={paket} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Token Explanation */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TokenAciklama />
        </div>
      </section>

      {/* Franchise */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 
              border border-amber-500/30 rounded-2xl p-8 lg:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Bayilik Fırsatı</h2>
              <p className="text-slate-400">Kendi bölgenizde YİSA-S bayisi olun</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Yatırım</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-slate-300">
                    <span>Giriş bedeli:</span>
                    <span className="font-semibold text-amber-400">
                      {FRANCHISE.investment.currency}{FRANCHISE.investment.entry.toLocaleString('tr-TR')}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Aylık:</span>
                    <span className="font-semibold text-amber-400">
                      {FRANCHISE.investment.currency}{FRANCHISE.investment.monthly.toLocaleString('tr-TR')}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Dahil Olanlar</h3>
                <ul className="space-y-2">
                  {FRANCHISE.benefits.slice(0, 4).map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                      <Check size={16} className="text-emerald-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2 px-8 py-4
                  bg-gradient-to-r from-amber-500 to-orange-600 
                  text-slate-900 font-semibold rounded-xl
                  hover:shadow-lg hover:shadow-amber-500/30 transition-all"
              >
                Bayilik Başvurusu
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
