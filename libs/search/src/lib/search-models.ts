import { FileModel } from "@groupdocs.examples.angular/common-components";

export class IndexedFileModel extends FileModel {
  documentStatus: string;
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

export enum FileIndexingStatus {
  Indexing = "Indexing",
  SuccessfullyProcessed = "SuccessfullyProcessed",
  Skipped = "Skipped",
  ProcessedWithError = "ProcessedWithError"
}