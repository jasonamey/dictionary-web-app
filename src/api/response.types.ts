export interface Response {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  origin: string
  meanings: ResponseMeaning[]
  sourceUrls: string[]
}

export interface ResponseMeaning {
  partOfSpeech: string
  definitions: ResponseDefinition[]
  synonyms?: string[]
}

export interface ResponseDefinition {
  definition: string
  example?: string
  synonyms: unknown[]
  antonyms: unknown[]
}

export interface Phonetic {
  text: string
  audio?: string
}
