import Link from 'next/link'
import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Demo Talebi Alındı',
  description:
    'Demo talebiniz başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.',
  path: '/demo/tesekkurler',
})

export default function DemoTesekkurlerPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24">
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-12">
          <p className="mb-3 text-sm font-medium text-emerald-300">Demo Talebi</p>
          <h1 className="mb-4 text-3xl font-bold text-white">Teşekkürler, talebinizi aldık.</h1>
          <p className="mx-auto mb-8 max-w-xl text-slate-300">
            Ekibimiz kayıt bilgilerinizi inceledikten sonra sizinle en kısa sürede iletişime geçecek.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-xl border border-slate-600 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/fiyatlandirma"
              className="rounded-xl bg-[#818cf8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#6f78f5]"
            >
              Paketleri İncele
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
