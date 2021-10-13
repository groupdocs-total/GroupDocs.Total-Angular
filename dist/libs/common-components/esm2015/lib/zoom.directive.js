/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, ElementRef } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { FileUtil } from "./file.service";
import { WindowService } from './window.service';
export class ZoomDirective {
    /**
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} el
     */
    constructor(_zoomService, _windowService, el) {
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.zoomActive = true;
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
        if (this._windowService.isEdge()) {
            this.zoomInt = zoomInt;
        }
        else {
            this.zoomInt = null;
        }
        if (!this._windowService.isEdge()) {
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
     * @param {?} elm
     * @return {?}
     */
    getScrollHeight(elm) {
        return elm.offsetHeight - elm.clientHeight;
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
        const viewPortHeight = this.el.nativeElement.parentElement.offsetHeight;
        /** @type {?} */
        const scrollWidth = this.getScrollWidth(this.el.nativeElement.parentElement);
        /** @type {?} */
        const scrollHeight = this.getScrollHeight(this.el.nativeElement.parentElement);
        this.width = (viewPortWidth / zoomInt - scrollWidth / zoomInt) + 'px';
        this.height = (viewPortHeight / zoomInt - scrollHeight / zoomInt) + 'px';
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
    { type: WindowService },
    { type: ElementRef }
];
ZoomDirective.propDecorators = {
    zoomActive: [{ type: Input }],
    file: [{ type: Input }],
    zoomInt: [{ type: HostBinding, args: ['style.zoom',] }],
    transform: [{ type: HostBinding, args: ['style.transform',] }],
    transformOrigin: [{ type: HostBinding, args: ['style.transform-origin',] }],
    width: [{ type: HostBinding, args: ['style.width',] }],
    height: [{ type: HostBinding, args: ['style.height',] }],
    minWidth: [{ type: HostBinding, args: ['style.min-width',] }]
};
if (false) {
    /** @type {?} */
    ZoomDirective.prototype.zoomActive;
    /** @type {?} */
    ZoomDirective.prototype.file;
    /** @type {?} */
    ZoomDirective.prototype.zoomInt;
    /** @type {?} */
    ZoomDirective.prototype.transform;
    /** @type {?} */
    ZoomDirective.prototype.transformOrigin;
    /** @type {?} */
    ZoomDirective.prototype.width;
    /** @type {?} */
    ZoomDirective.prototype.height;
    /** @type {?} */
    ZoomDirective.prototype.minWidth;
    /** @type {?} */
    ZoomDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ZoomDirective.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    ZoomDirective.prototype._windowService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUtqRCxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBYXhCLFlBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBRSxFQUFjO1FBQWhGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFYM0UsZUFBVSxHQUFHLElBQUksQ0FBQztRQVl6QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFB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QyxDQUFDO0lBQ3pDLENBQUM7OztZQWpHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFOTyxXQUFXO1lBRVYsYUFBYTtZQUhtRCxVQUFVOzs7eUJBVWhGLEtBQUs7bUJBQ0wsS0FBSztzQkFFTCxXQUFXLFNBQUMsWUFBWTt3QkFDeEIsV0FBVyxTQUFDLGlCQUFpQjs4QkFDN0IsV0FBVyxTQUFDLHdCQUF3QjtvQkFDcEMsV0FBVyxTQUFDLGFBQWE7cUJBQ3pCLFdBQVcsU0FBQyxjQUFjO3VCQUMxQixXQUFXLFNBQUMsaUJBQWlCOzs7O0lBUjlCLG1DQUEyQjs7SUFDM0IsNkJBQWM7O0lBRWQsZ0NBQTJDOztJQUMzQyxrQ0FBa0Q7O0lBQ2xELHdDQUErRDs7SUFDL0QsOEJBQTBDOztJQUMxQywrQkFBNEM7O0lBQzVDLGlDQUFpRDs7SUFDakQsMkJBQW9COzs7OztJQUVSLHFDQUFpQzs7Ozs7SUFBRSx1Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0IHtGaWxlVXRpbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFpvb21dJ1xufSlcbmV4cG9ydCBjbGFzcyBab29tRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgem9vbUFjdGl2ZSA9IHRydWU7XG4gIEBJbnB1dCgpIGZpbGU7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS56b29tJykgem9vbUludDogbnVtYmVyO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIHRyYW5zZm9ybTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybS1vcmlnaW4nKSB0cmFuc2Zvcm1PcmlnaW46IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIHdpZHRoOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoJykgbWluV2lkdGg6IHN0cmluZztcbiAgZWw6IEVsZW1lbnRSZWY8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0eWxlcyh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgICB0aGlzLnJlc2l6ZVBhZ2VzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCEgdGhpcy56b29tQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XG4gICAgdGhpcy5fem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHpvb20pID0+IHtcbiAgICAgIHRoaXMuc2V0U3R5bGVzKHpvb20pO1xuICAgICAgdGhpcy5yZXNpemVQYWdlcyh6b29tKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGVzKHpvb20pIHtcbiAgICBpZiAoISB0aGlzLnpvb21BY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB6b29tSW50ID0gem9vbSA9PT0gMTAwID8gMSA6IHpvb20gLyAxMDA7XG4gICAgXG4gICAgaWYgKHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNFZGdlKCkpIHtcbiAgICAgIHRoaXMuem9vbUludCA9IHpvb21JbnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy56b29tSW50ID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgaWYgKCF0aGlzLl93aW5kb3dTZXJ2aWNlLmlzRWRnZSgpKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSA9ICdzY2FsZSgnICsgem9vbUludCArICcpJztcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gJ3RvcCBsZWZ0JztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IFwiXCI7XG4gICAgfVxuXG4gICAgbGV0IG1heFdpZHRoID0gMDtcbiAgICB0aGlzLmZpbGUucGFnZXMuZm9yRWFjaChwYWdlID0+IHtcbiAgICAgIHtcbiAgICAgICAgaWYgKHBhZ2Uud2lkdGggPiBtYXhXaWR0aCl7XG4gICAgICAgICAgbWF4V2lkdGggPSBwYWdlLndpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJbWFnZXMgYW5kIEV4Y2VsLXJlbGF0ZWQgZmlsZXMgcmVjZWl2aW5nIGRpbWVuc2lvbnMgaW4gcHggZnJvbSBzZXJ2ZXJcbiAgICB0aGlzLm1pbldpZHRoID0gbWF4V2lkdGggKyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkudW5pdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2Nyb2xsV2lkdGgoZWxtKXtcbiAgICByZXR1cm4gZWxtLm9mZnNldFdpZHRoIC0gZWxtLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTY3JvbGxIZWlnaHQoZWxtKXtcbiAgICByZXR1cm4gZWxtLm9mZnNldEhlaWdodCAtIGVsbS5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZVBhZ2VzKHpvb20pe1xuICAgIGNvbnN0IHpvb21JbnQgPSB6b29tID09PSAxMDAgPyAxIDogem9vbSAvIDEwMDtcblxuICAgIGNvbnN0IHZpZXdQb3J0V2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCB2aWV3UG9ydEhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBzY3JvbGxXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgodGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICB0aGlzLndpZHRoID0gKHZpZXdQb3J0V2lkdGgvem9vbUludCAtIHNjcm9sbFdpZHRoL3pvb21JbnQpICsgJ3B4JztcbiAgICB0aGlzLmhlaWdodCA9ICh2aWV3UG9ydEhlaWdodC96b29tSW50IC0gc2Nyb2xsSGVpZ2h0L3pvb21JbnQpICsgJ3B4JztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0eWxlcyh0aGlzLl96b29tU2VydmljZS56b29tKTtcbiAgfVxufVxuIl19