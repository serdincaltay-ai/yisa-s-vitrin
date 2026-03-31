'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, Square, Trash2, Send, Loader2 } from 'lucide-react'

type RecordingState = 'idle' | 'recording' | 'recorded' | 'sending' | 'sent'

export default function SesKaydi() {
  const [state, setState] = useState<RecordingState>('idle')
  const [duration, setDuration] = useState(0)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (audioUrl) URL.revokeObjectURL(audioUrl)
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop())
      }
    }
  }, [audioUrl])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data)
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        const url = URL.createObjectURL(blob)
        setAudioUrl(url)
        setState('recorded')
        stream.getTracks().forEach((t) => t.stop())
      }

      mediaRecorder.start()
      setState('recording')
      setDuration(0)

      timerRef.current = setInterval(() => {
        setDuration((d) => d + 1)
      }, 1000)
    } catch {
      alert('Mikrofon erişimi reddedildi. Lütfen tarayıcı ayarlarından izin verin.')
    }
  }, [])

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop()
    }
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const discardRecording = useCallback(() => {
    if (audioUrl) URL.revokeObjectURL(audioUrl)
    setAudioUrl(null)
    setDuration(0)
    setState('idle')
  }, [audioUrl])

  const sendRecording = useCallback(async () => {
    setState('sending')
    // Simulate sending — real implementation would POST to an API endpoint
    await new Promise((r) => setTimeout(r, 1500))
    setState('sent')
    setTimeout(() => setState('idle'), 4000)
  }, [])

  return (
    <div className="mt-8 border-t border-slate-700/50 pt-8">
      <h3 className="text-lg font-semibold text-white mb-2">
        Sesli Mesaj Bırakın
      </h3>
      <p className="text-sm text-slate-400 mb-4">
        Ek talebiniz varsa sesli mesaj bırakabilirsiniz.
      </p>

      <AnimatePresence mode="wait">
        {/* IDLE */}
        {state === 'idle' && (
          <motion.button
            key="idle"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={startRecording}
            className="flex items-center gap-3 px-6 py-3 rounded-xl
              bg-slate-700/50 border border-slate-600/50
              hover:border-red-500/50 hover:bg-red-500/10
              text-slate-300 hover:text-red-400 transition-all"
          >
            <Mic size={20} />
            <span>Kayıt Başlat</span>
          </motion.button>
        )}

        {/* RECORDING */}
        {state === 'recording' && (
          <motion.div
            key="recording"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center gap-4 px-6 py-4 rounded-xl
              bg-red-500/10 border border-red-500/30"
          >
            <div className="relative">
              <span className="w-3 h-3 rounded-full bg-red-500 block animate-pulse" />
            </div>
            <span className="text-red-400 font-mono text-lg min-w-[48px]">
              {formatTime(duration)}
            </span>
            <button
              onClick={stopRecording}
              className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg
                bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
            >
              <Square size={16} />
              <span className="text-sm">Durdur</span>
            </button>
          </motion.div>
        )}

        {/* RECORDED */}
        {state === 'recorded' && audioUrl && (
          <motion.div
            key="recorded"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-4 px-6 py-4 rounded-xl
              bg-slate-700/50 border border-slate-600/50">
              <span className="text-slate-400 text-sm">
                Kayıt süresi: {formatTime(duration)}
              </span>
              <audio src={audioUrl} controls className="flex-1 h-8" />
            </div>
            <div className="flex gap-3">
              <button
                onClick={discardRecording}
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-slate-700/50 text-slate-400 hover:text-red-400
                  hover:bg-red-500/10 transition-all text-sm"
              >
                <Trash2 size={16} />
                Sil
              </button>
              <button
                onClick={sendRecording}
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30
                  transition-all text-sm"
              >
                <Send size={16} />
                Gönder
              </button>
            </div>
          </motion.div>
        )}

        {/* SENDING */}
        {state === 'sending' && (
          <motion.div
            key="sending"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-4 rounded-xl
              bg-slate-700/50 border border-slate-600/50"
          >
            <Loader2 size={20} className="text-amber-400 animate-spin" />
            <span className="text-slate-300">Sesli mesaj gönderiliyor...</span>
          </motion.div>
        )}

        {/* SENT */}
        {state === 'sent' && (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-4 rounded-xl
              bg-emerald-500/10 border border-emerald-500/30"
          >
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400
              flex items-center justify-center text-sm">✓</span>
            <span className="text-emerald-400">Sesli kaydınız alındı. Ekibimiz en kısa sürede inceleyecek.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
