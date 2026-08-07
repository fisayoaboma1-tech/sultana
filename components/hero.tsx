"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Info } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative mt-14 min-h-screen flex items-center overflow-hidden">
      {/* Background gradient + hero video */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <video
        src="https://res.cloudinary.com/qz5m8bhg/video/upload/v1785941303/tadaa_bln0ev.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 right-0 h-1/2 w-full object-cover opacity-35 md:inset-0 md:h-full md:w-full"
      />
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="absolute -left-24 top-24 w-72 h-72 rounded-full bg-slate-600/20 blur-3xl" />
      <div className="absolute right-0 top-16 w-56 h-56 rounded-full bg-slate-500/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="font-bold leading-tight tracking-tight">
              <span className="block text-white text-[4.5rem] sm:text-[5.5rem] md:text-[6.5rem]">Supplying Excellence,</span>
              <span className="block text-sky-400 text-[3rem] sm:text-[3.5rem] md:text-[4rem]">Delivering</span>
              <span className="block text-sky-400 text-[3rem] sm:text-[3.5rem] md:text-[4rem]">Quality</span>
            </h1>

            <div className="bg-slate-800/55 backdrop-blur-2xl border border-slate-600/60 rounded-[2rem] p-8 max-w-xl shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)]">
              <p className="text-slate-200 text-base leading-relaxed sm:text-lg">
                We are a trusted importer and distributor of high-quality food products in Jakarta, Indonesia. Specializing in premium Basmati Rice and Spread Creams from trusted global suppliers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 max-w-xl items-center">
              <Button asChild size="lg" className="w-auto text-white rounded-full px-16 py-6 text-xl font-semibold shadow-lg shadow-slate-950/20" style={{ backgroundColor: 'oklch(71.5% 0.143 215.221)' }}>
                <Link href="/products" className="inline-flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5" />
                  View Products
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-auto border !border-slate-700 text-white hover:bg-white/10 hover:border-cyan-300 rounded-full px-16 py-6 text-xl font-semibold bg-transparent shadow-lg shadow-slate-950/10">
                <Link href="/about" className="inline-flex items-center gap-3">
                  <Info className="w-5 h-5" />
                  About Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.84, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2.5rem] bg-slate-900/60 border border-slate-700/75 shadow-2xl shadow-slate-950/40 w-full max-w-lg h-[36rem]"
            >
              {/* Background video behind logo */}
              <video
                src="https://res.cloudinary.com/qz5m8bhg/video/upload/v1785949526/gafa_fffatq.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-slate-900/40" />
              
              <div className="relative z-10 flex items-center justify-center h-full p-10">
                <img
                  src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1785932694/sal-logo_jxjujr.png"
                  alt="PT. Sultana Agro Lestari"
                  className="relative w-full max-w-sm h-auto"
                />
              </div>
              <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-slate-600/30 blur-2xl" />
              <div className="pointer-events-none absolute -right-10 bottom-8 h-20 w-20 rounded-full bg-slate-500/30 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}