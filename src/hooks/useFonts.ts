import { useState } from 'react'
import { FontStateType } from '@/typings'

export function useFonts() {
  const [font, setFont] = useState<FontStateType>('inter')
  return [font, setFont]
}
