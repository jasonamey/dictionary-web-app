import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Toggle } from './toggle'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export function Banner() {
  return (
    <Container>
      <Image
        src="./logo.svg"
        width={40}
        height={40}
        alt="a book, the dictionary web app logo"
      />
      <Toggle />
    </Container>
  )
}
