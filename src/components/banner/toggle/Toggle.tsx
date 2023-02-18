import React, { useContext } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { ThemeContext } from '@/context/ThemeContext'

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`

const Switch = styled.div`
  position: relative;
  width: 2.4rem;
  height: 1.2rem;
  background: var(--color-toggle);
  border-radius: 1.2rem;
  transition: 300ms all;
  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    top: 50%;
    left: 0.2rem;
    background: white;
    transform: translate(0, -50%);
  }
`

const Input = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${Switch} {
    background: var(--color-toggle);
    &:before {
      transform: translate(1.2rem, -50%);
    }
  }
`

export const Toggle = () => {
  const context = useContext(ThemeContext)
  const { colorMode, setColorMode } = context
  const checked = colorMode === 'dark'
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setColorMode(e.target.checked ? 'dark' : 'light')
  }
  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
      <Image
        src="./icon-moon.svg"
        height={20}
        width={20}
        alt="moon icon for dark mode"
      />
    </Label>
  )
}
