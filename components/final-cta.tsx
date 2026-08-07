"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background video aligned to right */}
      <video
        src="https://res.cloudinary.com/qz5m8bhg/video/upload/v1785948638/From_Klickpin.com-_Try_these_23_Chic_air_fryer_dinner_recipes_that_are_perfect_when_you_want_something_stylish_modern_and_easy_to_copy_for_anyone_1_gzo8kl.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 right-0 h-full w-1/3 md:w-1/2 object-cover opacity-30 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-cal-sans)" }}
        >
          Ready to begin your journey?
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied partners who trust us for excellence. Your success story starts here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="cursor-pointer border !border-slate-700 text-white hover:bg-white/10 hover:border-cyan-300 rounded-full px-28 py-6 text-xl font-semibold bg-transparent shadow-lg shadow-slate-950/10"
          >
            <a href="/contact">
              <Mail className="mr-2 w-6 h-6" />
              Contact
            </a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-zinc-500">Quality products, exceptional service, endless possibilities. Let's grow together.</p>
      </motion.div>
    </section>
  )
}
