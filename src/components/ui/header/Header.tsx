import React from 'react'
import styled from 'styled-components'

type HeaderProps = {
  titleText: string
  subtitleText: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  color: var(--marine-blue);
  font-size: 2rem;
  margin-bottom: 0.6rem;
`

const SubTitle = styled.h2`
  color: var(--light-gray);
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
`

export function Header({ titleText, subtitleText }: HeaderProps) {
  return (
    <Container>
      <Title>{titleText}</Title>
      <SubTitle>{subtitleText}</SubTitle>
    </Container>
  )
}
