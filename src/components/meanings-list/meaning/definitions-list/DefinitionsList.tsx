import React from 'react'
import styled from 'styled-components'
import { DefinitionType } from '@/typings'

type DefinitionsListProps = {
  definitions: DefinitionType[]
}

const Container = styled.ul`
  margin: 0;
  padding: 0;
`
const ItemContainer = styled.div`
  margin-bottom: 1rem;
`

const Definition = styled.li`
  margin-bottom: 0.3rem;
`
const Example = styled.span`
  color: var(--color-txt_2);
`
export function DefinitionsList({ definitions }: DefinitionsListProps) {
  return (
    <Container>
      {definitions.map((item) => {
        return (
          <ItemContainer key={item.definition}>
            <Definition>{item.definition}</Definition>
            {item.example && <Example>{`"${item.example}"`}</Example>}
          </ItemContainer>
        )
      })}
    </Container>
  )
}
