import { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/knowledge/yisas'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'YİSA-S gizlilik politikası ve kişisel veri koruma taahhüdü',
}

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-[#060a13] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-2">Gizlilik Politikası</h1>
        <p className="text-sm text-slate-500 mb-8">Son güncelleme: Mart 2026</p>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Genel Bakış</h2>
            <p>
              {BRAND.name}, kullanıcılarının gizliliğini korumayı taahhüt eder. Bu politika,
              platformumuzda hangi verilerin toplandığını, nasıl kullanıldığını ve nasıl
              korunduğunu açıklar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. Toplanan Bilgiler</h2>
            <p className="mb-3">Hizmetlerimizi kullanırken aşağıdaki bilgiler toplanabilir:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white">Hesap bilgileri:</strong> Ad, soyad, e-posta, telefon numarası</li>
              <li><strong className="text-white">Sporcu verileri:</strong> Boy, kilo, yaş, branş, gelişim ölçümleri, PHV kayıtları</li>
              <li><strong className="text-white">Kullanım verileri:</strong> Oturum bilgileri, sayfa görüntülemeleri, özellik kullanımı</li>
              <li><strong className="text-white">Ödeme bilgileri:</strong> Aidat ve abonelik ödeme kayıtları (kart bilgileri Stripe tarafından güvenle saklanır)</li>
              <li><strong className="text-white">Cihaz bilgileri:</strong> Tarayıcı türü, IP adresi, işletim sistemi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Bilgilerin Kullanımı</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sporcu gelişim takibi ve 900 alan değerlendirme raporlarının oluşturulması</li>
              <li>PHV (Zirve Boy Artış Hızı) hesaplaması ve sakatlık risk analizi</li>
              <li>Yapay zeka destekli antrenman önerilerinin sunulması</li>
              <li>Veli bilgilendirme ve iletişim hizmetleri</li>
              <li>Ödeme ve fatura süreçleri</li>
              <li>Platform güvenliği ve dolandırıcılık önleme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Veri Güvenliği</h2>
            <p>
              Tüm veriler TLS/SSL şifrelemesi ile aktarılır ve Supabase altyapısında güvenli
              biçimde saklanır. Satır Düzeyi Güvenlik (RLS) politikaları ile her kurum yalnızca
              kendi verilerine erişebilir. Hassas çocuk verileri için ek güvenlik katmanları
              uygulanır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Üçüncü Taraf Hizmetler</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white">Supabase:</strong> Veritabanı ve kimlik doğrulama</li>
              <li><strong className="text-white">Vercel:</strong> Uygulama barındırma</li>
              <li><strong className="text-white">Stripe:</strong> Güvenli ödeme işleme</li>
              <li><strong className="text-white">Sentry:</strong> Hata takibi ve performans izleme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">6. Çerezler</h2>
            <p>
              Platformumuz, oturum yönetimi ve kullanıcı deneyimini iyileştirmek için çerezler
              kullanır. Detaylar için{' '}
              <Link href="/cerez-politikasi" className="text-cyan-400 hover:text-cyan-300">
                Çerez Politikamızı
              </Link>{' '}
              inceleyebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">7. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız için{' '}
              <a href={`mailto:${BRAND.email}`} className="text-cyan-400 hover:text-cyan-300">{BRAND.email}</a> adresinden
              bize ulaşabilirsiniz.
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
