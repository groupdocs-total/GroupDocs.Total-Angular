import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { SignatureConfig } from "./signature-config";
export declare class SignatureConfigService {
    private _http;
    private _config;
    private _signatureConfig;
    private _updatedConfig;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly updatedConfig: Observable<SignatureConfig>;
    load(): Promise<void>;
}
