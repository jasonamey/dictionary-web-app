export type FontStateType = 'inter' | 'lora' | 'inconsolata'

export type AppDefinitionType = {
  definition: string
  example?: string
}

export type AppFormattedMeaningType = {
  partOfSpeech: string
  synonyms: string[] | undefined
  definitions: AppDefinitionType[]
}

export type AppDictionaryDefinitionType = {
  word: string
  audio: string
  text: string
  meanings: AppFormattedMeaningType[]
  sourceUrl: string
}
