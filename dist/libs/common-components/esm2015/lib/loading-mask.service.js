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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1tYXNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRXRELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUdyQyxNQUFNLE9BQU8sa0JBQWtCO0lBTTdCO1FBTEEscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFOUQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBR3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsR0FBcUI7O2NBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQXFCOztjQUM3QixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQWhDRixVQUFVOzs7Ozs7SUFFVCw4Q0FBc0U7Ozs7O0lBRXRFLHNDQUFzQjs7Ozs7SUFDdEIsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7SHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtBcGl9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nTWFza1NlcnZpY2Uge1xyXG4gIG9uTG9hZGluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBzdG9wTGlzdCA9IFtdO1xyXG4gIHByaXZhdGUgcmVxdWVzdHM6IEh0dHBSZXF1ZXN0PGFueT5bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc3RvcExpc3QucHVzaChBcGkuU0FWRV9URVhUKTtcclxuICAgIHRoaXMuc3RvcExpc3QucHVzaChBcGkuU0FWRV9PUFRJQ0FMX0NPREUpO1xyXG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UpO1xyXG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX1RIVU1CTkFJTFMpO1xyXG4gIH1cclxuXHJcbiAgb25SZXF1ZXN0U3RhcnQocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogdm9pZCB7XHJcbiAgICBjb25zdCBzdG9wID0gdGhpcy5zdG9wTGlzdC5maW5kKHggPT4gcmVxLnVybC5pbmNsdWRlcyh4KSk7XHJcbiAgICBpZiAoIXN0b3ApIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0cy5wdXNoKHJlcSk7XHJcbiAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlcXVlc3RGaW5pc2gocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucmVxdWVzdHMuaW5kZXhPZihyZXEpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLnJlcXVlc3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5vdGlmeSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uTG9hZGluZ0NoYW5nZWQuZW1pdCh0aGlzLnJlcXVlc3RzLmxlbmd0aCAhPT0gMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==