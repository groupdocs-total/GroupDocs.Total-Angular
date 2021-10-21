import { ModuleWithProviders } from '@angular/core';
import { LoadingMaskInterceptorService, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { ParserConfigService } from './parser-config.service';
export declare function initializeApp(parserConfigService: ParserConfigService): () => Promise<void>;
export declare function setupLoadingInterceptor(service: LoadingMaskService): LoadingMaskInterceptorService;
export declare class ParserModule {
    constructor();
    static forRoot(apiEndpoint: string): ModuleWithProviders;
}
