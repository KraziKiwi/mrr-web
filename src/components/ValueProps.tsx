'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ValueProps() {
  const props = [
    { title: "24/7 AVAILABILITY", desc: "Always on call when you need us most" },
    { title: "FAST DISPATCH", desc: "Quick response times to get you safe" },
    { title: "HEAVY RECOVERY", desc: "Equipped for large vehicles & machinery" },
    { title: "LOCAL EXPERTS", desc: "Trusted Kaikoura & Marlborough service" }
  ]

  return (
    <div className="mx-5 md:mx-12 bg-zinc-950 border-t border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
          {props.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 flex flex-col space-y-2 justify-center hover:bg-white/[0.02] transition-colors"
            >
              <h3 className="text-white font-heading font-semibold tracking-widest text-sm uppercase">
                {prop.title}
              </h3>
              <p className="text-gray-400 font-light text-sm">
                {prop.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
