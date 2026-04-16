'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Building2, HelpCircle, Send as SendIcon, VolumeX } from 'lucide-react'

const NEON_CYAN = '#00d4ff'
const NEON_PINK = '#e94560'

type PersonaKey = 'salon' | 'merak' | null

interface ChatMessage {
  role: 'user' | 'robot'
  text: string
}

export default function VitrinRobot() {
  const [open, setOpen] = useState(false)
  const [persona, setPersona] = useState<PersonaKey>(null)
  const [chatMode, setChatMode] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [subtitle, setSubtitle] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)
  const soundEnabledRef = useRef(soundEnabled)

  useEffect(() => {
    soundEnabledRef.current = soundEnabled
  }, [soundEnabled])

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !soundEnabledRef.current) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'tr-TR'
    utterance.rate = 0.9
    utterance.onstart = () => setSubtitle(text)
    utterance.onend = () => setSubtitle('')
    utterance.onerror = () => setSubtitle('')
    window.speechSynthesis.speak(utterance)
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Mikrofon/ses varsayılan olarak kapalı tutulur.
  useEffect(() => {
    if (open && soundEnabledRef.current) {
      speak('Merhaba, ben YİSA-S. Size nasıl yardımcı olabilirim?')
    }
  }, [open, speak])

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const handlePersona = async (key: Exclude<PersonaKey, null>) => {
    setPersona(key)
    setChatMode(true)
    setLoading(true)
    try {
      const res = await fetch('/api/robot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: '', persona: key }),
      })
      const json = await res.json()
      const reply = json.reply || 'Merhaba!'
      setMessages([{ role: 'robot', text: reply }])
      speak(reply)
    } catch {
      setMessages([{ role: 'robot', text: 'Baglanti hatasi. Tekrar deneyin.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleSend = async () => {
    const msg = input.trim()
    if (!msg || loading) return
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text: msg }])
    setLoading(true)
    try {
      const res = await fetch('/api/robot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg, persona: persona ?? undefined }),
      })
      const json = await res.json()
      const reply = json.reply || 'Anlayamadim.'
      setMessages((prev) => [...prev, { role: 'robot', text: reply }])
      speak(reply)
    } catch {
      setMessages((prev) => [...prev, { role: 'robot', text: 'Baglanti hatasi.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    if (typeof window !== 'undefined') window.speechSynthesis.cancel()
    setSubtitle('')
    setPersona(null)
    setChatMode(false)
    setMessages([])
    setInput('')
  }

  return (
    <>
      {/* Floating robot toggle */}
      <button
        onClick={() => {
          setOpen(!open)
          if (open) handleReset()
        }}
        className="fixed bottom-6 left-6 z-[60] w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
        style={{
          background: open
            ? 'rgba(255,255,255,0.08)'
            : `linear-gradient(135deg, ${NEON_CYAN}, ${NEON_PINK})`,
          boxShadow: open
            ? 'none'
            : `0 0 24px ${NEON_CYAN}40, 0 0 48px ${NEON_PINK}20`,
        }}
        aria-label={open ? 'Robotu kapat' : 'Robotu ac'}
      >
        {open ? (
          <X className="w-5 h-5 text-white/60" />
        ) : (
          <div className="relative w-10 h-10">
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${NEON_CYAN}30, ${NEON_PINK}30)`,
                border: `1.5px solid ${NEON_CYAN}60`,
              }}
            />
            <div className="absolute top-2.5 left-2 w-2 h-2 rounded-full animate-pulse"
              style={{ background: NEON_CYAN, boxShadow: `0 0 6px ${NEON_CYAN}` }} />
            <div className="absolute top-2.5 right-2 w-2 h-2 rounded-full animate-pulse"
              style={{ background: NEON_CYAN, boxShadow: `0 0 6px ${NEON_CYAN}` }} />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full"
              style={{ background: `${NEON_PINK}80` }} />
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 rounded-full"
              style={{ background: NEON_CYAN }} />
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full animate-ping"
              style={{ background: `${NEON_CYAN}60` }} />
          </div>
        )}
      </button>

      {/* Robot panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 left-6 z-[60] w-[340px] sm:w-[380px] rounded-2xl border overflow-hidden flex flex-col"
            style={{
              background: 'rgba(10, 15, 30, 0.97)',
              backdropFilter: 'blur(20px)',
              borderColor: `${NEON_CYAN}25`,
              boxShadow: `0 0 40px ${NEON_CYAN}10, 0 8px 32px rgba(0,0,0,0.5)`,
              maxHeight: '70vh',
            }}
          >
            {/* Robot face header */}
            <div
              className="relative px-6 py-4 flex items-center gap-4 shrink-0"
              style={{
                background: `linear-gradient(135deg, ${NEON_CYAN}08, ${NEON_PINK}08)`,
                borderBottom: `1px solid ${NEON_CYAN}15`,
              }}
            >
              <div className="relative w-10 h-10 shrink-0">
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${NEON_CYAN}20, ${NEON_PINK}20)`,
                    border: `2px solid ${NEON_CYAN}40`,
                  }}
                />
                <div className="absolute top-2 left-1.5 w-2 h-2 rounded-full"
                  style={{ background: NEON_CYAN, boxShadow: `0 0 8px ${NEON_CYAN}`, animation: 'pulse 2s infinite' }} />
                <div className="absolute top-2 right-1.5 w-2 h-2 rounded-full"
                  style={{ background: NEON_CYAN, boxShadow: `0 0 8px ${NEON_CYAN}`, animation: 'pulse 2s infinite 0.3s' }} />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full"
                  style={{ background: `${NEON_PINK}60` }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/90 leading-relaxed">
                  Merhaba, ben <span className="font-semibold" style={{ color: NEON_CYAN }}>YiSA-S</span> Robot.
                </p>
                <p className="text-[10px] text-white/30 font-mono">Soru sorun, yardimci olayim</p>
              </div>
              {/* Ses kapalı (isteğe bağlı açılabilir) */}
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') window.speechSynthesis.cancel()
                  setSubtitle('')
                  setSoundEnabled(!soundEnabled)
                }}
                className="p-1.5 rounded transition-colors"
                style={{ color: soundEnabled ? NEON_CYAN : 'rgba(255,255,255,0.3)' }}
                title="Ses durumu"
              >
                <VolumeX size={14} />
              </button>
              {chatMode && (
                <button onClick={handleReset} className="text-xs text-white/30 hover:text-white/60 px-2 py-1 rounded border border-white/10">
                  Sifirla
                </button>
              )}
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto p-4">
              <AnimatePresence mode="wait">
                {!chatMode ? (
                  <motion.div
                    key="buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <p className="text-xs text-white/40 mb-3">Size nasil yardimci olabilirim?</p>
                    <button
                      onClick={() => handlePersona('salon')}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-white/90 transition-all hover:scale-[1.02]"
                      style={{
                        background: `${NEON_CYAN}08`,
                        border: `1px solid ${NEON_CYAN}20`,
                      }}
                    >
                      <Building2 size={18} style={{ color: NEON_CYAN }} />
                      Salon sahibiyim
                    </button>
                    <button
                      onClick={() => handlePersona('merak')}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm text-white/90 transition-all hover:scale-[1.02]"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <HelpCircle size={18} className="text-white/60" />
                      Merak ediyorum
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    {messages.map((m, i) => (
                      <div
                        key={i}
                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                            m.role === 'user'
                              ? 'bg-[#818cf8]/20 text-white/90 rounded-br-sm'
                              : 'bg-white/5 text-white/80 rounded-bl-sm'
                          }`}
                          style={m.role === 'robot' ? { borderLeft: `2px solid ${NEON_CYAN}40` } : undefined}
                        >
                          {m.text}
                        </div>
                      </div>
                    ))}
                    {loading && (
                      <div className="flex justify-start">
                        <div className="px-3 py-2 rounded-xl bg-white/5 text-white/40 text-sm animate-pulse">
                          Dusunuyor...
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Altyazı şeridi */}
            <AnimatePresence>
              {subtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="shrink-0 px-4 py-2 border-t"
                  style={{ borderColor: `${NEON_CYAN}15`, background: `${NEON_CYAN}05` }}
                >
                  <p className="text-xs text-white/70 leading-relaxed">
                    <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse" style={{ background: NEON_CYAN }} />
                    {subtitle}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Chat input (visible only in chat mode) */}
            {chatMode && (
              <div className="shrink-0 px-4 pb-4 pt-2 border-t border-white/5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Sorunuzu yazin..."
                    className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#818cf8]/50"
                  />
                  <button
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    className="px-3 py-2 rounded-xl transition-colors disabled:opacity-30"
                    style={{ background: `${NEON_CYAN}20`, color: NEON_CYAN }}
                  >
                    <SendIcon size={16} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
