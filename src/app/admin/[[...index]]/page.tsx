'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// Force Next.js to render this page entirely on the client, avoiding server-side static generation errors with the CMS
export const dynamic = 'force-dynamic'

export default function AdminPage() {
  return <NextStudio config={config} />
}
