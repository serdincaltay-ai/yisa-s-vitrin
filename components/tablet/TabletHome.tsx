'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  TrendingUp,
  Send,
  Handshake,
  Award,
  ArrowLeft,
} from 'lucide-react'
import MultiStepDemoForm from '@/components/demo/MultiStepDemoForm'

const NEON_CYAN = '#00d4ff'
const NEON_PINK = '#e94560'

type CardKey = 'ozellikler' | 'fiyat' | 'demo' | 'franchise' | 'referanslar' | null

interface TabletCard {
  key: CardKey & string
  icon: React.ReactNode
  title: string
  subtitle: string
  color: string
  gradient: string
}

const CARDS: TabletCard[] = [
  {
    key: 'ozellikler',
    icon: <Sparkles className="w-7 h-7" />,
    title: 'Ozellikler',
    subtitle: '900 alan, 6 AI motoru',
    color: NEON_CYAN,
    gradient: `linear-gradient(135deg, ${NEON_CYAN}20, ${NEON_CYAN}05)`,
  },
  {
    key: 'fiyat',
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Fiyatlandirma',
    subtitle: 'Net fiyatlar, guclu altyapi',
    color: '#818cf8',
    gradient: 'linear-gradient(135deg, #818cf820, #818cf805)',
  },
  {
    key: 'demo',
    icon: <Send className="w-7 h-7" />,
    title: 'Demo Talep Et',
    subtitle: '30 dk canli gosterim',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b98120, #10b98105)',
  },
  {
    key: 'franchise',
    icon: <Handshake className="w-7 h-7" />,
    title: 'Franchise',
    subtitle: 'Bolgesel tekel hakki',
    color: NEON_PINK,
    gradient: `linear-gradient(135deg, ${NEON_PINK}20, ${NEON_PINK}05)`,
  },
  {
    key: 'referanslar',
    icon: <Award className="w-7 h-7" />,
    title: 'Referanslar',
    subtitle: 'Basari hikayeleri',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b20, #f59e0b05)',
  },
]

const FEATURES_CONTENT = [
  { title: '900 Alan Degerlendirme', desc: 'Cocuk sporcularin gelisimini 900 farkli alanda olcun ve takip edin.' },
  { title: '6 AI Motoru', desc: 'CELF, ASK, Mutfak, Havuz, Kasa ve Guvenlik motorlariyla tesisinizi yonetin.' },
  { title: 'PHV Buyume Takibi', desc: 'Buyume plagi korumasi ile sporcunun fiziksel gelisimini guvenle izleyin.' },
  { title: 'Veli Paneli', desc: 'Veliler cocuklarinin gelisimini, yoklamalarini ve odemelerini takip edebilir.' },
  { title: 'Antrenor Paneli', desc: 'Antrenorler ders planlama, yoklama ve sporcu degerlendirmesi yapabilir.' },
  { title: 'Robot Asistan', desc: 'Konusan robot avatar ile ziyaretcilere interaktif tanitim saglayin.' },
]

const PRICING_CONTENT = [
  { name: 'Baslangic', price: '2.500 TL/ay', features: '50 sporcu, temel olcumler, yoklama, odeme takibi' },
  { name: 'Profesyonel', price: '7.500 TL/ay', features: '250 sporcu, 900 alan, PHV, 6 AI motoru, veli + antrenor paneli', popular: true },
  { name: 'Kurumsal', price: '15.000 TL/ay', features: 'Sinirsiz sporcu, sinirsiz sube, ozel API, 7/24 destek, beyaz etiket' },
]

const FRANCHISE_CONTENT = [
  { title: 'Bolgesel Tekel', desc: 'Sehrinizde tek YiSA-S bayisi olarak calismaya baslayin.' },
  { title: 'Giris Bedeli', desc: '50.000 TL giris bedeli ile hazir is modeli.' },
  { title: 'Kapsamli Egitim', desc: 'Sistem egitimi, teknik destek ve pazarlama destegi.' },
  { title: 'Hizli ROI', desc: 'Ortalama 6 ayda yatirim geri donusu.' },
]

const REFERENCES_CONTENT = [
  { name: 'BJK Tuzla Spor Okulu', sport: 'Futbol + Basketbol', athletes: '120+ sporcu' },
  { name: 'Ata Spor Akademi', sport: 'Yuzme + Jimnastik', athletes: '85+ sporcu' },
  { name: 'Fenerbahce Genclik', sport: 'Voleybol', athletes: '60+ sporcu' },
  { name: 'Istanbul Spor Kulubu', sport: 'Atletizm + Tenis', athletes: '95+ sporcu' },
]

