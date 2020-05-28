/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { Api } from "./config.service";
export class LoadingMaskService {
    constructor() {
        this.onLoadingChanged = new EventEmitter();
        this.stopList = [];
        this.requests = [];
        this.stopList.push(Api.SAVE_TEXT);
        this.stopList.push(Api.SAVE_OPTICAL_CODE);
        this.stopList.push(Api.LOAD_DOCUMENT_PAGE);
        this.stopList.push(Api.LOAD_THUMBNAILS);
    }
    /**
     * @param {?} req
     * @return {?}
     */
    onRequestStart(req) {
        /** @type {?} */
        const stop = this.stopList.find((/**
         * @param {?} x
         * @return {?}
         */
        x => req.url.includes(x)));
        if (!stop) {
            this.requests.push(req);
            this.notify();
        }
    }
    /**
     * @param {?} req
     * @return {?}
     */
    onRequestFinish(req) {
        /** @type {?} */
        const index = this.requests.indexOf(req);
        if (index !== -1) {
            this.requests.splice(index, 1);
        }
        this.notify();
    }
    /**
     * @private
     * @return {?}
     */
    notify() {
        this.onLoadingChanged.emit(this.requests.length !== 0);
    }
}
LoadingMaskService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoadingMaskService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    LoadingMaskService.prototype.onLoadingChanged;
    /**
     * @type {?}
     * @private
     */
    LoadingMaskService.prototype.stopList;
    /**
     * @type {?}
     * @private
     */
    LoadingMaskService.prototype.requests;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1tYXNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRXRELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUdyQyxNQUFNLE9BQU8sa0JBQWtCO0lBTTdCO1FBTEEscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFOUQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBR3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsR0FBcUI7O2NBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQXFCOztjQUM3QixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQWhDRixVQUFVOzs7Ozs7SUFFVCw4Q0FBc0U7Ozs7O0lBRXRFLHNDQUFzQjs7Ozs7SUFDdEIsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0h0dHBSZXF1ZXN0fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0FwaX0gZnJvbSBcIi4vY29uZmlnLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvYWRpbmdNYXNrU2VydmljZSB7XG4gIG9uTG9hZGluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIHN0b3BMaXN0ID0gW107XG4gIHByaXZhdGUgcmVxdWVzdHM6IEh0dHBSZXF1ZXN0PGFueT5bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RvcExpc3QucHVzaChBcGkuU0FWRV9URVhUKTtcbiAgICB0aGlzLnN0b3BMaXN0LnB1c2goQXBpLlNBVkVfT1BUSUNBTF9DT0RFKTtcbiAgICB0aGlzLnN0b3BMaXN0LnB1c2goQXBpLkxPQURfRE9DVU1FTlRfUEFHRSk7XG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX1RIVU1CTkFJTFMpO1xuICB9XG5cbiAgb25SZXF1ZXN0U3RhcnQocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogdm9pZCB7XG4gICAgY29uc3Qgc3RvcCA9IHRoaXMuc3RvcExpc3QuZmluZCh4ID0+IHJlcS51cmwuaW5jbHVkZXMoeCkpO1xuICAgIGlmICghc3RvcCkge1xuICAgICAgdGhpcy5yZXF1ZXN0cy5wdXNoKHJlcSk7XG4gICAgICB0aGlzLm5vdGlmeSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVxdWVzdEZpbmlzaChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucmVxdWVzdHMuaW5kZXhPZihyZXEpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucmVxdWVzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgdGhpcy5ub3RpZnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5KCk6IHZvaWQge1xuICAgIHRoaXMub25Mb2FkaW5nQ2hhbmdlZC5lbWl0KHRoaXMucmVxdWVzdHMubGVuZ3RoICE9PSAwKTtcbiAgfVxufVxuIl19