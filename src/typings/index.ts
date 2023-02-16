export type FontStateType = 'inter' | 'lora' | 'inconsolata'

export type DefinitionType = {
  definition: string
  example?: string
}

export type FormattedMeaningType = {
  partOfSpeach: string
  synonyms: string[] | undefined
  definitions: DefinitionType[]
  example?: string
}

export type DictionaryDefinitionType = {
  word: string
  audio: string
  text: string
  meaning: FormattedMeaningType[]
}
