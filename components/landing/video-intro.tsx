"use client"

import { useState } from "react"
import { Play, X, Monitor, Users, Brain, BarChart3 } from "lucide-react"

const highlights = [
  { icon: Monitor, label: "Patron Paneli", desc: "Tüm tesisinizi tek ekrandan yönetin" },
  { icon: Users, label: "Veli & Antrenör", desc: "Gelişim takibi ve iletişim bir arada" },
  { icon: Brain, label: "6 AI Motoru", desc: "Yapay zeka destekli sporcu analizi" },
  { icon: BarChart3, label: "900 Alan", desc: "Kapsamlı değerlendirme matrisi" },
]

export function VideoIntro() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-[#060a13] via-slate-900/50 to-[#060a13]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Platformu Keşfedin
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            YİSA-S yapay zeka destekli spor tesisi yönetim sistemiyle tanışın.
          </p>
        </div>

        {/* Video Player Area */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0a0f1a] cursor-pointer group"
            onClick={() => setShowVideo(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#818cf8]/10 via-transparent to-[#00d4ff]/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">YİSA-S Demo</h3>
              <p className="text-sm text-white/60 max-w-md">
                Spor tesisi yönetimini nasıl dönüştürdüğümüzü keşfedin
              </p>
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[#060a13]/80 backdrop-blur-sm border border-white/10">
              <span className="text-[10px] font-mono text-white/60">DEMO</span>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 text-center hover:border-[#818cf8]/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#818cf8]/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-[#818cf8]" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{item.label}</h3>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#060a13]/90 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0a0f1a]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#818cf8]/20 to-[#00d4ff]/20 border border-white/10 flex items-center justify-center mb-6 animate-pulse">
                <Play className="w-10 h-10 text-[#818cf8]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Demo Videosu Çok Yakında</h3>
              <p className="text-sm text-white/50 max-w-lg leading-relaxed mb-2">
                900 alanlı değerlendirme sistemi, 6 AI motoru ve PHV büyüme takibi ile
                çocuk sporcuların gelişimini nasıl dönüştürdüğümüzü göreceğiniz demo
                filmimiz hazırlanıyor.
              </p>
              <div className="flex items-center gap-3 mt-4 mb-6">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#818cf8]/10 border border-[#818cf8]/20">
                  <Brain className="w-3.5 h-3.5 text-[#818cf8]" />
                  <span className="text-[11px] text-[#818cf8] font-mono">6 AI Motoru</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                  <BarChart3 className="w-3.5 h-3.5 text-[#00d4ff]" />
                  <span className="text-[11px] text-[#00d4ff] font-mono">900 Alan</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] text-emerald-400 font-mono">Veli Paneli</span>
                </div>
              </div>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#818cf8] text-white rounded-xl font-medium hover:bg-[#818cf8]/80 transition-all hover:shadow-lg hover:shadow-[#818cf8]/20"
              >
                Canlı Demo Talep Et
              </a>
            </div>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
