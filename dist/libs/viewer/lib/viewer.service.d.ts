import { HttpClient } from "@angular/common/http";
import { ConfigService, FileCredentials } from "@groupdocs.examples.angular/common-components";
export declare class ViewerService {
    private _http;
    private _config;
    constructor(_http: HttpClient, _config: ConfigService);
    loadFiles(path: string): import("rxjs").Observable<Object>;
    loadFile(credentials: FileCredentials): import("rxjs").Observable<Object>;
    upload(file: File, url: string, rewrite: boolean): import("rxjs").Observable<Object>;
    loadPage(credentials: FileCredentials, page: number): import("rxjs").Observable<Object>;
    rotate(credentials: FileCredentials, angle: number, page: number): import("rxjs").Observable<Object>;
    getDownloadUrl(credentials: FileCredentials): string;
    loadPrint(credentials: FileCredentials): import("rxjs").Observable<Object>;
    loadPrintPdf(credentials: FileCredentials): import("rxjs").Observable<Blob>;
    loadThumbnails(credentials: FileCredentials): import("rxjs").Observable<Object>;
}
