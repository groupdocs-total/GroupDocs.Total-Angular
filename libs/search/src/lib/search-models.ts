import { FileModel } from "@groupdocs.examples.angular/common-components";

export class IndexedFileModel extends FileModel {
  documentStatus: string;
  password: string;
}

export class SearchResult {
  foundFiles: SearchResultItemModel[];
  filePath: string;
  searchDuration: string;
  totalFiles: number;
  totalOccurences: number;
  indexedFiles: number;
}

export class SearchResultItemModel implements FileModel {
  directory: boolean;
  occurrences: number;
  size: number;
  guid: string;
  name: string;
  isDirectory: boolean;
  showPhrases: boolean;
  foundPhrases: string;
  terms: string[];
}

export class ExtendedFileModel implements FileModel {
  guid: string;
  directory: boolean;
  isDirectory: boolean;
  size: number;
  name: string;
  selected: boolean;
}

export class IndexProperties {
  IndexVersion: string;
  IndexType: string;
  UseStopWords: boolean;
  UseCharacterReplacements: boolean;
  AutoDetectEncoding: boolean;
  UseRawTextExtraction: boolean;
  TextStorageCompression: string;
  IndexedFiles: number;
}

export class AlphabetCharacter {
  Character: number;
  Type: number;
}

export class AlphabetCharacterEx {
  Id: number;
  Character: string;
  Code: string;
  Type: string;
}

export class AlphabetReadResponse {
  Characters: AlphabetCharacter[];
}

export class AlphabetUpdateRequest {
  Characters: AlphabetCharacter[];
}

export class StopWordsReadResponse {
  StopWords: string[];
}

export class StopWordsUpdateRequest {
  StopWords: string[];
}

export class SynonymsReadResponse {
  SynonymGroups: string[][];
}

export class SynonymsUpdateRequest {
  SynonymGroups: string[][];
}

export class SearchApi {
  public static GET_INDEX_PROPERTIES = '/getIndexProperties';
  public static GET_ALPHABET_DICTIONARY = '/getAlphabetDictionary';
  public static SET_ALPHABET_DICTIONARY = '/setAlphabetDictionary';
  public static GET_STOP_WORD_DICTIONARY = '/getStopWordDictionary';
  public static SET_STOP_WORD_DICTIONARY = '/setStopWordDictionary';
  public static GET_SYNONYM_DICTIONARY = '/getSynonymDictionary';
  public static SET_SYNONYM_DICTIONARY = '/setSynonymDictionary';
}

export enum FileIndexingStatus {
  Indexing = "Indexing",
  SuccessfullyProcessed = "SuccessfullyProcessed",
  Skipped = "Skipped",
  ProcessedWithError = "ProcessedWithError",
  PasswordRequired = "PasswordRequired"
}

export enum CharacterType {
  Separator = 1,
  Letter = 2,
  Blended = 3,
  SeparateWord = 4,
}

export enum AppState {
  Default = "Default",
  SearchResult = "SearchResult",
  IndexedList = "IndexedList",
  DictionaryList = "DictionaryList",
  AliasDictionary = "AliasDictionary",
  StopWordDictionary = "StopWordDictionary",
  SynonymDictionary = "SynonymDictionary",
  PasswordDictionary = "PasswordDictionary",
  SpellingCorrectorDictionary = "SpellingCorrectorDictionary",
  HomophoneDictionary = "HomophoneDictionary",
  AlphabetDictionary = "AlphabetDictionary",
  CharacterReplacementDictionary = "CharacterReplacementDictionary",
}
