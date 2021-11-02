import { ParserConfig } from "./parser-config";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class ParserConfigService {
    private _http;
    private _config;
    private _parserConfig;
    private _updatedConfig;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly updatedConfig: Observable<ParserConfig>;
    load(): Promise<void>;
}
