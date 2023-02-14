import { GlobalStyles } from '../styles/global-styles'
import { ThemeProvider, DefinitionProvider } from '@/context'
import type { AppProps } from 'next/app'
import { Inter, Lora, Inconsolata } from '@next/font/google'
import { useFonts } from '@/hooks'
import { FontStateType } from '@/typings'

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
})

const inconsolata = Inconsolata({
  weight: '400',
  subsets: ['latin'],
})

function fontsFactory(selectedFont: FontStateType) {
  switch (selectedFont) {
    case 'inter':
      return inter.className
    case 'lora':
      return lora.className
    case 'inconsolata':
      return inconsolata.className
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [font] = useFonts()
  return (
    <>
      <ThemeProvider>
        <DefinitionProvider>
          <GlobalStyles />
          <main className={fontsFactory(font as FontStateType)}>
            <Component {...pageProps} />
          </main>
        </DefinitionProvider>
      </ThemeProvider>
    </>
  )
}
