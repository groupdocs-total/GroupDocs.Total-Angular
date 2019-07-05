import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { ExceptionMessageService } from "./exception-message.service";
import { ModalService } from "./modal.service";
export declare class ErrorInterceptorService implements HttpInterceptor {
    private _modalService;
    private _messageService;
    constructor(_modalService: ModalService, _messageService: ExceptionMessageService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
