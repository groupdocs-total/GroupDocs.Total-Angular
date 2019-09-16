import { ConversionConfig } from "./conversion-config";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class ConversionConfigService {
    private _http;
    private _config;
    private _conversionConfig;
    private _updatedConfig;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly updatedConfig: Observable<ConversionConfig>;
    load(): Promise<void>;
}
