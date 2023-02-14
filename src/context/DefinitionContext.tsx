import React, { createContext, useEffect, useState } from 'react'
import { DICTIONARY_API_URL } from '@/constants'

type DefinitionProfiderProps = {
  children: React.ReactNode
}

const DefinitionContext = createContext<unknown>(null)

export function DefinitionProvider({ children }: DefinitionProfiderProps) {
  const [dictionaryResponse, setDictionaryResponse] = useState<unknown>()
  const [term, setTerm] = useState<string>('hello')
  useEffect(() => {
    ;(async function () {
      const response = await fetch(`${DICTIONARY_API_URL}${term}`)
      const data = await response.json()
      setDictionaryResponse(data)
    })()
  }, [term])
  const value = { setTerm, dictionaryResponse }
  return (
    <DefinitionContext.Provider value={value}>
      {children}
    </DefinitionContext.Provider>
  )
}
