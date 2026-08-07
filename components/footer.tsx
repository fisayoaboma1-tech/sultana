"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, MessageCircle, Mail, Instagram, MapPin } from "lucide-react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1785932694/sal-logo_jxjujr.png"
                alt="PT. Sultana Agro Lestari"
                className="w-12 h-12 rounded-full"
              />
              <h3 className="text-xl font-bold text-white">PT. SULTANA AGRO LESTARI</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Supplying Excellence, Delivering Quality since 2020.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium importer and distributor of high-quality food products, serving a diverse range of clients across Indonesia.
            </p>
          </div>

          {/* Headquarter Section */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-500" />
              HEADQUARTER
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              EightyEight@Kasablanka Office Tower, Lt. 10 Unit E, Jl. Casablanca Kav. 88, Menteng Dalam, Tebet, Jakarta Selatan 12870, DKI Jakarta, Indonesia
            </p>
            <a
              href="https://www.google.com/maps/place/88office@kasablanka/@-6.2244356,106.8368124,17z/data=!4m6!3m5!1s0x2e69f329a9f6eec9:0x4bd23fdec62229ad!8m2!3d-6.224441!4d106.8416833!16s%2Fg%2F11f3v_3y84?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-500 text-sm hover:text-cyan-400 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              View on Maps
            </a>
          </div>

          {/* Connect Section */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-500" />
              CONNECT
            </h4>
            <div className="space-y-3">
              <a href="tel:+62318521230" className="flex items-center gap-3 text-slate-300 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-slate-400" />
                +62-031 8521230
              </a>
              <a href="https://wa.me/6283186764833" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 text-sm hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4 text-slate-400" />
                +62 (831) 867-64833
              </a>
              <a href="mailto:ptsultananalestari@gmail.com" className="flex items-center gap-3 text-slate-300 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-slate-400" />
                ptsultananalestari@gmail.com
              </a>
              <a href="https://instagram.com/daawatindonesia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-slate-400" />
                @daawatindonesia
              </a>
              <a href="https://instagram.com/antebella.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-slate-400" />
                @antebella.id
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate-500">© 2026 PT. Sultana Agro Lestari. All rights reserved.</p>
          <p className="text-sm text-slate-500">Supplying Excellence, Delivering Quality</p>
        </motion.div>
      </div>
    </footer>
  )
}