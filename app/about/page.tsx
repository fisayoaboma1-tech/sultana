"use client"

import Image from "next/image"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Medal, Handshake } from "lucide-react"
import { motion } from "framer-motion"

const partnerLogos = [
  { name: "ASBA 7 STORE", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951703/asba-7-store-logo-1781000044_gpons4.png" },
  { name: "CHANDRA DEPARTMENT STORE", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951702/chandra-department-store-logo-1780999816_v4ienn.png" },
  { name: "DIAMOND SUPERMARKET", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951702/1780997400_diamond-supermarket-17292229248683_evwo8s.png" },
  { name: "FARMERS MARKET", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951701/farmers-market-logo-1780998675_y6bost.png" },
  { name: "FOODHALL", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951699/foodhall-logo-1780998808_sk7see.png" },
  { name: "GELAEL", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951699/gelael-logo-1780999605_svz1wr.png" },
  { name: "GRANDLUCKY", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951698/grand-lucky-logo-1780998555_x87sil.png" },
  { name: "HERO", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951697/hero-logo-1780999207_hatyog.png" },
  { name: "HARI HARI SWALAYAN", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951697/hari-hari-swalayan-logo-1780999075_ocnqcp.png" },
  { name: "LOTTE GROSIR", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951696/lottle-grosir-logo-1781000315_raotlq.png" },
  { name: "LOTUS FOOD SERVICE", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951693/lotus-food-service-logo-1781000119_zzcy5a.png" },
  { name: "MARKET CITY", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951693/market-city-logo-1780999493_zecd3f.png" },
  { name: "RANCH MARKET", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951693/ranch-market-logo-1780998658_pdl4br.png" },
  { name: "RITA PASARAYA", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951692/rita-pasaraya-logo-1780999970_z4fkqp.png" },
  { name: "SAMUDRA SUPERMARKET", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951692/samudra-supermarket-logo-1780999739_e6kr1m.png" },
  { name: "SENDY SWALAYAN", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951692/sendy-039-s-swalayan-logo-1780998919_erjcvj.png" },
  { name: "SETIABUDHI SUPERMARKET", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951692/setiabudhi-supermarket-logo-1780999895_m6bcdk.png" },
  { name: "SMARCO", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951692/smarco-logo-1780999658_dd1nf2.png" },
  { name: "SRI MURUGAN", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951692/sri-murugan-logo-1781000233_tfhkxk.png" },
  { name: "TOTAL BUAH SEGAR", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951691/total-buah-segar-logo-1780999141_mryrss.png" },
  { name: "TRU FARM", image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951692/tru-farm-logo-1780999313_yvvnas.png" },
]

const certifications = [
  { 
    name: "HALAL", 
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951704/halal_zvjelz.png",
    description: "CERTIFIED BY LPPOM MUI INDONESIA"
  },
  { 
    name: "SMKPO", 
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951704/smkpo_ngi3jt.png",
    description: "CERTIFIED BY BPOM (Food & Drugs Authority)"
  },
  { 
    name: "NKV", 
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951705/nkv_qabez4.png",
    description: "CERTIFIED BY KEMENTERIAN PERTANIAN",
    code: "GK-317506-0008"
  },
  { 
    name: "SPPB-PSAT", 
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785951705/sppb_mh7eaj.png",
    description: "CERTIFIED BY KEMENTERIAN PERTANIAN"
  },
]

export default function About() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-50">
        <Navbar />
        
        {/* Hero Section */}
        <section id="about" className="pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
                ESTABLISHED 2020
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-black text-slate-900">
                PT. SULTANA AGRO LESTARI
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Premium Food Distributor Indonesia with trusted quality, global sourcing, and dependable service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-xl shadow-slate-950/5"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    "Supplying Excellence, Delivering Quality."
                  </h2>
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                      PT. Sultana Agro Lestari is a premium food distributor in Indonesia, committed to bringing high-quality food products to markets across retail, wholesale, and foodservice sectors.
                    </p>
                    <p>
                      We specialize in sourcing premium ingredients and trusted food solutions from reliable global suppliers, with a strong focus on consistency, quality, and value for our partners.
                    </p>
                    <p>
                      Our mission is to support businesses with dependable supply, exceptional service, and products that meet the expectations of modern consumers throughout Indonesia.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative"
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1785988905/office_bkzhiw.jpg"
                      alt="PT. Sultana Agro Lestari Building"
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
    
        {/* Certifications Section */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex items-center justify-center gap-3 mb-12"
            >
              <Medal className="w-8 h-8 text-black" />
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
                Our Certifications
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                  className="bg-white border-2 border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-32 h-32 mb-4 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">
                    {cert.description}
                  </p>
                  {cert.code && (
                    <span className="inline-block px-3 py-1 bg-slate-900 text-white text-xs font-mono rounded-full">
                      {cert.code}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <section className="py-20 px-4 sm:px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex items-center justify-center gap-3 mb-12"
            >
              <Handshake className="w-8 h-8 text-black" />
              <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
                Our Trusted Partners
              </h2>
            </motion.div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {partnerLogos.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] as const }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-full aspect-square flex items-center justify-center mb-3">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 text-center leading-tight">
                      {partner.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}