import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { textSizeFactory } from '@/styles/mixins'

const Container = styled.div`
  ${textSizeFactory('sizeOne')}
`
const SourceTag = styled.span`
  margin-right: 1rem;
  color: var(--color-txt_2);
  border-bottom: 1px dotted var(--color-txt_2);
  font-weight: 400;
`

const SourceLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 300;
  border-bottom: 1px dotted var(--color-txt_1);
  cursor: pointer;
`

type SourceProps = {
  sourceUrl: string
}

export function Source({ sourceUrl }: SourceProps) {
  return (
    <Container>
      <SourceTag>Source</SourceTag>
      <Link href={sourceUrl} passHref legacyBehavior>
        <SourceLink>{sourceUrl}</SourceLink>
      </Link>
    </Container>
  )
}
