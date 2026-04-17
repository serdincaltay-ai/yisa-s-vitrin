export function VeliNeGorur() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Antrenör ölçer,{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              veli saniyesinde görür
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">Veriden velinin telefonuna sıfır gecikme.</p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex aspect-[4/3] w-full max-w-xs items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900/50 text-slate-500">
              <span className="text-sm">[ Antrenör tablet görseli ]</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Antrenör Tableti</h3>
            <p className="mt-1 text-sm text-slate-400">Sahada tek dokunuşla ölçüm girer.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="text-6xl text-cyan-400">→</div>
            <p className="mt-4 max-w-xs text-slate-300">
              Ölçüm, otomatik analizden geçer; YİSA-S anlaşılır cümlelere çevirir ve veliye iletir.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex aspect-[3/4] w-full max-w-[200px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900/50 text-slate-500">
              <span className="text-sm">[ Veli telefonu görseli ]</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Veli Telefonu</h3>
            <p className="mt-1 text-sm text-slate-400">Bildirim, grafik, video — şeffaf rapor.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VeliNeGorur
