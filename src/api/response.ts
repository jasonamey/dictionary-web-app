import { axios } from './axios'
import type { Response } from './response.types'

export async function getDefinition(searchTerm: string) {
  const { data } = await axios.get<Response[]>(`/${searchTerm}`)
  return data
}
