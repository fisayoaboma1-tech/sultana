import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PremiumBrands } from "@/components/premium-brands"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        <Navbar homepage />
        <Hero />
        <PremiumBrands />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
