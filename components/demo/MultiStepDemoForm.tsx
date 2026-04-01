'use client'

import { useId, useState } from 'react'
import { PACKAGES } from '@/lib/knowledge/yisas'

const STEP_LABELS = ['Yetkili bilgileri', 'Kurum detayları', 'Paket tercihi', 'Özet'] as const

const SECTOR_OPTIONS = ['Spor tesisi', 'Fitness merkezi', 'Yüzme havuzu', 'Cimnastik salonu', 'Çok branşlı tesis', 'Eğitim kurumu', 'Belediye tesisi', 'Diğer'] as const

const SIZE_OPTIONS = ['1-50 kullanıcı', '51-100 kullanıcı', '101-250 kullanıcı', '250+ kullanıcı'] as const

type Props = {
  /** Ana sayfa kutusu: başlık gizlenir, input stilleri vitrin koyu temaya yaklaştırılır. */
  embedded?: boolean
}

export default function MultiStepDemoForm({ embedded = false }: Props) {
  const kvkkId = useId()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [sector, setSector] = useState('')
  const [facilitySize, setFacilitySize] = useState('')
  const [branchCount, setBranchCount] = useState('')
  const [pkg, setPkg] = useState('')
  const [message, setMessage] = useState('')

  const fieldBase = embedded
    ? 'w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:border-[#818cf8] focus:outline-none bg-[#060a13] border border-white/10'
    : 'w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none'

  const buildDetailMessage = (): string => {
    const lines: string[] = []
    if (sector) lines.push(`Sektör: ${sector}`)
    if (branchCount) lines.push(`Şube sayısı: ${branchCount}`)
    if (message.trim()) lines.push(`Not: ${message.trim()}`)
    return lines.join('\n')
  }

  const canNext = (): boolean => {
    if (step === 1) return name.trim().length > 0 && email.trim().length > 0
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const detail = buildDetailMessage()
    const athleteNum =
      facilitySize === '1-50 kullanıcı'
        ? 25
        : facilitySize === '51-100 kullanıcı'
          ? 75
          : facilitySize === '101-250 kullanıcı'
            ? 175
            : facilitySize === '250+ kullanıcı'
              ? 300
              : null

    const query = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
    const utm_medium = query?.get('utm_medium')?.trim() || null
    const utm_campaign = query?.get('utm_campaign')?.trim() || null

    const data = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      company_name: company.trim() || null,
      athlete_count: athleteNum,
      interested_package: pkg || null,
      message: detail || null,
      source: 'vitrin',
      utm_source: 'vitrin',
      utm_medium,
      utm_campaign,
    }

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSuccess(true)
      } else {
        const json = (await res.json().catch(() => ({}))) as { error?: string | { message?: string } }
        const err = json.error
        const msg = typeof err === 'string' ? err : (err && typeof err === 'object' && 'message' in err ? err.message : undefined)
        setError(msg ?? 'Bir hata oluştu. Lütfen tekrar deneyin.')
      }
    } catch {
      setError('Bağlantı hatası. Lütfen tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-8 md:py-12">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            embedded ? 'bg-emerald-500/10' : 'bg-emerald-500/20'
          }`}
        >
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Talebiniz Alındı!</h3>
        <p className={embedded ? 'text-white/50 text-sm' : 'text-slate-400'}>En kısa sürede sizinle iletişime geçeceğiz.</p>
      </div>
    )
  }

  const labelCls = embedded ? 'block text-xs text-white/40 font-mono mb-1.5' : 'block text-sm text-slate-400 mb-1.5'
  const stepBadgeActive = embedded
    ? 'border-[#818cf8]/60 bg-[#818cf8]/10 text-[#c4c8ff]'
    : 'border-amber-500/60 bg-amber-500/10 text-amber-200'
  const stepBadgeIdle = embedded ? 'border-white/10 text-white/40' : 'border-slate-700 text-slate-500'

  return (
    <form onSubmit={step === 4 ? handleSubmit : (e) => e.preventDefault()} className="space-y-5">
      {!embedded && <h2 className="text-xl font-semibold text-white mb-2">Yazılım Teklif Formu</h2>}
      <div className="flex gap-2 mb-4 flex-wrap">
        {STEP_LABELS.map((label, i) => (
          <div
            key={label}
            className={`text-xs px-2 py-1 rounded-lg border ${step === i + 1 ? stepBadgeActive : stepBadgeIdle}`}
          >
            {i + 1}. {label}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <p className={embedded ? 'text-xs text-white/45' : 'text-sm text-slate-400'}>Kurum yetkilisi iletişim bilgileri.</p>
          <div>
            <label className={labelCls}>Ad Soyad *</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className={fieldBase} placeholder="Adınız Soyadınız" />
          </div>
          <div>
            <label className={labelCls}>Kurumsal E-posta *</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={fieldBase} placeholder="ornek@kurumunuz.com" />
          </div>
          <div>
            <label className={labelCls}>Telefon</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={fieldBase} placeholder="0532 XXX XX XX" />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <p className={embedded ? 'text-xs text-white/45' : 'text-sm text-slate-400'}>Tesis ve kurum bilgileri.</p>
          <div>
            <label className={labelCls}>Kurum / Tesis Adı</label>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className={fieldBase} placeholder="Tesis veya şirket adı" />
          </div>
          <div>
            <label className={labelCls}>Sektör</label>
            <select value={sector} onChange={(e) => setSector(e.target.value)} className={fieldBase}>
              <option value="">Seçiniz</option>
              {SECTOR_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Tesis büyüklüğü</label>
            <select value={facilitySize} onChange={(e) => setFacilitySize(e.target.value)} className={fieldBase}>
              <option value="">Seçiniz</option>
              {SIZE_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Şube sayısı</label>
            <select value={branchCount} onChange={(e) => setBranchCount(e.target.value)} className={fieldBase}>
              <option value="">Seçiniz</option>
              <option value="1">Tek şube</option>
              <option value="2-5">2-5 şube</option>
              <option value="6-10">6-10 şube</option>
              <option value="10+">10+ şube</option>
            </select>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <p className={embedded ? 'text-xs text-white/45' : 'text-sm text-slate-400'}>Paket tercihi ve ek notlarınız.</p>
          <div>
            <label className={labelCls}>İlgilendiğiniz paket</label>
            <select value={pkg} onChange={(e) => setPkg(e.target.value)} className={fieldBase}>
              <option value="">Seçiniz</option>
              {PACKAGES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — {p.currency}
                  {p.price.toLocaleString('tr-TR')} {p.tokenCount > 0 ? `+ ${p.tokenCount.toLocaleString('tr-TR')} token` : ''}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Ek not / Özel istekler</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className={`${fieldBase} resize-none`} placeholder="Projeniz hakkında detay, özel istekleriniz..." />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className={`space-y-4 text-sm ${embedded ? 'text-white/80' : 'text-slate-300'}`}>
          <p className={embedded ? 'text-white/45 text-xs' : 'text-slate-400'}>Göndermeden önce bilgilerinizi kontrol edin.</p>
          <ul
            className={`space-y-2 rounded-xl p-4 border ${
              embedded ? 'bg-[#060a13]/80 border-white/10' : 'bg-slate-900/50 border-slate-700'
            }`}
          >
            <li>
              <span className={embedded ? 'text-white/40' : 'text-slate-500'}>Yetkili:</span> {name} — {email}
            </li>
            {phone && (
              <li>
                <span className={embedded ? 'text-white/40' : 'text-slate-500'}>Telefon:</span> {phone}
              </li>
            )}
            {company && (
              <li>
                <span className={embedded ? 'text-white/40' : 'text-slate-500'}>Kurum:</span> {company}
              </li>
            )}
            {sector && (
              <li>
                <span className={embedded ? 'text-white/40' : 'text-slate-500'}>Sektör:</span> {sector}
              </li>
            )}
            {facilitySize && (
              <li>
                <span className={embedded ? 'text-white/40' : 'text-slate-500'}>Tesis büyüklüğü:</span> {facilitySize}
              </li>
            )}
            {branchCount && (
              <li>
                <span className={embedded ? 'text-white/40' : 'text-slate-500'}>Şube:</span> {branchCount}
              </li>
            )}
            {pkg && (
              <li>
                <span className={embedded ? 'text-white/40' : 'text-slate-500'}>Paket:</span> {pkg}
              </li>
            )}
          </ul>
          <div className="flex items-start gap-3">
            <input id={kvkkId} type="checkbox" required className="mt-1 w-4 h-4 rounded border-white/20 bg-[#060a13] text-[#818cf8]" />
            <label htmlFor={kvkkId} className={embedded ? 'text-xs text-white/50' : 'text-sm text-slate-400'}>
              KVKK Aydınlatma Metni&apos;ni okudum ve kabul ediyorum. *
            </label>
          </div>
        </div>
      )}

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">{error}</div>
      )}

      <div className="flex flex-wrap gap-3 pt-2">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className={
              embedded
                ? 'px-5 py-3 rounded-xl border border-white/20 text-white/80 hover:bg-white/5 text-sm font-mono'
                : 'px-5 py-3 rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800'
            }
          >
            Geri
          </button>
        )}
        {step < 4 && (
          <button
            type="button"
            disabled={!canNext()}
            onClick={() => canNext() && setStep((s) => s + 1)}
            className={
              embedded
                ? 'px-5 py-3 rounded-xl bg-[#818cf8] text-white font-mono text-sm hover:bg-[#818cf8]/80 disabled:opacity-40'
                : 'px-5 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 disabled:opacity-40'
            }
          >
            İleri
          </button>
        )}
        {step === 4 && (
          <button
            type="submit"
            disabled={loading}
            className={
              embedded
                ? 'px-5 py-3 rounded-xl bg-[#818cf8] text-white font-mono text-sm hover:bg-[#818cf8]/80 disabled:opacity-50'
                : 'px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900 font-semibold disabled:opacity-50'
            }
          >
            {loading ? 'Gönderiliyor...' : 'Teklif Talep Et'}
          </button>
        )}
      </div>
    </form>
  )
}
