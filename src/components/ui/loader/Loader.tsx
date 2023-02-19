import React from 'react'
import styled from 'styled-components'

const Cirlce = styled.div`
  border: 16px solid var(--color-txt_3); /* Light grey */
  border-top: 16px solid var(--color-accent); /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export function Loader() {
  return <Cirlce />
}
