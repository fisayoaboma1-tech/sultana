"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function PremiumBrands() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
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
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover"
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
                    <img
                      src={otherBrand.image}
                      alt={otherBrand.name}
                      className="w-full h-full object-cover"
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
