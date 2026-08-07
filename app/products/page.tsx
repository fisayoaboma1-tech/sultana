"use client"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ShoppingBag, Gem, ShieldCheck, Truck, ChevronLeft, ChevronRight } from "lucide-react"

const sampleImages = [
  "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785946246/daawat-bg_a0dhw1.jpg",
  "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785946249/antebella-bg_hsz5d8.png",
  "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785941303/tadaa_bln0ev.mp4",
]

const sampleCategories = [
  "Grains",
  "Dairy Alternatives",
  "Ingredients",
  "Beverages",
  "Snacks",
  "Condiments",
]

const productNames = [
  "Premium Basmati Rice",
  "Antebella",
  "Traditional Basmati Rice",
  "Long Grain Rice",
  "Spread Cream",
  "Cooking Cream",
  "Soybeans",
  "Soybean Meal",
  "Barley",
  "Wheat",
  "Corn",
  "Oats",
  "Honey",
  "Fresh Apples",
  "Fresh Oranges",
  "Fresh Grapes",
  "Frozen Beef",
  "Frozen Chicken",
]

const productDescriptions = [
  "Aromatic, extra-long grain basmati rice prized for its delicate fragrance and fluffy, non-sticky texture. Carefully aged and milled to enhance elongation and aroma — ideal for biryanis and pilafs.",
  "Antebella is a premium Turkish food brand owned by INOVA GIDA SANAYI VE TICARET LIMITED SIRKETI, based in Gaziantep, Turkey. The brand specializes in nut-based spreads, pistachio products, and other packaged foods.",
  "Traditional basmati rice with classic nutty aroma and soft, separate grains. Traditionally processed to preserve natural flavor — suited for home cooking and premium restaurants.",
  "Versatile long-grain rice offering a light, separate texture when cooked. Suitable for everyday meals, pilafs, and fried rice.",
  "Luxuriously smooth spread cream formulated for easy spreading and baking. Delivers a rich mouthfeel and balanced sweetness for desserts and confections.",
  "Stabilized cooking cream designed for sauces, soups and professional kitchens — adds a silky, creamy texture while maintaining stability under heat.",
  "High-quality soybeans suited for food processing and oil extraction. Protein-rich and versatile for soymilk, tofu and ingredient manufacturing.",
  "Defatted soybean meal — a protein-dense, consistent feed ingredient for livestock and aquaculture with dependable nutritional profile.",
  "Multi-purpose barley for brewing, malting or feed applications. Plump kernels with reliable quality for industrial and food use.",
  "Premium wheat selected for milling and bakery use, offering consistent gluten strength and performance for bread and pastry production.",
  "Versatile corn (maize) for human food, feed and industrial uses — available in whole-kernel and milled forms for a wide range of applications.",
  "Whole and rolled oats tailored for cereals, baking and health-food applications. Naturally wholesome and rich in dietary fiber.",
  "Pure natural honey with floral sweetness, suitable for retail packaging and food manufacturing — carefully handled to preserve flavor and texture.",
  "Fresh apples selected for crisp texture and balanced sweetness, packed to preserve freshness for retail and wholesale distribution.",
  "Juicy fresh oranges with vibrant citrus flavour and good shelf life, ideal for retail, juice processing and foodservice.",
  "Seedless table grapes offering sweet, juicy flavor and firm texture — packed for retail and hospitality markets.",
  "Individually quick-frozen beef cuts preserved at peak freshness; trimmed and packaged for foodservice and retail use while retaining texture and flavor.",
  "IQF frozen chicken portions frozen to retain natural texture and flavor; suitable for foodservice, processing and retail applications.",
]

const imageOverrides: Record<string, string> = {
  "Traditional Basmati Rice": "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786048539/traditionl_rice_s4pxah.jpg",
  "Long Grain Rice": "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786048539/long_grain_wsgptc.jpg",
  "Spread Cream": "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786048539/spreadcream_afjgrk.jpg",
  "Cooking Cream": "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786048539/cokkincream_enh1yh.jpg",
  Soybeans: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786048539/soyabean_i9ccfa.jpg",
  "Soybean Meal": "https://res.cloudinary.com/qz5m8bhg/image/upload/v1785948539/soyameal_dd69m8.jpg",
  Barley: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786048540/Barley_l7j728.jpg",
  "Fresh Grapes": "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786083589/grapes-Photoroom_nkmvfq.png",
  "Frozen Beef": "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786083589/frozenbeef-Photoroom_aw1ppa.png",
  "Frozen Chicken": "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786083588/frozen_chicken-Photoroom_ca7wxh.png",
  "Fresh Oranges": "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786083589/orange-Photoroom_wzglpw.png",
  Honey: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786082968/honey_f7vtar.jpg",
  Oats: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786082968/Oats_b9nerx.jpg",
  Corn: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786082968/corn_qvfwqg.jpg",
  Wheat: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786083590/oat-Photoroom_qyvccy.png",
  "Fresh Apples": "https://res.cloudinary.com/qz5m8bhg/image/upload/v1786082968/apple_xmkaah.jpg",
}

const products = productNames.map((name, i) => ({
  name,
  description: productDescriptions[i] || "High-quality product sourced from trusted suppliers.",
  category: sampleCategories[i % sampleCategories.length],
  image: imageOverrides[name] ?? sampleImages[i % sampleImages.length],
}))

// Products without Cloudinary link yet: Premium Basmati Rice, Antebella

export default function ProductsPage() {
  const [page, setPage] = useState(1)
  const perPage = 9
  const totalPages = Math.ceil(products.length / perPage)
  const startIndex = (page - 1) * perPage
  const visibleProducts = products.slice(startIndex, startIndex + perPage)

  const handlePageChange = (newPage: number) => {
    const clamped = Math.max(1, Math.min(totalPages, newPage))
    if (clamped === page) return
    setPage(clamped)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const pageWindowStart = Math.max(1, Math.min(page - 1, totalPages - 2))
  const pageWindow = Array.from({ length: Math.min(3, totalPages) }, (_, i) => pageWindowStart + i)

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-50">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
                <ShoppingBag className="w-4 h-4" />
                Catalog
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900">
                Our Premium Products
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
                Explore our curated selection of high-quality food products sourced from trusted global suppliers.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <div key={product.name} className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain object-center transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-slate-500 font-semibold mb-4">
                      <span>{product.category}</span>
                      <span className="inline-flex items-center gap-1 text-cyan-700">
                        <Gem className="w-4 h-4" />
                        Premium
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h2>
                    <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
                  </div>
                </div>
                ))}
            </div>

              <div className="mt-12 flex flex-col items-end gap-3">
                <nav className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-200/50" aria-label="Pagination">
                  <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    aria-label="Previous page"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-slate-600 transition hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {pageWindow.map((p) => (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      aria-current={page === p ? "page" : undefined}
                      className={`h-9 w-9 rounded-full text-sm font-bold transition ${
                        page === p
                          ? "bg-cyan-700 text-white shadow-md shadow-cyan-700/30"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    aria-label="Next page"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-slate-600 transition hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </nav>
                <p className="text-sm text-slate-500">
                  Or email us directly at{" "}
                  <a
                    href="mailto:info@sultanaagro.co.id"
                    className="font-medium text-cyan-700 transition hover:underline"
                  >
                    info@sultanaagro.co.id
                  </a>
                </p>
              </div>

          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
