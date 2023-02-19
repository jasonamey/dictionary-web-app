import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { textSizeFactory } from '@/styles/mixins'
import { device } from '@/styles/devices'

const Container = styled.div`
  ${textSizeFactory('sizeOne')}
`
const SourceTag = styled.span`
  margin-right: 1rem;
  color: var(--color-txt_2);
  font-weight: 400;
  display: block;
  border: none;
  @media screen and ${device.tablet} {
    display: inline;
    border-bottom: 1px dotted var(--color-txt_2);
  }
`

const SourceLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 300;
  font-size: 0.8rem;
  border-bottom: 1px dotted var(--color-txt_1);
  cursor: pointer;
  @media screen and ${device.tablet} {
    font-size: inherit;
  }
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
