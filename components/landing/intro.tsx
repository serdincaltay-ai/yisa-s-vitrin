"use client"

import { useEffect, useState } from "react"

export function Intro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"logo" | "text" | "branches" | "exit">("logo")
  const title = "Teknolojiyi Spora Başlattık"
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 600)
    const t2 = setTimeout(() => setPhase("branches"), 2200)
    const t3 = setTimeout(() => setPhase("exit"), 3000)
    const t4 = setTimeout(() => onComplete(), 3600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [onComplete])

  useEffect(() => {
    if (phase !== "text" && phase !== "branches") return
    if (charIndex >= title.length) return
    const t = setTimeout(() => setCharIndex((p) => p + 1), 50)
    return () => clearTimeout(t)
  }, [phase, charIndex, title.length])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060a13] transition-all duration-600 cursor-pointer ${
        phase === "exit" ? "opacity-0 -translate-y-full" : "opacity-100"
      }`}
      onClick={onComplete}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onComplete() }}
      aria-label="İntroyu atla"
    >
      <div className={`relative mb-8 transition-all duration-700 ${phase === "logo" ? "scale-100 opacity-0 animate-[introLogoIn_0.6s_ease-out_forwards]" : "scale-100 opacity-100"}`}>
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#818cf8] to-[#00d4ff] flex items-center justify-center shadow-[0_0_60px_rgba(129,140,248,0.4)]">
          <span className="text-4xl font-bold text-white font-mono">Y</span>
        </div>
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#818cf8]/20 to-[#00d4ff]/20 blur-xl animate-pulse" />
      </div>
      <h1 className={`text-4xl md:text-5xl font-bold font-mono tracking-tight mb-4 transition-opacity duration-500 ${phase === "logo" ? "opacity-0" : "opacity-100"}`}>
        <span className="text-white">YiSA</span>
        <span className="text-[#e94560]">-S</span>
      </h1>
      <p className="text-xl md:text-2xl font-mono text-[#00d4ff] h-8 mb-6">
        {title.slice(0, charIndex)}
        {charIndex < title.length && (
          <span className="inline-block w-0.5 h-6 bg-[#00d4ff] ml-0.5 animate-[blink_0.7s_infinite]" />
        )}
      </p>
      <p className={`text-sm text-white/40 font-mono tracking-widest transition-all duration-500 ${phase === "branches" || phase === "exit" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        Cimnastik &bull; Voleybol &bull; Basketbol &bull; Futbol &bull; Tenis &bull; Yüzme
      </p>
      <p className="absolute bottom-8 text-xs text-white/20 font-mono animate-pulse">
        Atlamak için tıklayın
      </p>
    </div>
  )
}
