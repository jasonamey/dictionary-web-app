import Axios from 'axios'

export const axios = Axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
})
