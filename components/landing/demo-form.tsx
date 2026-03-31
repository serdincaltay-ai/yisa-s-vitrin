"use client"

import { CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import MultiStepDemoForm from "@/components/demo/MultiStepDemoForm"

export function DemoForm() {
  const { ref, visible } = useInView()

  return (
    <section id="demo" className="py-24 md:py-32 relative" ref={ref}>
      <div className={`max-w-4xl mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#818cf8] uppercase mb-4 block">İletişim</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">Demo Talep Edin, Farkı Görün</h2>
            <p className="text-white/50 leading-relaxed mb-8 text-pretty">
              30 dakikalık canlı demo görüşmesinde sistemi yakından tanıyın. Kulübünüze özel çözümleri keşfedelim.
            </p>

            <div className="space-y-4">
              {[
                { title: "Canlı Demo", desc: "Gerçek verilerle canlı sistem gösterimi" },
                { title: "Özel Analiz", desc: "Kulübünüze özel ihtiyaç analizi" },
                { title: "Fiyat Teklifi", desc: "Kullanım senaryonuza göre fiyatlandırma" },
                { title: "Hızlı Başlangıç", desc: "24 saat içinde sisteminiz hazır" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#818cf8]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#818cf8]/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#818cf8]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 md:p-6 lg:p-8 rounded-xl border border-white/10 bg-white/[0.02]">
            <MultiStepDemoForm embedded />
          </div>
        </div>
      </div>
    </section>
  )
}
