/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, ElementRef } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { FileUtil } from "./file.service";
import { WindowService } from './window.service';
var ZoomDirective = /** @class */ (function () {
    function ZoomDirective(_zoomService, _windowService, el) {
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.zoomActive = true;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setStyles(this._zoomService.zoom);
        this.resizePages(this._zoomService.zoom);
    };
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe((/**
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
            _this.setStyles(zoom);
            _this.resizePages(zoom);
        }));
    };
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    ZoomDirective.prototype.setStyles = /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    function (zoom) {
        if (!this.zoomActive) {
            return;
        }
        /** @type {?} */
        var zoomInt = zoom === 100 ? 1 : zoom / 100;
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
        var maxWidth = 0;
        this.file.pages.forEach((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            {
                if (page.width > maxWidth) {
                    maxWidth = page.width;
                }
            }
        }));
        // Images and Excel-related files receiving dimensions in px from server
        this.minWidth = maxWidth + FileUtil.find(this.file.guid, false).unit;
    };
    /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    ZoomDirective.prototype.getScrollWidth = /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    function (elm) {
        return elm.offsetWidth - elm.clientWidth;
    };
    /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    ZoomDirective.prototype.getScrollHeight = /**
     * @private
     * @param {?} elm
     * @return {?}
     */
    function (elm) {
        return elm.offsetHeight - elm.clientHeight;
    };
    /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    ZoomDirective.prototype.resizePages = /**
     * @private
     * @param {?} zoom
     * @return {?}
     */
    function (zoom) {
        /** @type {?} */
        var zoomInt = zoom === 100 ? 1 : zoom / 100;
        /** @type {?} */
        var viewPortWidth = this.el.nativeElement.parentElement.offsetWidth;
        /** @type {?} */
        var viewPortHeight = this.el.nativeElement.parentElement.offsetHeight;
        /** @type {?} */
        var scrollWidth = this.getScrollWidth(this.el.nativeElement.parentElement);
        /** @type {?} */
        var scrollHeight = this.getScrollHeight(this.el.nativeElement.parentElement);
        this.width = (viewPortWidth / zoomInt - scrollWidth / zoomInt) + 'px';
        this.height = (viewPortHeight / zoomInt - scrollHeight / zoomInt) + 'px';
    };
    /**
     * @return {?}
     */
    ZoomDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setStyles(this._zoomService.zoom);
    };
    ZoomDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdZoom]'
                },] }
    ];
    /** @nocollapse */
    ZoomDirective.ctorParameters = function () { return [
        { type: ZoomService },
        { type: WindowService },
        { type: ElementRef }
    ]; };
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
    return ZoomDirective;
}());
export { ZoomDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvem9vbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQWdCRSx1QkFBb0IsWUFBeUIsRUFBVSxjQUE2QixFQUFFLEVBQWM7UUFBaEYsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVgzRSxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBWXpCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDtJQUNBLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUs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QUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQWpHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQU5PLFdBQVc7Z0JBRVYsYUFBYTtnQkFIbUQsVUFBVTs7OzZCQVVoRixLQUFLO3VCQUNMLEtBQUs7MEJBRUwsV0FBVyxTQUFDLFlBQVk7NEJBQ3hCLFdBQVcsU0FBQyxpQkFBaUI7a0NBQzdCLFdBQVcsU0FBQyx3QkFBd0I7d0JBQ3BDLFdBQVcsU0FBQyxhQUFhO3lCQUN6QixXQUFXLFNBQUMsY0FBYzsyQkFDMUIsV0FBVyxTQUFDLGlCQUFpQjs7SUFxRmhDLG9CQUFDO0NBQUEsQUFsR0QsSUFrR0M7U0EvRlksYUFBYTs7O0lBRXhCLG1DQUEyQjs7SUFDM0IsNkJBQWM7O0lBRWQsZ0NBQTJDOztJQUMzQyxrQ0FBa0Q7O0lBQ2xELHdDQUErRDs7SUFDL0QsOEJBQTBDOztJQUMxQywrQkFBNEM7O0lBQzVDLGlDQUFpRDs7SUFDakQsMkJBQW9COzs7OztJQUVSLHFDQUFpQzs7Ozs7SUFBRSx1Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RmlsZVV0aWx9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFpvb21dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgWm9vbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSB6b29tQWN0aXZlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBmaWxlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnpvb20nKSB6b29tSW50OiBudW1iZXI7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2Zvcm0nKSB0cmFuc2Zvcm06IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybS1vcmlnaW4nKSB0cmFuc2Zvcm1PcmlnaW46IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJykgd2lkdGg6IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIGhlaWdodDogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoJykgbWluV2lkdGg6IHN0cmluZztcclxuICBlbDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgICB0aGlzLnJlc2l6ZVBhZ2VzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoISB0aGlzLnpvb21BY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3R5bGVzKHRoaXMuX3pvb21TZXJ2aWNlLnpvb20pO1xyXG4gICAgdGhpcy5fem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHpvb20pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdHlsZXMoem9vbSk7XHJcbiAgICAgIHRoaXMucmVzaXplUGFnZXMoem9vbSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3R5bGVzKHpvb20pIHtcclxuICAgIGlmICghIHRoaXMuem9vbUFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgem9vbUludCA9IHpvb20gPT09IDEwMCA/IDEgOiB6b29tIC8gMTAwO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5fd2luZG93U2VydmljZS5pc0VkZ2UoKSkge1xyXG4gICAgICB0aGlzLnpvb21JbnQgPSB6b29tSW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuem9vbUludCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5fd2luZG93U2VydmljZS5pc0VkZ2UoKSkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9ICdzY2FsZSgnICsgem9vbUludCArICcpJztcclxuICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSAndG9wIGxlZnQnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gXCJcIjtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtYXhXaWR0aCA9IDA7XHJcbiAgICB0aGlzLmZpbGUucGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgICAge1xyXG4gICAgICAgIGlmIChwYWdlLndpZHRoID4gbWF4V2lkdGgpe1xyXG4gICAgICAgICAgbWF4V2lkdGggPSBwYWdlLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXHJcbiAgICB0aGlzLm1pbldpZHRoID0gbWF4V2lkdGggKyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkudW5pdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U2Nyb2xsV2lkdGgoZWxtKXtcclxuICAgIHJldHVybiBlbG0ub2Zmc2V0V2lkdGggLSBlbG0uY2xpZW50V2lkdGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNjcm9sbEhlaWdodChlbG0pe1xyXG4gICAgcmV0dXJuIGVsbS5vZmZzZXRIZWlnaHQgLSBlbG0uY2xpZW50SGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNpemVQYWdlcyh6b29tKXtcclxuICAgIGNvbnN0IHpvb21JbnQgPSB6b29tID09PSAxMDAgPyAxIDogem9vbSAvIDEwMDtcclxuXHJcbiAgICBjb25zdCB2aWV3UG9ydFdpZHRoID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBjb25zdCB2aWV3UG9ydEhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5nZXRTY3JvbGxXaWR0aCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCk7XHJcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCk7XHJcbiAgICB0aGlzLndpZHRoID0gKHZpZXdQb3J0V2lkdGgvem9vbUludCAtIHNjcm9sbFdpZHRoL3pvb21JbnQpICsgJ3B4JztcclxuICAgIHRoaXMuaGVpZ2h0ID0gKHZpZXdQb3J0SGVpZ2h0L3pvb21JbnQgLSBzY3JvbGxIZWlnaHQvem9vbUludCkgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdHlsZXModGhpcy5fem9vbVNlcnZpY2Uuem9vbSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==