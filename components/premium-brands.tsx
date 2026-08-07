"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function PremiumBrands() {
  const [flipped, setFlipped] = useState(false)

  const brands = [
    {
      name: "Daawat",
      image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785946246/daawat-bg_a0dhw1.jpg",
      exploreText: "Explore Daawat",
      exploreLink: "#daawat",
    },
    {
      name: "Antebella",
      image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785946249/antebella-bg_hsz5d8.png",
      exploreText: "Explore Antebella",
      exploreLink: "#antebella",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Premium Brands
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, index) => {
            const otherBrand = brands[(index + 1) % 2]
            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative group rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side - Shows current brand */}
                  <div className="absolute inset-0 backface-hidden">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-4">{brand.name}</h3>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                      >
                        {brand.exploreText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Back Side - Shows the OTHER brand */}
                  <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <Image
                      src={otherBrand.image}
                      alt={otherBrand.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl font-bold text-white mb-4">{otherBrand.name}</h3>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors"
                      >
                        {otherBrand.exploreText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
