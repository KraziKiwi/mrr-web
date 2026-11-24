import { createQueryStore } from '@sanity/react-loader'

export const { loadQuery, useQuery, setServerClient } = createQueryStore({
  ssr: true,
})
