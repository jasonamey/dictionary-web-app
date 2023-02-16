import React, { useState } from 'react'
import styled from 'styled-components'

type SearchProps = {
  searchFn: (item: string) => void
}

const Container = styled.form``

const Label = styled.label``

const Input = styled.input``

export function Search({ searchFn }: SearchProps) {
  const [term, setTerm] = useState('')
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    searchFn(term)
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
