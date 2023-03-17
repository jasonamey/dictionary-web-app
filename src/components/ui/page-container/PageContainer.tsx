import React from 'react'
import styled from 'styled-components'
import { device } from '@/styles/devices'

type PageContainerProps = {
  children: React.ReactNode
}

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: var(--color-bg_1);
  color: var(--color-txt_1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and ${device.tablet} {
    padding: 1rem 0 4rem 0;
  }
`

export function PageContainer({ children }: PageContainerProps) {
  return <Container data-testid="page">{children}</Container>
}

export default PageContainer
