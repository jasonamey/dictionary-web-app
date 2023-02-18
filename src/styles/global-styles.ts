import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0; 
    margin: 0;
  }
  main {
    background-color: var(--color-bg_1);
  }

  h1, h2, h3, ul, li, p { 
    margin: 0;
    padding: 0; 
  }
  p { 
    font-size: 16px;
  }
`
