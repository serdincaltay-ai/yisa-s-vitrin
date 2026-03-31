"use client"

import { useEffect, useState } from "react"

/**
 * Tablet-like frame wrapper for the Vitrin storefront.
 * Provides a dark bezel border + subtle grid overlay consistent with the patron panel.
 * On tablet viewports (768-1024px), shows enhanced bezel with status bar and
 * rounded corners to simulate a real tablet device.
 * Used on pages that want the "tablet experience" look.
 */
export default function VitrinTabletFrame({
  children,
}: {
  children: React.ReactNode
}) {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }))
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#040810]">
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(129,140,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content container with tablet bezel effect */}
      <div className="relative z-10 max-w-[1440px] mx-auto min-h-screen border-x border-white/5 bg-[#060a13]/80 shadow-[0_0_80px_rgba(0,0,0,0.6)] tablet-frame">
        {/* Tablet status bar - visible on md (tablet) screens */}
        <div className="hidden md:flex lg:hidden items-center justify-between px-5 py-1.5 bg-[#060a13] border-b border-white/5 text-[10px] font-mono sticky top-[4.5rem] z-40">
          <div className="flex items-center gap-2 text-white/40">
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-white/30">YiSA-S Vitrin</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            {/* Wi-Fi icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
            {/* Battery icon */}
            <svg width="16" height="10" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="1" width="15" height="10" rx="2" /><rect x="3" y="3" width="8" height="6" rx="1" fill="currentColor" opacity="0.5" /><path d="M17 4v4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" fill="currentColor" /></svg>
          </div>
        </div>

        {children}

        {/* Tablet home indicator - visible on md (tablet) screens */}
        <div className="hidden md:flex lg:hidden items-center justify-center py-2 bg-[#060a13] border-t border-white/5">
          <div className="w-28 h-1 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  )
}
