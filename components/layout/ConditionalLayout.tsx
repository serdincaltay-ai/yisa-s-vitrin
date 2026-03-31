'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/robot/ChatWidget'
import ManyChatEmbed from '@/components/layout/ManyChatEmbed'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ChatWidget />
      <ManyChatEmbed />
    </>
  )
}
