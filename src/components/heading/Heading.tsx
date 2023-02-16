import React from 'react'
import styled from 'styled-components'

type HeadingProps = {
  children: string
}

const Header = styled.h1``

export function Heading({ children }: HeadingProps) {
  return <Header>{children}</Header>
}
