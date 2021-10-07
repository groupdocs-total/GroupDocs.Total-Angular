import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoadingMaskService } from "./loading-mask.service";
export declare class LoadingMaskInterceptorService implements HttpInterceptor {
    private _loadingMaskService;
    constructor(_loadingMaskService: LoadingMaskService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
