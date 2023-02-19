import React from 'react'
import styled from 'styled-components'
import { device } from '@/styles/devices'

type ContentContainerProps = {
  children: React.ReactNode
}

const Container = styled.div`
  width: 95%;
  max-width: 52rem;
  background-color: var(--color-bg_1);
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and ${device.tablet} {
    width: 70%;
  }
`

export function ContentContainer({ children }: ContentContainerProps) {
  return <Container>{children}</Container>
}
