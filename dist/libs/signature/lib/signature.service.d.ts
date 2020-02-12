import { HttpClient } from "@angular/common/http";
import { ConfigService, FileCredentials } from "@groupdocs.examples.angular/common-components";
import { AddedSignature, DraggableSignature, FileListWithParams, SignatureProps } from "./signature-models";
export declare class SignatureService {
    private _http;
    private _config;
    constructor(_http: HttpClient, _config: ConfigService);
    loadFiles(path: string): import("rxjs").Observable<Object>;
    loadFile(credentials: FileCredentials): import("rxjs").Observable<Object>;
    upload(file: File, url: string, rewrite: boolean, signType: string): import("rxjs").Observable<Object>;
    loadPage(credentials: FileCredentials, page: number): import("rxjs").Observable<Object>;
    getDownloadUrl(credentials: FileCredentials): string;
    loadPrint(credentials: FileCredentials): import("rxjs").Observable<Object>;
    loadPrintPdf(credentials: FileCredentials): import("rxjs").Observable<Blob>;
    getSignatures(path: string, type: string): import("rxjs").Observable<Object>;
    removeSignatures(guid: string, type: string): import("rxjs").Observable<Object>;
    uploadSignature(data: FileListWithParams, rewrite: boolean): import("rxjs").Observable<Object>;
    getCode(text: string, temp: boolean, type: string): import("rxjs").Observable<Object>;
    loadSignatureImage(sign: DraggableSignature): import("rxjs").Observable<AddedSignature>;
    saveTextSignature(data: AddedSignature): import("rxjs").Observable<SignatureProps>;
    saveImage(img: string): import("rxjs").Observable<Object>;
    saveStamp(img: string, props: any[]): import("rxjs").Observable<Object>;
    sign(credentials: FileCredentials, signatures: any[]): import("rxjs").Observable<Object>;
    downloadSigned(credentials: FileCredentials, signatures: any[]): import("rxjs").Observable<Blob>;
}
