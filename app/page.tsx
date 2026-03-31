"use client"

import { useState, useCallback } from "react"
import { IntroAnimation } from "@/components/intro/IntroAnimation"
import { Hero } from "@/components/landing/hero"
import { VideoIntro } from "@/components/landing/video-intro"
import { Showcase } from "@/components/landing/showcase"
import { Branches } from "@/components/landing/branches"
import { Features } from "@/components/landing/features"
import { ClubPreview } from "@/components/landing/club-preview"
import { FuarBanner } from "@/components/landing/fuar-banner"
import { Pricing } from "@/components/landing/pricing"
import { DemoForm } from "@/components/landing/demo-form"
import { ChatbotAvatar } from "@/components/landing/chatbot-avatar"
import { VitrinCarousel } from "@/components/landing/vitrin-carousel"
import VitrinTabletFrame from "@/components/tablet/VitrinTabletFrame"
import VitrinRobot from "@/components/robot/VitrinRobot"

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <VitrinTabletFrame>
        <div className={`min-h-screen text-white transition-opacity duration-500 ${introComplete ? "opacity-100" : "opacity-0"}`}>
          <Hero />
          <VideoIntro />
          <Showcase />
          <VitrinCarousel />
          <Branches />
          <Features />
          <ClubPreview />
          <FuarBanner />
          <Pricing />
          <DemoForm />
          <ChatbotAvatar />
          <VitrinRobot />
        </div>
      </VitrinTabletFrame>
    </>
  )
}
