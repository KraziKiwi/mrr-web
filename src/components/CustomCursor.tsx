'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const pathname = usePathname()

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Adjusted spring config for a snappier, highly responsive feel (less lag)
  const springConfig = { damping: 30, stiffness: 800, mass: 0.1 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setIsMounted(true)
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  // Do not render the custom cursor if we are on a mobile device OR inside the CMS (/admin)
  if (!isMounted || typeof window === 'undefined' || window.innerWidth < 768 || pathname?.startsWith('/admin')) return null

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          * { cursor: none !important; }
        }
      `}} />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[99999] flex items-center justify-center shadow-[0_0_10px_rgba(243,146,0,0.3)]"
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(243,146,0,0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(243,146,0,0.3)' : 'rgba(243,146,0,1)'
        }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-[#f39200] rounded-full"
          animate={{
            opacity: isHovering ? 0 : 1,
            scale: isHovering ? 0 : 1
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  )
}
