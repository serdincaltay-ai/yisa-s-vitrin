const ROBOTS = [
  { emoji: '💼', isim: 'Satış Robotu', slogan: 'Lead\'i ilk dakikada karşılar, randevuya çevirir.' },
  { emoji: '👋', isim: 'Karşılama Robotu', slogan: 'Tesise gelen herkesi tanır, doğru kişiye yönlendirir.' },
  { emoji: '📱', isim: 'Sosyal Medya Robotu', slogan: 'İçerik üretir, paylaşır, etkileşimi ölçer.' },
  { emoji: '💬', isim: 'WhatsApp Robotu', slogan: 'Veliyle 7/24 doğal sohbet, anında bilgi.' },
  { emoji: '📊', isim: 'Meta Reklam Robotu', slogan: 'Bütçeni kuruşuna kadar verimli harcar.' },
  { emoji: '🧾', isim: 'Muhasebe Robotu', slogan: 'Tahsilat, fatura, mutabakat — sıfır kâğıt.' },
  { emoji: '⭐', isim: 'Memnuniyet Robotu', slogan: 'Veli nabzını her hafta ölçer, raporlar.' },
  { emoji: '📅', isim: 'Randevu Robotu', slogan: 'Saat çakışması, telafi, hatırlatma — hepsi otomatik.' },
  { emoji: '👨‍👩‍👧', isim: 'Veli İletişim Robotu', slogan: 'Her veliye kişisel, zamanında geri bildirim.' },
  { emoji: '📏', isim: 'Ölçüm & Sağlık Robotu', slogan: '900 alanda gelişimi takip eder.' },
  { emoji: '🧑‍💼', isim: 'İK Robotu', slogan: 'Antrenör performansı, vardiya, bordro.' },
  { emoji: '🛡️', isim: 'Güvenlik Robotu', slogan: 'KVKK, kamera, erişim — tek panelde.' },
]

export function RobotMarketplace() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">12 Robot, Tek Patron Paneli</h2>
          <p className="mt-4 text-lg text-slate-400">Tesisini sen yönetmiyorsun — robotların yönetiyor, sen onaylıyorsun.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ROBOTS.map((r) => (
            <div
              key={r.isim}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="text-4xl transition group-hover:scale-110">{r.emoji}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{r.isim}</h3>
              <p className="mt-2 text-sm text-slate-400">{r.slogan}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RobotMarketplace
