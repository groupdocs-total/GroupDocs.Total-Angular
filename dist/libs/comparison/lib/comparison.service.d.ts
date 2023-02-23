import { HttpClient } from "@angular/common/http";
import { ConfigService, FileCredentials, SaveFile } from "@groupdocs.examples.angular/common-components";
export declare class ComparisonService {
    private _http;
    private _config;
    constructor(_http: HttpClient, _config: ConfigService);
    loadFiles(path: string): import("rxjs").Observable<Object>;
    getFormats(): import("rxjs").Observable<Object>;
    loadFile(credentials: FileCredentials): import("rxjs").Observable<Object>;
    upload(file: File, url: string, rewrite: boolean): import("rxjs").Observable<Object>;
    save(file: SaveFile): import("rxjs").Observable<Object>;
    getDownloadUrl(credentials: FileCredentials): string;
    loadPage(credentials: FileCredentials, page: number): import("rxjs").Observable<Object>;
    compare(arr: FileCredentials[]): import("rxjs").Observable<Object>;
    changes(arr: FileCredentials[], actions: number[]): import("rxjs").Observable<Object>;
}
