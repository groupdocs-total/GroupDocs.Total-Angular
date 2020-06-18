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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1tYXNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRXRELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVyQztJQU9FO1FBTEEscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFOUQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBR3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsMkNBQWM7Ozs7SUFBZCxVQUFlLEdBQXFCOztZQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBbkIsQ0FBbUIsRUFBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELDRDQUFlOzs7O0lBQWYsVUFBZ0IsR0FBcUI7O1lBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU8sbUNBQU07Ozs7SUFBZDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBakNGLFVBQVU7Ozs7SUFrQ1gseUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWpDWSxrQkFBa0I7OztJQUM3Qiw4Q0FBc0U7Ozs7O0lBRXRFLHNDQUFzQjs7Ozs7SUFDdEIsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7SHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtBcGl9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nTWFza1NlcnZpY2Uge1xyXG4gIG9uTG9hZGluZ0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBzdG9wTGlzdCA9IFtdO1xyXG4gIHByaXZhdGUgcmVxdWVzdHM6IEh0dHBSZXF1ZXN0PGFueT5bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc3RvcExpc3QucHVzaChBcGkuU0FWRV9URVhUKTtcclxuICAgIHRoaXMuc3RvcExpc3QucHVzaChBcGkuU0FWRV9PUFRJQ0FMX0NPREUpO1xyXG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UpO1xyXG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX1RIVU1CTkFJTFMpO1xyXG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5HRVRfRklMRV9TVEFUVVMpO1xyXG4gIH1cclxuXHJcbiAgb25SZXF1ZXN0U3RhcnQocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogdm9pZCB7XHJcbiAgICBjb25zdCBzdG9wID0gdGhpcy5zdG9wTGlzdC5maW5kKHggPT4gcmVxLnVybC5pbmNsdWRlcyh4KSk7XHJcbiAgICBpZiAoIXN0b3ApIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0cy5wdXNoKHJlcSk7XHJcbiAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlcXVlc3RGaW5pc2gocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucmVxdWVzdHMuaW5kZXhPZihyZXEpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLnJlcXVlc3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5vdGlmeSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uTG9hZGluZ0NoYW5nZWQuZW1pdCh0aGlzLnJlcXVlc3RzLmxlbmd0aCAhPT0gMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==