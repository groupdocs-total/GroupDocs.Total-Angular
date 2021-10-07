import { HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class ExceptionMessageService {
    private _observer;
    private _messageChange;
    private _observerHttpEvent;
    private _httpEventChange;
    constructor();
    readonly messageChange: Observable<string>;
    readonly httpEventChange: Observable<HttpEvent<any>>;
    changeMessage(message: string): void;
    changeHttpEvent(httpEvent: HttpEvent<any>): void;
}
