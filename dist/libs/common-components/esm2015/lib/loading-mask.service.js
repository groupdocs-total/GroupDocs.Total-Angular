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
        this.stopList.push(Api.GET_FILE_STATUS);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9hZGluZy1tYXNrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRXRELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUdyQyxNQUFNLE9BQU8sa0JBQWtCO0lBTTdCO1FBTEEscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFFOUQsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBR3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEdBQXFCOztjQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxHQUFxQjs7Y0FDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN4QyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFTyxNQUFNO1FBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFqQ0YsVUFBVTs7Ozs7O0lBRVQsOENBQXNFOzs7OztJQUV0RSxzQ0FBc0I7Ozs7O0lBQ3RCLHNDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtIdHRwUmVxdWVzdH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtBcGl9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2FkaW5nTWFza1NlcnZpY2Uge1xuICBvbkxvYWRpbmdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBzdG9wTGlzdCA9IFtdO1xuICBwcml2YXRlIHJlcXVlc3RzOiBIdHRwUmVxdWVzdDxhbnk+W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0b3BMaXN0LnB1c2goQXBpLlNBVkVfVEVYVCk7XG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5TQVZFX09QVElDQUxfQ09ERSk7XG4gICAgdGhpcy5zdG9wTGlzdC5wdXNoKEFwaS5MT0FEX0RPQ1VNRU5UX1BBR0UpO1xuICAgIHRoaXMuc3RvcExpc3QucHVzaChBcGkuTE9BRF9USFVNQk5BSUxTKTtcbiAgICB0aGlzLnN0b3BMaXN0LnB1c2goQXBpLkdFVF9GSUxFX1NUQVRVUyk7XG4gIH1cblxuICBvblJlcXVlc3RTdGFydChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiB2b2lkIHtcbiAgICBjb25zdCBzdG9wID0gdGhpcy5zdG9wTGlzdC5maW5kKHggPT4gcmVxLnVybC5pbmNsdWRlcyh4KSk7XG4gICAgaWYgKCFzdG9wKSB7XG4gICAgICB0aGlzLnJlcXVlc3RzLnB1c2gocmVxKTtcbiAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfVxuICB9XG5cbiAgb25SZXF1ZXN0RmluaXNoKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXF1ZXN0cy5pbmRleE9mKHJlcSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5yZXF1ZXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5vbkxvYWRpbmdDaGFuZ2VkLmVtaXQodGhpcy5yZXF1ZXN0cy5sZW5ndGggIT09IDApO1xuICB9XG59XG4iXX0=