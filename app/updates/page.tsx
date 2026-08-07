"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Bell, Clock3, Newspaper } from "lucide-react"

const updates = [
  {
    title: "New supplier partnership announced",
    date: "August 2026",
    summary: "PT. Sultana Agro Lestari has partnered with a new international distributor to expand premium rice and dairy imports.",
  },
  {
    title: "Warehouse capacity upgraded",
    date: "July 2026",
    summary: "Our logistics network now supports larger cold storage and faster order fulfillment across Jakarta and surrounding regions.",
  },
  {
    title: "Quality certification renewed",
    date: "June 2026",
    summary: "All premium product lines have been recertified to meet updated Indonesian food safety and handling standards.",
  },
]

export default function UpdatesPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-50">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
                <Newspaper className="w-4 h-4" />
                Company Updates
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900">
                Company Updates
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
                Latest news and announcements from PT. Sultana Agro Lestari.
              </p>
            </motion.div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-950/5 border border-slate-200">
              <div className="grid gap-6 lg:grid-cols-3">
                {updates.map((update, index) => (
                  <motion.div
                    key={update.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-6 hover:border-cyan-300 transition"
                  >
                    <div className="flex items-center gap-3 mb-5 text-cyan-700">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">
                        <Bell className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">{update.date}</p>
                        <h2 className="mt-2 text-xl font-semibold text-slate-900">{update.title}</h2>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">{update.summary}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                className="mt-12 rounded-3xl bg-slate-950 p-8 text-white"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">Stay informed</p>
                    <h2 className="text-2xl font-bold">No updates published yet. Stay tuned!</h2>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm text-slate-200">
                    <Clock3 className="h-4 w-4 text-cyan-300" />
                    Updated regularly
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
