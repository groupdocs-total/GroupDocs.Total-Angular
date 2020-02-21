import {FileDescription} from "@groupdocs.examples.angular/common-components";

export class SearchFileModel extends FileDescription {
  indexStatus: string;
}

export class FoundDocumentField {
  fieldName: string;
}

export class SearchResult {
  foundFields: FoundDocumentField[];
  filePath: string;
}

