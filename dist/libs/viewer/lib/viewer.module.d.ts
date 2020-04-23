import { ModuleWithProviders } from '@angular/core';
import { LoadingMaskInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { ViewerConfigService } from "./viewer-config.service";
export declare function initializeApp(viewerConfigService: ViewerConfigService): () => Promise<void>;
export declare function setupLoadingInterceptor(service: LoadingMaskService): LoadingMaskInterceptorService;
export declare class ViewerModule {
    static forRoot(apiEndpoint: string): ModuleWithProviders;
}
