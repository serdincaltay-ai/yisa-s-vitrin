import { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/knowledge/yisas'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Kullanım Şartları',
  description: 'YİSA-S platform kullanım şartları ve koşulları.',
  path: '/kullanim-sartlari',
})

export default function KullanimSartlariPage() {
  return (
    <div className="min-h-screen bg-[#060a13] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-2">Kullanım Şartları</h1>
        <p className="text-sm text-slate-500 mb-8">Son güncelleme: Mart 2026</p>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Kabul</h2>
            <p>
              {BRAND.name} platformunu kullanarak bu kullanım şartlarını kabul etmiş sayılırsınız.
              Platform, spor tesisleri, antrenörler, veliler ve yöneticiler için tasarlanmış bir
              yönetim sistemidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. Hesap Sorumlulukları</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hesap bilgilerinizin güvenliği sizin sorumluluğunuzdadır</li>
              <li>Hesabınız üzerinden gerçekleştirilen tüm işlemlerden siz sorumlusunuz</li>
              <li>18 yaş altı kullanıcılar yalnızca veli onayı ile kayıt olabilir</li>
              <li>Hesap bilgilerinizi üçüncü kişilerle paylaşmamalısınız</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Hizmet Kapsamı</h2>
            <p className="mb-3">{BRAND.name} aşağıdaki hizmetleri sunar:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sporcu gelişim takibi ve 900 alan değerlendirme sistemi</li>
              <li>PHV (Zirve Boy Artış Hızı) takibi</li>
              <li>Yoklama ve ders programı yönetimi</li>
              <li>Aidat ve ödeme takip sistemi</li>
              <li>Veli bilgilendirme paneli</li>
              <li>Yapay zeka destekli analiz ve raporlama</li>
              <li>Bayilik ve çoklu şube yönetimi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Kullanım Kuralları</h2>
            <p>Platformu kullanırken aşağıdaki kurallara uymanız gerekmektedir:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Platformu yalnızca yasal amaçlarla kullanmalısınız</li>
              <li>Başka kullanıcıların verilerine yetkisiz erişim sağlamamalısınız</li>
              <li>Sistemi kötüye kullanacak otomatik araçlar kullanmamalısınız</li>
              <li>Doğru ve güncel bilgiler girmelisiniz</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Ödeme ve İptal</h2>
            <p>
              Abonelik ücretleri aylık olarak tahsil edilir. İptal talepleri bir sonraki fatura
              döneminden itibaren geçerli olur. Bayilik sözleşmeleri ayrı koşullara tabidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">6. Fikri Mülkiyet</h2>
            <p>
              Platform, tasarım, yazılım ve içeriklerin tüm hakları {BRAND.name}&apos;e aittir.
              Yazılı izin olmadan kopyalanamaz, dağıtılamaz veya değiştirilemez.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">7. Sorumluluk Sınırı</h2>
            <p>
              {BRAND.name}, platform kullanımından kaynaklanan dolaylı zararlardan sorumlu
              tutulamaz. Sporcu sağlık verileri yalnızca bilgilendirme amaçlıdır ve tıbbi
              tavsiye yerine geçmez.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-3">8. İletişim</h2>
            <p>
              Sorularınız için{' '}
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
