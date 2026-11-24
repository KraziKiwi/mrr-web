'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'
import { urlFor } from '../sanity/client'
import EditBadge from './EditBadge'

interface BeforeAfterSliderProps {
  settings?: any
  isPreview?: boolean
}

export default function BeforeAfterSlider({ settings, isPreview }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const subheading = settings?.beforeAfterSubheading || "Before / After"
  const heading = settings?.beforeAfterHeading || "See The Difference"
  const description = settings?.beforeAfterDescription || "Drag across the image to see the real transformation."
  const [isDragging, setIsDragging] = useState(false)

  // Use the new dedicated gallery array from settings.
  // We pad it to ensure there are always exactly 12 slots for the UI.
  const gallery = settings?.beforeAfterGallery || [];
  const displayTiles = [...gallery];
  while (displayTiles.length < 12) {
    displayTiles.push({ isPlaceholder: true });
  }

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = (x / rect.width) * 100
    setSliderPosition(percent)
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('touchmove', onTouchMove)
      window.addEventListener('mouseup', () => setIsDragging(false))
      window.addEventListener('touchend', () => setIsDragging(false))
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [isDragging])

  // Remove the old validProjects check, we always render the layout now

  const currentPair = displayTiles[activeIndex];
  const beforeImage = currentPair?.beforeImage;
  const afterImage = currentPair?.afterImage;
  const isPlaceholder = currentPair?.isPlaceholder || (!beforeImage && !afterImage);

  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative z-10 border-t border-white/5 mx-5 md:mx-12">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative group"
        >
          {settings?._id && <EditBadge id={settings._id} type="settings" path="beforeAfterHeading" isPreview={isPreview} />}
          <div className="text-[#f39200] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">{subheading}</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-widest">
            {heading}
          </h2>
          <div className="w-20 h-1 bg-[#f39200] mt-6"></div>
          <p className="text-gray-400 font-light mt-6 max-w-xl">
            {description}
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative w-full aspect-[4/3] md:aspect-video max-h-[75vh] bg-zinc-900 border border-white/10 overflow-hidden select-none"
          ref={containerRef}
          onMouseDown={(e) => {
            if (isPlaceholder) return;
            setIsDragging(true)
            handleMove(e.clientX)
          }}
          onTouchStart={(e) => {
            if (isPlaceholder) return;
            setIsDragging(true)
            handleMove(e.touches[0].clientX)
          }}
        >
          {settings?._id && <EditBadge id={settings._id} type="settings" path="beforeAfterGallery" isPreview={isPreview} />}

          {isPlaceholder ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-white/10 bg-zinc-900/50">
               <p className="font-logo tracking-widest text-sm uppercase text-gray-500 mb-2">Empty Gallery Slot</p>
               <p className="text-xs text-gray-600">Click the Edit button to add a before & after photo pair in Brand Settings.</p>
            </div>
          ) : (
            <>
              {/* After Image (Background) */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-amber-950/20">
                 <img
                   src={urlFor(afterImage, 1920, 1080).url()}
                   alt="After Renovation"
                   className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                   draggable="false"
                 />
                 <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 text-[10px] tracking-[0.2em] font-bold shadow-2xl">AFTER</div>
              </div>

              {/* Before Image (Foreground, clipped) */}
              <div
                className="absolute inset-0 bg-zinc-900 border-r-2 border-[#f39200]"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                 <img
                   src={urlFor(beforeImage, 1920, 1080).url()}
                   alt="Before Renovation"
                   className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                   draggable="false"
                 />
                 <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 text-[10px] tracking-[0.2em] font-bold shadow-2xl">BEFORE</div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#f39200] w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(243,146,0,0.6)] z-10 hover:scale-110 transition-transform cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <MoveHorizontal size={18} className="text-black" />
              </div>
            </>
          )}
        </motion.div>

        {/* Thumbnail Selector */}
        <div className="mt-8 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 md:gap-3">
          {displayTiles.map((tile: any, idx: number) => {
             const hasImage = tile.afterImage || tile.beforeImage;
             return (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx)
                  setSliderPosition(50)
                }}
                className={`relative aspect-[4/3] w-full rounded overflow-hidden transition-all duration-300 border border-white/10 ${
                  activeIndex === idx ? 'ring-2 ring-[#f39200] ring-offset-2 ring-offset-[#0a0a0a] scale-105' : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
                }`}
              >
                {hasImage ? (
                  <img
                    src={urlFor(tile.afterImage || tile.beforeImage, 200, 150).url()}
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
