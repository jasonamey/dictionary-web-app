import React, { useState } from 'react'
import styled from 'styled-components'
import { textSizeFactory } from '@/styles/mixins'

type SearchProps = {
  searchFn: (item: string) => void
}

const Container = styled.form`
  width: 100%;
  margin: 1rem 0;
`

const Label = styled.label``

const Input = styled.input`
  background-image: url('./icon-search.svg');
  background-color: var(--color-bg_2);
  background-position: 98% 50%;
  background-repeat: no-repeat;
  color: var(--color-txt_1);
  border: none;
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.4rem;
  font-family: inherit;
  outline: none;
  ${textSizeFactory('sizeOne')}
  &:focus {
    outline: 1px solid var(--color-accent);
  }
`

export function Search({ searchFn }: SearchProps) {
  const [term, setTerm] = useState('')
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    searchFn(term)
    setTerm('')
  }
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value)
  }
  return (
    <Container onSubmit={submitHandler}>
      <Label htmlFor="search-box" />
      <Input
        type="text"
        value={term}
        name="search-box"
        onChange={changeHandler}
      />
    </Container>
  )
}
