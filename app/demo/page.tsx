import { Metadata } from 'next'
import DemoLeadForm from '@/components/demo/DemoLeadForm'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Demo Talebi',
  description:
    'YİSA-S için demo talebi oluşturun. Ad, telefon, şehir ve branş bilgilerinizi paylaşın.',
  path: '/demo',
})

export default function DemoPage() {
  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">
              <span className="text-gradient">Demo Talebi</span> Oluşturun
            </h1>
            <p className="text-lg text-slate-400 mb-8">
              Formu doldurduğunuzda platform_owner ekibine otomatik bildirim gider.
              Ekibimiz en kısa sürede sizi arar ve canlı tanıtım planlar.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Canlı ürün gösterimi',
                'İhtiyaca özel paket önerisi',
                'Kurulum ve geçiş planı',
                'Hızlı geri dönüş',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 
                    flex items-center justify-center text-sm">✓</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">Bilmeniz Gereken</h3>
              <p className="text-slate-400 text-sm">
                Telefon numarası başında <strong>0 olmadan 10 hane</strong> olmalıdır.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <DemoLeadForm />
          </div>
        </div>
      </div>
    </div>
  )
}
