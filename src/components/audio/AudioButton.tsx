import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

type AudioButtonProps = {
  clickHandler: () => void
}

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`
export function AudioButton({ clickHandler }: AudioButtonProps) {
  return (
    <Button onClick={clickHandler}>
      <Image src={'/icon-play.svg'} width={50} height={50} alt="audio button" />
    </Button>
  )
}
