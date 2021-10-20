import { MetadataConfig } from "./metadata-config";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class MetadataConfigService {
    private _http;
    private _config;
    private _metadataConfig;
    private _updatedConfig;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly updatedConfig: Observable<MetadataConfig>;
    load(): Promise<void>;
}
