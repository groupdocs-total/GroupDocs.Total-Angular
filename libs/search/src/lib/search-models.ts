import {FileDescription, FileModel} from "@groupdocs.examples.angular/common-components";

export class SearchFileModel extends FileModel {
  documentStatus: number;
}

export class FoundDocumentField {
  fieldName: string;
}

export class SearchResult {
  foundFields: FoundDocumentField[];
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