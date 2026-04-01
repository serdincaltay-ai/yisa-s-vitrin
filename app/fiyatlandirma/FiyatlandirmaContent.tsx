// /app/fiyatlandirma/FiyatlandirmaContent.tsx
'use client'

import { motion } from 'framer-motion'
import PaketKarti from '@/components/pricing/PaketKarti'
import type { PaketData } from '@/components/pricing/PaketKarti'
import TokenAciklama from '@/components/pricing/TokenAciklama'

const PAKETLER: PaketData[] = [
  {
    id: 'standart',
    name: 'Standart',
    price: 3000,
    currency: '$',
    period: 'tek seferlik lisans',
    studentLimit: 'Tek sube, tek brans',
    tokenLimit: 'Token dahil degil',
    popular: false,
    cta: 'Demo Talep Et',
    ctaHref: '/demo',
    features: [
      { text: 'Tam yazilim erisimi', included: true },
      { text: '6 AI robotu dahil', included: true },
      { text: '900 alan olcum sistemi', included: true },
      { text: 'Veli + antrenor paneli', included: true },
      { text: 'Yoklama ve odeme takibi', included: true },
      { text: 'E-posta destegi', included: true },
      { text: 'AI token paketi', included: false },
      { text: 'Coklu sube destegi', included: false },
    ],
  },
  {
    id: 'profesyonel',
    name: 'Standart + 1.500 Token',
    price: 3000,
    currency: '$',
    priceDisplay: '$3.000 + $750',
    period: 'lisans + token paketi',
    studentLimit: 'Tek sube, coklu brans',
    tokenLimit: '1.500 AI token ($750)',
    popular: true,
    cta: 'Demo Talep Et',
    ctaHref: '/demo',
    features: [
      { text: 'Standart paketin tum ozellikleri', included: true },
      { text: '1.500 AI token (= 750 TL kredi)', included: true },
      { text: 'Coklu brans destegi', included: true },
      { text: 'Oncelikli destek', included: true },
      { text: 'Aylik kullanim raporu', included: true },
      { text: 'WhatsApp entegrasyonu', included: true },
      { text: 'Token ile AI islemleri %40 daha ucuz', included: true },
    ],
  },
  {
    id: 'kurumsal',
    name: 'Standart + 2.500 Token',
    price: 3000,
    currency: '$',
    priceDisplay: '$3.000 + $1.250',
    period: 'lisans + buyuk token paketi',
    studentLimit: 'Cok sube, yogun kullanim',
    tokenLimit: '2.500 AI token ($1.250)',
    popular: false,
    cta: 'Demo Talep Et',
    ctaHref: '/demo',
    features: [
      { text: 'Onceki paketin tum ozellikleri', included: true },
      { text: '2.500 AI token (= 1.250 TL kredi)', included: true },
      { text: 'Sinirsiz sube destegi', included: true },
      { text: 'Beyaz etiket (kendi logonuz)', included: true },
      { text: 'API erisimi', included: true },
      { text: '7/24 oncelikli destek', included: true },
      { text: 'Token basi %50 indirim', included: true },
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
              <span className="text-gradient">$3.000 Lisans + Token</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Yazilim sabit fiyat, AI islemleri icin token kullanin.
              Paket halinde alin, %50&apos;ye varan tasarruf edin.
            </p>
            <p className="text-sm text-slate-500 mt-3">
              2 token = 1 TL. Token almazsaniz kullandikca odersiniz — paket alirsan ucuza gelir.
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
    </div>
  )
}
