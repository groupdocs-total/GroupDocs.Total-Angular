/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { Api } from "./config.service";
var LoadingMaskService = /** @class */ (function () {
    function LoadingMaskService() {
        this.onLoadingChanged = new EventEmitter();
        this.stopList = [];
        this.requests = [];
        this.stopList.push(Api.SAVE_TEXT);
        this.stopList.push(Api.SAVE_OPTICAL_CODE);
        this.stopList.push(Api.LOAD_DOCUMENT_PAGE);
        this.stopList.push(Api.LOAD_THUMBNAILS);
        this.stopList.push(Api.GET_FILE_STATUS);
        this.stopList.push(Api.LOAD_PRINT);
    }
    /**
     * @param {?} req
     * @return {?}
     */
    LoadingMaskService.prototype.onRequestStart = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        /** @type {?} */
        var stop = this.stopList.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return req.url.includes(x); }));
        if (!stop) {
            this.requests.push(req);
            this.notify();
        }
    };
    /**
     * @param {?} req
     * @return {?}
     */
    LoadingMaskService.prototype.onRequestFinish = /**
     * @param {?} req
     * @return {?}
     */
    function (req) {
        /** @type {?} */
        var index = this.requests.indexOf(req);
        if (index !== -1) {
            this.requests.splice(index, 1);
        }
        this.notify();
    };
    /**
     * @param {?} url
     * @return {?}
     */
    LoadingMaskService.prototype.addStopUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.stopList.push(url);
    };
    /**
     * @private
     * @return {?}
     */
    LoadingMaskService.prototype.notify = /**
     * @private
     * @return {?}
     */
    function () {
        this.onLoadingChanged.emit(this.requests.length !== 0);
    };
    LoadingMaskService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoadingMaskService.ctorParameters = function () { return []; };
    return LoadingMaskService;
}());
export { LoadingMaskService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1tYXNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRXRELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVyQztJQU9FO1FBTEEscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFOUQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBR3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELDJDQUFjOzs7O0lBQWQsVUFBZSxHQUFxQjs7WUFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLEVBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0Q0FBZTs7OztJQUFmLFVBQWdCLEdBQXFCOztZQUM3QixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sbUNBQU07Ozs7SUFBZDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBdENGLFVBQVU7Ozs7SUF1Q1gseUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXRDWSxrQkFBa0I7OztJQUM3Qiw4Q0FBc0U7Ozs7O0lBRXRFLHNDQUFzQjs7Ozs7SUFDdEIsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7SHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtBcGl9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nTWFza1NlcnZpY2Uge1xyXG4gIG9uTG9hZGluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBzdG9wTGlzdCA9IFtdO1xyXG4gIHByaXZhdGUgcmVxdWVzdHM6IEh0dHBSZXF1ZXN0PGFueT5bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc3RvcExpc3QucHVzaChBcGkuU0FWRV9URVhUKTtcclxuICAgIHRoaXMuc3RvcExpc3QucHVzaChBcGkuU0FWRV9PUFRJQ0FMX0NPREUpO1xyXG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UpO1xyXG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX1RIVU1CTkFJTFMpO1xyXG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5HRVRfRklMRV9TVEFUVVMpO1xyXG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX1BSSU5UKTtcclxuICB9XHJcblxyXG4gIG9uUmVxdWVzdFN0YXJ0KHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RvcCA9IHRoaXMuc3RvcExpc3QuZmluZCh4ID0+IHJlcS51cmwuaW5jbHVkZXMoeCkpO1xyXG4gICAgaWYgKCFzdG9wKSB7XHJcbiAgICAgIHRoaXMucmVxdWVzdHMucHVzaChyZXEpO1xyXG4gICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25SZXF1ZXN0RmluaXNoKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnJlcXVlc3RzLmluZGV4T2YocmVxKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ub3RpZnkoKTtcclxuICB9XHJcblxyXG4gIGFkZFN0b3BVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RvcExpc3QucHVzaCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uTG9hZGluZ0NoYW5nZWQuZW1pdCh0aGlzLnJlcXVlc3RzLmxlbmd0aCAhPT0gMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==