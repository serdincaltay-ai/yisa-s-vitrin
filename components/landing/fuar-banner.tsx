"use client"

import Link from "next/link"
import { QrCode, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_INTEGRATION_LINKS } from "@/lib/knowledge/yisas"

export function FuarBanner() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f3460]/30 via-[#00d4ff]/5 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-[#00d4ff]/20 bg-white/[0.02] p-5 md:p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#00d4ff]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Fuar & Tanıtım</h3>
              <p className="text-sm text-white/50">
                Tesis potansiyeli hesaplayıcı ve 90 saniyelik demo turu. Fuarda QR ile paylaşın.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/fuar">
              <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/5">
                Hesaplama
              </Button>
            </Link>
            <Link href="/fuar/tour">
              <Button className="bg-[#0f3460] hover:bg-[#0f3460]/90 text-white gap-2">
                <QrCode className="w-4 h-4" />
                90 sn Fuar Turu (QR)
              </Button>
            </Link>
            <a
              href={SITE_INTEGRATION_LINKS.patron.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/5"
            >
              Patron Paneli
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
