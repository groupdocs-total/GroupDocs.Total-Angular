import { HttpHeaders } from "@angular/common/http";
export declare class Api {
    static VIEWER_APP: string;
    static EDITOR_APP: string;
    static DEFAULT_API_ENDPOINT: string;
    static LOAD_FILE_TREE: string;
    static LOAD_CONFIG: string;
    static LOAD_DOCUMENT_DESCRIPTION: string;
    static LOAD_DOCUMENT_PAGE: string;
    static ROTATE_DOCUMENT_PAGE: string;
    static UPLOAD_DOCUMENTS: string;
    static DOWNLOAD_DOCUMENTS: string;
    static LOAD_PRINT: string;
    static LOAD_PRINT_PDF: string;
    static LOAD_THUMBNAILS: string;
    static LOAD_FORMATS: string;
    static SAVE_FILE: string;
    static httpOptionsJson: {
        headers: HttpHeaders;
    };
    static httpOptionsJsonResponseTypeBlob: {
        headers: HttpHeaders;
        responseType: "blob";
    };
}
export declare class ConfigService {
    private _apiEndpoint;
    constructor();
    apiEndpoint: string;
    getConfigEndpoint(app: any): string;
    getViewerApiEndpoint(): string;
    getEditorApiEndpoint(): string;
}
