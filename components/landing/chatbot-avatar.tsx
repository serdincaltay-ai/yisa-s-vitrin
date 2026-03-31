"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import VitrinAvatar from "@/components/tablet/VitrinAvatar"
import { fetchAppApi } from "@/lib/app-api"
import { VITRIN_ROBOT } from "@/lib/knowledge/yisas"

const quickMessages = [...VITRIN_ROBOT.quickMessages]

/**
 * Enhanced chatbot with animated talking face avatar.
 * Replaces the static NeebChat-style chatbot with a canvas-animated avatar header.
 */
export function ChatbotAvatar() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: VITRIN_ROBOT.greeting },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const sessionId = useMemo(() => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID()
    }
    return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleQuick = (item: (typeof quickMessages)[0]) => {
    setMessages((prev) => [...prev, { role: "user", text: item.q }])
    setIsTyping(true)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: item.a }])
      setIsTyping(false)
    }, 600)
  }

  const handleSend = async () => {
    const text = input.trim()
    if (!text) return
    setInput("")
    setMessages((prev) => [...prev, { role: "user", text }])
    setIsTyping(true)

    try {
      const res = await fetchAppApi("/api/robot/chat", {
        method: "POST",
        body: JSON.stringify({
          message: text,
          session_id: sessionId,
          context: "website",
          page_url: typeof window !== "undefined" ? window.location.pathname : "",
          conversation_history: messages.map((m) => ({
            role: m.role === "bot" ? "assistant" : "user",
            content: m.text,
          })),
        }),
      })

      if (res.ok) {
        const data = await res.json()
        const reply = data?.data?.message || data?.reply || data?.content || "Bir hata oluştu, tekrar deneyin."
        setMessages((prev) => [...prev, { role: "bot", text: reply }])
      } else {
        setMessages((prev) => [...prev, { role: "bot", text: "Bağlantı hatası. Lütfen tekrar deneyin." }])
      }
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Bağlantı hatası. Lütfen tekrar deneyin." }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          open
            ? "bg-white/10 text-white/60 rotate-90 border border-white/10"
            : "bg-[#818cf8] text-white hover:scale-110 shadow-[0_0_20px_rgba(129,140,248,0.3)]"
        }`}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[32rem] rounded-2xl border border-white/10 bg-[#0a0f1a]/95 backdrop-blur-xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden">
          {/* Avatar header */}
          <div className="px-4 py-4 border-b border-white/10 bg-gradient-to-b from-[#818cf8]/5 to-transparent flex flex-col items-center">
            <VitrinAvatar size={80} />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-52 min-h-[120px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#818cf8] text-white rounded-br-sm"
                      : "bg-white/10 text-white/90 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-xl bg-white/10 text-white/60 text-xs rounded-bl-sm">
                  <span className="animate-pulse">Yazıyor...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick messages */}
          <div className="px-3 py-2 border-t border-white/5 space-y-1 max-h-28 overflow-y-auto">
            <span className="text-[9px] text-white/30 font-mono px-1">Hızlı Sorular:</span>
            <div className="flex flex-wrap gap-1">
              {quickMessages.map((item) => (
                <button
                  key={item.q}
                  onClick={() => handleQuick(item)}
                  className="text-[10px] px-2 py-1 rounded-md bg-[#818cf8]/8 text-white/70 hover:bg-[#818cf8]/15 hover:text-white transition-colors font-mono border border-white/5"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>

          {/* Input area */}
          <div className="px-3 py-2 border-t border-white/10">
            <div className="flex items-center gap-2 bg-white/5 rounded-xl border border-white/10 p-1.5">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Sorunuzu yazın..."
                className="flex-1 bg-transparent text-xs font-mono text-white placeholder-white/30 outline-none px-2 py-1.5"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-8 h-8 rounded-lg bg-[#818cf8]/20 border border-[#818cf8]/30 flex items-center justify-center text-[#818cf8] hover:bg-[#818cf8]/30 transition-colors disabled:opacity-30"
              >
                <Send size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
