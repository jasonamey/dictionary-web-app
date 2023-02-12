import { useState } from 'react'

type FontStateType = 'inter' | 'lora' | 'inconsolata'

export function useFonts() {
  const [font, setFont] = useState<FontStateType>('inter')
  return [font, setFont]
}