function CardDetail({ cardKey, onBack }: { cardKey: CardKey & string; onBack: () => void }) {
  const card = CARDS.find((c) => c.key === cardKey)
  if (!card) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 z-20 flex flex-col"
      style={{ background: 'rgba(4, 8, 16, 0.98)' }}
    >
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
        <button
          onClick={onBack}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white/60" />
        </button>
        <div className="flex items-center gap-2" style={{ color: card.color }}>
          {card.icon}
          <h2 className="text-lg font-bold text-white">{card.title}</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {cardKey === 'ozellikler' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES_CONTENT.map((f) => (
              <div key={f.title} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="text-sm font-bold text-white mb-1">{f.title}</h3>
                <p className="text-xs text-white/50">{f.desc}</p>
              </div>
            ))}
          </div>
        )}

        {cardKey === 'fiyat' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PRICING_CONTENT.map((p) => (
              <div
                key={p.name}
                className={`p-5 rounded-xl border ${p.popular ? 'border-[#818cf8]/50 bg-[#818cf8]/5' : 'border-white/10 bg-white/[0.02]'}`}
              >
                <h3 className="text-base font-bold text-white">{p.name}</h3>
                <p className="text-xl font-bold mt-2" style={{ color: p.popular ? '#818cf8' : 'white' }}>{p.price}</p>
                <p className="text-xs text-white/50 mt-2">{p.features}</p>
                {p.popular && <span className="inline-block mt-3 text-xs font-mono text-[#818cf8] bg-[#818cf8]/10 px-2 py-1 rounded">EN POPULER</span>}
              </div>
            ))}
          </div>
        )}

        {cardKey === 'demo' && (
          <div className="max-w-md mx-auto">
            <MultiStepDemoForm embedded />
          </div>
        )}

        {cardKey === 'franchise' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FRANCHISE_CONTENT.map((f) => (
              <div key={f.title} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="text-sm font-bold text-white mb-1">{f.title}</h3>
                <p className="text-xs text-white/50">{f.desc}</p>
              </div>
            ))}
            <div className="sm:col-span-2 p-4 rounded-xl border border-[#e94560]/30 bg-[#e94560]/5 text-center">
              <p className="text-sm text-white/80">Basvuru icin: <strong className="text-white">franchise@yisa-s.com</strong></p>
            </div>
          </div>
        )}

        {cardKey === 'referanslar' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REFERENCES_CONTENT.map((r) => (
              <div key={r.name} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="text-sm font-bold text-white mb-1">{r.name}</h3>
                <p className="text-xs text-white/50">{r.sport}</p>
                <p className="text-xs font-mono mt-1" style={{ color: '#f59e0b' }}>{r.athletes}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function TabletHome() {
  const [activeCard, setActiveCard] = useState<CardKey>(null)

  return (
    <div className="relative h-screen flex flex-col overflow-hidden bg-[#040810]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
            style={{ background: `linear-gradient(135deg, ${NEON_CYAN}, ${NEON_PINK})` }}
          >
            YS
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">YiSA-S</h1>
            <p className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Spor Yonetim Sistemi</p>
          </div>
        </div>
        <div className="text-xs font-mono text-white/20">v2.0 Tablet</div>
      </header>

      {/* Card grid — no scroll, fills viewport */}
      <main className="flex-1 p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-fr">
        {CARDS.map((card, i) => (
          <motion.button
            key={card.key}
            onClick={() => setActiveCard(card.key as CardKey)}
            className={`relative flex flex-col items-center justify-center rounded-2xl border border-white/10 p-4 text-center transition-all hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            style={{ background: card.gradient }}
            whileHover={{ boxShadow: `0 0 30px ${card.color}15` }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
              style={{ background: `${card.color}15`, color: card.color }}
            >
              {card.icon}
            </div>
            <h3 className="text-sm font-bold text-white mb-0.5">{card.title}</h3>
            <p className="text-[11px] text-white/40">{card.subtitle}</p>
          </motion.button>
        ))}
      </main>

      {/* Card detail overlay */}
      <AnimatePresence>
        {activeCard && (
          <CardDetail cardKey={activeCard} onBack={() => setActiveCard(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
