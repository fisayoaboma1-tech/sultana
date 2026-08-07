import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "PT. Sultana Agro Lestari | Premium Food Distributor Indonesia",
  description: "PT. Sultana Agro Lestari is a premium food distributor in Indonesia committed to trusted quality, global sourcing, and dependable service.",
  generator: "v0.app",
  icons: {
    icon: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785932694/sal-logo_jxjujr.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
