const MUDURLUKLER = [
  { isim: 'Pazarlama', gorev: 'Marka, kampanya, reklam' },
  { isim: 'Satış', gorev: 'Lead → kayıt dönüşümü' },
  { isim: 'Operasyon', gorev: 'Salon, vardiya, lojistik' },
  { isim: 'Antrenörlük', gorev: 'Sportif kalite & program' },
  { isim: 'Veli İlişkileri', gorev: 'Memnuniyet & iletişim' },
  { isim: 'Finans', gorev: 'Tahsilat, bütçe, rapor' },
  { isim: 'İK', gorev: 'Antrenör seçimi & gelişim' },
  { isim: 'Veri & Analiz', gorev: '900 alan + KPI' },
  { isim: 'Sağlık', gorev: 'PHV, beslenme, yaralanma' },
  { isim: 'Hukuk & KVKK', gorev: 'Sözleşme & uyum' },
  { isim: 'Teknoloji', gorev: 'Platform, robotlar, altyapı' },
  { isim: 'Stratejik Planlama', gorev: 'Yıllık vizyon & hedef' },
]

export function CELFMudurluk() {
  const radius = 240

  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">CELF: 12 Müdürlük, Tek Beyin</h2>
          <p className="mt-4 text-lg text-slate-400">
            Central Executive Logic Framework — patronun yerine kararı çerçeveleyen yapı.
          </p>
        </div>

        <div className="relative mx-auto hidden h-[640px] w-[640px] lg:block">
          <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cyan-400 bg-cyan-400/10 text-center shadow-2xl shadow-cyan-500/30">
            <span className="text-2xl font-bold text-cyan-200">CELF</span>
          </div>
          {MUDURLUKLER.map((m, i) => {
            const angle = (i / MUDURLUKLER.length) * Math.PI * 2 - Math.PI / 2
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            return (
              <div
                key={m.isim}
                className="absolute flex h-28 w-28 flex-col items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 p-2 text-center text-xs transition hover:border-emerald-400 hover:bg-slate-900"
                style={{
                  left: `calc(50% + ${x}px - 56px)`,
                  top: `calc(50% + ${y}px - 56px)`,
                }}
              >
                <div className="font-semibold text-slate-100">{m.isim}</div>
                <div className="mt-1 text-[10px] text-slate-400">{m.gorev}</div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {MUDURLUKLER.map((m) => (
            <div key={m.isim} className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
              <div className="text-sm font-semibold text-cyan-200">{m.isim}</div>
              <div className="mt-1 text-xs text-slate-400">{m.gorev}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CELFMudurluk
