'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function LocationsGrid({ locations = [], settings }: { locations?: any[], settings?: any }) {
  const defaultLocations = [
    { region: 'PERTH METRO', suburbs: ['Southern suburbs', 'Western suburbs', 'Eastern suburbs & Hills', 'Fremantle', 'Rockingham & Mandurah'] },
    { region: 'SOUTH WEST', suburbs: ['Bunbury', 'Australind & Eaton', 'Busselton', 'Dunsborough', 'Margaret River', 'Augusta', 'Capel & Harvey'] }
  ]

  const displayData = locations?.length > 0 ? locations : defaultLocations
  const locationsSubheading = settings?.locationsSubheading || "Where We Build"
  const locationsHeading = settings?.locationsHeading || "Perth & The South West"

  return (
    <section className="py-20 bg-zinc-950 text-white relative z-10 border-t border-b border-white/5 mx-5 md:mx-12">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-[#f39200] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">{locationsSubheading}</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-widest">
            {locationsHeading}
          </h2>
          <div className="w-20 h-1 bg-[#f39200] mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {displayData.map((loc: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-6 tracking-[0.2em] uppercase">
                {loc.region}
              </h3>
              <div className="flex flex-wrap gap-3">
                {loc.suburbs.map((suburb: string, sIdx: number) => (
                  <div
                    key={sIdx}
                    className="px-4 py-2 border border-white/10 text-gray-400 text-sm font-light hover:border-[#f39200]/50 hover:text-white transition-colors cursor-default"
                  >
                    {suburb}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
