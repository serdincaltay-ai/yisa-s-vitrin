import type { Metadata } from 'next'
import Link from 'next/link'
import { POSTS } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'YİSA-S blog: çocuk sporcularda veri, KVKK, PHV, yapay zeka ve 900 alan değerlendirme üzerine notlar.',
}

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
