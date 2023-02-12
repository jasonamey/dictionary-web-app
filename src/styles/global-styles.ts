import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {   
    --black-one: #0505050;
    --black-two: #1F1F1F;
    --black-three: #F8F9FF;
    --black-four: #3A3A3A;
    --strawberry-red: #2D2D2D;
    --gray-one: #838383;
    --gray-two: #3A3A3A;
    --gray-three: #050505;
    --white: #FFFFFF;
    --purple: #2D2D2D;
    --red: #838383;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0; 
    margin: 0;
  }
  h1, h2, h3, ul, li, p { 
    margin: 0;
    padding: 0; 
  }
  p { 
    font-size: 16px;
  }
`
