'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const PHONE_REGEX = /^[1-9][0-9]{9}$/

type FormState = {
  name: string
  phone: string
  city: string
  branch: string
}

const INITIAL_FORM: FormState = {
  name: '',
  phone: '',
  city: '',
  branch: '',
}

export default function DemoLeadForm() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (!PHONE_REGEX.test(form.phone.trim())) {
      setError('Telefon numarası başında 0 olmadan 10 hane olmalıdır.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          city: form.city.trim(),
          branch: form.branch.trim(),
        }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string }
        throw new Error(data.error || 'Demo talebi gönderilemedi.')
      }

      router.push('/demo/tesekkurler')
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : 'Demo talebi gönderilirken bir hata oluştu.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-sm text-slate-300">Ad Soyad</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(event) => updateField('name', event.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-[#818cf8] focus:outline-none"
          placeholder="Adınız Soyadınız"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-slate-300">Telefon (10 hane)</label>
        <input
          type="tel"
          required
          pattern="[1-9][0-9]{9}"
          inputMode="numeric"
          value={form.phone}
          onChange={(event) => updateField('phone', event.target.value.replace(/\D/g, '').slice(0, 10))}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-[#818cf8] focus:outline-none"
          placeholder="5307104624"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-slate-300">Şehir</label>
        <input
          type="text"
          required
          value={form.city}
          onChange={(event) => updateField('city', event.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-[#818cf8] focus:outline-none"
          placeholder="İstanbul"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-slate-300">Branş</label>
        <input
          type="text"
          required
          value={form.branch}
          onChange={(event) => updateField('branch', event.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-[#818cf8] focus:outline-none"
          placeholder="Cimnastik"
        />
      </div>

      {error ? (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-[#818cf8] to-[#6366f1] px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Gönderiliyor...' : 'Demo Talebi Gönder'}
      </button>
    </form>
  )
}
