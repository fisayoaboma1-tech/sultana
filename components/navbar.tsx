"use client"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Updates", href: "/updates" },
]

export function Navbar({ forceGlass = false, homepage = false }: { forceGlass?: boolean; homepage?: boolean }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const navBackground = useTransform(
    scrollY,
    [0, 80],
    forceGlass
      ? ["rgba(0, 0, 0, 0.98)", "rgba(0, 0, 0, 0.98)"]
      : ["rgba(15, 23, 42, 0.0)", "rgba(15, 23, 42, 0.80)"]
  )
  
  const navBlur = useTransform(scrollY, [0, 80], forceGlass ? [18, 18] : [0, 18])
  const navBorder = useTransform(
    scrollY,
    [0, 80],
    forceGlass
      ? ["rgba(255, 255, 255, 0.16)", "rgba(255, 255, 255, 0.16)"]
      : ["rgba(148, 163, 184, 0)", "rgba(148, 163, 184, 0.18)"]
  )
  const navPadding = useTransform(scrollY, [0, 80], forceGlass ? ["0.85rem", "0.85rem"] : ["1.6rem", "0.85rem"])
  const navWidth = useTransform(scrollY, [0, 80], forceGlass ? ["96%", "96%"] : ["100%", "96%"])
  const logoHeight = useTransform(scrollY, [0, 80], forceGlass ? ["2.1rem", "2.1rem"] : ["3rem", "2.1rem"])
  const navTextColor = useTransform(
    scrollY,
    [0, 80],
    forceGlass || homepage ? ["#f8fafc", "#f8fafc"] : ["#0f172a", "#f8fafc"]
  )

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="mx-auto w-full max-w-7xl flex justify-center px-4 sm:px-6">
        <motion.nav
          ref={navRef}
          style={{
            width: navWidth,
            backgroundColor: navBackground,
            backdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
            borderColor: navBorder,
            paddingTop: navPadding,
            paddingBottom: navPadding,
          }}
          className="relative flex items-center justify-between px-5 md:px-6 border rounded-full transition-all duration-300 shadow-xl shadow-slate-950/10"
        >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <motion.img
            src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1785932694/sal-logo_jxjujr.png"
            alt="PT. Sultana Agro Lestari"
            style={{ height: logoHeight }}
            className="w-auto"
          />
          <motion.span className="font-semibold hidden sm:block text-sm tracking-wide" style={{ color: navTextColor }}>
            PT. SULTANA AGRO LESTARI
          </motion.span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-3 relative">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm hover:text-blue-400 transition-colors font-medium"
              style={{ color: navTextColor }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            > 
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-slate-100/10 rounded-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.a>
          ))}
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-400 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 hover:text-cyan-400"
          style={{ color: navTextColor }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              key="mobile-menu-panel"
              initial={{ y: -10, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 left-4 right-4 mx-auto max-w-md p-4 bg-slate-800/75 border border-slate-100/18 shadow-2xl shadow-slate-950/30 rounded-3xl backdrop-blur-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-3 text-sm text-slate-100 hover:text-cyan-400 hover:bg-slate-800/70 rounded-lg transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/contact"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 py-3 text-sm font-semibold text-white hover:bg-cyan-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.header>
  )
}