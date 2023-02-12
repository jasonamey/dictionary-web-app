import { useState } from 'react'
import { FontStateType } from '@/typings'

export function useFonts() {
  const [font, setFont] = useState<FontStateType>('inconsolata')
  return [font, setFont]
}
