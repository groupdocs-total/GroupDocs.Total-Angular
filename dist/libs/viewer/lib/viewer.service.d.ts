import { HttpClient } from "@angular/common/http";
import { ConfigService, TypedFileCredentials } from "@groupdocs.examples.angular/common-components";
export declare class ViewerService {
    private _http;
    private _config;
    constructor(_http: HttpClient, _config: ConfigService);
    loadFiles(path: string): import("rxjs").Observable<Object>;
    loadFile(credentials: TypedFileCredentials): import("rxjs").Observable<Object>;
    upload(file: File, url: string, rewrite: boolean): import("rxjs").Observable<Object>;
    loadPage(credentials: TypedFileCredentials, page: number): import("rxjs").Observable<Object>;
    rotate(credentials: TypedFileCredentials, angle: number, page: number): import("rxjs").Observable<Object>;
    getDownloadUrl(credentials: TypedFileCredentials): string;
    loadPrint(credentials: TypedFileCredentials): import("rxjs").Observable<Object>;
    loadPrintPdf(credentials: TypedFileCredentials): import("rxjs").Observable<Blob>;
    loadThumbnails(credentials: TypedFileCredentials): import("rxjs").Observable<Object>;
}
