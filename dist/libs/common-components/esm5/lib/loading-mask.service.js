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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1tYXNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRXRELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVyQztJQU9FO1FBTEEscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFOUQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBR3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELDJDQUFjOzs7O0lBQWQsVUFBZSxHQUFxQjs7WUFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLEVBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0Q0FBZTs7OztJQUFmLFVBQWdCLEdBQXFCOztZQUM3QixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVPLG1DQUFNOzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQWxDRixVQUFVOzs7O0lBbUNYLHlCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FsQ1ksa0JBQWtCOzs7SUFDN0IsOENBQXNFOzs7OztJQUV0RSxzQ0FBc0I7Ozs7O0lBQ3RCLHNDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtIdHRwUmVxdWVzdH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtBcGl9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2FkaW5nTWFza1NlcnZpY2Uge1xuICBvbkxvYWRpbmdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBzdG9wTGlzdCA9IFtdO1xuICBwcml2YXRlIHJlcXVlc3RzOiBIdHRwUmVxdWVzdDxhbnk+W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0b3BMaXN0LnB1c2goQXBpLlNBVkVfVEVYVCk7XG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5TQVZFX09QVElDQUxfQ09ERSk7XG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UpO1xuICAgIHRoaXMuc3RvcExpc3QucHVzaChBcGkuTE9BRF9USFVNQk5BSUxTKTtcbiAgICB0aGlzLnN0b3BMaXN0LnB1c2goQXBpLkdFVF9GSUxFX1NUQVRVUyk7XG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX1BSSU5UKTtcbiAgfVxuXG4gIG9uUmVxdWVzdFN0YXJ0KHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IHZvaWQge1xuICAgIGNvbnN0IHN0b3AgPSB0aGlzLnN0b3BMaXN0LmZpbmQoeCA9PiByZXEudXJsLmluY2x1ZGVzKHgpKTtcbiAgICBpZiAoIXN0b3ApIHtcbiAgICAgIHRoaXMucmVxdWVzdHMucHVzaChyZXEpO1xuICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICB9XG4gIH1cblxuICBvblJlcXVlc3RGaW5pc2gocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnJlcXVlc3RzLmluZGV4T2YocmVxKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnJlcXVlc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uTG9hZGluZ0NoYW5nZWQuZW1pdCh0aGlzLnJlcXVlc3RzLmxlbmd0aCAhPT0gMCk7XG4gIH1cbn1cbiJdfQ==