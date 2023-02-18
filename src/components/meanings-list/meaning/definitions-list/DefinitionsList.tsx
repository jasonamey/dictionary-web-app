import React from 'react'
import styled from 'styled-components'
import { DefinitionType } from '@/typings'
import { device } from '@/styles/devices'

type DefinitionsListProps = {
  definitions: DefinitionType[]
}

const Container = styled.ul`
  margin: 0;
  padding: 0;
`
const ItemContainer = styled.div`
  margin-bottom: 1rem;
  @media screen and ${device.tablet} {
    font-size: inherit;
  }
`

const Definition = styled.li`
  margin-bottom: 0.3rem;
  list-style: none;
  position: relative;
  line-heigh: 1rem;
  //custom list bullet style :
  &:before {
    content: '';
    display: inline-block;
    height: 6px;
    width: 6px;
    background-image: url('./purple-list-dot.svg');
    background-repeat: no-repeat;
    position: absolute;
    top: 0.5rem;
    left: -1rem;
  }
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
