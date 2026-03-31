"use client"

import { useState, useEffect, useCallback } from "react"
import { Monitor, X, CalendarCheck, CreditCard, TrendingUp, BookOpen } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const screens = [
  {
    id: "dashboard",
    label: "Panel Yönetimi",
    icon: Monitor,
    desc: "Tüm tesisinizi tek ekrandan yönetin. Öğrenci, antrenör, branş ve aidat verileriniz anlık güncellenir.",
  },
  {
    id: "yoklama",
    label: "Yoklama Sistemi",
    icon: CalendarCheck,
    desc: "QR kod ile giriş-çıkış. Devamsızlık anında veliye otomatik bildirim gönderilir.",
  },
  {
    id: "odeme",
    label: "Aidat Takibi",
    icon: CreditCard,
    desc: "Taksit planları, otomatik hatırlatma, gecikme takibi ve gelir-gider raporları.",
  },
  {
    id: "gelisim",
    label: "Gelişim Analizi",
    icon: TrendingUp,
    desc: "Boy, kilo, esneklik, kuvvet parametreleri. 6 aylık trend çizgileriyle gelişim takibi.",
  },
  {
    id: "kasa",
    label: "Kasa Defteri",
    icon: BookOpen,
    desc: "Tarih, saat, işlem, ödeyen, tutar ve ödeme tipi. Gelir ve gider takibi.",
  },
]

const kasaRows = [
  { tarih: "15.02.2026", saat: "09:30", islem: "Aidat", adSoyad: "Ahmet Yılmaz", tutar: "2.500₺", odemeTipi: "Nakit", tip: "Gelir" as const },
  { tarih: "15.02.2026", saat: "10:15", islem: "Aidat", adSoyad: "Zeynep Kaya", tutar: "2.500₺", odemeTipi: "Kredi Kartı", tip: "Gelir" as const },
  { tarih: "14.02.2026", saat: "16:00", islem: "Malzeme", adSoyad: "Tedarikçi", tutar: "1.200₺", odemeTipi: "Havale", tip: "Gider" as const },
  { tarih: "14.02.2026", saat: "11:00", islem: "Aidat", adSoyad: "Mehmet Demir", tutar: "2.500₺", odemeTipi: "Nakit", tip: "Gelir" as const },
  { tarih: "13.02.2026", saat: "14:30", islem: "Kira", adSoyad: "Emlak", tutar: "5.000₺", odemeTipi: "Havale", tip: "Gider" as const },
]

