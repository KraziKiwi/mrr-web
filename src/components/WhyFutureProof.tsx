'use client'

import React from 'react'
import { motion } from 'framer-motion'
import EditBadge from './EditBadge'
import { urlFor } from '../sanity/client'

export default function WhyFutureProof({ missionData, isPreview }: { missionData?: any, isPreview?: boolean }) {
  const heading = missionData?.heading || "Why Future Proof"
  const highlightText = missionData?.highlightText || "Built For The Next Stage Of Life"
  const detailedDescription = missionData?.detailedDescription || "The name is a promise. We modify, extend and build for people who want their home to keep working for them as life changes, whether that's a growing family, working from home or getting older in the place you love."

  const defaultPoints = [
    { title: "Transparent", description: "A clear build process. You always know where your job is at." },
    { title: "Hands-On", description: "Our directors are involved in every job, with our own in-house bricklayers and carpenters on the tools." },
    { title: "Local", description: "Long-term relationships with local suppliers, trades and partners across Perth and the South West." }
  ]
  const points = missionData?.points?.length > 0 ? missionData.points : defaultPoints;

  const testimonialText = missionData?.testimonialText || `"Darryl was on site every day and told us the real cost up front. The extension feels like it was always part of the house."`
  const testimonialAuthor = missionData?.testimonialAuthor || "[CLIENT NAME], [SUBURB]"

  const missionId = missionData?._id

  return (
    <section className="py-24 text-white relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-950 relative border border-white/10 overflow-hidden group"
          >
             {missionData?.image ? (
               <img
                 src={urlFor(missionData.image, 800, 800).url()}
                 alt="Future Proof Team"
                 className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
               />
             ) : (
               <div className="absolute bottom-6 left-6 text-[10px] text-gray-400 tracking-[0.2em] uppercase font-semibold">
                  PHOTO: DARRYL ON SITE
               </div>
             )}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col relative group"
          >
            <EditBadge id={missionId} type="mission" isPreview={isPreview} />
            <div className="text-[#f39200] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">{heading}</div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-widest leading-tight">
              {highlightText}
            </h2>
            <div className="w-20 h-1 bg-[#f39200] mt-6 mb-8"></div>

            <p className="text-gray-300 font-light leading-relaxed mb-12">
              {detailedDescription}
            </p>

            <div className="space-y-6">
              {points.map((point: any, idx: number) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-8 border-b border-white/10 pb-6">
                  <div className="text-[#f39200] text-[11px] font-bold tracking-[0.2em] uppercase w-40 flex-shrink-0 pt-1">{point.title}</div>
                  <div className="text-gray-400 font-light text-sm">{point.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 border border-white/10 p-12 md:p-20 text-center"
        >
          <p className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8 max-w-4xl mx-auto">
            {testimonialText}
          </p>
          <div className="flex items-center justify-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
            <span className="bg-[#f39200] text-black px-3 py-1">REVIEW</span>
            <span className="text-gray-400">{testimonialAuthor}</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
