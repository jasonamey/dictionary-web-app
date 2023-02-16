import { useState, useEffect } from 'react'
import { getDefinition } from '@/api/response'
import { shapeApiResponse } from '@/api/utils'
import { DictionaryDefinitionType } from '@/typings'

export function useSearch(term: string) {
  const [dictionaryResponse, setDictionaryDefinition] =
    useState<DictionaryDefinitionType>()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    ;(async function () {
      setIsLoading(true)
      const data = await getDefinition(term)
      const wordContext = shapeApiResponse(data[0])
      setDictionaryDefinition(wordContext)
      setIsLoading(false)
    })()
  }, [term])
  return { result: dictionaryResponse, isLoading }
}
