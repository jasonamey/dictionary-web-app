import Head from 'next/head'
import styled from 'styled-components'
import { DarkToggle } from '@/components/DarkToggle'

import { PageContainer } from '@/ui'

const Container = styled.div`
  color: var(--color-bg_1);
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageContainer>
          <Container>hello world</Container>
          <DarkToggle />
        </PageContainer>
      </main>
    </>
  )
}
