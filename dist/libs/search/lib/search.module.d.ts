import { ModuleWithProviders } from '@angular/core';
import { LoadingMaskInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { SearchConfigService } from "./search-config.service";
export declare function initializeApp(searchConfigService: SearchConfigService): () => Promise<void>;
export declare function setupLoadingInterceptor(service: LoadingMaskService): LoadingMaskInterceptorService;
export declare class SearchModule {
    static forRoot(apiEndpoint: string): ModuleWithProviders;
}
