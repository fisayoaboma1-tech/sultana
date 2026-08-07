"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Info, Leaf, ShoppingBag, Sparkles } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

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
      <div className="absolute -left-24 top-24 w-72 h-72 rounded-full bg-slate-500/20 blur-3xl" />
      <div className="absolute right-0 top-16 w-56 h-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute left-1/4 bottom-10 w-96 h-96 rounded-full bg-sky-600/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Eyebrow badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Trusted Indonesian Food Importer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              className="font-extrabold leading-[1.02] tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
                className="block text-white/90 text-[2.2rem] sm:text-[3rem] md:text-[3.6rem] font-semibold"
              >
                Supplying Excellence,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                className="block mt-2 bg-gradient-to-r from-sky-300 via-cyan-300 pb-2 to-blue-400 bg-clip-text text-transparent text-[3.75rem] sm:text-[5rem] md:text-[6.25rem]"
              >
                Delivering
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, delay: 1.45, ease: [0.22, 1, 0.36, 1] as const }}
                className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent text-[4rem] sm:text-[5.5rem] md:text-[7rem]"
              >
                Quality
              </motion.span>
            </motion.h1>

            {/* Description card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="relative bg-slate-800/55 backdrop-blur-2xl border border-slate-600/50 rounded-[2rem] p-8 max-w-xl shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)]"
            >
              <div className="absolute -top-3 left-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 shadow-lg shadow-cyan-500/30">
                <Leaf className="w-3 h-3 text-white" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white">
                  Premium Selection
                </span>
              </div>
              <p className="text-slate-200 text-base leading-relaxed sm:text-lg">
                We are a trusted importer and distributor of high-quality food products in Jakarta, Indonesia. Specializing in premium Basmati Rice and Spread Creams from trusted global suppliers.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-row flex-wrap gap-4 max-w-xl items-center"
            >
              <Button
                asChild
                size="lg"
                className="group relative w-auto text-white rounded-full px-12 sm:px-16 py-6 text-lg sm:text-xl font-bold shadow-[0_20px_50px_-15px_rgba(34,211,238,0.5)] transition-all duration-300 hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.7)] hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
                style={{ backgroundColor: "oklch(71.5% 0.143 215.221)" }}
              >
                <Link href="/products" className="relative inline-flex items-center gap-3">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  View Products
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group w-auto border !border-slate-600/80 text-white hover:bg-white/10 hover:border-cyan-300 hover:shadow-[0_15px_40px_-15px_rgba(34,211,238,0.35)] rounded-full px-12 sm:px-16 py-6 text-lg sm:text-xl font-bold bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-slate-950/10"
              >
                <Link href="/about" className="inline-flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400/15 border border-cyan-400/30 transition-colors duration-300 group-hover:bg-cyan-400/30">
                    <Info className="w-4 h-4 text-cyan-300" />
                  </span>
                  About Us
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right side - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.84, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900/60 border border-slate-700/75 shadow-2xl shadow-slate-950/40 w-full max-w-[18rem] sm:max-w-md lg:max-w-lg h-[18rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem]">
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

              {/* Animated glow ring */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] p-[1px]">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/40 via-transparent to-blue-500/40 opacity-60" />
              </div>

              <div className="relative z-10 flex items-center justify-center h-full p-10">
                <motion.img
                  src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1785932694/sal-logo_jxjujr.png"
                  alt="PT. Sultana Agro Lestari"
                  className="relative w-full max-w-[10rem] sm:max-w-sm h-auto drop-shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-slate-600/30 blur-2xl" />
              <div className="pointer-events-none absolute -right-10 bottom-8 h-20 w-20 rounded-full bg-cyan-500/20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}