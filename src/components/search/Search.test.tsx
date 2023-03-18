import { Search } from './Search'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Search', () => {
  it('search input handles text input', async () => {
    const mock = jest.fn()
    render(<Search searchFn={mock} />)
    const textbox = screen.getByRole('textbox')
    await userEvent.type(textbox, 'search for word')
    expect(textbox).toHaveValue('search for word')
  }),
    it('search input calls searchFn when {enter} is pressed', async () => {
      const mock = jest.fn()
      render(<Search searchFn={mock} />)
      const textbox = screen.getByRole('textbox')
      await userEvent.type(textbox, 'search for word')
      await userEvent.keyboard('{enter}')
      expect(mock).toHaveBeenCalled()
    })
})
