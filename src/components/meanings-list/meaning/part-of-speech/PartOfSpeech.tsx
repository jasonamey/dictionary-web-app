import React from 'react'
import styled from 'styled-components'
import { textSizeFactory } from '@/styles/mixins'

type PartOfSpeechProps = {
  partOfSpeech: string
}

const Container = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 1px solid var(--color-txt_1);
  height: 2.6rem;
  margin-bottom: 1.6rem;
  z-index: 0;
`

const TextBox = styled.span`
  background-color: var(--color-bg_1);
  position: absolute;
  padding: 0.6rem 1rem 0.6rem 0;
  display: inline-flex;
  bottom: 0;
  transform: translateY(47%);
  font-weight: 700;
  font-style: italic;
  left: 0;
  z-index: 1;
  ${textSizeFactory('sizeTwo')};
`

export function PartOfSpeech({ partOfSpeech }: PartOfSpeechProps) {
  return (
    <Container>
      <TextBox>{partOfSpeech}</TextBox>
    </Container>
  )
}
