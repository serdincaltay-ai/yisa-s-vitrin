'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, X, ArrowRight, Sparkles } from 'lucide-react'

export type PaketFeature = {
  text: string
  included: boolean
}

export type PaketData = {
  id: string
  name: string
  price: number
  currency: string
  period: string
  priceDisplay?: string
  studentLimit: string
  tokenLimit: string
  features: PaketFeature[]
  popular?: boolean
  cta: string
  ctaHref: string
}

const NEON_CYAN = '#00d4ff'
const NEON_PINK = '#e94560'

export default function PaketKarti({
  paket,
  index,
}: {
  paket: PaketData
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`relative flex flex-col rounded-2xl p-px overflow-hidden ${
        paket.popular ? 'md:-mt-4 md:mb-4' : ''
      }`}
      style={
        paket.popular
          ? {
              background: `linear-gradient(135deg, ${NEON_CYAN}, ${NEON_PINK})`,
              boxShadow: `0 0 40px ${NEON_CYAN}20, 0 0 80px ${NEON_PINK}10`,
            }
          : {
              background: 'rgba(255,255,255,0.08)',
            }
      }
    >
      {/* Inner card */}
      <div className="flex-1 flex flex-col bg-slate-900/95 rounded-[15px] p-7">
        {/* Badge */}
        {paket.popular && (
          <div className="flex justify-center mb-4 -mt-1">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${NEON_CYAN}, ${NEON_PINK})` }}
            >
              <Sparkles size={12} />
              En Popüler
            </span>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-1">{paket.name}</h3>
          <div className="flex items-baseline justify-center gap-1 mt-3">
            <span className="text-4xl font-extrabold text-white">
              {paket.priceDisplay || `${paket.currency}${paket.price.toLocaleString('tr-TR')}`}
            </span>
            <span className="text-slate-400 text-sm ml-1">({paket.period})</span>
          </div>
        </div>

        {/* Limits badges */}
        <div className="flex gap-2 justify-center mb-6">
          <span
            className="px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{
              background: `${NEON_CYAN}10`,
              color: NEON_CYAN,
              border: `1px solid ${NEON_CYAN}25`,
            }}
          >
            {paket.studentLimit}
          </span>
          <span
            className="px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{
              background: `${NEON_PINK}10`,
              color: NEON_PINK,
              border: `1px solid ${NEON_PINK}25`,
            }}
          >
            {paket.tokenLimit}
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {paket.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2.5">
              {f.included ? (
                <Check size={16} className="text-emerald-400 shrink-0" />
              ) : (
                <X size={16} className="text-slate-600 shrink-0" />
              )}
              <span className={f.included ? 'text-sm text-slate-300' : 'text-sm text-slate-600'}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={paket.ctaHref}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all hover:brightness-110"
          style={
            paket.popular
              ? {
                  background: `linear-gradient(135deg, ${NEON_CYAN}, ${NEON_PINK})`,
                  color: 'white',
                }
              : {
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.8)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }
          }
        >
          {paket.cta}
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  )
}
