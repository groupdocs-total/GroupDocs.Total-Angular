import { ModuleWithProviders } from '@angular/core';
import { LoadingMaskInterceptorService, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { SignatureConfigService } from "./signature-config.service";
export declare function initializeApp(signatureConfigService: SignatureConfigService): () => Promise<void>;
export declare function setupLoadingInterceptor(service: LoadingMaskService): LoadingMaskInterceptorService;
export declare class SignatureModule {
    constructor();
    static forRoot(apiEndpoint: string): ModuleWithProviders;
}
