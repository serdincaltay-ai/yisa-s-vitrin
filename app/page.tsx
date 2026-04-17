import { YisaRobotAvatar } from '../components/YisaRobotAvatar'
import { RobotMarketplace } from '../components/RobotMarketplace'
import { VeliNeGorur } from '../components/VeliNeGorur'
import { BlogOnizleme } from '../components/BlogOnizleme'
import { CELFMudurluk } from '../components/CELFMudurluk'
import { FooterCTA } from '../components/FooterCTA'

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-6 py-24 text-center md:flex-row md:text-left">
          <div className="flex-1 space-y-6">
            <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-cyan-300">
              YİSA-S · Yapay Zeka Spor Asistanı
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Teknolojiyi spora{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                başlattık
              </span>
            </h1>
            <p className="max-w-xl text-lg text-slate-300 md:text-xl">
              900 alanlı değerlendirme, gerçek zamanlı veri ve veliye şeffaf raporlar — çocuk
              sporcuların gelişimini ölçen ilk ve tek platform.
            </p>
            <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
              <a
                href="#iletisim"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300"
              >
                Demo iste
              </a>
              <a
                href="#blog"
                className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
              >
                Blogu keşfet
              </a>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center pb-10">
            <YisaRobotAvatar variant="hero" size={256} />
          </div>
        </div>
      </section>

      <RobotMarketplace />
      <VeliNeGorur />
      <CELFMudurluk />
      <section id="blog">
        <BlogOnizleme />
      </section>
      <section id="iletisim">
        <FooterCTA />
      </section>
    </main>
  )
}
