import React from 'react'
import styled from 'styled-components'
import { textSizeFactory } from '@/styles/mixins'

type PhoneticProps = {
  children: string
}

const Container = styled.div`
  color: var(--color-accent);
  ${textSizeFactory('sizeTwo')}
  font-weight: 700;
`

export function Phonetic({ children }: PhoneticProps) {
  return <Container>{children}</Container>
}
