import { ViewerConfig } from "./viewer-config";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class ViewerConfigService {
    private _http;
    private _config;
    private _viewerConfig;
    private _updatedConfig;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly updatedConfig: Observable<ViewerConfig>;
    load(): Promise<void>;
}
