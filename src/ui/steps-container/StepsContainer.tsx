import React from 'react'
import styled from 'styled-components'
import { device } from '@/styles/devices'

type StepContainerProps = {
  children: React.ReactNode
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  @media screen and ${device.tablet} {
    margin-left: 1rem;
  }
  @media screen and ${device.laptop} {
    padding: 1rem 5rem;
    margin-left: 0;
  }
`

export function StepsContainer({ children }: StepContainerProps) {
  return <Container>{children}</Container>
}
