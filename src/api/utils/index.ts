import { Response, Phonetic, Meaning } from '../response.types'
import {
  FormattedMeaningType,
  DefinitionType,
  DictionaryDefinitionType,
} from '@/typings'
import {
  WORD,
  TEXT,
  AUDIO,
  MEANINGS,
  PART_OF_SPEECH,
  SYNONYMS,
  DEFINITION,
  DEFINITIONS,
  SOURCE_URL,
  EXAMPLE,
} from '@/constants'

function getPhonetics(phonetics: Phonetic[]) {
  for (const item of phonetics) {
    if (
      item.text?.length > 0 &&
      item.audio !== undefined &&
      item.audio.length > 0
    ) {
      return item
    }
  }
}

function getMeanings(meanings: Meaning[]) {
  let formattedMeanings: FormattedMeaningType[] = []
  meanings.forEach((meaningItem) => {
    const meaningToAdd = {} as FormattedMeaningType
    meaningToAdd[PART_OF_SPEECH] = meaningItem[PART_OF_SPEECH]
    meaningToAdd[SYNONYMS] =
      meaningItem[SYNONYMS] === undefined ? [] : meaningItem[SYNONYMS]
    const definitions: DefinitionType[] = []
    meaningItem[DEFINITIONS].forEach((definitionItem) => {
      const newDefinitionItem = { definition: definitionItem[DEFINITION] }
      if (Object.prototype.hasOwnProperty.call(definitionItem, EXAMPLE)) {
        newDefinitionItem[EXAMPLE] = definitionItem[EXAMPLE]
      }
      definitions.push(newDefinitionItem)
    })
    meaningToAdd[DEFINITIONS] = definitions
    formattedMeanings = [...formattedMeanings, meaningToAdd]
  })
  return formattedMeanings
}

export function shapeApiResponse(jsonResponse: Response) {
  const wordContext: DictionaryDefinitionType = {} as DictionaryDefinitionType
  const { word, phonetics, meanings, sourceUrls } = jsonResponse
  wordContext[WORD] = word
  wordContext[SOURCE_URL] = sourceUrls[0]
  const phoneticItem = getPhonetics(phonetics)
  if (phoneticItem !== undefined) {
    const { text, audio } = phoneticItem
    wordContext[TEXT] = text
    if (audio !== undefined) {
      wordContext[AUDIO] = audio
    }
  }
  wordContext[MEANINGS] = getMeanings(meanings)
  return wordContext
}
