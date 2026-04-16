"use client"

import Link from "next/link"
import { Check, X, Star, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const packages = [
  {
    name: "Standart",
    price: "$3.000",
    tokenInfo: null as string | null,
    tokenNote: null as string | null,
    desc: "Temel yazılım paketi — kurulum ve lisans dahil",
    features: [
      "Temel yazılım lisansı",
      "Kurulum ve yapılandırma",
      "Yoklama sistemi",
      "Ödeme takibi",
      "E-posta desteği",
      "Temel raporlama",
    ],
    excluded: ["AI token paketi", "Gelişmiş analiz"],
    popular: false,
    cta: "Paket Seç",
  },
  {
    name: "Standart + 1.500 Token",
    price: "$3.000",
    tokenInfo: "+ 1.500 Token",
    tokenNote: "2 token = 1 TL (750 TL değerinde)",
    desc: "Yazılım + AI token paketi — gelişmiş özellikler",
    features: [
      "Standart paketin tüm özellikleri",
      "1.500 AI token dahil",
      "Gelişmiş raporlama",
      "900 alan değerlendirme",
      "WhatsApp entegrasyonu",
      "6 AI motoru analizi",
      "Öncelikli destek",
    ],
    excluded: [],
    popular: true,
    cta: "Paket Seç",
  },
  {
    name: "Standart + 2.500 Token",
    price: "$3.000",
    tokenInfo: "+ 2.500 Token",
    tokenNote: "2 token = 1 TL (1.250 TL değerinde)",
    desc: "Tam donanımlı kurumsal paket — sınırsız kapasite",
    features: [
      "Önceki paketin tüm özellikleri",
      "2.500 AI token dahil",
      "Sınırsız kullanıcı",
      "Çoklu şube desteği",
      "Beyaz etiket (kendi logonuz)",
      "API erişimi",
      "Dedicated hesap yöneticisi",
      "SLA garantisi",
    ],
    excluded: [],
    popular: false,
    cta: "Paket Seç",
  },
]

export function Pricing() {
  const { ref, visible } = useInView()

  return (
    <section id="pricing" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-mono tracking-[0.3em] text-[#818cf8] uppercase mb-4 block">Fiyatlandırma</span>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
            Net Fiyatlar, Güçlü Altyapı
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto text-pretty">
            3 paket modeli ile ilerleyin: Standart, Standart + 1.500 Token, Standart + 2.500 Token.
            Tüm paketlerde <span className="text-[#f59e0b] font-semibold">3.000 USD aktivasyon</span> bedeli esas alınır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-6 md:p-8 rounded-xl border transition-all hover:-translate-y-1 ${
                pkg.popular ? "border-[#818cf8]/50 bg-[#818cf8]/5 shadow-lg shadow-[#818cf8]/10 scale-[1.02]" : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-[#818cf8] text-white text-xs font-mono font-bold tracking-wider">
                  <Star className="w-3 h-3" />
                  EN POPÜLER
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white font-mono">{pkg.name}</h3>
                <p className="text-sm text-white/40 mt-1">{pkg.desc}</p>
              </div>

              <div className="mb-2">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{pkg.price}</span>
                {pkg.tokenInfo && (
                  <div className="flex items-center gap-1.5 mt-2">
                    <Coins className="w-4 h-4 text-[#f59e0b]" />
                    <span className="text-base font-bold text-[#f59e0b] font-mono">{pkg.tokenInfo}</span>
                  </div>
                )}
              </div>

              {pkg.tokenNote && (
                <p className="text-xs text-emerald-400 font-mono mb-4">{pkg.tokenNote}</p>
              )}
              {!pkg.tokenInfo && <div className="mb-4" />}

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/50">{feature}</span>
                  </li>
                ))}
                {pkg.excluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-white/20 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/30 line-through">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/demo" className="w-full">
                <Button
                  className={`w-full font-mono tracking-wider min-h-[44px] transition-all ${pkg.popular ? "bg-[#818cf8] text-white hover:bg-[#818cf8]/80 hover:shadow-lg hover:shadow-[#818cf8]/20" : "bg-white/10 text-white hover:bg-white/15"}`}
                >
                  {pkg.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 text-center space-y-2">
          <p className="text-sm text-[#f59e0b] font-mono font-semibold">
            Aktivasyon Bedeli (Tüm Paketlerde): 3.000 USD
          </p>
          <p className="text-xs text-[#f59e0b]/90 font-mono">
            Token Hesaplama: 2 token = 1 TL | 1.500 token = 750 TL | 2.500 token = 1.250 TL
          </p>
        </div>

        <p className="text-center text-xs text-white/30 mt-6 font-mono">
          Tüm paketler tek seferlik lisans bedelidir. Ek token ihtiyacınızda ayrıca paket satın alabilirsiniz.
        </p>
      </div>
    </section>
  )
}
