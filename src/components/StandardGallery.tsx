'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity/client'
import EditBadge from './EditBadge'

interface StandardGalleryProps {
  settings?: any
  isPreview?: boolean
}

export default function StandardGallery({ settings, isPreview }: StandardGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const subheading = settings?.gallerySubheading || "Our Fleet & Jobs"
  const heading = settings?.galleryHeading || "Recent Recoveries"
  const description = settings?.galleryDescription || "A look at some of our recent work across the Top of the South."

  const defaultFallbackImages = [
    '/gallery/1.jfif',
    '/gallery/2.png',
    '/gallery/3.jfif',
    '/gallery/4.jfif',
    '/gallery/5.jfif',
    '/gallery/6.jfif',
  ];

  const gallery = settings?.gallery || [];
  const displayTiles = [...gallery];

  // Fill in fallbacks for the first 6 if empty
  for (let i = 0; i < 6; i++) {
    if (!displayTiles[i]) {
      displayTiles[i] = { isFallback: true, fallbackUrl: defaultFallbackImages[i], title: 'Recovery' };
    }
  }

  // Pad the rest to 12 slots for the UI grid
  while (displayTiles.length < 12) {
    displayTiles.push({ isPlaceholder: true });
  }

  const currentItem = displayTiles[activeIndex];
  const mainImage = currentItem?.image;
  const isFallback = currentItem?.isFallback;
  const isPlaceholder = currentItem?.isPlaceholder || (!mainImage && !isFallback);

  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative z-10 border-t border-white/5 mx-5 md:mx-12">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative group"
        >
          {settings?._id && <EditBadge id={settings._id} type="settings" path="galleryHeading" isPreview={isPreview} />}
          <div className="text-mrr-white text-[10px] tracking-[0.3em] font-bold uppercase mb-4">{subheading}</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-widest">
            {heading}
          </h2>
          <div className="w-20 h-1 bg-mrr-white mt-6"></div>
          <p className="text-gray-400 font-light mt-6 max-w-xl">
            {description}
          </p>
        </motion.div>

        {/* Main Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative w-full aspect-[4/3] md:aspect-video max-h-[75vh] bg-zinc-900 border border-white/10 overflow-hidden"
        >
          {settings?._id && <EditBadge id={settings._id} type="settings" path="gallery" isPreview={isPreview} />}

          {isPlaceholder ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-white/10 bg-zinc-900/50">
               <p className="font-logo tracking-widest text-sm uppercase text-gray-500 mb-2">Empty Gallery Slot</p>
               <p className="text-xs text-gray-600">Click the Edit button to add an image in Brand Settings.</p>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-amber-950/20">
               {isFallback ? (
                 <img
                   src={currentItem.fallbackUrl}
                   alt={currentItem.title || "Gallery Image"}
                   className="absolute inset-0 w-full h-full object-cover"
                   draggable="false"
                 />
               ) : (
                 <img
                   src={urlFor(mainImage, 1920, 1080).url()}
                   alt={currentItem.title || "Gallery Image"}
                   className="absolute inset-0 w-full h-full object-cover"
                   draggable="false"
                 />
               )}
               {currentItem.title && (
                 <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 text-[10px] tracking-[0.2em] font-bold shadow-2xl">
                    {currentItem.title.toUpperCase()}
                 </div>
               )}
            </div>
          )}
        </motion.div>

        {/* Thumbnail Selector */}
        <div className="mt-8 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 md:gap-3">
          {displayTiles.map((tile: any, idx: number) => {
             const hasImage = !!tile.image;
             const hasFallback = !!tile.fallbackUrl;
             return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative aspect-[4/3] w-full rounded overflow-hidden transition-all duration-300 border border-white/10 ${
                  activeIndex === idx ? 'ring-2 ring-mrr-white ring-offset-2 ring-offset-[#0a0a0a] scale-105' : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
                }`}
              >
                {hasFallback ? (
                  <img
                    src={tile.fallbackUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                ) : hasImage ? (
                  <img
                    src={urlFor(tile.image, 200, 150).url()}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-[10px] text-gray-700 font-bold">
                    {idx + 1}
                  </div>
                )}
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
