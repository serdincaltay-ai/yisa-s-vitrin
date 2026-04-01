'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  TrendingUp,
  Send,
  Award,
  ArrowLeft,
  Bot,
  BarChart3,
  Calendar,
  Users,
  Shield,
  MessageSquare,
  Coins,
  CheckCircle2,
  AlertCircle,
  Zap,
  Target,
  ClipboardList,
} from 'lucide-react'
import MultiStepDemoForm from '@/components/demo/MultiStepDemoForm'

const NEON_CYAN = '#00d4ff'
const NEON_PINK = '#e94560'

type CardKey = 'ozellikler' | 'fiyat' | 'demo' | 'referanslar' | null

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
    title: 'Ne Yapariz?',
    subtitle: '6 AI robotu, 900 alan, tam otomasyon',
    color: NEON_CYAN,
    gradient: `linear-gradient(135deg, ${NEON_CYAN}20, ${NEON_CYAN}05)`,
  },
  {
    key: 'fiyat',
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Fiyatlandirma',
    subtitle: '$3.000 + Token sistemi',
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
    key: 'referanslar',
    icon: <Award className="w-7 h-7" />,
    title: 'Referanslar',
    subtitle: 'Basari hikayeleri',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b20, #f59e0b05)',
  },
]

/* ========== OZELLIKLER — AI Robotlari + Sistem Ozellikleri ========== */

interface FeatureItem {
  icon: React.ReactNode
  title: string
  desc: string
  tag: string
  tagColor: string
}

const AI_ROBOTS: FeatureItem[] = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: 'Ders Programi Robotu',
    desc: 'Haftalik ders programlarini otomatik olusturur. Antrenor musaitligi, salon kapasitesi ve brans kurallarini dikkate alir.',
    tag: 'Aktif',
    tagColor: '#10b981',
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'Sosyal Medya Robotu',
    desc: 'Instagram, Facebook, YouTube ve Google isletme hesaplarinizi otomatik yonetir. Icerik uretir, paylasir ve etkilesim analizi yapar.',
    tag: 'Aktif',
    tagColor: '#10b981',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Muhasebe Robotu',
    desc: 'Fatura, aidat takibi, token hesaplama ve gelir-gider raporlarini otomatik olusturur. Kasa kapanislarini yonetir.',
    tag: 'Aktif',
    tagColor: '#10b981',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Iletisim Robotu',
    desc: 'Veli bildirimleri, otomatik SMS/WhatsApp mesajlari ve randevu hatirlatmalarini yonetir.',
    tag: 'Aktif',
    tagColor: '#10b981',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Guvenlik Robotu',
    desc: 'RFID cihaz takibi, supheli giris alarmi ve tesis guvenlik protokollerini yonetir.',
    tag: 'Eklenti',
    tagColor: '#f59e0b',
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: 'Ana Sayfa Robotu',
    desc: 'Tesis web sitesine gelen ziyaretcileri karsilar, branslar hakkinda bilgi verir ve kayit formuna yonlendirir.',
    tag: 'Eklenti',
    tagColor: '#f59e0b',
  },
]

const SYSTEM_FEATURES: FeatureItem[] = [
  {
    icon: <Target className="w-5 h-5" />,
    title: '900 Alan Olcum Sistemi',
    desc: 'Cocuk sporcularin fiziksel, teknik ve bilissel gelisimini 900 farkli parametrede olcun. PHV buyume plagi korumasi dahil.',
    tag: 'Temel',
    tagColor: NEON_CYAN,
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: 'Yoklama & Devamsizlik',
    desc: 'QR kod veya RFID ile otomatik yoklama. Devamsizlik durumunda veliye aninda bildirim gider.',
    tag: 'Temel',
    tagColor: NEON_CYAN,
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Veli & Antrenor Paneli',
    desc: 'Veliler cocuklarinin gelisimini, antrenorler ders planlarini ve sporcu notlarini kendi panellerinden takip eder.',
    tag: 'Temel',
    tagColor: NEON_CYAN,
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Coklu Sube Yonetimi',
    desc: 'Tek panelden birden fazla subeyi yonetin. Sube bazli raporlama, personel atamalari ve performans karsilastirmasi.',
    tag: 'Temel',
    tagColor: NEON_CYAN,
  },
]

