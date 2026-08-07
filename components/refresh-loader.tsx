"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function RefreshLoader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Show loader for 3 seconds, then fade out
    const showTimer = setTimeout(() => {
      setFading(true)
    }, 3000)

    // After fade animation completes, hide loader and route to home
    const routeTimer = setTimeout(() => {
      setVisible(false)
      if (window.location.pathname !== "/") {
        router.replace("/")
      }
    }, 3600)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(routeTimer)
    }
  }, [router])

  if (!visible) return null

  return (
    <div className={`refresh-screen ${fading ? "refresh-screen--fade" : ""}`}>
      <div className="loader" />
    </div>
  )
}