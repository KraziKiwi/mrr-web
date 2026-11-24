'use client'

import { VisualEditing as VisualEditingComponent } from 'next-sanity'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function VisualEditingInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Only render visual editing overlays if we are inside the Sanity iframe preview
  const isInsideSanityIframe = typeof window !== 'undefined' && window.self !== window.top

  if (!isInsideSanityIframe || pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <VisualEditingComponent
      zIndex={99999}
    />
  )
}

export default function VisualEditing() {
  return (
    <Suspense fallback={null}>
      <VisualEditingInner />
    </Suspense>
  )
}
