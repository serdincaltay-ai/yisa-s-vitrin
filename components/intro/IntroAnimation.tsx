"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const STORAGE_KEY = "yisa-intro-seen"
const SLOGAN = "Teknolojiyi Spora Başlattık"
const SUBLINE = "Yapay Zeka Destekli Spor Okulu Yönetim Sistemi"

type Props = {
  onComplete: () => void
}

export function IntroAnimation({ onComplete }: Props) {
  const [visible, setVisible] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)
  const [phase, setPhase] = useState<"init" | "logo" | "scale" | "typing" | "subline" | "exit">("init")

  const finish = useCallback(() => {
    if (typeof window !== "undefined") window.sessionStorage.setItem(STORAGE_KEY, "1")
    setVisible(false)
    onComplete()
  }, [onComplete])

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.sessionStorage.getItem(STORAGE_KEY)) {
      onComplete()
      return
    }
    setVisible(true)

    // Safety timeout: if animation doesn't complete in 8 seconds, force finish
    // Animation sequence takes ~6.2s, so 8s gives enough headroom
    const safetyTimer = setTimeout(() => {
      finish()
    }, 8000)
    return () => clearTimeout(safetyTimer)
  }, [onComplete, finish])

  useEffect(() => {
    if (!visible) return
    const t1 = setTimeout(() => setPhase("logo"), 100)
    const t2 = setTimeout(() => setPhase("scale"), 1100)
    const t3 = setTimeout(() => setPhase("typing"), 2600)
    const t4 = setTimeout(() => setPhase("subline"), 4600)
    const t5 = setTimeout(() => setPhase("exit"), 5600)
    const t6 = setTimeout(() => finish(), 6200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(t6)
    }
  }, [visible, finish])

  useEffect(() => {
    if (phase !== "typing") return
    if (typingIndex >= SLOGAN.length) return
    const t = setTimeout(() => setTypingIndex((i) => i + 1), 2000 / SLOGAN.length)
    return () => clearTimeout(t)
  }, [phase, typingIndex])

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a12]"
        initial={false}
        animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <button
          type="button"
          onClick={finish}
          className="absolute top-4 right-4 z-10 px-3 py-1.5 text-sm text-white/60 hover:text-white border border-white/20 rounded-lg transition-colors"
          aria-label="İntroyu atla"
        >
          Atla
        </button>

        <div className="flex flex-col items-center justify-center px-4">
          {/* Logo */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={
              phase === "init" || phase === "logo"
                ? { opacity: 1, scale: 0.8, rotate: -5 }
                : phase === "scale"
                ? { opacity: 1, scale: 1, rotate: 0 }
                : { opacity: 1, scale: 1, rotate: 0 }
            }
            transition={{
              opacity: { duration: 1, delay: 0 },
              scale: { duration: 1.5, delay: phase === "scale" ? 0 : 1 },
              rotate: { duration: 1.5, delay: phase === "scale" ? 0 : 1 },
            }}
          >
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full opacity-60 blur-2xl bg-gradient-to-r from-emerald-500/40 via-cyan-400/40 to-blue-500/40"
                aria-hidden
              />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                <img
                  src="/icons/icon-192.svg"
                  alt="YİSA-S"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = "none"
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = "block"
                  }}
                />
                <span
                  className="hidden text-4xl sm:text-5xl font-bold tracking-tight text-white"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  YİSA-S
                </span>
              </div>
            </div>
          </motion.div>

          {/* Slogan - typing */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95 mb-2 min-h-[1.5em] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "typing" || phase === "subline" || phase === "exit" ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 2.5 }}
          >
            {SLOGAN.slice(0, typingIndex)}
            {phase === "typing" && typingIndex < SLOGAN.length && (
              <span className="inline-block w-0.5 h-[0.9em] bg-cyan-400 ml-0.5 animate-pulse align-middle" />
            )}
          </motion.p>

          {/* Alt satır */}
          <motion.p
            className="text-sm sm:text-base text-white/50 text-center max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "subline" || phase === "exit" ? 1 : 0 }}
            transition={{ duration: 1, delay: phase === "subline" || phase === "exit" ? 0 : 4.5 }}
          >
            {SUBLINE}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
