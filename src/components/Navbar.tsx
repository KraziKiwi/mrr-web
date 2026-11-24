'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { urlFor } from '../sanity/client'
import { Menu, X } from 'lucide-react'

export default function Navbar({ settings, logoUrl }: { settings: any, logoUrl: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#portfolio' },
    { name: 'ABOUT', href: '#team' },
    { name: 'CONTACT', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-black/50 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logoUrl}
            alt="Logo"
            className="h-12 md:h-14 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform"
          />
          <div className="hidden md:flex flex-col font-logo">
            <span className="text-white font-bold tracking-[0.2em] text-sm md:text-base leading-none">MARLBOROUGH</span>
            <span className="text-gray-400 font-light tracking-[0.4em] text-[10px] leading-none mt-1">RECOVERY</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-[11px] font-heading font-semibold tracking-widest text-gray-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gray-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6 border-l border-white/10 pl-6">
            <a href={`tel:${settings?.phone?.replace(/\s+/g, '')}`} className="text-mrr-white font-semibold text-sm tracking-widest hover:text-gray-300 transition-colors">
              {settings?.phone || "0499 100 711"}
            </a>
            <a href="#contact" className="bg-mrr-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-sm font-bold text-[11px] tracking-[0.2em] transition-colors">
              GET A QUOTE
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-mrr-white font-heading tracking-widest text-sm"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full h-px bg-white/10 my-4" />
              <a href={`tel:${settings?.phone?.replace(/\s+/g, '')}`} className="text-mrr-white font-semibold tracking-widest">
                {settings?.phone || "0499 100 711"}
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-mrr-white text-black px-6 py-3 rounded-sm font-bold tracking-widest mx-auto mt-2">
                GET A QUOTE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
