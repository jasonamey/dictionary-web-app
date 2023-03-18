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

/*

RESPONSE FROM DICTIONARY API : 

interface Response {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  origin: string
  meanings: ResponseMeaning[]
  sourceUrls: string[]
}

interface ResponseMeaning {
  partOfSpeech: string
  definitions: ResponseDefinition[]
  synonyms?: string[]
}

interface ResponseDefinition {
  definition: string
  example?: string
  synonyms: unknown[]
  antonyms: unknown[]
}

interface Phonetic {
  text: string
  audio?: string
}

************************

FINAL SHAPE OF DATA FOR DISPLAY IN APP: 

type AppDefinitionType = {
  definition: string
  example?: string
}

type AppFormattedMeaningType = {
  partOfSpeech: string
  synonyms: string[] | undefined
  definitions: AppDefinitionType[]
}

type AppDictionaryDefinitionType = {
  word: string
  audio: string
  text: string
  meanings: AppFormattedMeaningType[]
  sourceUrl: string
}

*/

//check if both phonetic and audio of phonetic exists
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

//function to remove ':' at end of definition
function cleanDefinition(definition: string) {
  if (definition.slice(definition.length - 1) === ':') {
    return `${definition.slice(0, definition.length - 1)}.`
  } else {
    return definition
  }
}

//reshape ResponseMeaning into AppDefinitionType[]
function getDefinitions(meaning: ResponseMeaning) {
  const definitions: AppDefinitionType[] = []
  meaning[DEFINITIONS].forEach((definitionItem) => {
    const newDefinitionItem = {
      definition: cleanDefinition(definitionItem[DEFINITION]),
    }
    if (Object.prototype.hasOwnProperty.call(definitionItem, EXAMPLE)) {
      newDefinitionItem[EXAMPLE] = definitionItem[EXAMPLE]
    }
    definitions.push(newDefinitionItem)
  })
  return definitions
}

//reshape ResponseMeaning[] into AppFormattedMeaningType[]
function getMeanings(meanings: ResponseMeaning[]) {
  let formattedMeanings: AppFormattedMeaningType[] = []
  meanings.forEach((meaningItem) => {
    const meaningToAdd = {} as AppFormattedMeaningType
    meaningToAdd[PART_OF_SPEECH] = meaningItem[PART_OF_SPEECH]
    meaningToAdd[SYNONYMS] =
      meaningItem[SYNONYMS] === undefined ? [] : meaningItem[SYNONYMS]
    meaningToAdd[DEFINITIONS] = getDefinitions(meaningItem)
    formattedMeanings = [...formattedMeanings, meaningToAdd]
  })
  return formattedMeanings
}

//takes API response and reshapes into AppDictionaryDefinitionType for final display
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
