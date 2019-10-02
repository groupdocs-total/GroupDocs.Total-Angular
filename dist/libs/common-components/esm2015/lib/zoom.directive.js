/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, ElementRef } from '@angular/core';
import { ZoomService } from "./zoom.service";
export class ZoomDirective {
    /**
     * @param {?} _zoomService
     * @param {?} el
     */
    constructor(_zoomService, el) {
        this._zoomService = _zoomService;
        this.zoomActive = true;
        this.ifPdf = true;
        this.ifChrome = window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        this.ifFirefox = window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        this.ifEdge = window.navigator.userAgent.toLowerCase().indexOf('edge') > -1;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setStyles(this._zoomService.zoom);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe((/**
         * @param {?} zoom
         * @return {?}
         */
        (zoom) => {
            this.setStyles(zoom);
        }));
    }
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    setStyles(zoom) {
        if (!this.zoomActive) {
            return;
        }
        /** @type {?} */
        const zoomInt = zoom === 100 ? 1 : zoom / 100;
        if (this.ifEdge || (this.ifPdf && !this.ifChrome)) {
            this.zoomInt = zoomInt;
        }
        else {
            this.zoomInt = null;
        }
        if (!this.ifEdge && (!this.ifPdf || this.ifChrome || this.ifFirefox)) {
            this.transform = 'scale(' + zoomInt + ')';
            this.transformOrigin = 'top left';
        }
        else {
            this.transform = "";
            this.transformOrigin = "";
        }
        this.width = (this.el.nativeElement.parentElement.offsetWidth) / zoomInt + 'px';
        /** @type {?} */
        let maxWidth = 0;
        this.file.pages.forEach((/**
         * @param {?} page
         * @return {?}
         */
        page => {
            {
                if (page.width > maxWidth) {
                    maxWidth = page.width;
                }
            }
        }));
        this.minWidth = maxWidth + 'pt';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setStyles(this._zoomService.zoom);
    }
}
ZoomDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdZoom]'
            },] }
];
/** @nocollapse */
ZoomDirective.ctorParameters = () => [
    { type: ZoomService },
    { type: ElementRef }
];
ZoomDirective.propDecorators = {
    zoomActive: [{ type: Input }],
    ifPdf: [{ type: Input }],
    file: [{ type: Input }],
    zoomInt: [{ type: HostBinding, args: ['style.zoom',] }],
    transform: [{ type: HostBinding, args: ['style.transform',] }],
    transformOrigin: [{ type: HostBinding, args: ['style.transform-origin',] }],
    width: [{ type: HostBinding, args: ['style.width',] }],
    minWidth: [{ type: HostBinding, args: ['style.min-width',] }]
};
if (false) {
    /** @type {?} */
    ZoomDirective.prototype.zoomActive;
    /** @type {?} */
    ZoomDirective.prototype.ifPdf;
    /** @type {?} */
    ZoomDirective.prototype.file;
    /** @type {?} */
    ZoomDirective.prototype.ifChrome;
    /** @type {?} */
    ZoomDirective.prototype.ifFirefox;
    /** @type {?} */
    ZoomDirective.prototype.ifEdge;
    /** @type {?} */
    ZoomDirective.prototype.zoomInt;
    /** @type {?} */
    ZoomDirective.prototype.transform;
    /** @type {?} */
    ZoomDirective.prototype.transformOrigin;
    /** @type {?} */
    ZoomDirective.prototype.width;
    /** @type {?} */
    ZoomDirective.prototype.minWidth;
    /** @type {?} */
    ZoomDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ZoomDirective.prototype._zoomService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNM0MsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBZ0J4QixZQUFvQixZQUF5QixFQUFFLEVBQWM7UUFBekMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFkcEMsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBRXRCLGFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsY0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3RSxXQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBVXJFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLElBQUk7UUFDcEIsSUFBSSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckIsT0FBTztTQUNSOztjQUVLLE9BQU8sR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHO1FBRTdDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7YUFDSTtZQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztTQUNuQzthQUNJO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O1lBQzFFLFFBQVEsR0FBRyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUM3QjtnQkFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxFQUFDO29CQUN4QixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDdkI7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQTlFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFMTyxXQUFXO1lBRHNELFVBQVU7Ozt5QkFTaEYsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBS0wsV0FBVyxTQUFDLFlBQVk7d0JBQ3hCLFdBQVcsU0FBQyxpQkFBaUI7OEJBQzdCLFdBQVcsU0FBQyx3QkFBd0I7b0JBQ3BDLFdBQVcsU0FBQyxhQUFhO3VCQUN6QixXQUFXLFNBQUMsaUJBQWlCOzs7O0lBWDlCLG1DQUEyQjs7SUFDM0IsOEJBQXNCOztJQUN0Qiw2QkFBYzs7SUFDZCxpQ0FBMkU7O0lBQzNFLGtDQUE2RTs7SUFDN0UsK0JBQXVFOztJQUV2RSxnQ0FBMkM7O0lBQzNDLGtDQUFrRDs7SUFDbEQsd0NBQStEOztJQUMvRCw4QkFBMEM7O0lBQzFDLGlDQUFpRDs7SUFDakQsMkJBQW9COzs7OztJQUVSLHFDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFpvb21dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgWm9vbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSB6b29tQWN0aXZlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBpZlBkZiA9IHRydWU7XHJcbiAgQElucHV0KCkgZmlsZTtcclxuICBpZkNocm9tZSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPiAtMTtcclxuICBpZkZpcmVmb3ggPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xyXG4gIGlmRWRnZSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZWRnZScpID4gLTE7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuem9vbScpIHpvb21JbnQ6IG51bWJlcjtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIHRyYW5zZm9ybTogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtLW9yaWdpbicpIHRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSB3aWR0aDogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoJykgbWluV2lkdGg6IHN0cmluZztcclxuICBlbDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghIHRoaXMuem9vbUFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgICB0aGlzLl96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgoem9vbSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0eWxlcyh6b29tKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZXMoem9vbSkge1xyXG4gICAgaWYgKCEgdGhpcy56b29tQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB6b29tSW50ID0gem9vbSA9PT0gMTAwID8gMSA6IHpvb20gLyAxMDA7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmlmRWRnZSB8fCAodGhpcy5pZlBkZiAmJiAhdGhpcy5pZkNocm9tZSkpIHtcclxuICAgICAgdGhpcy56b29tSW50ID0gem9vbUludDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnpvb21JbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIXRoaXMuaWZFZGdlICYmICghdGhpcy5pZlBkZiB8fCB0aGlzLmlmQ2hyb21lIHx8IHRoaXMuaWZGaXJlZm94KSkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9ICdzY2FsZSgnICsgem9vbUludCArICcpJztcclxuICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSAndG9wIGxlZnQnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gXCJcIjtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud2lkdGggPSAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGgpL3pvb21JbnQgKyAncHgnO1xyXG4gICAgbGV0IG1heFdpZHRoID0gMDtcclxuICAgIHRoaXMuZmlsZS5wYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKHBhZ2Uud2lkdGggPiBtYXhXaWR0aCl7XHJcbiAgICAgICAgICBtYXhXaWR0aCA9IHBhZ2Uud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWluV2lkdGggPSBtYXhXaWR0aCArICdwdCc7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0eWxlcyh0aGlzLl96b29tU2VydmljZS56b29tKTtcclxuICB9XHJcbn1cclxuIl19