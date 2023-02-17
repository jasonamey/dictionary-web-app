import { css } from 'styled-components'

//font sizes and factory :

type textSizeType =
  | 'sizeOne'
  | 'sizeTwo'
  | 'sizeThree'
  | 'sizeFour'
  | 'sizeFive'

const sizeOneText = css`
  font-size: 1rem;
`
const sizeTwoText = css`
  font-size: 1.4rem;
`
const sizeThreeText = css`
  font-size: 2rem;
`
const sizeFourText = css`
  font-size: 2.4rem;
`
const sizeFiveText = css`
  font-size: 4rem;
`
export function textSizeFactory(textSize: textSizeType) {
  switch (textSize) {
    case 'sizeOne':
      return sizeOneText
    case 'sizeTwo':
      return sizeTwoText
    case 'sizeThree':
      return sizeThreeText
    case 'sizeFour':
      return sizeFourText
    case 'sizeFive':
      return sizeFiveText
    default:
      return sizeOneText
  }
}

/////////
