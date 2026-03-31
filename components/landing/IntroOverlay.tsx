'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BRANCHES_TEXT = 'Cimnastik \u2022 Voleybol \u2022 Basketbol \u2022 Futbol \u2022 Tenis \u2022 Y\u00FCzme'
const TYPEWRITER_TEXT = 'Teknolojiyi Spora Ba\u015Flatt\u0131k'
const INTRO_DURATION = 3000

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true)
  const [typedText, setTypedText] = useState('')
  const [showBranches, setShowBranches] = useState(false)

  const dismiss = useCallback(() => {
    setIsVisible(false)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return
    let i = 0
    const interval = setInterval(() => {
      if (i <= TYPEWRITER_TEXT.length) {
        setTypedText(TYPEWRITER_TEXT.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setShowBranches(true)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [isVisible])

  // Auto-dismiss
  useEffect(() => {
    if (!isVisible) return
    const timer = setTimeout(dismiss, INTRO_DURATION)
    return () => clearTimeout(timer)
  }, [isVisible, dismiss])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onClick={dismiss}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060a13] cursor-pointer"
          role="presentation"
          aria-label="Giri\u015F animasyonu - ge\u00E7mek i\u00E7in t\u0131klay\u0131n"
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0f3460]/20 blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#00d4ff]/10 blur-[80px] animate-pulse-glow" />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 mb-8"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#0f3460] flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold text-4xl tracking-tight">Y</span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-center text-xl font-bold text-white tracking-widest"
            >
              {'Y\u0130SA-S'}
            </motion.p>
          </motion.div>

          {/* Typewriter text */}
          <div className="relative z-10 text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white min-h-[40px]">
              {typedText}
              <span className="inline-block w-0.5 h-6 bg-[#00d4ff] ml-1 align-middle" style={{ animation: 'blink 0.8s infinite' }} />
            </p>

            {/* Branches */}
            <AnimatePresence>
              {showBranches && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-sm md:text-base text-[#94a3b8] tracking-wide"
                >
                  {BRANCHES_TEXT}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Skip hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 text-sm text-[#64748b]"
          >
            {'T\u0131klayarak ge\u00E7in'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
