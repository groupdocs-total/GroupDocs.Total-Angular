import { HttpClient } from "@angular/common/http";
import { ConfigService, FileCredentials, SaveFile } from "@groupdocs.examples.angular/common-components";
export declare class EditorService {
    private _http;
    private _config;
    constructor(_http: HttpClient, _config: ConfigService);
    loadFiles(path: string): import("rxjs").Observable<Object>;
    getFormats(): import("rxjs").Observable<Object>;
    loadFile(credentials: FileCredentials): import("rxjs").Observable<Object>;
    upload(file: File, url: string, rewrite: boolean): import("rxjs").Observable<Object>;
    save(file: SaveFile): import("rxjs").Observable<Object>;
    create(file: SaveFile): import("rxjs").Observable<Object>;
    getDownloadUrl(credentials: FileCredentials): string;
}
