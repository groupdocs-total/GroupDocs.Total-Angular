import { ModuleWithProviders } from '@angular/core';
import { LoadingMaskInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { ViewerConfigService } from "./viewer-config.service";
import { ViewerTranslateLoader } from './translation/viewer-translate.loader';
export declare function initializeApp(viewerConfigService: ViewerConfigService): () => Promise<void>;
export declare function setupLoadingInterceptor(service: LoadingMaskService): LoadingMaskInterceptorService;
export declare function translateLoaderFactory(): ViewerTranslateLoader;
export declare class ViewerModule {
    static forRoot(apiEndpoint: string): ModuleWithProviders;
}
