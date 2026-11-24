'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../sanity.config' // This will be adjusted when moved

export default function AdminPage() {
  return <NextStudio config={config} />
}
