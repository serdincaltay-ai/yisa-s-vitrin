'use client'

// v0 URL: https://v0.app/chat/yisarobotavatar-react-component-ud718ZatqoD - gercek icerik v0dan transfer edilecek
// Su anki icerik GECICI placeholder SVG; production'a gectiginde v0 component'i ile degistirilecek.

import * as React from 'react'

export type YisaRobotState = 'idle' | 'listening' | 'speaking'

export interface YisaRobotAvatarProps {
  variant?: string
  size?: number
  initialState?: YisaRobotState
  onStateChange?: (state: YisaRobotState) => void
}

const STATE_ORDER: YisaRobotState[] = ['idle', 'listening', 'speaking']

const STATE_STYLE: Record<YisaRobotState, { body: string; eye: string; mouth: string; glow: string; label: string }> = {
  idle:      { body: '#0e7490', eye: '#67e8f9', mouth: '#67e8f9', glow: 'rgba(103,232,249,0.35)',  label: 'Bekliyor' },
  listening: { body: '#047857', eye: '#34d399', mouth: '#34d399', glow: 'rgba(52,211,153,0.45)',  label: 'Dinliyor' },
  speaking:  { body: '#b45309', eye: '#fcd34d', mouth: '#fcd34d', glow: 'rgba(252,211,77,0.55)',  label: 'Konuşuyor' },
}

export function YisaRobotAvatar({
  variant: _variant,
  size = 256,
  initialState = 'idle',
  onStateChange,
}: YisaRobotAvatarProps) {
  const [state, setState] = React.useState<YisaRobotState>(initialState)
  const style = STATE_STYLE[state]

  const handleClick = () => {
    const next = STATE_ORDER[(STATE_ORDER.indexOf(state) + 1) % STATE_ORDER.length]
    setState(next)
    onStateChange?.(next)
  }

  return (
    <div className="flex flex-col items-center gap-3">
    <button
      type="button"
      onClick={handleClick}
      aria-label={`YİSA Robot — ${style.label} (tıklayarak durumu değiştir)`}
      className="group relative inline-flex items-center justify-center rounded-full transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/60"
      style={{ width: size, height: size }}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full blur-2xl transition-all"
        style={{ background: style.glow }}
      />
      <svg viewBox="0 0 256 256" width={size} height={size} className="relative">
        <defs>
          <radialGradient id="yisa-body" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.9" />
            <stop offset="60%" stopColor={style.body} />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
        </defs>

        <circle cx="128" cy="128" r="110" fill="url(#yisa-body)" stroke={style.eye} strokeWidth="3" opacity="0.95" />
        <circle cx="128" cy="48" r="6" fill={style.eye} opacity="0.8" />
        <line x1="128" y1="48" x2="128" y2="32" stroke={style.eye} strokeWidth="2" />

        <circle cx="92" cy="118" r="14" fill="#0f172a" />
        <circle cx="92" cy="118" r="8"  fill={style.eye}>
          {state === 'listening' && (
            <animate attributeName="r" values="8;10;8" dur="1.2s" repeatCount="indefinite" />
          )}
        </circle>

        <circle cx="164" cy="118" r="14" fill="#0f172a" />
        <circle cx="164" cy="118" r="8"  fill={style.eye}>
          {state === 'listening' && (
            <animate attributeName="r" values="8;10;8" dur="1.2s" repeatCount="indefinite" />
          )}
        </circle>

        {state === 'idle' && (
          <path d="M 96 168 Q 128 178 160 168" stroke={style.mouth} strokeWidth="6" fill="none" strokeLinecap="round" />
        )}
        {state === 'listening' && (
          <path d="M 100 170 L 156 170" stroke={style.mouth} strokeWidth="6" fill="none" strokeLinecap="round" />
        )}
        {state === 'speaking' && (
          <ellipse cx="128" cy="172" rx="22" ry="12" fill={style.mouth}>
            <animate attributeName="ry" values="6;14;6" dur="0.6s" repeatCount="indefinite" />
          </ellipse>
        )}

        <circle cx="40" cy="128" r="6"  fill={style.eye} opacity="0.7" />
        <circle cx="216" cy="128" r="6" fill={style.eye} opacity="0.7" />
      </svg>

    </button>
      <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-300">
        {style.label}
      </span>
    </div>
  )
}

export const yisa_robot_avatar = YisaRobotAvatar
export default YisaRobotAvatar
