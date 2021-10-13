import { FileModel } from "@groupdocs.examples.angular/common-components";
export declare class IndexedFileModel extends FileModel {
    documentStatus: string;
    password: string;
}
export declare class SearchResult {
    foundFiles: SearchResultItemModel[];
    filePath: string;
    searchDuration: string;
    totalFiles: number;
    totalOccurences: number;
    indexedFiles: number;
}
export declare class SearchResultItemModel implements FileModel {
    directory: boolean;
    occurrences: number;
    size: number;
    guid: string;
    name: string;
    isDirectory: boolean;
    showPhrases: boolean;
    foundPhrases: string;
}
export declare class ExtendedFileModel implements FileModel {
    guid: string;
    directory: boolean;
    isDirectory: boolean;
    size: number;
    name: string;
    selected: boolean;
}
export declare enum FileIndexingStatus {
    Indexing = "Indexing",
    SuccessfullyProcessed = "SuccessfullyProcessed",
    Skipped = "Skipped",
    ProcessedWithError = "ProcessedWithError",
    PasswordRequired = "PasswordRequired"
}
