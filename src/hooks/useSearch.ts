import { useState, useEffect } from 'react'
import { DICTIONARY_API_URL } from '@/constants'

export function useSearch(term: string) {
  const [dictionaryResponse, setDictionaryResponse] = useState<unknown>()
  useEffect(() => {
    ;(async function () {
      const response = await fetch(`${DICTIONARY_API_URL}${term}`)
      const data = await response.json()
      setDictionaryResponse(data)
    })()
  }, [term])
  return { dictionaryResponse }
}
