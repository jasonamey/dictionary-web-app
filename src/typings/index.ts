export type FontStateType = 'inter' | 'lora' | 'inconsolata'

export type DefinitionType = {
  definition: string
  example?: string
}

export type FormattedMeaningType = {
  partOfSpeech: string
  synonyms: string[] | undefined
  definitions: DefinitionType[]
}

export type DictionaryDefinitionType = {
  word: string
  audio: string
  text: string
  meanings: FormattedMeaningType[]
  sourceUrl: string
}
