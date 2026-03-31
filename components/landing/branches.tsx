"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const branches = [
  {
    name: "Cimnastik",
    img: "/images/branch-gymnastics.jpg",
    desc: "Artistik ve ritmik cimnastik, akrobasi, trambolinde uzman eğitim. 88 hareketten oluşan kütüphane ile kapsamlı program.",
    stats: { hareketler: 88, parametreler: 12, yasGrubu: "3-18" },
    color: "#818cf8",
    highlights: ["Salto, flic-flac, yunus takla, über salto", "Denge aleti ve zemin serisi", "Kuvvet ve esneklik ölçümü", "Yapay zeka destekli program oluşturma"],
  },
  {
    name: "Voleybol",
    img: "/images/branch-volleyball.jpg",
    desc: "Servis, smaç, pas ve blok teknikleri. Takım koordinasyonu ve bireysel gelişim takibi.",
    stats: { hareketler: 45, parametreler: 8, yasGrubu: "6-18" },
    color: "#f59e0b",
    highlights: ["Servis ve smaç tekniği", "Takım koordinasyonu", "Sıçrama ve reaksiyon testi", "Pozisyon bazlı analiz"],
  },
  {
    name: "Basketbol",
    img: "/images/branch-basketball.jpg",
    desc: "Dribling, şut, rebound ve savunma teknikleri. Boy-kilo-patlayıcı güç odaklı gelişim.",
    stats: { hareketler: 52, parametreler: 10, yasGrubu: "6-18" },
    color: "#ef4444",
    highlights: ["Dribling ve pas teknikleri", "Şut isabet analizi", "Fiziksel gelişim takibi", "Takım taktikleri"],
  },
  {
    name: "Futbol",
    img: "/images/branch-football.jpg",
    desc: "Top kontrolü, pas, şut ve taktik eğitimi. Dayanıklılık ve sürat odaklı program.",
    stats: { hareketler: 60, parametreler: 9, yasGrubu: "5-18" },
    color: "#10b981",
    highlights: ["Top kontrolü ve pas", "Şut gücü ve isabet", "Dayanıklılık ölçümü", "Pozisyon uygunluğu analizi"],
  },
  {
    name: "Tenis",
    img: "/images/branch-tennis.jpg",
    desc: "Forehand, backhand, servis ve vole teknikleri. Bireysel performans analizi.",
    stats: { hareketler: 38, parametreler: 7, yasGrubu: "5-18" },
    color: "#06b6d4",
    highlights: ["Forehand/backhand tekniği", "Servis hızı ve isabet", "Footwork analizi", "Maç istatistikleri"],
  },
  {
    name: "Yüzme",
    img: "/images/branch-swimming.jpg",
    desc: "Serbest, sırt, kurbağa ve kelebek stilleri. Omuz esnekliği ve dayanıklılık takibi.",
    stats: { hareketler: 42, parametreler: 8, yasGrubu: "4-18" },
    color: "#3b82f6",
    highlights: ["4 yüzme stili eğitimi", "Tur zamanı takibi", "Omuz esnekliği ölçümü", "Aerobik kapasite analizi"],
  },
]

export function Branches() {
  const [active, setActive] = useState(0)
  const { ref, visible } = useInView()

  return (
    <section id="branches" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-mono tracking-[0.3em] text-[#818cf8] uppercase mb-4 block">6 Branş Aktif</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Tesisinizde Hangi Branş Olursa Olsun, Biz Yanınızdayız
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto text-pretty">
            Her branşa özel yüzlerce hareket havuzu. Çocuk gelişim takibi, erken tespit, yapay zeka destekli program.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12">
          {branches.map((branch, i) => (
            <button
              key={branch.name}
              onClick={() => setActive(i)}
              className={`relative group rounded-xl overflow-hidden transition-all duration-300 min-h-[44px] ${active === i ? "ring-2 ring-[#818cf8] scale-105 shadow-lg" : "opacity-70 hover:opacity-100"}`}
              style={active === i ? { boxShadow: `0 4px 30px ${branch.color}33` } : {}}
            >
              <div className="aspect-[3/4] relative">
                <Image src={branch.img || "/placeholder.svg"} alt={branch.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <span className="text-base font-bold text-white font-mono block drop-shadow-lg">{branch.name}</span>
                  <span className="text-xs text-white/80 font-mono">{branch.stats.hareketler} hareket</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
            <Image src={branches[active].img || "/placeholder.svg"} alt={branches[active].name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060a13]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{branches[active].name}</h3>
                <p className="text-xs text-white/50 font-mono">Yaş Grubu: {branches[active].stats.yasGrubu}</p>
              </div>
              <div className="flex gap-2">
                {[
                  { val: branches[active].stats.hareketler, lbl: "Hareket" },
                  { val: branches[active].stats.parametreler, lbl: "Param." },
                ].map((s) => (
                  <div key={s.lbl} className="px-3 py-2 rounded-lg bg-[#060a13]/60 backdrop-blur-sm text-center border border-white/10">
                    <span className="text-lg font-bold font-mono block" style={{ color: branches[active].color }}>{s.val}</span>
                    <span className="text-[9px] text-white/40">{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-white/60 leading-relaxed mb-6">{branches[active].desc}</p>
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-white font-mono">Sporcu Gelişim Örneği</span>
                <span className="text-[10px] font-mono px-2 py-1 rounded-full border border-white/10 text-white/40">Yaş: 8 | {branches[active].name}</span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Esneklik", val: 85, ref: 70 },
                  { label: "Kuvvet", val: 62, ref: 65 },
                  { label: "Denge", val: 90, ref: 75 },
                  { label: "Koordinasyon", val: 78, ref: 72 },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-white/40">{m.label}</span>
                      <span className={m.val >= m.ref ? "text-emerald-400" : "text-amber-400"}>
                        {m.val}% {m.val >= m.ref ? "(normların üstünde)" : "(geliştirilecek)"}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 relative">
                      <div className="h-2 rounded-full transition-all duration-1000" style={{ width: `${m.val}%`, background: branches[active].color }} />
                      <div className="absolute top-0 h-2 w-0.5 bg-white/60" style={{ left: `${m.ref}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-white/30 mt-3 font-mono">
                Beyaz çizgi = yaş grubu referans değeri | Erken tespit: kuvvet geliştirilecek
              </p>
            </div>
            <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/5">
              <p className="text-xs text-amber-400 font-mono">
                Tespit: Bu sporcu kuvvet parametresinde yaşıtlarının altında. Özel kuvvet programı öneriliyor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
