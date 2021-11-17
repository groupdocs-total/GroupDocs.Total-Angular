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
  termSequences: string[][];
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
  character: number;
  type: number;
}

export class AlphabetCharacterEx {
  id: number;
  character: string;
  code: string;
  type: string;
}

export class CharacterReplacement {
  CharacterId: number;
  Character: string;
  CharacterCode: string;
  ReplacementId: number;
  Replacement: string;
  ReplacementCode: string;

  static create(characterId: number, replacementId: number): CharacterReplacement {
    const cr = new CharacterReplacement();
    cr.CharacterId = characterId;
    cr.Character = String.fromCharCode(characterId);
    cr.CharacterCode = characterId.toString(16).toUpperCase().padStart(4, "0");
    cr.ReplacementId = replacementId;
    cr.Replacement = String.fromCharCode(replacementId);
    cr.ReplacementCode = replacementId.toString(16).toUpperCase().padStart(4, "0");
    return cr;
  }
}

export class CharacterDescriptor {
  CharacterId: number;
  Character: string;
  CharacterCode: string;

  static create(characterId: number): CharacterDescriptor {    
    const cd = new CharacterDescriptor();
    cd.CharacterId = characterId;
    cd.Character = String.fromCharCode(characterId);
    cd.CharacterCode = characterId.toString(16).toUpperCase().padStart(4, "0");
    return cd;
  }
}

export class KeyPasswordPair {
  key: string;
  password: string;
}

export class SearchBaseRequest {
  FolderName: string;
}

export class AlphabetReadResponse {
  characters: AlphabetCharacter[];
}

export class AlphabetUpdateRequest extends SearchBaseRequest {
  characters: AlphabetCharacter[];
}

export class StopWordsReadResponse {
  stopWords: string[];
}

export class StopWordsUpdateRequest extends SearchBaseRequest {
  stopWords: string[];
}

export class SynonymsReadResponse {
  synonymGroups: string[][];
}

export class SynonymsUpdateRequest extends SearchBaseRequest {
  synonymGroups: string[][];
}

export class HomophonesReadResponse {
  homophoneGroups: string[][];
}

export class HomophonesUpdateRequest extends SearchBaseRequest {
  homophoneGroups: string[][];
}

export class SpellingCorrectorReadResponse {
  words: string[];
}

export class SpellingCorrectorUpdateRequest extends SearchBaseRequest {
  words: string[];
}

export class CharacterReplacementsReadResponse {
  replacements: number[];
}

export class CharacterReplacementsUpdateRequest extends SearchBaseRequest {
  replacements: number[];
}

export class DocumentPasswordsReadResponse {
  passwords: KeyPasswordPair[];
}

export class DocumentPasswordsUpdateRequest {
  passwords: KeyPasswordPair[];
}

export class SearchAppInfo {
  indexStatus: IndexStatusInfo;
  preprocessingQueue: PreprocessingQueueInfo;
  taskQueue: TaskQueueInfo;
  documentList: ExistingDocumentInfo[];
  folderList: ExistingFolderInfo[];
}

export class IndexStatusInfo {
  indexStatus: string;
  version: string;
  time: string;
}

export class ExistingDocumentInfo {
  folderName: string;
  fileName: string;
  length: number;
  status: string;
}

export class ExistingFolderInfo {
  folderName: string;
  documentCount: number;
  documentList: ExistingDocumentInfo[];
}

export class PreprocessingQueueInfo {
  activeTasks: string[];
  queuedTasks: string[];
}

export class TaskQueueInfo {
  tasks: string[];
  taskLogs: string[];
}

export class PrepareDocumentRequest extends SearchBaseRequest {
  fileName: string;
  password: string;
}

export class PrepareDocumentResponse {
  fileName: string;
  isPrepared: boolean;
}

export class GetDocumentPageRequest extends SearchBaseRequest {
  fileName: string;
  pageNumber: number;
  terms: string[];
  termSequences: string[][];
  caseSensitive: Boolean;
}

export class GetDocumentPageResponse {
  fileName: string;
  pageNumber: number;
  pageCount: number;
  data: string;
  sheetName: string;
}

export class HighlightRequest extends SearchBaseRequest {
  FoundDocumentId: string;
}

export class AddToIndexRequest extends SearchBaseRequest {
  Files: FileModel[];
  RecognizeTextInImages: boolean;
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

export class GetStatusResponse {
  indexing: number;
  pending: number;
  indexed: number;
}

export class SearchApi {
  // Search API
  public static GET_REPORT = '/getReport';
  public static REQUEST_REINDEX = '/requestReindex';
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
  public static GET_STATUS = '/getStatus';
  public static GET_INFO = '/getInfo';

  // Highlight API
  public static PREPARE_DOCUMENT = '/prepareDocument';
  public static GET_DOCUMENT_PAGE = '/getDocumentPage';
}

export enum FileIndexingStatus {
  Indexing = "Indexing",
  SuccessfullyProcessed = "SuccessfullyProcessed",
  Skipped = "Skipped",
  ProcessedWithError = "ProcessedWithError",
  PasswordRequired = "PasswordRequired",
  Pending = "Pending",
  Removing = "Removing",
  Merging = "Merging",
  Indexed = "Indexed",
  NotIndexed = "NotIndexed",
}

export enum CharacterType {
  Separator = 0,
  Letter = 1,
  Blended = 2,
  SeparateWord = 3,
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
  StateMonitor = "StateMonitor",
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
