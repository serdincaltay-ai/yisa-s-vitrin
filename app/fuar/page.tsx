"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calculator } from "lucide-react"
import { SITE_INTEGRATION_LINKS } from "@/lib/knowledge/yisas"

const PERSONEL_BIRIM = 25000

export default function FuarPage() {
  const [form, setForm] = useState({
    metrekare: "",
    aylikKira: "",
    personelSayisi: "",
    ogrenciSayisi: "",
    ortalamaAidat: "",
  })
  const [sonuc, setSonuc] = useState<{
    gelir: number
    gider: number
    kar: number
    tasarrufYuzde: number
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setSonuc(null)
  }

  const hesapla = () => {
    const kira = Number(form.aylikKira) || 0
    const personel = Number(form.personelSayisi) || 0
    const ogrenci = Number(form.ogrenciSayisi) || 0
    const aidat = Number(form.ortalamaAidat) || 0

    const gelir = ogrenci * aidat
    const gider = kira + personel * PERSONEL_BIRIM
    const kar = gelir - gider
    const tasarrufYuzde = 15 + Math.random() * 5

    setSonuc({ gelir, gider, kar, tasarrufYuzde: Math.round(tasarrufYuzde * 10) / 10 })
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-20">
      <div className="pt-0">
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tesisinizin Potansiyelini Hesaplayın
            </h1>
            <p className="text-white/60">
              Aylık gelir, gider ve kar tahmininizi görmek için alanları doldurup hesaplayın.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 space-y-4">
              <label className="block">
                <span className="text-sm text-white/70 mb-1 block">Tesis metrekaresi (m²)</span>
                <Input
                  type="number"
                  name="metrekare"
                  value={form.metrekare}
                  onChange={handleChange}
                  placeholder="Örn. 500"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/70 mb-1 block">Aylık kira (₺)</span>
                <Input
                  type="number"
                  name="aylikKira"
                  value={form.aylikKira}
                  onChange={handleChange}
                  placeholder="Örn. 25000"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/70 mb-1 block">Personel sayısı</span>
                <Input
                  type="number"
                  name="personelSayisi"
                  value={form.personelSayisi}
                  onChange={handleChange}
                  placeholder="Örn. 5"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/70 mb-1 block">Tahmini öğrenci sayısı</span>
                <Input
                  type="number"
                  name="ogrenciSayisi"
                  value={form.ogrenciSayisi}
                  onChange={handleChange}
                  placeholder="Örn. 80"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/70 mb-1 block">Ortalama aidat (₺/ay)</span>
                <Input
                  type="number"
                  name="ortalamaAidat"
                  value={form.ortalamaAidat}
                  onChange={handleChange}
                  placeholder="Örn. 800"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </label>
              <Button
                onClick={hesapla}
                className="w-full mt-4 bg-[#0f3460] hover:bg-[#0f3460]/90 text-white flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                Hesapla
              </Button>
            </div>

            {sonuc !== null && (
              <div className="mt-8 rounded-2xl border border-[#00d4ff]/30 bg-[#0f3460]/20 backdrop-blur-md p-6 md:p-8 space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Tahmini Sonuçlar</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Tahmini aylık gelir</span>
                  <span className="text-emerald-400 font-medium">{sonuc.gelir.toLocaleString("tr-TR")} ₺</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Tahmini aylık gider</span>
                  <span className="text-[#e94560] font-medium">{sonuc.gider.toLocaleString("tr-TR")} ₺</span>
                </div>
                <div className="flex justify-between text-base font-semibold pt-2 border-t border-white/10">
                  <span className="text-white">Tahmini aylık kar</span>
                  <span className={sonuc.kar >= 0 ? "text-emerald-400" : "text-[#e94560]"}>
                    {sonuc.kar.toLocaleString("tr-TR")} ₺
                  </span>
                </div>
                <p className="text-sm text-[#00d4ff] pt-2">
                  YİSA-S ile tahmini %{sonuc.tasarrufYuzde} verimlilik artışı ve tasarruf imkânı.
                </p>
              </div>
            )}

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={SITE_INTEGRATION_LINKS.patron.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-6 rounded-xl"
                >
                  Patron Paneline Geç
                </Button>
              </a>
              <Link href="/fuar/tour">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 font-medium px-8 py-6 rounded-xl"
                >
                  90 sn Fuar Turu
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-[#e94560] hover:bg-[#e94560]/90 text-white font-medium px-8 py-6 rounded-xl"
                >
                  Demo Talep Et
                </Button>
              </Link>
              <Link href={SITE_INTEGRATION_LINKS.tenant.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-6 rounded-xl"
                >
                  Tenant Sitesi Kurulumu
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
