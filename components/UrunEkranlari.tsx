'use client'

import { useState } from 'react'

type TabId = 'antrenor' | 'veli' | 'randevu'

const TABS: { id: TabId; label: string; sub: string }[] = [
  { id: 'antrenor', label: 'Antrenör Paneli', sub: 'Sporcu yönetimi · WhatsApp · Bildirim sağlığı' },
  { id: 'veli', label: 'Veli Paneli', sub: '900 alan raporu · Yaklaşan randevu · Telefon düzenle' },
  { id: 'randevu', label: 'Randevu Sistemi', sub: 'Çakışma kontrolü · T-24h / T-2h hatırlatma' },
]

export function UrunEkranlari() {
  const [tab, setTab] = useState<TabId>('antrenor')

  return (
    <section id="urun-ekranlari" className="relative overflow-hidden border-y border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <span className="inline-block rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-emerald-300">
            Ürün Ekranları
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-100 md:text-5xl">
            Sahadan, gerçek panellerden{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
              kareler
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Antrenör masaüstü, veli telefonu ve randevu akışı — kulüpte her gün kullanılan
            ekranların birebir tasarımı. Her panel WhatsApp şablonları, çakışma kontrolü ve
            hatırlatma cron'u ile entegre çalışır.
          </p>
        </div>

        <div role="tablist" aria-label="Ürün ekranları" className="mb-8 flex flex-wrap gap-2">
          {TABS.map((t) => {
            const aktif = tab === t.id
            return (
              <button
                key={t.id}
                role="tab"
                id={`urun-tab-${t.id}`}
                aria-selected={aktif}
                aria-controls={`urun-panel-${t.id}`}
                tabIndex={aktif ? 0 : -1}
                onClick={() => setTab(t.id)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault()
                    const i = TABS.findIndex((x) => x.id === tab)
                    const next =
                      e.key === 'ArrowRight'
                        ? TABS[(i + 1) % TABS.length]
                        : TABS[(i - 1 + TABS.length) % TABS.length]
                    setTab(next.id)
                    document.getElementById(`urun-tab-${next.id}`)?.focus()
                  } else if (e.key === 'Home') {
                    e.preventDefault()
                    setTab(TABS[0].id)
                    document.getElementById(`urun-tab-${TABS[0].id}`)?.focus()
                  } else if (e.key === 'End') {
                    e.preventDefault()
                    const last = TABS[TABS.length - 1]
                    setTab(last.id)
                    document.getElementById(`urun-tab-${last.id}`)?.focus()
                  }
                }}
                className={`rounded-xl border px-5 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  aktif
                    ? 'border-emerald-400 bg-emerald-400/10 text-emerald-100'
                    : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-slate-100'
                }`}
              >
                <div className="text-sm font-semibold">{t.label}</div>
                <div className="mt-0.5 text-xs text-slate-400">{t.sub}</div>
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`urun-panel-${tab}`}
          aria-labelledby={`urun-tab-${tab}`}
          className="rounded-3xl border border-slate-800 bg-slate-950/80 p-3 shadow-2xl shadow-cyan-500/5 ring-1 ring-cyan-400/10 md:p-6"
        >
          {tab === 'antrenor' && <AntrenorMock />}
          {tab === 'veli' && <VeliMock />}
          {tab === 'randevu' && <RandevuMock />}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* ANTRENÖR PANELİ                                                            */
/* -------------------------------------------------------------------------- */

function AntrenorMock() {
  const sporcular = [
    { ad: 'Defne Altay', yas: 11, brans: 'Yüzme', durum: 'aktif', secili: true },
    { ad: 'Kerem Demir', yas: 9, brans: 'Yüzme', durum: 'aktif' },
    { ad: 'Ada Korkmaz', yas: 12, brans: 'Yüzme', durum: 'aktif' },
    { ad: 'Mert Yıldız', yas: 10, brans: 'Yüzme', durum: 'aktif' },
    { ad: 'Selin Aksoy', yas: 13, brans: 'Yüzme', durum: 'pasif' },
  ]

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      {/* Browser chrome */}
      <BrowserChrome url="bjktuzla.yisa-s.com/antrenor" />

      <div className="p-4 md:p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Antrenör</div>
            <div className="text-xl font-semibold text-slate-100">Sporcu Takip · BJK Tuzla</div>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30">
            5 sporcu · 2 yaklaşan randevu
          </span>
        </div>

        {/* Group failure banner */}
        <button className="mb-4 flex w-full items-center justify-between rounded-xl border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-left transition hover:bg-rose-500/15">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-300">!</span>
            <div>
              <div className="text-sm font-semibold text-rose-100">
                Grup genelinde 3 başarısız bildirim
              </div>
              <div className="text-xs text-rose-200/70">
                WhatsApp 24h penceresi kapalı · şablon onayı gerekli
              </div>
            </div>
          </div>
          <span className="text-xs font-medium text-rose-200">Detayı aç →</span>
        </button>

        <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
          {/* Left: athletes */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2">
            <div className="px-2 pb-2 text-xs uppercase tracking-widest text-slate-500">
              Sporcular
            </div>
            <ul className="space-y-1">
              {sporcular.map((s) => (
                <li
                  key={s.ad}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                    s.secili
                      ? 'bg-cyan-400/10 ring-1 ring-cyan-400/40'
                      : 'hover:bg-slate-800/60'
                  }`}
                >
                  <div>
                    <div className={s.secili ? 'font-semibold text-cyan-100' : 'text-slate-200'}>
                      {s.ad}
                    </div>
                    <div className="text-xs text-slate-400">
                      {s.yas} yaş · {s.brans}
                    </div>
                  </div>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      s.durum === 'aktif' ? 'bg-emerald-400' : 'bg-slate-600'
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Right: WhatsApp + appointment */}
          <div className="space-y-4">
            {/* Veli kartı */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Veli</div>
                  <div className="mt-1 text-base font-semibold text-slate-100">Serdinç Altay</div>
                  <div className="text-xs text-slate-400">+90 5XX XXX XX 47</div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  WhatsApp 24h penceresi açık · 18s 22dk
                </div>
              </div>
            </div>

            {/* WhatsApp template */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">
                    WhatsApp Şablonu
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-100">
                    yisas_randevu_hatirlatma
                  </div>
                </div>
                <span className="rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/30">
                  Kaynak: Meta · 2 dk önce
                </span>
              </div>

              <div className="grid gap-2 md:grid-cols-2">
                {[
                  ['{{1}} Sporcu', 'Defne Altay'],
                  ['{{2}} Tarih', '21 Nisan Pazartesi'],
                  ['{{3}} Saat', '17:30'],
                  ['{{4}} Yer', 'Tuzla Olimpik Havuz'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2">
                    <div className="text-[10px] uppercase tracking-widest text-slate-500">{k}</div>
                    <div className="mt-0.5 text-sm text-slate-100">{v}</div>
                  </div>
                ))}
              </div>

              {/* Live preview */}
              <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-widest text-emerald-300">
                    Canlı Önizleme
                  </div>
                  <div className="text-[10px] text-slate-400">Veliye gidecek mesaj</div>
                </div>
                <p className="text-sm leading-relaxed text-slate-100">
                  Merhaba, <span className="font-semibold text-emerald-200">Defne Altay</span>{' '}
                  için{' '}
                  <span className="font-semibold text-emerald-200">21 Nisan Pazartesi</span> günü{' '}
                  <span className="font-semibold text-emerald-200">17:30</span>'da{' '}
                  <span className="font-semibold text-emerald-200">Tuzla Olimpik Havuz</span>'da
                  randevunuz var. Onaylamak için bu mesaja yanıt verin.
                </p>
              </div>

              <div className="mt-4 flex items-center justify-end gap-2">
                <button className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300 hover:border-slate-500">
                  Yenile
                </button>
                <button className="rounded-lg bg-emerald-400 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-300">
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* VELİ PANELİ                                                                */
/* -------------------------------------------------------------------------- */

function VeliMock() {
  const kartlar = [
    { etiket: 'Genel Skor', deger: '78', alt: '+4 son ay', renk: 'cyan' },
    { etiket: 'Dayanıklılık', deger: '82', alt: '900 alanın 142 maddesi', renk: 'emerald' },
    { etiket: 'Teknik', deger: '74', alt: 'Antrenör notu eklendi', renk: 'amber' },
    { etiket: 'Esneklik', deger: '69', alt: 'Sit&reach 31 cm', renk: 'fuchsia' },
    { etiket: 'Mental', deger: '86', alt: 'Konsantrasyon güçlü', renk: 'sky' },
  ]

  const renkSinif: Record<string, string> = {
    cyan: 'from-cyan-500/20 to-cyan-500/0 text-cyan-200 ring-cyan-400/30',
    emerald: 'from-emerald-500/20 to-emerald-500/0 text-emerald-200 ring-emerald-400/30',
    amber: 'from-amber-500/20 to-amber-500/0 text-amber-200 ring-amber-400/30',
    fuchsia: 'from-fuchsia-500/20 to-fuchsia-500/0 text-fuchsia-200 ring-fuchsia-400/30',
    sky: 'from-sky-500/20 to-sky-500/0 text-sky-200 ring-sky-400/30',
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <BrowserChrome url="bjktuzla.yisa-s.com/veli" mobil />
      <div className="grid gap-0 lg:grid-cols-[360px_1fr]">
        {/* Phone-frame mockup */}
        <div className="flex items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 p-6">
          <div className="w-full max-w-[300px] rounded-[2rem] border-[10px] border-slate-800 bg-slate-950 p-4 shadow-2xl shadow-cyan-500/10">
            <div className="mb-3 text-center">
              <div className="text-[10px] uppercase tracking-widest text-slate-500">Veli</div>
              <div className="text-base font-semibold text-slate-100">Defne Altay</div>
              <div className="text-xs text-slate-400">11 yaş · BJK Tuzla Yüzme</div>
            </div>

            {/* Radar (decorative SVG) */}
            <div className="mx-auto mb-4 aspect-square w-full max-w-[220px]">
              <svg aria-hidden="true" viewBox="0 0 200 200" className="h-full w-full">
                {[80, 60, 40, 20].map((r) => (
                  <polygon
                    key={r}
                    points={pentagonPoints(100, 100, r)}
                    className="fill-none stroke-slate-700"
                    strokeWidth="1"
                  />
                ))}
                {[0, 1, 2, 3, 4].map((i) => {
                  const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
                  const x = 100 + Math.cos(angle) * 80
                  const y = 100 + Math.sin(angle) * 80
                  return <line key={i} x1="100" y1="100" x2={x} y2={y} className="stroke-slate-800" />
                })}
                <polygon
                  points={[
                    [0, 70],
                    [1, 60],
                    [2, 55],
                    [3, 45],
                    [4, 65],
                  ]
                    .map(([i, v]) => {
                      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
                      return `${100 + Math.cos(angle) * v},${100 + Math.sin(angle) * v}`
                    })
                    .join(' ')}
                  className="fill-cyan-400/30 stroke-cyan-300"
                  strokeWidth="2"
                />
              </svg>
              <div className="mt-1 text-center text-[10px] uppercase tracking-widest text-slate-500">
                900 alanlı değerlendirme
              </div>
            </div>

            {/* Yaklaşan randevu */}
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-3">
              <div className="text-[10px] uppercase tracking-widest text-emerald-300">
                Yaklaşan Randevu
              </div>
              <div className="mt-1 text-sm font-semibold text-emerald-100">
                21 Nisan Pzt · 17:30
              </div>
              <div className="text-xs text-emerald-200/80">Tuzla Olimpik Havuz</div>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 rounded-lg bg-emerald-400 py-1.5 text-[11px] font-semibold text-slate-950">
                  Onayla
                </button>
                <button className="flex-1 rounded-lg border border-rose-400/40 py-1.5 text-[11px] font-medium text-rose-300">
                  İptal
                </button>
              </div>
            </div>

            {/* Telefon düzenle */}
            <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">
                    İletişim
                  </div>
                  <div className="text-xs text-slate-200">+90 5XX XXX XX 47</div>
                </div>
                <button className="rounded-lg border border-slate-700 px-2.5 py-1 text-[10px] text-slate-300">
                  Düzenle
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: cards grid */}
        <div className="p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Veli Paneli</div>
              <div className="text-xl font-semibold text-slate-100">Gelişim Özeti · Defne</div>
            </div>
            <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-300 ring-1 ring-cyan-400/30">
              Son ölçüm: 14 Nisan
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {kartlar.map((k) => (
              <div
                key={k.etiket}
                className={`rounded-2xl bg-gradient-to-br ${renkSinif[k.renk]} p-4 ring-1`}
              >
                <div className="text-[10px] uppercase tracking-widest opacity-70">{k.etiket}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <div className="text-3xl font-bold">{k.deger}</div>
                  <div className="text-xs opacity-70">/100</div>
                </div>
                <div className="mt-2 text-[11px] opacity-80">{k.alt}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <div className="mb-2 text-xs uppercase tracking-widest text-slate-500">
              Antrenör Notu
            </div>
            <p className="text-sm text-slate-200">
              "Defne'nin teknik puanı son üç haftada belirgin yükseldi. Bir sonraki seansta
              start çıkışı çalışacağız — pazartesi 17:30 randevusunda görüşürüz."
            </p>
            <div className="mt-2 text-[11px] text-slate-500">— Antrenör Mert Kaya · BJK Tuzla</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function pentagonPoints(cx: number, cy: number, r: number) {
  return [0, 1, 2, 3, 4]
    .map((i) => {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
      return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`
    })
    .join(' ')
}

/* -------------------------------------------------------------------------- */
/* RANDEVU SİSTEMİ                                                            */
/* -------------------------------------------------------------------------- */

function RandevuMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <BrowserChrome url="bjktuzla.yisa-s.com/antrenor · Yeni Randevu" />
      <div className="grid gap-4 p-4 md:p-6 lg:grid-cols-2">
        {/* Form */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
          <div className="text-xs uppercase tracking-widest text-slate-500">Yeni Randevu</div>
          <div className="mt-1 text-lg font-semibold text-slate-100">Defne Altay</div>

          <div className="mt-4 space-y-3">
            <Field label="Tarih" value="21 Nisan 2026 · Pazartesi" />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Başlangıç" value="17:30" />
              <Field label="Süre" value="60 dk" />
            </div>
            <Field label="Yer" value="Tuzla Olimpik Havuz · Kulvar 4" />
            <Field
              label="Not"
              value="Start çıkışı çalışması · 4×50m serbest"
              cok
            />
          </div>

          {/* Conflict warning */}
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-400/40 bg-amber-400/10 p-3">
            <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 text-xs font-bold text-amber-200">
              ⚠
            </span>
            <div>
              <div className="text-sm font-semibold text-amber-100">Çakışma kontrolü</div>
              <div className="text-xs text-amber-200/80">
                Aynı saat aralığında <strong>Kerem Demir</strong> için randevu var. Devam
                edersen iki sporcu paralel olarak işaretlenecek.
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2">
            <button className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300 hover:border-slate-500">
              Vazgeç
            </button>
            <button className="rounded-lg bg-cyan-400 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-cyan-300">
              Randevuyu kaydet
            </button>
          </div>
        </div>

        {/* Reminder plan */}
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
            <div className="text-xs uppercase tracking-widest text-slate-500">
              Hatırlatma Planı
            </div>
            <div className="mt-3 space-y-2">
              <Reminder
                tag="T-24h"
                tarih="20 Nisan Pzr · 17:30"
                durum="bekliyor"
                kanal="WhatsApp · şablon"
              />
              <Reminder
                tag="T-2h"
                tarih="21 Nisan Pzt · 15:30"
                durum="bekliyor"
                kanal="WhatsApp · 24h penceresi"
              />
              <Reminder
                tag="Retry"
                tarih="hata olursa T+10dk"
                durum="hazır"
                kanal="SMS yedek"
              />
            </div>
          </div>

          <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-5">
            <div className="text-xs uppercase tracking-widest text-emerald-300">
              Bildirim Sağlığı (Son 24s)
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <Stat n="142" l="Gönderildi" />
              <Stat n="138" l="Teslim" tone="emerald" />
              <Stat n="3" l="Hata" tone="rose" />
            </div>
            <div className="mt-3 text-[11px] text-emerald-200/80">
              Cron her saat çalışır · idempotent · veli onayı tek mesajla.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, cok = false }: { label: string; value: string; cok?: boolean }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2">
      <div className="text-[10px] uppercase tracking-widest text-slate-500">{label}</div>
      <div className={`mt-0.5 text-slate-100 ${cok ? 'text-sm' : 'text-sm font-medium'}`}>
        {value}
      </div>
    </div>
  )
}

function Reminder({
  tag,
  tarih,
  durum,
  kanal,
}: {
  tag: string
  tarih: string
  durum: string
  kanal: string
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2">
      <div className="flex items-center gap-3">
        <span className="rounded-md bg-cyan-500/15 px-2 py-0.5 text-[10px] font-bold text-cyan-300 ring-1 ring-cyan-400/30">
          {tag}
        </span>
        <div>
          <div className="text-sm text-slate-100">{tarih}</div>
          <div className="text-[11px] text-slate-400">{kanal}</div>
        </div>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-slate-400">{durum}</span>
    </div>
  )
}

function Stat({ n, l, tone = 'slate' }: { n: string; l: string; tone?: 'slate' | 'emerald' | 'rose' }) {
  const map = {
    slate: 'text-slate-100',
    emerald: 'text-emerald-300',
    rose: 'text-rose-300',
  }
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-2 py-2">
      <div className={`text-2xl font-bold ${map[tone]}`}>{n}</div>
      <div className="text-[10px] uppercase tracking-widest text-slate-400">{l}</div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Browser chrome                                                             */
/* -------------------------------------------------------------------------- */

function BrowserChrome({ url, mobil = false }: { url: string; mobil?: boolean }) {
  return (
    <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/80 px-4 py-2.5">
      <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
      <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
      <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      <div className="ml-3 flex-1 truncate rounded-md bg-slate-900 px-3 py-1 text-[11px] text-slate-400">
        🔒 {url}
      </div>
      {mobil && (
        <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-widest text-slate-400">
          Mobil
        </span>
      )}
    </div>
  )
}
