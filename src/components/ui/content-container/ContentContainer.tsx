import React from 'react'
import styled from 'styled-components'
import { device } from '@/styles/devices'

type ContentContainerProps = {
  children: React.ReactNode
}

const Container = styled.div`
  width: 95%;
  max-width: 52rem;
  background-color: var(--white);
  border-radius: 0.8rem;
  padding: 1em;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  @media screen and ${device.tablet} {
    width: 90%;
    height: 28rem;
    flex-direction: row;
  }
`

export function ContentContainer({ children }: ContentContainerProps) {
  return <Container>{children}</Container>
}
