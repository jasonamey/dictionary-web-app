import React, { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export const Toggle = () => {
  const context = useContext(ThemeContext)
  const { colorMode, setColorMode } = context

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={colorMode === 'dark'}
          onChange={(ev) => {
            setColorMode(ev.target.checked ? 'dark' : 'light')
          }}
        />
        {colorMode === 'dark' ? 'Dark' : 'Light'}
      </label>
    </>
  )
}
