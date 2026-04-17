const POSTS = [
  {
    slug: '900-alan-degerlendirme-sistemi-nasil-calisir',
    baslik: '900 Alan Değerlendirme Sistemi Nasıl Çalışır?',
    ozet: 'Çocuk sporcuların gelişimini ölçen 900 ayrı veri noktasının arkasındaki yöntem.',
  },
  {
    slug: 'cocuk-sporcularda-veri-guvenligi-ve-kvkk',
    baslik: 'Çocuk Sporcularda Veri Güvenliği ve KVKK',
    ozet: 'Velinin "verim nereye gidiyor?" sorusuna kanunla uyumlu, net cevap.',
  },
  {
    slug: 'phv-nedir-cocuk-sporcularda-buyume-plagi-korunmasi',
    baslik: 'PHV Nedir? Büyüme Plağı Korunması',
    ozet: 'Pik Boy Hızı dönemini bilmeden yapılan antrenman neden risklidir?',
  },
  {
    slug: 'yapay-zeka-spor-egitiminde-nasil-kullanilir',
    baslik: 'Yapay Zeka Spor Eğitiminde Nasıl Kullanılır?',
    ozet: 'AI sahada antrenörü değil, bürokrasiyi yok ediyor. İşte örnekler.',
  },
]

export function BlogOnizleme() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">Blog</h2>
            <p className="mt-3 text-lg text-slate-400">Spor + veri + çocuk gelişimi üçgeninden notlar.</p>
          </div>
          <a href="/blog" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
            Tümünü gör →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-400/60 hover:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-200">
                {p.baslik}
              </h3>
              <p className="mt-3 flex-1 text-sm text-slate-400">{p.ozet}</p>
              <a
                href={`/blog/${p.slug}`}
                className="mt-6 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Devamını oku →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogOnizleme
