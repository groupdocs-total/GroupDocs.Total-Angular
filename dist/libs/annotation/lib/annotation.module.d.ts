import { ModuleWithProviders } from '@angular/core';
import { LoadingMaskInterceptorService, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { AnnotationConfigService } from "./annotation-config.service";
export declare function initializeApp(annotationConfigService: AnnotationConfigService): () => Promise<void>;
export declare function setupLoadingInterceptor(service: LoadingMaskService): LoadingMaskInterceptorService;
export declare class AnnotationModule {
    constructor();
    static forRoot(apiEndpoint: string): ModuleWithProviders;
}
