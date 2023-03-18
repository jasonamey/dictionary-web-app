import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AudioButton } from './AudioButton'

describe('Audio Button', () => {
  it('button calls click handler when pressed', async () => {
    const mock = jest.fn()
    render(<AudioButton clickHandler={mock} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    await userEvent.click(button)
    expect(mock).toHaveBeenCalled()
  })
})
