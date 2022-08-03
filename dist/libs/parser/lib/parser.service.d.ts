import { HttpClient } from "@angular/common/http";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { DocumentDescription, ParseByTemplateResponse, SourceFile, Template } from './app-models';
import { Observable } from 'rxjs';
export declare class ParserService {
    private _http;
    private _config;
    constructor(_http: HttpClient, _config: ConfigService);
    loadFiles(path: string): Observable<Object>;
    upload(file: File, url: string, rewrite: boolean): Observable<Object>;
    loadDocumentDescription(sourceFile: SourceFile): Observable<DocumentDescription>;
    parseByTemplate(sourceFile: SourceFile, password: string, template: Template): Observable<ParseByTemplateResponse>;
    getErrorMessage(err: any): string;
    private logToServer;
}
