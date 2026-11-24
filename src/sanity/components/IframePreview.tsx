'use client'

import React from 'react'

interface Props {
  document: {
    displayed: any
  }
}

export default function IframePreview(props: Props) {
  const { displayed } = props.document
  if (!displayed) {
    return (
      <div style={{ padding: '1rem' }}>
        <p>There is no document to preview</p>
      </div>
    )
  }

  // Use the local dev URL for now, can be updated to staging later
  const url = 'http://localhost:3000'

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <iframe
        src={url}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Preview"
      />
    </div>
  )
}
