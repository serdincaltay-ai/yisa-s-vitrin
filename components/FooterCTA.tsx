export function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-emerald-500 to-amber-500 px-6 py-24 text-slate-950">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold md:text-6xl">İlk Ders Ücretsiz</h2>
        <p className="mt-4 text-lg font-medium md:text-xl">
          Çocuğunuzun potansiyelini ölçelim, birlikte konuşalım.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+905307104624"
            className="rounded-2xl bg-slate-950 px-8 py-4 text-lg font-bold text-cyan-300 shadow-xl transition hover:bg-slate-900"
          >
            📞 0530 710 46 24
          </a>
          <a
            href="mailto:info@yisa-s.com"
            className="rounded-2xl border-2 border-slate-950 px-8 py-4 text-lg font-bold text-slate-950 transition hover:bg-slate-950 hover:text-cyan-300"
          >
            ✉️ info@yisa-s.com
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-slate-950">
          <a
            href="https://instagram.com/yisas"
            aria-label="Instagram"
            className="rounded-full bg-slate-950/10 p-3 text-2xl transition hover:bg-slate-950 hover:text-amber-300"
          >
            📷
          </a>
          <a
            href="https://wa.me/905307104624"
            aria-label="WhatsApp"
            className="rounded-full bg-slate-950/10 p-3 text-2xl transition hover:bg-slate-950 hover:text-emerald-300"
          >
            💬
          </a>
          <a
            href="https://youtube.com/@yisas"
            aria-label="YouTube"
            className="rounded-full bg-slate-950/10 p-3 text-2xl transition hover:bg-slate-950 hover:text-cyan-300"
          >
            ▶️
          </a>
        </div>

        <p className="mt-12 text-xs text-slate-950/70">
          © {new Date().getFullYear()} YİSA-S · Yapay Zeka Spor Asistanı
        </p>
      </div>
    </section>
  )
}

export default FooterCTA
