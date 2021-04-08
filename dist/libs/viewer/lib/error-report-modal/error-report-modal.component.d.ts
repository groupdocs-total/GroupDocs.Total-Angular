import { HttpEvent } from '@angular/common/http';
import { ExceptionMessageService } from '@groupdocs.examples.angular/common-components';
import { ViewerService } from '../viewer.service';
declare enum CurrentWindowView {
    ReportErrorView = 0,
    SuccessPostView = 1,
    PostFailedView = 2
}
export declare class ErrorReportModalComponent {
    private viewerService;
    httpEvent: HttpEvent<any>;
    message: string;
    currentWindowMode: CurrentWindowView;
    Email: string;
    TopicLink: string;
    PostError: string;
    PostIsPrivate: boolean;
    WindowTitle: string;
    windowView: typeof CurrentWindowView;
    constructor(messageService: ExceptionMessageService, viewerService: ViewerService);
    emailIsValid(): boolean;
    reportError(): void;
}
export {};
