import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')

  // In a real app, you would verify the secret here
  // For now, we just enable draft mode if requested

  draftMode().enable()
  redirect('/')
}
