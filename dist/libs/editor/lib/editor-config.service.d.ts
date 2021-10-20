import { EditorConfig } from "./editor-config";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class EditorConfigService {
    private _http;
    private _config;
    private _editorConfig;
    private _updatedConfig;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly updatedConfig: Observable<EditorConfig>;
    load(): Promise<void>;
}
