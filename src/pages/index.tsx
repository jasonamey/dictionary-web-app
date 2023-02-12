import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.div``

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>hello world</Container>
      </main>
    </>
  )
}
