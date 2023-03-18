import React from 'react'
import styled from 'styled-components'
import { Meaning } from './meaning/Meaning'
import { AppFormattedMeaningType } from '@/typings'
type MeaningsListProps = {
  meanings: AppFormattedMeaningType[]
}

const Container = styled.ul`
  margin-bottom: 4rem;
`

export function MeaningsList({ meanings }: MeaningsListProps) {
  return (
    <Container data-testid="definition">
      {meanings.map((item) => (
        <Meaning key={Math.random()} {...item} />
      ))}
    </Container>
  )
}
