import { GlobalStyles } from '../styles/global-styles'
import type { AppProps } from 'next/app'
// import { Inter, Lora, Inconsolata } from '@next/font/google'

// const inter = Inter({
//   weight: '400',
//   subsets: ['latin']
// })

// const lora = Lora({
//   weight: '400',
//   subsets: ['latin']
// })

// const inconsolata = Inconsolata({
//   weight: '400',
//   subsets: ['latin']
// })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
