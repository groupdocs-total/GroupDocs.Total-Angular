import { HttpClient } from "@angular/common/http";
import { ConfigService, FileCredentials } from "@groupdocs.examples.angular/common-components";
import { ChangedPackageModel } from './metadata-models';
export declare class MetadataService {
    private _http;
    private _config;
    constructor(_http: HttpClient, _config: ConfigService);
    loadFiles(path: string): import("rxjs").Observable<Object>;
    loadFile(credentials: FileCredentials): import("rxjs").Observable<Object>;
    loadProperties(credentials: FileCredentials): import("rxjs").Observable<Object>;
    loadPropertiesNames(credentials: FileCredentials): import("rxjs").Observable<Object>;
    saveProperty(metadataFile: MetadataFileDescription): import("rxjs").Observable<Object>;
    removeProperty(metadataFile: MetadataFileDescription): import("rxjs").Observable<Object>;
    cleanMetadata(metadataFile: FileCredentials): import("rxjs").Observable<Object>;
    upload(file: File, url: string, rewrite: boolean): import("rxjs").Observable<Object>;
    loadPage(credentials: FileCredentials, page: number): import("rxjs").Observable<Object>;
    getDownloadUrl(credentials: FileCredentials): string;
    exportProperties(credentials: FileCredentials): import("rxjs").Observable<Blob>;
    loadPrint(credentials: FileCredentials): import("rxjs").Observable<Object>;
}
export declare class MetadataFileDescription {
    guid: string;
    password: string;
    packages: ChangedPackageModel[];
}
