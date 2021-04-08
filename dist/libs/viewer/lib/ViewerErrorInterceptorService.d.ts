import { ErrorInterceptorService, ModalService, ExceptionMessageService } from '@groupdocs.examples.angular/common-components';
export declare class ViewerErrorInterceptorService extends ErrorInterceptorService {
    private _viewerModalService;
    private _viewerMessageService;
    constructor(_viewerModalService: ModalService, _viewerMessageService: ExceptionMessageService);
    showErrorWindowModal(logFormat: string, exception: any): void;
}
