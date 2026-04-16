import { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/knowledge/yisas'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'KVKK Aydınlatma Metni',
  description: 'YİSA-S Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni.',
  path: '/kvkk',
})

export default function KvkkPage() {
  return (
    <div className="min-h-screen bg-[#060a13] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-2">KVKK Aydınlatma Metni</h1>
        <p className="text-sm text-slate-500 mb-8">Son güncelleme: Mart 2026</p>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Veri Sorumlusu</h2>
            <p>
              {BRAND.name} ({BRAND.fullName}) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
              (&quot;KVKK&quot;) kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda
              açıklanan amaçlar doğrultusunda işlemekteyiz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. İşlenen Kişisel Veriler</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Kimlik bilgileri (ad, soyad, T.C. kimlik numarası)</li>
              <li>İletişim bilgileri (e-posta, telefon, adres)</li>
              <li>Sporcu sağlık ve gelişim verileri (boy, kilo, PHV ölçümleri)</li>
              <li>Yoklama ve katılım kayıtları</li>
              <li>Ödeme ve finansal bilgiler</li>
              <li>Kullanıcı hesap bilgileri ve oturum verileri</li>
              <li>Çerez ve kullanım istatistikleri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Verilerin İşlenme Amaçları</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Spor tesisi yönetim hizmetlerinin sunulması</li>
              <li>Sporcu gelişim takibi ve 900 alan değerlendirme sisteminin işletilmesi</li>
              <li>PHV (Zirve Boy Artış Hızı) takibi ile sporcu sağlığının korunması</li>
              <li>Veli-antrenör-tesis iletişiminin sağlanması</li>
              <li>Aidat ve ödeme süreçlerinin yönetimi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Hizmet kalitesinin artırılması ve analiz</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Verilerin Aktarılması</h2>
            <p>
              Kişisel verileriniz, hizmet sunumu için gerekli olduğu ölçüde aşağıdaki taraflarla paylaşılabilir:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Altyapı sağlayıcıları (Supabase, Vercel) — veri barındırma ve işleme</li>
              <li>Ödeme hizmet sağlayıcıları (Stripe) — güvenli ödeme işlemleri</li>
              <li>Yasal zorunluluk halinde yetkili kamu kurum ve kuruluşları</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Çocuk Sporcuların Verileri</h2>
            <p>
              18 yaş altı sporcuların kişisel verileri, velilerinin açık rızası ile işlenir.
              Sağlık ve gelişim verileri özel nitelikli kişisel veri olarak değerlendirilir ve
              ek güvenlik önlemleri ile korunur. Yerinde veri işleme seçeneği sunan LLaMA
              motoru, hassas çocuk verilerinin Türkiye sınırları içinde kalmasını sağlar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">6. Veri Saklama Süresi</h2>
            <p>
              Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca ve yasal saklama
              yükümlülüklerine uygun olarak muhafaza edilir. Üyelik sona erdikten sonra yasal
              zorunluluklar dışında verileriniz silinir veya anonim hale getirilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">7. Haklarınız</h2>
            <p>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">8. İletişim</h2>
            <p>
              KVKK kapsamındaki talepleriniz için{' '}
              <a href={`mailto:${BRAND.email}`} className="text-cyan-400 hover:text-cyan-300">{BRAND.email}</a> adresine
              başvurabilirsiniz. Başvurularınız en geç 30 gün içinde yanıtlanacaktır.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors">
            &larr; Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  )
}
