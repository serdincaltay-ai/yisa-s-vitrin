import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'YİSA-S blog: çocuk sporcularda veri, KVKK, PHV, yapay zeka ve 900 alan değerlendirme üzerine notlar.',
}

export const POSTS = [
  {
    slug: '900-alan-degerlendirme-sistemi-nasil-calisir',
    baslik: '900 Alan Değerlendirme Sistemi Nasıl Çalışır?',
    ozet: 'Çocuk sporcuların gelişimini ölçen 900 ayrı veri noktasının arkasındaki yöntem ve YİSA-S modeli.',
    tarih: '2026-03-15',
    okuma: '6 dk',
  },
  {
    slug: 'cocuk-sporcularda-veri-guvenligi-ve-kvkk',
    baslik: 'Çocuk Sporcularda Veri Güvenliği ve KVKK',
    ozet: 'Velinin "verim nereye gidiyor?" sorusuna kanunla uyumlu, net cevap.',
    tarih: '2026-03-22',
    okuma: '5 dk',
  },
  {
    slug: 'phv-nedir-cocuk-sporcularda-buyume-plagi-korunmasi',
    baslik: 'PHV Nedir? Çocuk Sporcularda Büyüme Plağı Korunması',
    ozet: 'Pik Boy Hızı dönemini bilmeden yapılan antrenman neden risklidir?',
    tarih: '2026-03-29',
    okuma: '7 dk',
  },
  {
    slug: 'yapay-zeka-spor-egitiminde-nasil-kullanilir',
    baslik: 'Yapay Zeka Spor Eğitiminde Nasıl Kullanılır?',
    ozet: 'AI sahada antrenörü değil, bürokrasiyi yok ediyor. İşte gerçek örnekler.',
    tarih: '2026-04-05',
    okuma: '8 dk',
  },
]

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <header className="mb-14">
          <h1 className="text-4xl font-bold md:text-6xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Spor + veri + çocuk gelişimi üçgeninden YİSA-S notları.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition hover:border-cyan-400/60 hover:bg-slate-900"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-slate-500">
                <time dateTime={p.tarih}>{p.tarih}</time>
                <span>·</span>
                <span>{p.okuma} okuma</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-slate-100 group-hover:text-cyan-200">
                {p.baslik}
              </h2>
              <p className="mt-3 flex-1 text-sm text-slate-400">{p.ozet}</p>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-6 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Devamını oku →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
