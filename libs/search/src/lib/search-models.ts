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

export class SearchApi {
  public static GET_INDEX_PROPERTIES = '/getIndexProperties';
}

export enum FileIndexingStatus {
  Indexing = "Indexing",
  SuccessfullyProcessed = "SuccessfullyProcessed",
  Skipped = "Skipped",
  ProcessedWithError = "ProcessedWithError",
  PasswordRequired = "PasswordRequired"
}

export enum AppState {
  Default = "Default",
  Search = "Search",
  SearchResult = "SearchResult",
  IndexedList = "IndexedList",
}
