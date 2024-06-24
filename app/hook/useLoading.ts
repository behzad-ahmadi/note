import { useState } from 'react'

export default function useLoading(state?: boolean) {
  const [loading, setLoading] = useState(state)

  return { loading, setLoading }
}
