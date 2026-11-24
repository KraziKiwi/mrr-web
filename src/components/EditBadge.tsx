'use client'

import React from 'react'
import { Pencil } from 'lucide-react'

interface EditBadgeProps {
  id: string
  type: string
  path?: string
  isPreview?: boolean
}

export default function EditBadge({ id, type, path, isPreview }: EditBadgeProps) {
  // Only render the edit badge if we are explicitly in preview mode AND running inside the Sanity iframe
  const isInsideSanityIframe = typeof window !== 'undefined' && window.self !== window.top;

  if (!isPreview || !id || !isInsideSanityIframe) return null;

  // We use Sanity's encoded data-sanity attribute format.
  // The VisualEditing component installed in layout.tsx will intercept clicks on elements with this attribute
  // and navigate the right-hand studio pane without reloading the left-hand iframe!
  const sanityDataStr = `id=${id};type=${type}${path ? `;path=${path}` : ''};base=%2Fadmin`;

  return (
    <button
      data-sanity={sanityDataStr}
      className="absolute top-4 right-4 bg-mrr-white text-black px-3 py-1.5 rounded shadow-lg flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase z-50 hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100"
      title="Edit this item"
      onClick={(e) => e.stopPropagation()}
    >
      <Pencil size={12} /> Edit
    </button>
  )
}
