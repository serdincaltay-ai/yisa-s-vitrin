"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

/** Tema örnekleri — gerçek tesis / kulüp adı yok (vitrin). */
const clubs = [
  { name: "Kurumsal lacivert", abbr: "A", primary: "#1e3a5f", secondary: "#e8b530", accent: "#2a5298" },
  { name: "Dinamik kırmızı", abbr: "B", primary: "#6b0c13", secondary: "#37bfef", accent: "#87171F" },
  { name: "Koyu kontrast", abbr: "C", primary: "#000000", secondary: "#FFFFFF", accent: "#888888" },
  { name: "Sarı-lacivert tema", abbr: "D", primary: "#001e62", secondary: "#ffed00", accent: "#003DA5" },
  { name: "Kendi markanız", abbr: "?", primary: "#818cf8", secondary: "#f59e0b", accent: "#06b6d4" },
]

function MiniDashboard({ club }: { club: (typeof clubs)[number] }) {
  return (
    <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0a0f1a]" style={{ borderColor: `${club.primary}33` }}>
      <div className="px-4 py-3 flex items-center gap-3" style={{ background: club.primary }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm font-mono" style={{ background: club.secondary, color: club.primary }}>
          {club.abbr}
        </div>
        <div>
          <p className="text-sm font-bold" style={{ color: club.secondary }}>{club.name}</p>
          <p className="text-[10px] opacity-70" style={{ color: club.secondary }}>Spor Okulu Yönetim Paneli</p>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {["Öğrenci", "Antrenör", "Branş"].map((label) => (
            <div key={label} className="p-2 rounded bg-white/5 text-center">
              <div className="text-lg font-bold font-mono" style={{ color: club.primary === "#000000" ? club.accent : club.primary }}>
                {label === "Öğrenci" ? "248" : label === "Antrenör" ? "12" : "3"}
              </div>
              <div className="text-[10px] text-white/40">{label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {["Antrenman Programı", "Veli Mesajları", "Performans Raporu"].map((item) => (
            <div key={item} className="flex items-center gap-2 px-3 py-2 rounded bg-white/[0.03] text-xs text-white/50 hover:bg-white/[0.06] transition-colors cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: club.primary === "#000000" ? club.accent : club.primary }} />
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded border border-white/10">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-white/40 font-mono">Yapay Zeka Destekli Sistem Aktif</span>
        </div>
      </div>
    </div>
  )
}

export function ClubPreview() {
  const [selected, setSelected] = useState(0)
  const { ref, visible } = useInView()

  return (
    <section className="py-24 md:py-32 relative bg-white/[0.01]" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#818cf8] uppercase mb-4 block">Kişiselleştirme</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Kulübünüzün Renkleriyle Paneliniz
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto text-pretty">
            Logonuzu yükleyin, renkleriniz otomatik uyumlansın.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {clubs.map((club, i) => (
            <button
              key={club.abbr}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-sm transition-all min-h-[44px] ${
                selected === i ? "border-2 bg-[#0a0f1a] text-white" : "border border-white/10 text-white/50 hover:text-white hover:border-white/20"
              }`}
              style={{ borderColor: selected === i ? club.primary : undefined }}
            >
              <div className="w-5 h-5 rounded-full" style={{ background: `linear-gradient(135deg, ${club.primary}, ${club.secondary})`, border: club.primary === "#000000" ? "1px solid #333" : undefined }} />
              {club.name}
            </button>
          ))}
        </div>

        <div className="max-w-sm md:max-w-md mx-auto">
          <MiniDashboard club={clubs[selected]} />
        </div>

        <p className="text-center text-xs text-white/30 mt-8 font-mono">
          12+ hazır web sitesi şablonu, 15+ dashboard şablonu, 25+ Instagram şablonu dahildir.
        </p>
      </div>
    </section>
  )
}
