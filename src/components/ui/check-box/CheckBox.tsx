import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

type CheckBoxProps = {
  isChecked: boolean
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const Container = styled.label`
  display: inline;
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.8rem;
  margin-right: 0.6rem;
  cursor: pointer;
  font-size: 1.4rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover input ~ span {
    background-color: var(--purplish-blue);
    border: 1px solid var(--purplish-blue);
  }
`

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked ~ span {
    background-color: var(--purplish-blue);
    border: 1px solid var(--purplish-blue);
  }
  &:checked ~ span:after {
    display: block;
  }
`

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(25%, -25%);
  height: 1.6rem;
  width: 1.6rem;
  border: 1px solid var(--light-gray);
  background-color: var(--white);
  border-radius: 0.2rem;
  &:after {
    content: '';
    position: absolute;
    display: none;
  }

  &:after {
    left: 0.5rem;
    top: 0.25rem;
    width: 5px;
    height: 0.6rem;
    border: solid white;
    border-width: 0 0.2rem 0.2rem 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export const CheckBox = ({ isChecked, changeHandler }: CheckBoxProps) => {
  return (
    <Container>
      <Input type="checkbox" onChange={changeHandler} checked={isChecked} />
      <Checkmark />
    </Container>
  )
}
