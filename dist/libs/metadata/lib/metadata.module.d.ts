import { ModuleWithProviders } from '@angular/core';
import { LoadingMaskInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { MetadataConfigService } from "./metadata-config.service";
export declare function initializeApp(metadataConfigService: MetadataConfigService): () => Promise<void>;
export declare function setupLoadingInterceptor(service: LoadingMaskService): LoadingMaskInterceptorService;
export declare class MetadataModule {
    static forRoot(apiEndpoint: string): ModuleWithProviders;
}
