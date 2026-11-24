'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function TextReveal({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode,
  delay?: number,
  className?: string
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "120%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.33, 1, 0.68, 1] // Custom cubic-bezier for a sharp, architectural snap
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
