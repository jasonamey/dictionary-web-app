import React from 'react'
import styled from 'styled-components'
import { Synonym } from './synonym'
import { PartOfSpeech } from './part-of-speech'
import { DefinitionsList } from './definitions-list'
import { AppDefinitionType } from '@/typings'

type MeaningProps = {
  partOfSpeech: string
  synonyms?: string[]
  definitions: AppDefinitionType[]
}

const Container = styled.div``

export function Meaning({ partOfSpeech, synonyms, definitions }: MeaningProps) {
  return (
    <Container>
      <PartOfSpeech partOfSpeech={partOfSpeech} />
      <DefinitionsList definitions={definitions} />
      {synonyms?.length !== 0 && synonyms !== undefined && (
        <Synonym synonymText={synonyms[0]} />
      )}
    </Container>
  )
}
