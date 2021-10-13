import { ModuleWithProviders } from '@angular/core';
import { ConversionConfigService } from "./conversion-config.service";
export declare function initializeApp(conversionConfigService: ConversionConfigService): () => Promise<void>;
export declare class ConversionModule {
    constructor();
    static forRoot(apiEndpoint: string): ModuleWithProviders;
}
