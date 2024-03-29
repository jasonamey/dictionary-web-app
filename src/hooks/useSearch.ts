import { useState, useEffect } from 'react'
import { getDefinition } from '@/api/response'
import { shapeApiResponse } from '@/api/utils'
import { AppDictionaryDefinitionType } from '@/typings'

export function useSearch(term: string) {
  const [dictionaryResponse, setDictionaryDefinition] =
    useState<AppDictionaryDefinitionType>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    ;(async function () {
      setIsLoading(true)
      try {
        const data = await getDefinition(term)
        const wordContext = shapeApiResponse(data[0])
        setDictionaryDefinition(wordContext)
        setIsLoading(false)
      } catch (e) {
        setIsError(true)
        setIsLoading(false)
      }
    })()
  }, [term])
  return { result: dictionaryResponse, isLoading, isError, setIsError }
}
