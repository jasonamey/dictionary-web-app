import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import {
  Heading,
  Search,
  AudioButton,
  Phonetic,
  Banner,
  Source,
  MeaningsList,
} from '@/components'
import { PageContainer, ContentContainer } from '@/components/ui'
import { useSearch } from '@/hooks'

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
  const { result, isLoading, isError, setIsError } = useSearch(
    searchTerm as string
  )

  if (isError) {
    setTimeout(() => {
      setIsError(false)
      setSearchTerm('goof')
    }, 1000)
  }

  function searchFn(term: string) {
    setSearchTerm(term)
  }
  let bottomContent
  if (isLoading) {
    bottomContent = <p></p>
  } else {
    if (result !== undefined) {
      const { word, text, audio, sourceUrl, meanings } = result
      const audioClip = new Audio(audio)
      bottomContent = (
        <>
          <HeadingContainer>
            <HeadingTextContainer>
              <Heading>{word}</Heading>
              <Phonetic>{text}</Phonetic>
            </HeadingTextContainer>
            {audio !== undefined && (
              <AudioButton clickHandler={() => audioClip.play()} />
            )}
          </HeadingContainer>
          <MeaningsList meanings={meanings} />
          <Source sourceUrl={sourceUrl} />
        </>
      )
    }
  }
  if (isError) {
    bottomContent = <Heading>Word Not Found!</Heading>
  }

  return (
    <>
      <Head>
        <title>Dictionary Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <PageContainer>
          <ContentContainer>
            <Top>
              <Banner />
              <Search searchFn={searchFn} />
            </Top>
            <Bottom>{bottomContent}</Bottom>
          </ContentContainer>
        </PageContainer>
      </>
    </>
  )
}
