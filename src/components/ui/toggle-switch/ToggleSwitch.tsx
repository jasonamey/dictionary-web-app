import React from 'react'
// import styled from 'styled-components'

// const Label = styled.label`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   cursor: pointer;
// `

// const Switch = styled.div`
//   position: relative;
//   width: 2.4rem;
//   height: 1.2rem;
//   background: var(--marine-blue);
//   border-radius: 1.2rem;
//   transition: 300ms all;
//   &:before {
//     transition: 300ms all;
//     content: '';
//     position: absolute;
//     width: 0.8rem;
//     height: 0.8rem;
//     border-radius: 50%;
//     top: 50%;
//     left: 0.2rem;
//     background: var(--white);
//     transform: translate(0, -50%);
//   }
// `

// const Input = styled.input`
//   opacity: 0;
//   position: absolute;
//   &:checked + ${Switch} {
//     background: var(--marine-blue);
//     &:before {
//       transform: translate(1.2rem, -50%);
//     }
//   }
// `

// const MonthlySwitchSetting = styled.span<{ checked: boolean }>`
//  color : ${({ checked }) =>
//     checked ? 'hsl(231, 11%, 63%)' : 'hsl(213, 96%, 18%)'}};

// `
// const YearlySwitchSetting = styled.span<{ checked: boolean }>`
//   color: ${({ checked }) =>
//     checked ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)'};
// `

export function ToggleSwitch() {
  return <div>switch</div>
  // const context: FormDataContextType = useFormData()
  // const { setDuration, duration } = context

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const newDuration = e.target.checked ? 'yearly' : 'monthly'
  //   setDuration(newDuration)
  // }

  // const checked = duration === 'yearly' ? true : false
  // return (
  //   <Label>
  //     <MonthlySwitchSetting checked={checked}>Monthly</MonthlySwitchSetting>
  //     <Input checked={checked} type="checkbox" onChange={handleChange} />
  //     <Switch />
  //     <YearlySwitchSetting checked={checked}>Yearly</YearlySwitchSetting>
  //   </Label>
  // )
}
