import { HttpClient } from "@angular/common/http";
import { ConfigService, FileCredentials } from "@groupdocs.examples.angular/common-components";
export declare class AnnotationService {
    private _http;
    private _config;
    constructor(_http: HttpClient, _config: ConfigService);
    loadFiles(path: string): import("rxjs").Observable<Object>;
    loadFile(credentials: FileCredentials): import("rxjs").Observable<Object>;
    upload(file: File, url: string, rewrite: boolean): import("rxjs").Observable<Object>;
    loadPage(credentials: FileCredentials, page: number): import("rxjs").Observable<Object>;
    getDownloadUrl(credentials: FileCredentials): string;
    annotate(credentials: FileCredentials, annotationsData: any, print: boolean): import("rxjs").Observable<Object>;
}
