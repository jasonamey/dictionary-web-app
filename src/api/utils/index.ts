import { Response, Phonetic, ResponseMeaning } from '../response.types'
import {
  AppFormattedMeaningType,
  AppDefinitionType,
  AppDictionaryDefinitionType,
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

function cleanDefinition(definition: string) {
  if (definition.slice(definition.length - 1) === ':') {
    return `${definition.slice(0, definition.length - 1)}.`
  } else {
    return definition
  }
}

function getMeanings(meanings: ResponseMeaning[]) {
  let formattedMeanings: AppFormattedMeaningType[] = []
  meanings.forEach((meaningItem) => {
    const meaningToAdd = {} as AppFormattedMeaningType
    meaningToAdd[PART_OF_SPEECH] = meaningItem[PART_OF_SPEECH]
    meaningToAdd[SYNONYMS] =
      meaningItem[SYNONYMS] === undefined ? [] : meaningItem[SYNONYMS]
    const definitions: AppDefinitionType[] = []
    meaningItem[DEFINITIONS].forEach((definitionItem) => {
      const newDefinitionItem = {
        definition: cleanDefinition(definitionItem[DEFINITION]),
      }
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
  const wordContext: AppDictionaryDefinitionType =
    {} as AppDictionaryDefinitionType
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
