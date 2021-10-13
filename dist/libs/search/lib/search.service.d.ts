import { HttpClient } from "@angular/common/http";
import { ConfigService, FileCredentials, FileModel } from "@groupdocs.examples.angular/common-components";
import { IndexedFileModel } from './search-models';
export declare class SearchService {
    private _http;
    private _config;
    private _itemToRemove;
    itemToRemove: import("rxjs").Observable<FileModel>;
    constructor(_http: HttpClient, _config: ConfigService);
    addFilesToIndex(filesToIndex: FileModel[]): import("rxjs").Observable<Object>;
    loadFiles(path: string): import("rxjs").Observable<Object>;
    loadFile(credentials: FileCredentials): import("rxjs").Observable<Object>;
    upload(file: File, url: string, rewrite: boolean): import("rxjs").Observable<Object>;
    search(credentials: FileCredentials[], query: string): import("rxjs").Observable<Object>;
    removeFile(file: FileModel): import("rxjs").Observable<Object>;
    selectedItemToRemove(file: FileModel): void;
    getDocumentStatus(files: IndexedFileModel[]): import("rxjs").Observable<Object>;
}