/* ========== FIYATLANDIRMA — $3000 + Token ========== */

const PRICING_PLANS = [
  {
    name: 'Standart',
    price: '$3.000',
    period: 'tek seferlik lisans',
    desc: 'Tek sube, tek brans',
    features: [
      'Tam yazilim erisimi',
      '6 AI robotu dahil',
      '900 alan olcum sistemi',
      'Veli + antrenor paneli',
      'Temel destek (e-posta)',
    ],
    note: 'Token dahil degil — kullandikca odersiniz',
    popular: false,
  },
  {
    name: 'Standart + 1.500 Token',
    price: '$3.000 + $750',
    period: 'lisans + token paketi',
    desc: 'Tek sube, coklu brans',
    features: [
      'Standart tum ozellikler',
      '1.500 token (= 750 TL kredi)',
      'Coklu brans destegi',
      'Oncelikli destek',
      'Aylik kullanim raporu',
    ],
    note: 'Token ile AI islemleri %40 daha ucuz',
    popular: true,
  },
  {
    name: 'Standart + 2.500 Token',
    price: '$3.000 + $1.250',
    period: 'lisans + buyuk token paketi',
    desc: 'Cok sube veya yogun kullanim',
    features: [
      'Standart tum ozellikler',
      '2.500 token (= 1.250 TL kredi)',
      'Sinirsiz sube',
      '7/24 oncelikli destek',
      'Beyaz etiket secenegi',
    ],
    note: 'En uygun birim fiyat — token basi %50 indirim',
    popular: false,
  },
]

const TOKEN_INFO = [
  { title: 'Token Nedir?', desc: 'Token, YiSA-S platformundaki AI islemleri icin kullanilan kredi birimidir. 2 token = 1 TL degerindedir.' },
  { title: 'Nerede Kullanilir?', desc: 'Ders programi olusturma, sosyal medya icerik uretimi, otomatik raporlama, veli bildirim gonderimi ve tum AI robot islemleri token harcar.' },
  { title: 'Neden Token Almali?', desc: 'Paket halinde token almak, tek tek kullanima gore %40-50 daha ucuzdur. Paket almazsaniz her AI islemi icin ayri ayri odeme yaparsiniz — bu uzun vadede daha pahaliya gelir.' },
  { title: 'Token Biter mi?', desc: 'Tokenleriniz bittiginde AI robotlari durmaz — kullandikca otomatik faturalanir. Ancak birim fiyat paket fiyatina gore daha yuksektir.' },
]

const REFERENCES_CONTENT = [
  { name: 'BJK Tuzla Spor Okulu', sport: 'Futbol + Basketbol', athletes: '120+ sporcu' },
  { name: 'Ata Spor Akademi', sport: 'Yuzme + Jimnastik', athletes: '85+ sporcu' },
  { name: 'Fenerbahce Genclik', sport: 'Voleybol', athletes: '60+ sporcu' },
  { name: 'Istanbul Spor Kulubu', sport: 'Atletizm + Tenis', athletes: '95+ sporcu' },
]

