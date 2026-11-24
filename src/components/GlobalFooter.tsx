'use client'

import React from 'react'

export default function GlobalFooter({ settings, logoUrl }: { settings: any, logoUrl: string }) {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-8 border-t border-white/10 relative z-10 mx-5 md:mx-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
              <div className="flex flex-col font-logo">
                <span className="text-white font-bold tracking-[0.2em] text-sm leading-none">MRR</span>
                <span className="text-gray-400 font-light tracking-[0.4em] text-[10px] leading-none mt-1">CONTENT</span>
              </div>
            </div>
            <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs">
              Renovations, additions and new builds across Perth and the South West. Built to look forward to.
            </p>
          </div>

          {/* Pages Col */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">PAGES</h4>
            <a href="#services" className="text-sm font-light text-gray-300 hover:text-mrr-white transition-colors">Services</a>
            <a href="#portfolio" className="text-sm font-light text-gray-300 hover:text-mrr-white transition-colors">Projects</a>
            <a href="#team" className="text-sm font-light text-gray-300 hover:text-mrr-white transition-colors">About</a>
            <a href="#contact" className="text-sm font-light text-gray-300 hover:text-mrr-white transition-colors">Contact</a>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">CONTACT</h4>
            <a href={`tel:${settings?.phone?.replace(/\s+/g, '')}`} className="text-sm font-light text-gray-300 hover:text-mrr-white transition-colors">{settings?.phone || '0499 100 711'}</a>
            <a href={`mailto:${settings?.contactEmail}`} className="text-sm font-light text-gray-300 hover:text-mrr-white transition-colors">{settings?.contactEmail || 'contact@mrr.au'}</a>
            <span className="text-sm font-light text-gray-300">mrr.au</span>
          </div>

          {/* Areas Col */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">AREAS</h4>
            <span className="text-sm font-light text-gray-300">Perth metro</span>
            <span className="text-sm font-light text-gray-300">Bunbury & Australind</span>
            <span className="text-sm font-light text-gray-300">Busselton & Dunsborough</span>
            <span className="text-sm font-light text-gray-300">Margaret River & Augusta</span>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-600 font-light">
          <div>
            &copy; {new Date().getFullYear()} Marlborough Roadside Recovery · NZBN {settings?.abn || '[xx xxx xxx xxx]'} · TSL {settings?.tsl || '[#######]'}
          </div>
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy policy</a>
        </div>
      </div>
    </footer>
  )
}
