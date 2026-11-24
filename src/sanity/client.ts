import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '7ykhc4pr', // Your Sanity Project ID
  dataset: 'production',
  apiVersion: '2024-03-11',
  useCdn: false, // Set to true for production
  ssr: true,
  stega: {
    enabled: false,
    studioUrl: '/admin',
  },
})

// Client for fetching drafts (requires a token)
export const getPreviewClient = (token?: string) => {
  return createClient({
    projectId: '7ykhc4pr',
    dataset: 'production',
    apiVersion: '2024-03-11',
    useCdn: false,
    token,
    perspective: 'previewDrafts',
    ssr: true,
    stega: {
      enabled: true,
      studioUrl: '/admin',
    },
  })
}

const builder = imageUrlBuilder(client)

// Optimized image builder that automatically crops, formats, and compresses images
export function urlFor(source: any, width: number = 800, height: number = 1000) {
  return builder.image(source).auto('format').fit('crop').width(width).height(height)
}

// Uncropped image builder for logos and icons that shouldn't be cropped
export function urlForUncropped(source: any) {
  return builder.image(source).auto('format')
}
