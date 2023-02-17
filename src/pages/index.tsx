import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import {
  Heading,
  Search,
  Toggle,
  AudioButton,
  Phonetic,
  Source,
  MeaningsList,
} from '@/components'
import { useSearch } from '@/hooks'
import { PageContainer, ContentContainer } from '@/components/ui'

const Top = styled.div`
  width: 100%;
`
const Bottom = styled.div`
  width: 100%;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const HeadingTextContainer = styled.div``

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('cat')
  const { result, isLoading } = useSearch(searchTerm as string)
  function searchFn(term: string) {
    setSearchTerm(term)
  }
  let bottomContent
  if (isLoading) {
    bottomContent = <p>loading...</p>
  } else {
    if (result !== undefined) {
      const { word, text, audio, sourceUrl, meanings } = result
      bottomContent = (
        <>
          <HeadingContainer>
            <HeadingTextContainer>
              <Heading>{word}</Heading>
              <Phonetic>{text}</Phonetic>
            </HeadingTextContainer>
            {audio !== undefined && <AudioButton audioClip={audio} />}
          </HeadingContainer>
          <MeaningsList meanings={meanings} />
          <Source sourceUrl={sourceUrl} />
        </>
      )
    } else {
      bottomContent = <p>Word Not Found!</p>
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
          <ContentContainer>
            <Top>
              <Toggle />
              <Search searchFn={searchFn} />
            </Top>
            <Bottom>{bottomContent}</Bottom>
          </ContentContainer>
        </PageContainer>
      </>
    </>
  )
}
