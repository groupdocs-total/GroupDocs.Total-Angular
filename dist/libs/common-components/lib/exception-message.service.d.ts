import { HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class ExceptionMessageService {
    private _observer;
    private _messageChange;
    private _httpEventObserver;
    private _httpEventChange;
    constructor();
    readonly httpEventChange: Observable<HttpEvent<any>>;
    readonly messageChange: Observable<string>;
    changeHttpEvent(httpEvent: HttpEvent<any>): void;
    changeMessage(message: string): void;
}
