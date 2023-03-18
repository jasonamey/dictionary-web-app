import { render, screen, within } from '@testing-library/react'
import Home from '@/pages/index'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import userEvent from '@testing-library/user-event'
import testData from './testData.json'
import errorData from './errorData.json'

const handlers = [
  rest.get(
    'https://api.dictionaryapi.dev/api/v2/entries/en/cat',
    (req, res, ctx) => {
      return res(ctx.json(testData))
    }
  ),
  rest.get(
    'https://api.dictionaryapi.dev/api/v2/entries/en/abcdefg',
    (req, res, ctx) => {
      return res(ctx.json(errorData))
    }
  ),
]
const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => {
  server.close()
})

describe('Home', () => {
  it('properly renders definitions', async () => {
    render(<Home />)
    const list = within(await screen.findByTestId('definition')).queryAllByRole(
      'list'
    )
    //cat should have two parts of speech
    expect(list).toHaveLength(2)
    const nounDefinitions = within(list[0]).queryAllByRole('listitem')
    //There are 10 definitions for the noun form of cat
    expect(nounDefinitions).toHaveLength(10)
    const verbDefinitions = within(list[1]).queryAllByRole('listitem')
    //There are 5 definitions for the verb form of cat
    expect(verbDefinitions).toHaveLength(5)
  }),
    it('a synonym properly renders if it exists, otherwise no synonym displays', async () => {
      render(<Home />)
      const synonyms = await screen.findAllByText(/synonym/i)
      //There is only 1 synonym for the noun definition of 'cat', none for verb
      expect(synonyms).toHaveLength(1)
    }),
    it('renders phonetic pronunciation of the dictionary word', async () => {
      render(<Home />)
      const phonetic = await screen.findByText(/kat/i)
      expect(phonetic).toBeInTheDocument()
    })
  it('displays error message when word is not in dictionary', async () => {
    render(<Home />)
    const textbox = screen.getByRole('textbox')
    await userEvent.type(textbox, 'abcdefg')
    await userEvent.keyboard('{enter}')
    const heading = await screen.findByRole('heading')
    expect(heading).toHaveTextContent(/word not found!/i)
  })
})
