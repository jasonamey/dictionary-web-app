import { render, screen, within } from '@testing-library/react'
import Home from '@/pages/index'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import data from './testData.json'

const handlers = [
  rest.get(
    'https://api.dictionaryapi.dev/api/v2/entries/en/cat',
    (req, res, ctx) => {
      return res(ctx.json(data))
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
    //There are 10 definitions for the noun form of cats
    expect(nounDefinitions).toHaveLength(10)
    const verbDefinitions = within(list[1]).queryAllByRole('listitem')
    //There are 5 definitions for the verb form of cats
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
  // it('changes color when dark mode toggle is switched', async () => {
  //   render(<Home />)
  //   const checkbox = await screen.findByRole('checkbox')
  //   await user.click(checkbox)
  //   expect(await screen.findByTestId('page')).toHaveStyle(`background-color: ""`)
  //   console.log(screen.getByTestId('page'))

  //   console.log(style)
  //   expect(screen.getByTestId('page')).toHaveStyle(`flex-direction: row`)

  // })
})
