import { EventEmitter } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
export declare class LoadingMaskService {
    onLoadingChanged: EventEmitter<boolean>;
    private stopList;
    private requests;
    constructor();
    onRequestStart(req: HttpRequest<any>): void;
    onRequestFinish(req: HttpRequest<any>): void;
    addStopUrl(url: string): void;
    private notify;
}
