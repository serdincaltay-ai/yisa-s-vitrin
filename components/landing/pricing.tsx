"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const packages = [
  {
    name: "Başlangıç",
    price: "2.500₺",
    period: "ay",
    desc: "Küçük spor okulları için ideal başlangıç paketi",
    features: [
      "50 sporcu kapasitesi",
      "Temel ölçümler",
      "Haftalık gözlemler",
      "Yoklama sistemi",
      "Ödeme takibi",
      "E-posta desteği",
    ],
    popular: false,
    cta: "Başla",
  },
  {
    name: "Profesyonel",
    price: "7.500₺",
    period: "ay",
    desc: "Büyüyen tesisler için gelişmiş özellikler",
    features: [
      "250 sporcu kapasitesi",
      "900 alan değerlendirme",
      "PHV büyüme takibi",
      "6 AI motoru erişimi",
      "Veli paneli",
      "Antrenör paneli",
      "Gelişmiş raporlama",
      "Öncelikli destek",
    ],
    popular: true,
    cta: "Demo Talep Et",
  },
  {
    name: "Kurumsal",
    price: "15.000₺",
    period: "ay",
    desc: "Çoklu tesis, sınırsız kapasite",
    features: [
      "Sınırsız sporcu",
      "Sınırsız şube",
      "Özel API entegrasyonu",
      "7/24 özel destek",
      "Eğitim ve danışmanlık",
      "Beyaz etiket çözüm",
      "Özel robot geliştirme",
      "SLA garantisi",
    ],
    popular: false,
    cta: "Bizimle Konuşun",
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
            Yapay zeka destekli antrenman programı, sporcu gelişim takibi ve veli paneli tüm paketlere dahildir.
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

              <div className="mb-6">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{pkg.price}</span>
                {pkg.period && <span className="text-sm text-white/40 ml-2">/ {pkg.period}</span>}
                {pkg.name === "Profesyonel" && <span className="ml-2 text-xs text-emerald-400 font-mono">6 AI motoru dahil</span>}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/50">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-mono tracking-wider min-h-[44px] transition-all ${pkg.popular ? "bg-[#818cf8] text-white hover:bg-[#818cf8]/80 hover:shadow-lg hover:shadow-[#818cf8]/20" : "bg-white/10 text-white hover:bg-white/15"}`}
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/30 mt-8 font-mono">
          Tüm paketlere dahil: sporcu takip sistemi, yoklama ve ödeme yönetimi. Üst paketlerde AI analiz, PHV takibi ve gelişmiş raporlama.
        </p>
      </div>
    </section>
  )
}