/* ========== CARD DETAIL — Section-based like reference site ========== */

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
        {/* ===== OZELLIKLER ===== */}
        {cardKey === 'ozellikler' && (
          <div className="space-y-8">
            {/* Slogan */}
            <div className="text-center pb-4">
              <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">/ Satin Alinabilir AI Eklentileri</p>
              <h3 className="text-xl font-bold text-white mb-2">AI Robot Direktorleri</h3>
              <p className="text-sm text-white/50">Her robot bagimsiz calisir. Ihtiyaciniz olana ekleyin, 7/24 calissin.</p>
            </div>

            {/* AI Robots Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {AI_ROBOTS.map((r) => (
                <div key={r.title} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2" style={{ color: r.tagColor }}>
                      {r.icon}
                      <span className="text-xs font-bold truncate">{r.title}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full" style={{ background: `${r.tagColor}15`, color: r.tagColor }}>
                      {r.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/50 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-white/60">6 robot, sonsuz otomasyon, 0 ek personel.</span>
              </div>
            </div>

            {/* System Features Section */}
            <div className="text-center pt-4 pb-2">
              <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">/ Sistem Ozellikleri</p>
              <h3 className="text-xl font-bold text-white mb-2">Tesisinizi Bastan Sona Yonetin</h3>
              <p className="text-sm text-white/50">Olcumden odemeye, yoklamadan rapora — tek platform.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SYSTEM_FEATURES.map((f) => (
                <div key={f.title} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-2 mb-2" style={{ color: f.tagColor }}>
                    {f.icon}
                    <h4 className="text-sm font-bold text-white">{f.title}</h4>
                  </div>
                  <p className="text-[11px] text-white/50 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/5 border border-cyan-400/20">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-white/60">6 temel surec, tek platform, sifir kagit.</span>
              </div>
            </div>
          </div>
        )}

        {/* ===== FIYATLANDIRMA ===== */}
        {cardKey === 'fiyat' && (
          <div className="space-y-8">
            {/* Slogan */}
            <div className="text-center pb-2">
              <p className="text-xs font-mono tracking-widest text-[#818cf8] uppercase mb-2">/ Fiyatlandirma</p>
              <h3 className="text-xl font-bold text-white mb-1">$3.000 Yazilim Lisansi + Token</h3>
              <p className="text-sm text-white/50">Yazilim sabit fiyat. AI islemleri icin token kullanin — paket alirsan ucuza gelir.</p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PRICING_PLANS.map((p) => (
                <div
                  key={p.name}
                  className={`relative p-5 rounded-xl border ${p.popular ? 'border-[#818cf8]/50 bg-[#818cf8]/5' : 'border-white/10 bg-white/[0.02]'}`}
                >
                  {p.popular && (
                    <div className="absolute -top-3 right-4 text-[10px] font-mono text-[#818cf8] bg-[#818cf8]/10 px-3 py-1 rounded-full border border-[#818cf8]/30">
                      EN POPULER
                    </div>
                  )}
                  <h3 className="text-sm font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-xs text-white/40 mb-3">{p.desc}</p>
                  <p className="text-2xl font-bold mb-1" style={{ color: p.popular ? '#818cf8' : 'white' }}>{p.price}</p>
                  <p className="text-[10px] text-white/30 font-mono mb-4">{p.period}</p>
                  <ul className="space-y-2 mb-4">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[11px] text-white/60">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-white/5">
                    <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-400" />
                    <p className="text-[10px] text-white/40">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Token Aciklama */}
            <div className="text-center pt-2 pb-2">
              <p className="text-xs font-mono tracking-widest text-amber-400 uppercase mb-2">/ Token Sistemi</p>
              <h3 className="text-lg font-bold text-white mb-1">Token Nedir, Neden Gerekli?</h3>
              <p className="text-sm text-white/50">2 token = 1 TL. Paket halinde alin, %50&apos;ye varan tasarruf edin.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TOKEN_INFO.map((t) => (
                <div key={t.title} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-2 mb-2">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <h4 className="text-sm font-bold text-white">{t.title}</h4>
                  </div>
                  <p className="text-[11px] text-white/50 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== DEMO ===== */}
        {cardKey === 'demo' && (
          <div className="max-w-md mx-auto">
            <MultiStepDemoForm embedded />
          </div>
        )}

        {/* ===== REFERANSLAR ===== */}
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
            <p className="text-[10px] font-mono text-white/30 tracking-widest uppercase">AI Destekli Spor Tesisi Yonetim Platformu</p>
          </div>
        </div>
        <div className="text-xs font-mono text-white/20">v3.0</div>
      </header>

      {/* Slogan */}
      <div className="text-center px-6 pt-4 pb-2 shrink-0">
        <p className="text-xs font-mono text-cyan-400/60 tracking-widest uppercase">Teknolojiyi Spora Baslatiyoruz</p>
      </div>

      {/* Card grid — 2x2 layout */}
      <main className="flex-1 p-4 sm:p-6 grid grid-cols-2 gap-3 sm:gap-4 auto-rows-fr">
        {CARDS.map((card) => (
          <motion.button
            key={card.key}
            onClick={() => setActiveCard(card.key as CardKey)}
            className="relative flex flex-col items-center justify-center rounded-2xl border border-white/10 p-4 text-center transition-all hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]"
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
