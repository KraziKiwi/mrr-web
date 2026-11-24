'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { urlFor } from '../sanity/client'
import BeforeAfterSlider from './BeforeAfterSlider'
import EditBadge from './EditBadge'

export default function PortfolioSection({ projects = [], settings, isPreview }: { projects?: any[], settings?: any, isPreview?: boolean }) {
  const [filter, setFilter] = useState('ALL')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const defaultProjects = [
    { title: 'REAR ADDITION', subtitle: '[SUBURB]', category: 'ADDITION', image: null, isExample: true },
    { title: 'COASTAL HOME', subtitle: '[DUNSBOROUGH]', category: 'NEW BUILD', image: null, isExample: true },
    { title: 'FULL HOME RENOVATION', subtitle: '[SUBURB]', category: 'RENOVATION', image: null, isExample: true }
  ]

  const displayData = projects?.length > 0 ? projects : defaultProjects
  const portfolioSubheading = settings?.portfolioSubheading || "Selected Works"
  const portfolioHeading = settings?.portfolioHeading || "Our Portfolio"

  const filters = ['ALL', 'RENOVATIONS', 'ADDITIONS', 'NEW BUILDS']

  const filteredProjects = displayData.filter((project: any) => {
    if (filter === 'ALL') return true
    if (filter === 'RENOVATIONS' && project.category === 'RENOVATION') return true
    if (filter === 'ADDITIONS' && project.category === 'ADDITION') return true
    if (filter === 'NEW BUILDS' && project.category === 'NEW BUILD') return true
    return false
  })

  return (
    <>
    <section id="portfolio" className="py-24 bg-[#0a0a0a] text-white relative z-10 border-t border-b border-white/5 mx-5 md:mx-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[#f39200] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">{portfolioSubheading}</div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-widest">
              {portfolioHeading}
            </h2>
            <div className="w-20 h-1 bg-[#f39200] mt-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all border ${
                  filter === f
                    ? 'border-[#f39200] text-[#f39200] bg-[#f39200]/5'
                    : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredProjects.map((project: any, idx: number) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={idx}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <EditBadge id={project._id} type="project" isPreview={isPreview} />
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-zinc-800 to-zinc-950 relative overflow-hidden border border-white/5 group-hover:border-[#f39200]/30 transition-colors">
                  {project.mainImage ? (
                    <img
                      src={urlFor(project.mainImage, 800, 1000).url()}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  )}

                  <div className="absolute bottom-6 left-6 text-[10px] text-gray-400 tracking-[0.2em] uppercase font-semibold">
                    PROJECT PHOTO
                  </div>
                </div>

                <div className="mt-6 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">{project.category || 'PROJECT'}</span>
                    {project.isExample && <span className="bg-[#f39200] text-black px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase">EXAMPLE</span>}
                  </div>
                  <h3 className="text-xl font-heading font-light uppercase tracking-widest text-white">
                    {project.title}, <span className="text-[#f39200]">{project.subtitle}</span>
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-start">
           <button className="border border-white/10 px-8 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-white/5 transition-colors">
             View All Projects
           </button>
        </div>

      </div>
    </section>

    {/* Find the first project to use for the slider edit link, since clicking the placeholder needs to open *some* project */ }
    <BeforeAfterSlider
      projects={displayData}
      settings={settings}
      isPreview={isPreview}
    />
    </>
  )
}
