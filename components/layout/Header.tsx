'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, ExternalLink } from 'lucide-react'
import { BRAND, NAV_LINKS, CTA_LINKS, SITE_INTEGRATION_LINKS } from '@/lib/knowledge/yisas'

export default function Header() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      router.push(href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060a13]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem] lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#0f3460] flex items-center justify-center neon-border-cyan">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="text-lg font-bold text-white animate-breath">
              {BRAND.name}
            </span>
            <span className="hidden sm:inline md:hidden lg:inline text-xs text-[#64748b] font-mono">
              {BRAND.domain}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isExternal = !link.href.startsWith('#')
              if (isExternal) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors font-medium text-sm"
                  >
                    {link.label}
                  </Link>
                )
              }
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors font-medium text-sm"
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_INTEGRATION_LINKS.patron.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#94a3b8] hover:text-white transition-colors font-medium text-sm min-h-[44px] px-4"
            >
              {SITE_INTEGRATION_LINKS.patron.label}
              <ExternalLink size={14} />
            </a>
            <Link
              href={SITE_INTEGRATION_LINKS.tenant.href}
              className="text-[#94a3b8] hover:text-white transition-colors font-medium text-sm min-h-[44px] px-4 inline-flex items-center"
            >
              {CTA_LINKS.tenantSetup.label}
            </Link>
            <Link
              href={CTA_LINKS.demo.href}
              className="btn-primary text-sm px-5 py-2.5 inline-flex items-center justify-center"
            >
              {CTA_LINKS.demo.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-[#94a3b8] hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Men\u00FC"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#060a13]/98 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link) => {
                const isExternal = !link.href.startsWith('#')
                if (isExternal) {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-between py-3 text-lg text-[#94a3b8] hover:text-[#00d4ff] border-b border-white/[0.06] min-h-[44px]"
                    >
                      {link.label}
                      <ChevronRight size={20} />
                    </Link>
                  )
                }
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between w-full py-3 text-lg text-[#94a3b8] hover:text-[#00d4ff] border-b border-white/[0.06] min-h-[44px]"
                  >
                    {link.label}
                    <ChevronRight size={20} />
                  </button>
                )
              })}
              <div className="pt-4 space-y-3">
                <Link
                  href={CTA_LINKS.demo.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full py-3 text-center btn-primary rounded-xl"
                >
                  {CTA_LINKS.demo.label}
                </Link>
                <a
                  href={SITE_INTEGRATION_LINKS.patron.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-center border border-white/[0.1] text-white rounded-xl min-h-[44px]"
                >
                  {SITE_INTEGRATION_LINKS.patron.label}
                  <ExternalLink size={14} />
                </a>
                <Link
                  href={SITE_INTEGRATION_LINKS.tenant.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3 text-center border border-white/[0.1] text-white rounded-xl min-h-[44px]"
                >
                  {CTA_LINKS.tenantSetup.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
