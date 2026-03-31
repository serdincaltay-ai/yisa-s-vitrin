'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Target, Eye, Heart, Brain, Shield, Zap, Users, FileText } from 'lucide-react'
import { BRAND } from '@/lib/knowledge/yisas'

const TEAM_VALUES = [
  {
    icon: Brain,
    title: 'Bilim Odaklı',
    description: '900 alanlık değerlendirme matrisi ve PHV takibi ile bilimsel temelde sporcu gelişimi.',
  },
  {
    icon: Shield,
    title: 'Güvenli & KVKK Uyumlu',
    description: 'Çocuk sporcuların verileri en yüksek güvenlik standartlarında korunur.',
  },
  {
    icon: Zap,
    title: 'AI Destekli',
    description: '6 farklı yapay zeka motoru ile akıllı analiz, tahmin ve otomatik raporlama.',
  },
  {
    icon: Users,
    title: 'Topluluk Gücü',
    description: 'Antrenörler, veliler ve yöneticiler tek platformda buluşur.',
  },
]

const MILESTONES = [
  { year: '2024', event: 'YİSA-S fikri doğdu — spor okullarına özel MIS ihtiyacı belirlendi' },
  { year: '2025', event: 'İlk beta sürümü yayınlandı; pilot spor tesisleri ile saha testleri tamamlandı' },
  { year: '2026', event: 'Franchise sistemi ve yapay zeka motorları tam entegrasyonla canlıya alındı' },
]

export default function HakkimizdaContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-gradient">Hakkımızda</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Çocuk sporcuların bilimsel verilerle desteklenmesi ve spor okullarının
              dijital dönüşümü için çalışıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6">
                <Target size={24} className="text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Misyonumuz</h2>
              <p className="text-slate-400 leading-relaxed">
                Çocuk sporcuların bilimsel verilerle değerlendirilmesi, gelişim takibi ve
                doğru yönlendirme ile sporda sürdürülebilir başarıyı hedefliyoruz. Her çocuğun
                potansiyelini keşfetmek ve güvenli bir ortamda geliştirmek temel amacımızdır.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
                <Eye size={24} className="text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h2>
              <p className="text-slate-400 leading-relaxed">
                Türkiye&apos;deki tüm spor okullarını yapay zeka destekli bir ekosistemle
                buluşturarak, çocuk sporcuların gelişiminde global standartları yakalamak.
                Franchise modelimizle her şehirde erişilebilir, kaliteli spor eğitimi sunmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Değerlerimiz
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_VALUES.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-slate-600/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yolculuğumuz */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Yolculuğumuz
          </motion.h2>

          <div className="space-y-8">
            {MILESTONES.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-amber-400">{milestone.year}</span>
                </div>
                <div className="pt-3">
                  <p className="text-slate-300 leading-relaxed">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rakamlarla */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Rakamlarla YİSA-S
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '900', label: 'Değerlendirme Alanı', color: 'text-cyan-400' },
              { value: '6', label: 'AI Motoru', color: 'text-amber-400' },
              { value: '300+', label: 'Hareket Havuzu', color: 'text-emerald-400' },
              { value: '15', label: 'Direktörlük', color: 'text-violet-400' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <p className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section className="py-20 bg-slate-950" id="iletisim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
              <Heart size={24} className="text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">İletişim</h2>
            <p className="text-slate-400 mb-6">
              Sorularınız, önerileriniz veya işbirliği talepleriniz için bize ulaşın.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="text-amber-400 hover:text-amber-300 flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                {BRAND.email}
              </a>
              <p className="text-slate-400 flex items-center justify-center gap-2">
                <MapPin size={18} className="text-amber-400" />
                İstanbul, Türkiye
              </p>
              <Link
                href="/demo"
                className="text-slate-400 hover:text-white text-sm flex items-center justify-center gap-2"
              >
                Tanıtım talep formu
              </Link>
              <Link
                href="/tanitim-icerik"
                className="text-slate-500 hover:text-slate-300 text-xs flex items-center justify-center gap-2"
              >
                <FileText size={14} />
                Tanıtım içerik kataloğu (taslak)
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-colors"
          >
            Demo Talep Et <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
