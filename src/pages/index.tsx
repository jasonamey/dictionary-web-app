import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Heading, Search } from '@/components'

import { useSearch } from '@/hooks'
import { DarkToggle } from '@/components/DarkToggle'
import { PageContainer } from '@/components/ui'

const Container = styled.div`
  color: var(--color-bg_1);
`

export default function Home() {
  const [searchTerm, setSearchTerm] = useState(() => 'cat')
  const { result, isLoading } = useSearch(searchTerm)
  function searchFn(term: string) {
    setSearchTerm(term)
  }
  let displayContent
  if (isLoading) {
    displayContent = <p>loading...</p>
  } else {
    if (result !== undefined) {
      const { word } = result
      displayContent = (
        <>
          <Search searchFn={searchFn} />
          <Heading>{word}</Heading>
        </>
      )
    } else {
      displayContent = <Heading>Word Not Found!</Heading>
    }
  }

  return (
    <>
      <Head>
        <title>hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <PageContainer>
          <Container>
            <DarkToggle />
            {displayContent}
          </Container>
        </PageContainer>
      </>
    </>
  )
}
