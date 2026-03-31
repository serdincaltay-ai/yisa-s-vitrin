"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

const quickMessages = [
  { q: "Tesis deneyiminiz var mı?", a: "Harika! YİSA-S ile mevcut tecrübenizi yapay zeka destekli sisteme taşıyabilirsiniz. Demo talep edin, size özel plan oluşturalım." },
  { q: "Hangi branşla ilgileniyorsunuz?", a: "Cimnastik, voleybol, basketbol, futbol, tenis ve yüzme branşlarımız aktif. Yakın zamanda stüdyo sporları da eklenecek." },
  { q: "Demo talep etmek istiyorum", a: "Harika! Aşağı kaydığınızda demo talep formunu bulabilirsiniz. Veya bize WhatsApp'tan ulaşabilirsiniz." },
  { q: "Franchise ücreti nedir?", a: "Franchise paketlerimiz tesis büyüklüğüne ve branş sayısına göre değişir. Detaylı bilgi için demo talep formumuzu doldurun." },
  { q: "Kaç robot çalışıyor?", a: "4 yapay zeka destekli robot: koordinasyon, analiz, koruma ve şablon dağıtımı. 12 direktörlük altında çalışırlar." },
]

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Merhaba! YİSA-S hakkında bilgi almak ister misiniz?" },
  ])

  const handleQuick = (item: (typeof quickMessages)[0]) => {
    setMessages((prev) => [...prev, { role: "user", text: item.q }, { role: "bot", text: item.a }])
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          open ? "bg-white/10 text-white/60 rotate-90" : "bg-[#818cf8] text-white hover:scale-110"
        }`}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-h-[28rem] rounded-xl border border-white/10 bg-[#0a0f1a] shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 bg-[#818cf8]/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-mono font-bold text-white">YİSA-S Asistan</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-60">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-xs leading-relaxed ${
                    m.role === "user" ? "bg-[#818cf8] text-white" : "bg-white/10 text-white/90"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 border-t border-white/10 space-y-1.5 max-h-36 overflow-y-auto">
            <span className="text-[10px] text-white/40 font-mono">Hızlı Sorular:</span>
            {quickMessages.map((item) => (
              <button
                key={item.q}
                onClick={() => handleQuick(item)}
                className="block w-full text-left text-[11px] px-2.5 py-1.5 rounded-md bg-[#818cf8]/10 text-white hover:bg-[#818cf8]/20 transition-colors font-mono"
              >
                {item.q}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
