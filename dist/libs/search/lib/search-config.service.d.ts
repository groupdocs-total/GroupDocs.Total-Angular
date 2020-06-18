import { SearchConfig } from "./search-config";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class SearchConfigService {
    private _http;
    private _config;
    private _searchConfig;
    private _updatedConfig;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly updatedConfig: Observable<SearchConfig>;
    load(): Promise<void>;
}
