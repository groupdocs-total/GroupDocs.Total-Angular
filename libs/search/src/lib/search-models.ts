import {FileDescription, FileModel} from "@groupdocs.examples.angular/common-components";

export class SearchFileModel extends FileDescription {
  indexStatus: string;
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
  occurrences: string;
  size: number;
  guid: string;
  name: string;
  isDirectory: boolean;
  showPhrases: boolean;
}