function DashboardScreen() {
  const stats = [
    { label: "Öğrenci", val: "248", color: "#818cf8" },
    { label: "Antrenör", val: "12", color: "#00d4ff" },
    { label: "Branş", val: "6", color: "#10b981" },
    { label: "Aidat", val: "%92", color: "#e94560" },
  ]
  const bars = [65, 80, 45, 90, 72, 58]
  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {stats.map((s) => (
          <div key={s.label} className="p-2 md:p-3 rounded-lg bg-white/5 border border-white/10 text-center">
            <div className="text-lg md:text-2xl font-bold font-mono" style={{ color: s.color }}>{s.val}</div>
            <div className="text-[10px] md:text-xs text-white/50">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg bg-white/5 border border-white/10">
        <p className="text-[10px] text-white/40 font-mono mb-2">Aylık Kayıt Trendi</p>
        <div className="flex items-end gap-2 h-16 md:h-20">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#818cf8] to-[#00d4ff] transition-all duration-700" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex gap-2 mt-1">
          {["Eyl", "Eki", "Kas", "Ara", "Oca", "Şub"].map((m) => (
            <span key={m} className="flex-1 text-center text-[8px] text-white/30">{m}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function YoklamaScreen() {
  const students = [
    { name: "Elif Yılmaz", status: true },
    { name: "Ahmet Demir", status: true },
    { name: "Zeynep Kara", status: false },
    { name: "Can Özkan", status: true },
    { name: "Sude Aydın", status: true },
    { name: "Berk Çelik", status: false },
  ]
  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-2">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-white/40 font-mono">Bugünkü Yoklama - Cimnastik A Grubu</p>
        <span className="text-[10px] px-2 py-1 rounded-full bg-[#818cf8]/20 text-[#818cf8] font-mono">4/6 katılım</span>
      </div>
      {students.map((s) => (
        <div key={s.name} className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/5 border border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/60">
              {s.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <span className="text-xs text-white/80">{s.name}</span>
          </div>
          <span className={`text-[10px] px-2 py-1 rounded-full font-mono ${s.status ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
            {s.status ? "Katıldı" : "Katılmadı"}
          </span>
        </div>
      ))}
    </div>
  )
}

function OdemeScreen() {
  const rows = [
    { name: "Elif Yılmaz", amount: "3.200 TL", status: "paid" },
    { name: "Ahmet Demir", amount: "2.800 TL", status: "pending" },
    { name: "Zeynep Kara", amount: "3.200 TL", status: "paid" },
    { name: "Can Özkan", amount: "2.800 TL", status: "late" },
    { name: "Sude Aydın", amount: "3.200 TL", status: "paid" },
  ]
  const statusMap: Record<string, { label: string; cls: string }> = {
    paid: { label: "Ödendi", cls: "bg-[#00d4ff]/20 text-[#00d4ff]" },
    pending: { label: "Bekliyor", cls: "bg-amber-500/20 text-amber-400" },
    late: { label: "Gecikmiş", cls: "bg-red-500/20 text-red-400" },
  }
  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-2">
      <p className="text-xs text-white/40 font-mono mb-3">Şubat 2026 - Aidat Durumu</p>
      {rows.map((r) => (
        <div key={r.name} className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/5 border border-white/5">
          <span className="text-xs text-white/80">{r.name}</span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/50 font-mono">{r.amount}</span>
            <span className={`text-[10px] px-2 py-1 rounded-full font-mono ${statusMap[r.status].cls}`}>{statusMap[r.status].label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function GelisimScreen() {
  const months = ["Eyl", "Eki", "Kas", "Ara", "Oca", "Şub"]
  const lines = [
    { label: "Esneklik", color: "#818cf8", points: [55, 60, 62, 68, 75, 82] },
    { label: "Kuvvet", color: "#e94560", points: [40, 42, 48, 52, 58, 62] },
    { label: "Denge", color: "#00d4ff", points: [60, 65, 68, 72, 78, 85] },
  ]
  function toSvgPath(pts: number[]) {
    const w = 280, h = 120
    return pts.map((p, i) => {
      const x = (i / (pts.length - 1)) * w
      const y = h - (p / 100) * h
      return `${i === 0 ? "M" : "L"}${x},${y}`
    }).join(" ")
  }
  return (
    <div className="p-4 md:p-5 lg:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-2">
        <p className="text-xs text-white/40 font-mono">Sporcu Gelişim Grafiği - 6 Aylık</p>
        <div className="flex gap-3">
          {lines.map((l) => (
            <div key={l.label} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
              <span className="text-[9px] text-white/40">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 280 120" className="w-full h-32 md:h-40">
        {[0, 25, 50, 75, 100].map((v) => (
          <line key={v} x1="0" y1={120 - (v / 100) * 120} x2="280" y2={120 - (v / 100) * 120} stroke="white" strokeOpacity="0.06" />
        ))}
        {lines.map((l) => (
          <path key={l.label} d={toSvgPath(l.points)} fill="none" stroke={l.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </svg>
      <div className="flex justify-between mt-1">
        {months.map((m) => (
          <span key={m} className="text-[9px] text-white/30 font-mono">{m}</span>
        ))}
      </div>
    </div>
  )
}

function KasaDefteriScreen() {
  return (
    <div className="p-4 md:p-5 lg:p-6 space-y-3 overflow-x-auto">
      <p className="text-xs text-white/40 font-mono mb-2">Kasa Defteri - Son İşlemler</p>
      <table className="w-full text-[10px] md:text-xs border-collapse">
        <thead>
          <tr className="text-white/50 font-mono border-b border-white/10">
            <th className="text-left py-2 pr-2">Tarih</th>
            <th className="text-left py-2 pr-2">Saat</th>
            <th className="text-left py-2 pr-2">İşlem</th>
            <th className="text-left py-2 pr-2">Ödeyen Adı Soyadı</th>
            <th className="text-right py-2 pr-2">Tutar</th>
            <th className="text-left py-2 pr-2">Ödeme Tipi</th>
            <th className="text-center py-2">Tip</th>
          </tr>
        </thead>
        <tbody>
          {kasaRows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 text-white/80">
              <td className="py-2 pr-2 font-mono">{row.tarih}</td>
              <td className="py-2 pr-2 font-mono">{row.saat}</td>
              <td className="py-2 pr-2">{row.islem}</td>
              <td className="py-2 pr-2">{row.adSoyad}</td>
              <td className="py-2 pr-2 text-right font-mono">{row.tutar}</td>
              <td className="py-2 pr-2">{row.odemeTipi}</td>
              <td className="py-2 text-center">
                <span className={`px-2 py-0.5 rounded-full font-mono font-semibold ${
                  row.tip === "Gelir" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                }`}>
                  {row.tip}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const screenComponents = [DashboardScreen, YoklamaScreen, OdemeScreen, GelisimScreen, KasaDefteriScreen]

export function Showcase() {
  const [active, setActive] = useState(0)
  const [modal, setModal] = useState(false)
  const { ref, visible } = useInView()

  const next = useCallback(() => {
    setActive((p) => (p + 1) % screens.length)
  }, [])

  useEffect(() => {
    if (modal) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [modal, next])

  const ActiveScreen = screenComponents[active]

  return (
    <section className="py-16 md:py-24 relative" ref={ref}>
      <div className={`max-w-5xl mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-[#818cf8]/10 via-transparent to-[#00d4ff]/10 rounded-3xl blur-2xl" />
          <div className="relative rounded-xl border border-white/10 bg-[#0a0f1a] shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#e94560]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <span className="text-[10px] text-white/30 font-mono">yisa-s.com/panel</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-400">CANLI</span>
              </div>
            </div>
            <div className="min-h-[280px] md:min-h-[300px] lg:min-h-[340px] cursor-pointer transition-all hover:bg-white/[0.01]" onClick={() => setModal(true)}>
              <ActiveScreen />
            </div>
            <div className="flex items-center justify-center gap-2 py-3 border-t border-white/5 dot-indicator">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-[#818cf8]" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Ekran ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mt-6">
          {screens.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-3 py-3 rounded-lg border transition-all ${
                i === active ? "border-[#818cf8]/50 bg-[#818cf8]/10 text-white" : "border-white/5 bg-white/[0.02] text-white/50 hover:text-white/80 hover:border-white/10"
              }`}
            >
              <s.icon className="w-4 h-4 shrink-0" />
              <span className="text-[11px] font-mono truncate">{s.label}</span>
            </button>
          ))}
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setModal(false)}>
          <div className="relative w-full max-w-4xl rounded-xl border border-white/10 bg-[#0a0f1a] shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#e94560]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <span className="text-sm text-white/60 font-mono">{screens[active].label}</span>
              <button onClick={() => setModal(false)} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <ActiveScreen />
            <div className="px-4 py-3 border-t border-white/5">
              <p className="text-xs text-white/50 font-mono">{screens[active].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
