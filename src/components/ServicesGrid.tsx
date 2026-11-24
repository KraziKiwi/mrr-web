'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity/client'
import { ArrowRight } from 'lucide-react'
import EditBadge from './EditBadge'

export default function ServicesGrid({ services = [], settings, isPreview }: { services?: any[], settings?: any, isPreview?: boolean }) {
  const defaultServices = [
    { title: 'RENOVATIONS', description: 'Whole-home renovations, open-plan conversions and heritage restorations that make the house you already love work better.' },
    { title: 'ADDITIONS', description: 'More room without moving. Ground-floor additions, second storeys and alfresco areas that look like they were always there.' },
    { title: 'NEW BUILDS', description: 'Custom homes and knockdown rebuilds, built to be cheaper to run for decades to come. Need plans? We\'ll put you in touch with the right designer.' }
  ]

  const displayData = services?.length > 0 ? services : defaultServices
  const servicesHeading = settings?.servicesHeading || "What We Do"

  return (
    <section id="services" className="py-20 md:py-32 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-widest">
            {servicesHeading}
          </h2>
          <div className="w-20 h-1 bg-[#f39200] mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayData.map((service: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-zinc-900/50 border border-white/10 group relative flex flex-col hover:border-[#f39200]/50 transition-colors duration-300"
            >
              <EditBadge id={service._id} type="service" isPreview={isPreview} />
              <div className="h-64 w-full bg-gradient-to-br from-zinc-800 to-zinc-950 relative overflow-hidden">
                {service.image && (
                  <img
                    src={urlFor(service.image, 600, 600).url()}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}
                <div className="absolute bottom-4 left-6 text-[10px] text-gray-400 tracking-[0.2em] uppercase font-semibold">
                  PHOTO: {service.title}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading font-bold mb-4 tracking-wider uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <a href="#contact" className="text-[#f39200] text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 group-hover:translate-x-2 transition-transform w-fit">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
