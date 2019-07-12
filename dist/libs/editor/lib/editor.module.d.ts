import { LoadingMaskService, LoadingMaskInterceptorService } from "@groupdocs.examples.angular/common-components";
import { EditorConfigService } from "./editor-config.service";
export declare function initializeApp(editorConfigService: EditorConfigService): () => Promise<void>;
export declare function setupLoadingInterceptor(service: LoadingMaskService): () => LoadingMaskInterceptorService;
export declare class EditorModule {
    constructor();
}
