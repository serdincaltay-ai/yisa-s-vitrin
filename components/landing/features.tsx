"use client"

import { useState } from "react"
import { Shield, BarChart3, MessageSquare, Brain, Users, CreditCard, Activity, Sparkles, ClipboardList, GraduationCap, Dumbbell, ChevronDown, Bot } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  { icon: Activity, title: "Yapay Zeka Destekli Yoklama", desc: "QR kod ile giriş-çıkış takibi. Devamsızlık anında veliye otomatik bildirim." },
  { icon: BarChart3, title: "Sporcu Gelişim Takibi", desc: "Boy, kilo, esneklik, kuvvet parametreleri. Yaş normlarıyla kıyaslama. Şampiyonluk hedefi grafikleri." },
  { icon: MessageSquare, title: "Veli Paneli", desc: "Çocuğunuzun antrenman durumu, gelişim grafikleri, aidat bilgisi tek ekranda." },
  { icon: GraduationCap, title: "Antrenör Paneli", desc: "Ders programı, sporcu listesi, hareket kütüphanesi, performans girişi. Yapay zeka destekli sistem antrenörlerin gerçek kapasitesinde çalışmalarını sağlar." },
  { icon: CreditCard, title: "Aidat ve Ödeme Yönetimi", desc: "Saat bazlı paketler, otomatik hatırlatma, gecikme takibi, gelir-gider raporu." },
  { icon: Dumbbell, title: "Branş Yönetimi", desc: "6 branş, 300+ branşa özel hareket havuzu. Yapay zeka destekli kontrol ve branşa özgü parametreler." },
  { icon: Users, title: "Franchise Yönetim Sistemi", desc: "Kendi logonuz, kendi renkleriniz, kendi subdomain'iniz. Şablon yükle, tesisiniz hazır." },
  { icon: Shield, title: "KVKK ve Çocuk Güvenliği", desc: "Çocuklarla çalışıyoruz. Veri koruma, veli rızası, 3 duvar güvenlik. Çocuk verileri en hassas önceliktir." },
  { icon: Sparkles, title: "COO Mağazası", desc: "Hazır şablonlar, logolar, içerikler. Tesisinizi kişiselleştirecek her şey burada." },
  { icon: ClipboardList, title: "İş Takip Sistemi", desc: "Her iş için takip numarası. Başından sonuna kayıt altında. Kim ne yaptı, ne zaman yaptı." },
  { icon: MessageSquare, title: "ManyChat Entegrasyonu", desc: "WhatsApp, Instagram, Facebook üzerinden otomatik iletişim. Veliler mesaj atsın, yapay zeka destekli yanıt versin." },
  { icon: Brain, title: "Hazır Antrenman Planları", desc: "Yapay zeka destekli planlar antrenörlerimizin kalitesini artıracak. Branşa özel hazır planlar." },
]

export function Features() {
  const [showRobots, setShowRobots] = useState(false)
  const { ref, visible } = useInView()

  return (
    <section id="features" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-mono tracking-[0.3em] text-[#818cf8] uppercase mb-4 block">Tesisinizin Güçlü Altyapısı</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Spor Kulübü İşletmecilerinin Beklediğinden Daha Fazlası
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto text-pretty">
            Siz yönetin, yapay zeka destekli sistemler çalıştırsın. Kayıt, aidat, antrenman, çocuk takip - her şey tek kontrol altında.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:border-[#818cf8]/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#818cf8]/5 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#818cf8]/10 flex items-center justify-center mb-3 group-hover:bg-[#818cf8]/20 transition-colors">
                <service.icon className="w-5 h-5 text-[#818cf8]" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 font-mono">{service.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowRobots(!showRobots)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#818cf8]/30 bg-[#818cf8]/5 text-sm font-mono text-[#818cf8] hover:bg-[#818cf8]/10 transition-colors min-h-[44px]"
          >
            <Bot className="w-4 h-4" />
            {showRobots ? "Detayları Gizle" : "4 Robot ve 12 Direktörlük Detayı"}
            <ChevronDown className={`w-4 h-4 transition-transform ${showRobots ? "rotate-180" : ""}`} />
          </button>
        </div>

        {showRobots && (
          <div className="mt-8 p-6 rounded-xl border border-white/10 bg-white/[0.02] animate-[slideUp_0.5s_ease-out]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
              {[
                { name: "Koordinasyon", role: "Yönetim", desc: "Tüm süreçleri yönetir, görevleri dağıtır", color: "text-[#818cf8]" },
                { name: "Güvenlik", role: "Koruma", desc: "KVKK, veri güvenliği, erişim kontrolü", color: "text-emerald-400" },
                { name: "Veri", role: "Analiz", desc: "Performans, sağlık, büyüme analizleri", color: "text-[#00d4ff]" },
                { name: "YİSA-S", role: "Dağıtım", desc: "Şablon dağıtımı, franchise danışmanlık", color: "text-[#f59e0b]" },
              ].map((r) => (
                <div key={r.name} className="p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                  <span className={`text-lg font-bold font-mono ${r.color}`}>{r.name}</span>
                  <p className="text-xs text-white/40 font-mono mt-1">{r.role}</p>
                  <p className="text-xs text-white/50 mt-2">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/30 text-center font-mono">
              12 direktörlük kural koyar, yapay zeka destekli sistemler iş yapar. Muhasebe her direktörlükte aktif.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
