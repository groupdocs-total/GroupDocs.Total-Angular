import { ModuleWithProviders } from '@angular/core';
import { LoadingMaskService, LoadingMaskInterceptorService } from "@groupdocs.examples.angular/common-components";
import { ComparisonConfigService } from "./comparison-config.service";
export declare function initializeApp(comparisonConfigService: ComparisonConfigService): () => Promise<void>;
export declare function setupLoadingInterceptor(service: LoadingMaskService): LoadingMaskInterceptorService;
export declare class ComparisonModule {
    constructor();
    static forRoot(apiEndpoint: string): ModuleWithProviders;
}
