import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { POSTS } from '@/lib/blog-posts'

type Params = { slug: string }

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) return { title: 'Yazı bulunamadı' }
  return {
    title: post.baslik,
    description: post.ozet,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.baslik,
      description: post.ozet,
      type: 'article',
      publishedTime: post.tarih,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <article className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Tüm yazılar
        </Link>

        <header className="mt-6 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-slate-500">
            <time dateTime={post.tarih}>{post.tarih}</time>
            <span>·</span>
            <span>{post.okuma} okuma</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            {post.baslik}
          </h1>
          <p className="mt-4 text-lg text-slate-400">{post.ozet}</p>
        </header>

        <div className="prose prose-invert mt-10 max-w-none">
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-10 text-center">
            <p className="text-lg text-slate-300">📝 İçerik yakında.</p>
            <p className="mt-2 text-sm text-slate-500">
              Bu yazının tam metni `content/blog/_prerender_cache/{post.slug}.html`
              üzerinden işlenecek; şimdilik metadata ve sitemap girişi hazır.
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
