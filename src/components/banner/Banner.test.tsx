import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Banner />)
    const logo = screen.getByAltText(/a book, the dictionary web app logo/i)
    expect(logo).toBeInTheDocument()
  })
})
