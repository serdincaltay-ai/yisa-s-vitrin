"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slogans = [
  "Spor sporcuya göre: sağlık, gelişim, yetenek, eğlence ve hedefler",
  "Yeteneğine göre gel, dilersen profesyonel olarak ilerle",
  "Yapay zeka destekli sporcu takibi ve veli paneli",
  "Antrenör yönetimi ve franchise sistemi tek platformda",
  "YİSA-S ile tesisinizi tek ekrandan yönetin",
]

const slides = [
  { label: "Patron Paneli", desc: "Tüm tesisinizi tek ekrandan yönetin" },
  { label: "Antrenör Paneli", desc: "Antrenörlerinize özel yapay zeka destekli plan" },
  { label: "Tesis Kurulumu", desc: "Kuruyoruz, inşa ediyoruz, teslim ediyoruz" },
  { label: "Sporcu Takip", desc: "Gelişim grafikleri ve sağlık verileri" },
  { label: "Veli Paneli", desc: "Veliler çocuklarını canlı takip etsin" },
]

export function Hero() {
  const [idx, setIdx] = useState(0)
  const [slideIdx, setSlideIdx] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [heroVideoError, setHeroVideoError] = useState(false)
  const [modalVideoError, setModalVideoError] = useState(false)
  const introVideoSrc = "/Video_Generation_Prompt_Revision.mp4"

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % slogans.length), 3500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setSlideIdx((p) => (p + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {!heroVideoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            poster="/images/yisa-s-hero.jpg"
            onError={() => setHeroVideoError(true)}
          >
            <source src={introVideoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/yisa-s-hero.jpg"
            alt="YİSA-S Teknolojiyi Spora Başlattık"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060a13] via-[#060a13]/85 to-[#060a13]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a13] via-transparent to-[#060a13]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-16 lg:py-0 grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#818cf8]/30 bg-[#818cf8]/5 backdrop-blur-sm mb-6 hover:bg-[#818cf8]/10 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-[#818cf8]" />
            <span className="text-xs font-mono tracking-wider text-[#818cf8] uppercase">
              Yapay Zeka Destekli Spor Yönetimi
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-4 text-balance leading-tight animate-[slideUp_0.8s_ease-out]">
            Spor Tesisinin Tüm Yönetimi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] via-[#00d4ff] to-[#10b981]">
              Tek Platformda
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-xl mb-6 leading-relaxed text-pretty animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Yapay zeka destekli sporcu takibi, veli paneli, antrenör yönetimi ve franchise sistemi.
          </p>

          <div className="h-8 mb-6 overflow-hidden">
            <p key={idx} className="text-base text-[#00d4ff]/80 font-mono tracking-wide animate-[fadeInUp_0.5s_ease-out]">
              {`"${slogans[idx]}"`}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <Button
              size="lg"
              className="bg-[#818cf8] text-white hover:bg-[#818cf8]/80 font-mono tracking-wider px-8 py-6 text-base min-h-[44px]"
              onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              Demo Talep Et
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#818cf8]/30 text-white hover:bg-[#818cf8]/5 font-mono tracking-wider px-8 py-6 text-base bg-transparent backdrop-blur-sm min-h-[44px]"
              onClick={() => setShowVideo(true)}
            >
              <Play className="mr-2 h-4 w-4 text-[#e94560]" />
              Tanıtım İzle
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-6 lg:gap-10">
            {[
              { val: "4", lbl: "Robot" },
              { val: "12", lbl: "Direktörlük" },
              { val: "300+", lbl: "Hareket Havuzu" },
              { val: "6", lbl: "Branş" },
            ].map((s) => (
              <div key={s.lbl} className="flex items-baseline gap-1.5 group">
                <span className="text-2xl font-bold text-[#00d4ff] font-mono group-hover:text-[#818cf8] transition-colors">{s.val}</span>
                <span className="text-xs text-white/40 font-mono tracking-wider">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block md:max-w-sm md:mx-auto lg:max-w-none">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#818cf8]/20 to-[#00d4ff]/20 rounded-2xl blur-2xl" />
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0f1a]/80 backdrop-blur-sm">
              {!heroVideoError ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-auto"
                  poster="/images/yisa-s-hero.jpg"
                  onError={() => setHeroVideoError(true)}
                >
                  <source src={introVideoSrc} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src="/images/yisa-s-hero.jpg"
                  alt="YİSA-S Platform Görseli"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              )}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div key={slideIdx} className="animate-[fadeInUp_0.5s_ease-out]">
                  <span className="text-xs font-mono text-[#818cf8] tracking-widest uppercase">{slides[slideIdx].label}</span>
                  <p className="text-lg font-bold text-white mt-1">{slides[slideIdx].desc}</p>
                </div>
                <div className="flex gap-2 mt-4 dot-indicator">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlideIdx(i)}
                      className={`h-2 rounded-full transition-all ${i === slideIdx ? "bg-[#818cf8] w-6" : "w-2 bg-white/30 hover:bg-white/50"}`}
                      aria-label={`Slayt ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#060a13]/80 backdrop-blur-sm border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-white">CANLI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#060a13]/90 backdrop-blur-sm" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl mx-4 aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0a0f1a]" onClick={(e) => e.stopPropagation()}>
            {!modalVideoError ? (
              <video
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                poster="/images/yisa-s-hero.jpg"
                onError={() => setModalVideoError(true)}
              >
                <source src={introVideoSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <Play className="w-16 h-16 text-[#e94560] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Tanıtım videosu yüklenemedi</h3>
                <p className="text-sm text-white/50 max-w-md">
                  Video dosyasını `public/Video_Generation_Prompt_Revision.mp4` yoluna ekleyip sayfayı yenileyin.
                </p>
              </div>
            )}
            <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white min-w-[44px] min-h-[44px]">
              X
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#818cf8]/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#818cf8]/60 animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
