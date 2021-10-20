import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { AnnotationConfig } from "./annotation-config";
export declare class AnnotationConfigService {
    private _http;
    private _config;
    private _annotationConfig;
    private _updatedConfig;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly updatedConfig: Observable<AnnotationConfig>;
    load(): Promise<void>;
}
