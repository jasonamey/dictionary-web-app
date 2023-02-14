import React from 'react'
import styled from 'styled-components'

type PageContainerProps = {
  children: React.ReactNode
}

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 5%;
  background-color: var(--light-blue);
  display: flex;
  align-items: center;
  justify-content: center;
`

export function PageContainer({ children }: PageContainerProps) {
  return <Container>{children}</Container>
}

export default PageContainer
