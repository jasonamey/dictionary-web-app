import { ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType: 'back' | 'forward' | 'confirm'
  children: string
}

const Container = styled.button<ButtonProps>`
  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  color: var(--white);
  cursor: pointer;
  ${({ buttonType }) => {
    switch (buttonType) {
      case 'forward':
        return css`
          background-color: var(--marine-blue);
          &:hover {
            opacity: 0.9;
          }
        `
      case 'confirm':
        return css`
          color: var(--white);
          background-color: var(--purplish-blue);
          &:hover {
            opacity: 0.7;
          }
        `
      case 'back':
        return css`
          color: var(--marine-blue);
          background-color: var(--white);
          &:hover {
            color: var(--cool-gray);
          }
        `
    }
  }}

  font-size: 1rem;
  padding: 0.9em 1.9em;
  border-radius: 0.4em;
`

export function Button(props: ButtonProps) {
  const { buttonType, children } = props
  return (
    <Container {...props} buttonType={buttonType}>
      {children}
    </Container>
  )
}
