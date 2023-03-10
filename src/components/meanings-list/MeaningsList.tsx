import React from 'react'
import styled from 'styled-components'
import { Meaning } from './meaning/Meaning'
import { FormattedMeaningType } from '@/typings'
type MeaningsListProps = {
  meanings: FormattedMeaningType[]
}

const Container = styled.ul`
  margin-bottom: 4rem;
`

export function MeaningsList({ meanings }: MeaningsListProps) {
  return (
    <Container>
      {meanings.map((item) => (
        <Meaning key={Math.random()} {...item} />
      ))}
    </Container>
  )
}
