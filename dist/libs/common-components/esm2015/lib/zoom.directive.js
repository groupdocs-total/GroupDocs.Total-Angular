/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, ElementRef } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { FileUtil } from "./file.service";
export class ZoomDirective {
    /**
     * @param {?} _zoomService
     * @param {?} el
     */
    constructor(_zoomService, el) {
        this._zoomService = _zoomService;
        this.zoomActive = true;
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
        this.resizePages(this._zoomService.zoom);
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
            this.resizePages(zoom);
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
        if (this.ifEdge) {
            this.zoomInt = zoomInt;
        }
        else {
            this.zoomInt = null;
        }
        if (!this.ifEdge) {
            this.transform = 'scale(' + zoomInt + ')';
            this.transformOrigin = 'top left';
        }
        else {
            this.transform = "";
            this.transformOrigin = "";
        }
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
        // Images and Excel-related files receiving dimensions in px from server
        this.minWidth = maxWidth + FileUtil.find(this.file.guid, false).unit;
    }
    /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    getScrollWidth(elm) {
        return elm.offsetWidth - elm.clientWidth;
    }
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    resizePages(zoom) {
        /** @type {?} */
        const zoomInt = zoom === 100 ? 1 : zoom / 100;
        /** @type {?} */
        const viewPortWidth = this.el.nativeElement.parentElement.offsetWidth;
        /** @type {?} */
        const scrollWidth = this.getScrollWidth(this.el.nativeElement.parentElement);
        this.width = (viewPortWidth / zoomInt - scrollWidth / zoomInt) + 'px';
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
    ZoomDirective.prototype.file;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBS3hDLE1BQU0sT0FBTyxhQUFhOzs7OztJQWN4QixZQUFvQixZQUF5QixFQUFFLEVBQWM7UUFBekMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFacEMsZUFBVSxHQUFHLElBQUksQ0FBQztRQUczQixXQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBVXJFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxV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Qzs7SUFDMUMsaUNBQWlEOztJQUNqRCwyQkFBb0I7Ozs7O0lBRVIscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQge0ZpbGVVdGlsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkWm9vbV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBab29tRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIHpvb21BY3RpdmUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGZpbGU7XHJcblxyXG4gIGlmRWRnZSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZWRnZScpID4gLTE7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuem9vbScpIHpvb21JbnQ6IG51bWJlcjtcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIHRyYW5zZm9ybTogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtLW9yaWdpbicpIHRyYW5zZm9ybU9yaWdpbjogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSB3aWR0aDogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoJykgbWluV2lkdGg6IHN0cmluZztcclxuICBlbDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgICB0aGlzLnJlc2l6ZVBhZ2VzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoISB0aGlzLnpvb21BY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xyXG4gICAgdGhpcy5fem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHpvb20pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdHlsZXMoem9vbSk7XHJcbiAgICAgIHRoaXMucmVzaXplUGFnZXMoem9vbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3R5bGVzKHpvb20pIHtcclxuICAgIGlmICghIHRoaXMuem9vbUFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgem9vbUludCA9IHpvb20gPT09IDEwMCA/IDEgOiB6b29tIC8gMTAwO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5pZkVkZ2UpIHtcclxuICAgICAgdGhpcy56b29tSW50ID0gem9vbUludDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnpvb21JbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIXRoaXMuaWZFZGdlKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gJ3NjYWxlKCcgKyB6b29tSW50ICsgJyknO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9ICd0b3AgbGVmdCc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSBcIlwiO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1heFdpZHRoID0gMDtcclxuICAgIHRoaXMuZmlsZS5wYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKHBhZ2Uud2lkdGggPiBtYXhXaWR0aCl7XHJcbiAgICAgICAgICBtYXhXaWR0aCA9IHBhZ2Uud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJbWFnZXMgYW5kIEV4Y2VsLXJlbGF0ZWQgZmlsZXMgcmVjZWl2aW5nIGRpbWVuc2lvbnMgaW4gcHggZnJvbSBzZXJ2ZXJcclxuICAgIHRoaXMubWluV2lkdGggPSBtYXhXaWR0aCArIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS51bml0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTY3JvbGxXaWR0aChlbG0pe1xyXG4gICAgcmV0dXJuIGVsbS5vZmZzZXRXaWR0aCAtIGVsbS5jbGllbnRXaWR0aDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzaXplUGFnZXMoem9vbSl7XHJcbiAgICBjb25zdCB6b29tSW50ID0gem9vbSA9PT0gMTAwID8gMSA6IHpvb20gLyAxMDA7XHJcblxyXG4gICAgY29uc3Qgdmlld1BvcnRXaWR0aCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgY29uc3Qgc2Nyb2xsV2lkdGggPSB0aGlzLmdldFNjcm9sbFdpZHRoKHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcclxuICAgIHRoaXMud2lkdGggPSAodmlld1BvcnRXaWR0aC96b29tSW50IC0gc2Nyb2xsV2lkdGgvem9vbUludCkgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==