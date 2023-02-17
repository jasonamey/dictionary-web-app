import React, { createContext, useState, useEffect, useMemo } from 'react'
import { INITIAL_COLOR_MODE_CSS_PROP, COLOR_MODE_KEY } from '@/constants'
import { COLORS } from '@/styles/colors'

type ModeType = 'light' | 'dark' | null
type ThemeContextType = {
  colorMode: ModeType
  setColorMode: (newValue: ModeType) => void
}
type ModeProviderProps = { children: React.ReactNode }

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

export const ThemeProvider = ({ children }: ModeProviderProps) => {
  const [colorMode, rawSetColorMode] = useState<ModeType>('light')

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    )
    rawSetColorMode(initialColorValue as ModeType)
  }, [])

  const contextValue = useMemo(() => {
    function setColorMode(newValue: ModeType) {
      const root = window.document.documentElement
      if (typeof window !== 'undefined') {
        localStorage.setItem(COLOR_MODE_KEY, newValue as string)
      }

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`
        if (newValue !== null) {
          root.style.setProperty(cssVarName, colorByTheme[newValue])
        }
      })
      rawSetColorMode(newValue)
    }

    return {
      colorMode,
      setColorMode,
    }
  }, [colorMode, rawSetColorMode])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
