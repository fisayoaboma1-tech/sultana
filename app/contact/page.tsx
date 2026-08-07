"use client"

import React, { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Mail, Phone } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact from ${name || "Website Visitor"}`)
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`)
    // Opens user's default email client with prefilled values
    window.location.href = `mailto:info@sultanaagro.co.id?subject=${subject}&body=${body}`
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-50">
        <Navbar />

        <section className="pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
                <Mail className="w-4 h-4" />
                Contact
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900">Get in touch</h1>
              <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
                Reach out for product inquiries, partnerships, or distribution opportunities.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white border border-slate-200 p-8 shadow-xl shadow-slate-950/5">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium text-slate-600">Name</span>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-cyan-300"
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="flex flex-col">
                    <span className="text-sm font-medium text-slate-600">Email</span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-cyan-300"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-slate-600">Phone</span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    placeholder="+62 812 3456 7890"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-slate-600">Message</span>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 text-base min-h-[140px] focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    placeholder="Tell us about your inquiry"
                  />
                </label>

                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Send Message
                  </button>

                  <p className="text-sm text-slate-500 mt-2 sm:mt-0">Or email us directly at <a className="text-cyan-700 underline" href="mailto:info@sultanaagro.co.id">info@sultanaagro.co.id</a></p>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
