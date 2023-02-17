import { textSizeFactory } from '@/styles/mixins'
import React from 'react'
import styled from 'styled-components'

type SynonymProps = {
  synonymText: string
}

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`
const TitleContainer = styled.span`
  color: var(--color-txt_2);
  ${textSizeFactory('sizeOne')};
  margin-right: 1rem;
`

const TextContainer = styled.span`
  color: var(--color-accent);
  font-weight: 700;
  ${textSizeFactory('sizeTwo')};
`

export function Synonym({ synonymText }: SynonymProps) {
  return (
    <Container>
      <TitleContainer>Synonym </TitleContainer>
      <TextContainer>{synonymText}</TextContainer>
    </Container>
  )
}
