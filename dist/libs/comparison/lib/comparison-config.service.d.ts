import { ComparisonConfig } from "./comparison-config";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class ComparisonConfigService {
    private _http;
    private _config;
    private _comparisonConfig;
    private _updatedConfig;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly updatedConfig: Observable<ComparisonConfig>;
    load(): Promise<void>;
}
