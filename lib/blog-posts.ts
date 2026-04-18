export type BlogPost = {
  slug: string
  baslik: string
  ozet: string
  tarih: string
  okuma: string
}

export const POSTS: BlogPost[] = [
  {
    slug: '900-alan-degerlendirme-sistemi-nasil-calisir',
    baslik: '900 Alan Değerlendirme Sistemi Nasıl Çalışır?',
    ozet: 'Çocuk sporcuların gelişimini ölçen 900 ayrı veri noktasının arkasındaki yöntem ve YİSA-S modeli.',
    tarih: '2026-03-15',
    okuma: '6 dk',
  },
  {
    slug: 'cocuk-sporcularda-veri-guvenligi-ve-kvkk',
    baslik: 'Çocuk Sporcularda Veri Güvenliği ve KVKK',
    ozet: 'Velinin "verim nereye gidiyor?" sorusuna kanunla uyumlu, net cevap.',
    tarih: '2026-03-22',
    okuma: '5 dk',
  },
  {
    slug: 'phv-nedir-cocuk-sporcularda-buyume-plagi-korunmasi',
    baslik: 'PHV Nedir? Çocuk Sporcularda Büyüme Plağı Korunması',
    ozet: 'Pik Boy Hızı dönemini bilmeden yapılan antrenman neden risklidir?',
    tarih: '2026-03-29',
    okuma: '7 dk',
  },
  {
    slug: 'yapay-zeka-spor-egitiminde-nasil-kullanilir',
    baslik: 'Yapay Zeka Spor Eğitiminde Nasıl Kullanılır?',
    ozet: 'AI sahada antrenörü değil, bürokrasiyi yok ediyor. İşte gerçek örnekler.',
    tarih: '2026-04-05',
    okuma: '8 dk',
  },
]
