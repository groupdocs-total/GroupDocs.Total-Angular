import { SafeHtml } from "@angular/platform-browser";
import { FileCredentials, FileModel } from "@groupdocs.examples.angular/common-components";

export class IndexedFileModel extends FileModel {
  documentStatus: string;
  password: string;
}

export class FileStatusGetRequest {
  FolderName: string;
  Files: IndexedFileModel[];
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
  documentId: string;
  isCaseSensitive: boolean;
  formatFamily: string;
}

export class ExtendedFileModel implements FileModel {
  guid: string;
  directory: boolean;
  isDirectory: boolean;
  size: number;
  name: string;
  selected: boolean;
}

export class IndexPropertiesResponse {
  IndexVersion: string;
  IndexType: string;
  UseStopWords: boolean;
  UseCharacterReplacements: boolean;
  AutoDetectEncoding: boolean;
  UseRawTextExtraction: boolean;
  TextStorageCompression: string;
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

export class CharacterReplacement {
  CharacterId: number;
  Character: string;
  CharacterCode: string;
  ReplacementId: number;
  Replacement: string;
  ReplacementCode: string;
}

export class KeyPasswordPair {
  Key: string;
  Password: string;
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

export class HomophonesReadResponse {
  HomophoneGroups: string[][];
}

export class HomophonesUpdateRequest {
  HomophoneGroups: string[][];
}

export class SpellingCorrectorReadResponse {
  Words: string[];
}

export class SpellingCorrectorUpdateRequest {
  Words: string[];
}

export class CharacterReplacementsReadResponse {
  Replacements: number[];
}

export class CharacterReplacementsUpdateRequest {
  Replacements: number[];
}

export class DocumentPasswordsReadResponse {
  Passwords: KeyPasswordPair[];
}

export class DocumentPasswordsUpdateRequest {
  Passwords: KeyPasswordPair[];
}

export class SearchBaseRequest {
  FolderName: string;
}

export class GetDocumentPageRequest extends SearchBaseRequest {
  fileName : string;
  password : string;
  pageNumber : number;
  terms : string[];
  caseSensitive : Boolean;
}

export class GetDocumentPageResponse {
  pageNumber : number;
  pageCount : number;
  data : string;
  sheetName : string;
}

export class HighlightRequest extends SearchBaseRequest {
  FoundDocumentId: string;
}

export class AddToIndexRequest extends SearchBaseRequest {
  Files: FileModel[];
}

export class FilesDeleteRequest extends SearchBaseRequest {
  Files: FileModel[];
}

export class FileUploadResult extends FileCredentials {
  isRestricted: boolean;
  message: string;
}

export class LicenseRestrictionResponse {
  isRestricted: boolean;
  message: string;
}

export class SearchApi {
  public static GET_REPORT = '/getReport';
  public static GET_DOCUMENT_PAGE = '/getDocumentPage';
  public static HIGHLIGHT = '/highlight';
  public static DOWNLOAD_SOURCE_FILE = '/downloadSourceFile';
  public static DOWNLOAD_EXTRACTED_TEXT = '/downloadExtractedText';
  public static DELETE_FILES = '/deleteFiles';
  public static DOWNLOAD_AND_ADD_TO_INDEX = '/downloadAndAddToIndex';
  public static GET_UPLOADED_FILES = '/getUploadedFiles';
  public static GET_INDEXED_FILES = '/getIndexedFiles';
  public static GET_INDEX_PROPERTIES = '/getIndexProperties';
  public static GET_ALPHABET_DICTIONARY = '/getAlphabetDictionary';
  public static SET_ALPHABET_DICTIONARY = '/setAlphabetDictionary';
  public static GET_STOP_WORD_DICTIONARY = '/getStopWordDictionary';
  public static SET_STOP_WORD_DICTIONARY = '/setStopWordDictionary';
  public static GET_SYNONYM_DICTIONARY = '/getSynonymDictionary';
  public static SET_SYNONYM_DICTIONARY = '/setSynonymDictionary';
  public static GET_HOMOPHONE_DICTIONARY = '/getHomophoneDictionary';
  public static SET_HOMOPHONE_DICTIONARY = '/setHomophoneDictionary';
  public static GET_SPELLING_CORRECTOR_DICTIONARY = '/getSpellingCorrectorDictionary';
  public static SET_SPELLING_CORRECTOR_DICTIONARY = '/setSpellingCorrectorDictionary';
  public static GET_CHARACTER_REPLACEMENT_DICTIONARY = '/getCharacterReplacementDictionary';
  public static SET_CHARACTER_REPLACEMENT_DICTIONARY = '/setCharacterReplacementDictionary';
  public static GET_DOCUMENT_PASSWORD_DICTIONARY = '/getDocumentPasswordDictionary';
  public static SET_DOCUMENT_PASSWORD_DICTIONARY = '/setDocumentPasswordDictionary';
}

export enum FileIndexingStatus {
  Indexing = "Indexing",
  SuccessfullyProcessed = "SuccessfullyProcessed",
  Skipped = "Skipped",
  ProcessedWithError = "ProcessedWithError",
  PasswordRequired = "PasswordRequired",
  Pending = "Pending",
  Removing = "Removing",
  Indexed = "Indexed",
  NotIndexed = "NotIndexed",
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

export enum WordState {
  Old = "Old",
  DeletedOld = "DeletedOld",
  New = "New",
  DeletedNew = "DeletedNew",
}

export class WordWrapper {
  word: string;
  state: WordState;
}
