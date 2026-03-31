"use client"

import { useEffect, useRef } from "react"

/**
 * Animated talking face avatar for the vitrin chatbot.
 * Canvas-based: eyes blink, mouth moves, voice wave bars pulse.
 * Same pattern as the Patron TabletAvatar but with vitrin colors.
 */
export default function VitrinAvatar({ size = 120 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    let frame = 0
    let animId: number

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, size, size)
      const t = frame * 0.04

      // --- Outer glow ring ---
      ctx.beginPath()
      ctx.arc(cx, cy, size * 0.46, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(129,140,248,${0.12 + Math.sin(t * 0.5) * 0.06})`
      ctx.lineWidth = 2
      ctx.stroke()

      // --- Head circle ---
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.38)
      grad.addColorStop(0, "#1e1b4b")
      grad.addColorStop(0.7, "#0f0e2a")
      grad.addColorStop(1, "#060513")
      ctx.beginPath()
      ctx.arc(cx, cy, size * 0.38, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
      ctx.strokeStyle = "rgba(129,140,248,0.25)"
      ctx.lineWidth = 1.5
      ctx.stroke()

      // --- Eyes ---
      const eyeY = cy - size * 0.06
      const eyeSpacing = size * 0.11
      const blinkCycle = Math.sin(t * 0.3)
      const eyeOpen = blinkCycle > -0.92 ? 1 : 0.1

      for (const side of [-1, 1]) {
        const ex = cx + side * eyeSpacing
        ctx.beginPath()
        ctx.ellipse(ex, eyeY, size * 0.045, size * 0.045 * eyeOpen, 0, 0, Math.PI * 2)
        ctx.fillStyle = "#818cf8"
        ctx.fill()
        if (eyeOpen > 0.5) {
          ctx.beginPath()
          ctx.arc(ex + size * 0.01, eyeY - size * 0.01, size * 0.015, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255,255,255,0.6)"
          ctx.fill()
        }
      }

      // --- Mouth (animated) ---
      const mouthOpen = Math.abs(Math.sin(t * 2.5)) * size * 0.04 + size * 0.008
      const mouthY = cy + size * 0.12
      ctx.beginPath()
      ctx.ellipse(cx, mouthY, size * 0.07, mouthOpen, 0, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(129,140,248,${0.3 + Math.abs(Math.sin(t * 2.5)) * 0.25})`
      ctx.fill()

      // --- Voice wave bars ---
      const barCount = 5
      const barWidth = size * 0.02
      const barGap = size * 0.035
      const barBaseY = cy + size * 0.28
      for (let i = 0; i < barCount; i++) {
        const bx = cx + (i - (barCount - 1) / 2) * barGap
        const barH = (Math.sin(t * 3 + i * 1.2) * 0.5 + 0.5) * size * 0.06 + size * 0.01
        ctx.beginPath()
        ctx.roundRect(bx - barWidth / 2, barBaseY - barH / 2, barWidth, barH, barWidth / 2)
        ctx.fillStyle = `rgba(129,140,248,${0.3 + Math.sin(t * 3 + i * 1.2) * 0.2})`
        ctx.fill()
      }

      frame++
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [size])

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <div className="absolute inset-[-6px] rounded-full border border-[#818cf8]/10 animate-ping" />
        <div className="absolute inset-[-3px] rounded-full border border-[#818cf8]/20 animate-pulse" />
        <canvas ref={canvasRef} className="relative z-10" />
      </div>
      <div className="text-center">
        <p className="text-[10px] font-mono text-[#818cf8] font-medium tracking-wider">YİSA-S Asistan</p>
        <p className="text-[8px] font-mono text-white/40 mt-0.5">Dinliyorum...</p>
      </div>
    </div>
  )
}
