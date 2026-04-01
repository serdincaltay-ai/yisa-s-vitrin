"use client"

import { useState, useCallback } from "react"
import { IntroAnimation } from "@/components/intro/IntroAnimation"
import TabletHome from "@/components/tablet/TabletHome"
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
        <div className={`h-screen text-white transition-opacity duration-500 ${introComplete ? "opacity-100" : "opacity-0"}`}>
          <TabletHome />
          <VitrinRobot />
        </div>
      </VitrinTabletFrame>
    </>
  )
}
