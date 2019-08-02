import { ModuleWithProviders } from '@angular/core';
import { ViewerConfigService } from "./viewer-config.service";
export declare function initializeApp(viewerConfigService: ViewerConfigService): () => Promise<void>;
export declare class ViewerModule {
    static forRoot(apiEndpoint: string): ModuleWithProviders;
}
