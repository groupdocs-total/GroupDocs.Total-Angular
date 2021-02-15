/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { FileDescription, FileUtil } from "../file.service";
import { ZoomService } from "../zoom.service";
import * as Hammer from 'hammerjs';
import { WindowService } from '../window.service';
import * as jquery from 'jquery';
import { NavigateService } from '../navigate.service';
/** @type {?} */
var $ = jquery;
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(_elementRef, _zoomService, _windowService, _navigateService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._navigateService = _navigateService;
        this.wait = false;
        this.docWidth = null;
        this.docHeight = null;
        this.viewportWidth = null;
        this.viewportHeight = null;
        this.scale = null;
        this.lastScale = null;
        this.container = null;
        this.doc = null;
        this.x = 0;
        this.lastX = 0;
        this.y = 0;
        this.lastY = 0;
        this.pinchCenter = null;
        this.pinchCenterOffset = null;
        this.curWidth = 0;
        this.curHeight = 0;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.zoom = val;
        }));
        this.isDesktop = _windowService.isDesktop();
        this._navigateService.navigate.subscribe((((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.selectedPage = value;
        }))));
    }
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.ifPresentation()) {
            this.selectedPage = this._navigateService.currentPage;
        }
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // For current iteration we take .panzoom as a document
        this.doc = this._elementRef.nativeElement.children.item(0).children.item(0);
        // For current iteration we take .gd-document as a container
        this.container = this._elementRef.nativeElement;
        this.docWidth = this.doc.clientWidth;
        this.docHeight = this.doc.clientHeight;
        this.viewportWidth = this.doc.offsetWidth;
        // For cases where we already have zoom defined we should include it
        this.scale = (this.viewportWidth / this.docWidth) * this._zoomService.zoom / 100;
        this.lastScale = this.scale;
        this.viewportHeight = this.container.offsetHeight;
        this.curWidth = this.docWidth * this.scale;
        this.curHeight = this.docHeight * this.scale;
        /** @type {?} */
        var hammer = new Hammer(this.container);
    };
    // TODO: this temporary crutch for Excel files should be documented
    // TODO: this temporary crutch for Excel files should be documented
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ifExcel = 
    // TODO: this temporary crutch for Excel files should be documented
    /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.file.guid, false).format === "Microsoft Excel";
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ifPresentation = /**
     * @return {?}
     */
    function () {
        return FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint";
    };
    /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    DocumentComponent.prototype.getDimensionWithUnit = /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    function (value, pageNumber) {
        return this.ifPresentation() && this.showActiveSlide && !this.isVisible(pageNumber) ? 0 : value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ifEdge = /**
     * @return {?}
     */
    function () {
        return navigator.userAgent.toLowerCase().indexOf('edge') > -1;
    };
    /**
     * @return {?}
     */
    DocumentComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        // for now we are not sure that need this action in current implementation
        // const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        // const element = elementNodeListOf.item(0);
        // if (element) {
        //   $(element).trigger('focus');
        // }
    };
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    DocumentComponent.prototype.isVisible = /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        if (this.ifPresentation()) {
            return pageNumber === this.selectedPage ? true : false;
        }
        else {
            return true;
        }
    };
    DocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"ifExcel() ? 'page excel' : ifPresentation() && showActiveSlide ? (isVisible(page.number) ? 'page presentation active' : 'page presentation') : 'page'\" *ngFor=\"let page of file?.pages\"\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page *ngIf=\"!showActiveSlide || isVisible(page.number)\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll;touch-action:auto!important}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);-webkit-transition:.3s;transition:.3s}.page.excel{overflow:auto}.page.presentation{margin:0;-webkit-transition:unset;transition:unset}.page.presentation.active{margin:20px}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    DocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: WindowService },
        { type: NavigateService }
    ]; };
    DocumentComponent.propDecorators = {
        mode: [{ type: Input }],
        preloadPageCount: [{ type: Input }],
        file: [{ type: Input }],
        selectedPage: [{ type: Input }],
        showActiveSlide: [{ type: Input }]
    };
    return DocumentComponent;
}());
export { DocumentComponent };
if (false) {
    /** @type {?} */
    DocumentComponent.prototype.mode;
    /** @type {?} */
    DocumentComponent.prototype.preloadPageCount;
    /** @type {?} */
    DocumentComponent.prototype.file;
    /** @type {?} */
    DocumentComponent.prototype.selectedPage;
    /** @type {?} */
    DocumentComponent.prototype.showActiveSlide;
    /** @type {?} */
    DocumentComponent.prototype.wait;
    /** @type {?} */
    DocumentComponent.prototype.zoom;
    /** @type {?} */
    DocumentComponent.prototype.docWidth;
    /** @type {?} */
    DocumentComponent.prototype.docHeight;
    /** @type {?} */
    DocumentComponent.prototype.viewportWidth;
    /** @type {?} */
    DocumentComponent.prototype.viewportHeight;
    /** @type {?} */
    DocumentComponent.prototype.scale;
    /** @type {?} */
    DocumentComponent.prototype.lastScale;
    /** @type {?} */
    DocumentComponent.prototype.container;
    /** @type {?} */
    DocumentComponent.prototype.doc;
    /** @type {?} */
    DocumentComponent.prototype.x;
    /** @type {?} */
    DocumentComponent.prototype.lastX;
    /** @type {?} */
    DocumentComponent.prototype.y;
    /** @type {?} */
    DocumentComponent.prototype.lastY;
    /** @type {?} */
    DocumentComponent.prototype.pinchCenter;
    /** @type {?} */
    DocumentComponent.prototype.pinchCenterOffset;
    /** @type {?} */
    DocumentComponent.prototype.curWidth;
    /** @type {?} */
    DocumentComponent.prototype.curHeight;
    /** @type {?} */
    DocumentComponent.prototype.isDesktop;
    /**
     * @type {?}
     * @protected
     */
    DocumentComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    DocumentComponent.prototype._navigateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRWhELENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBaUNFLDJCQUFzQixXQUFvQyxFQUN0QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFIckQsaUJBY0M7UUFkcUIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUF4QnJELFNBQUksR0FBRyxLQUFLLENBQUM7UUFHYixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIs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QUNMLEtBQUs7K0JBQ0wsS0FBSztrQ0FDTCxLQUFLOztJQXVHUix3QkFBQztDQUFBLEFBbEhELElBa0hDO1NBN0dZLGlCQUFpQjs7O0lBRTVCLGlDQUF1Qjs7SUFDdkIsNkNBQWtDOztJQUNsQyxpQ0FBK0I7O0lBQy9CLHlDQUE4Qjs7SUFDOUIsNENBQWtDOztJQUNsQyxpQ0FBYTs7SUFDYixpQ0FBYTs7SUFFYixxQ0FBZ0I7O0lBQ2hCLHNDQUFpQjs7SUFDakIsMENBQXFCOztJQUNyQiwyQ0FBc0I7O0lBQ3RCLGtDQUFhOztJQUNiLHNDQUFpQjs7SUFDakIsc0NBQWlCOztJQUNqQixnQ0FBVzs7SUFDWCw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDViw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDVix3Q0FBbUI7O0lBQ25CLDhDQUF5Qjs7SUFDekIscUNBQWE7O0lBQ2Isc0NBQWM7O0lBQ2Qsc0NBQW1COzs7OztJQUVQLHdDQUE4Qzs7Ozs7SUFDOUMseUNBQWlDOzs7OztJQUNqQywyQ0FBcUM7Ozs7O0lBQ3JDLDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWxlRGVzY3JpcHRpb24sIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi4vem9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tICcuLi93aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IE5hdmlnYXRlU2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRlLnNlcnZpY2UnO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kb2N1bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgbW9kZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJlbG9hZFBhZ2VDb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIEBJbnB1dCgpIHNlbGVjdGVkUGFnZTogbnVtYmVyO1xuICBASW5wdXQoKSBzaG93QWN0aXZlU2xpZGU6IGJvb2xlYW47XG4gIHdhaXQgPSBmYWxzZTtcbiAgem9vbTogbnVtYmVyO1xuXG4gIGRvY1dpZHRoID0gbnVsbDtcbiAgZG9jSGVpZ2h0ID0gbnVsbDtcbiAgdmlld3BvcnRXaWR0aCA9IG51bGw7XG4gIHZpZXdwb3J0SGVpZ2h0ID0gbnVsbDtcbiAgc2NhbGUgPSBudWxsO1xuICBsYXN0U2NhbGUgPSBudWxsO1xuICBjb250YWluZXIgPSBudWxsO1xuICBkb2MgPSBudWxsO1xuICB4ID0gMDtcbiAgbGFzdFggPSAwO1xuICB5ID0gMDtcbiAgbGFzdFkgPSAwO1xuICBwaW5jaENlbnRlciA9IG51bGw7XG4gIHBpbmNoQ2VudGVyT2Zmc2V0ID0gbnVsbDtcbiAgY3VyV2lkdGggPSAwO1xuICBjdXJIZWlnaHQgPSAwO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSkge1xuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMuem9vbSA9IHZhbDtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG5cbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKCgoXG4gICAgICB2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlID0gdmFsdWU7XG4gICAgICB9KSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSlcbiAgICB7XG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZSA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UgdGFrZSAucGFuem9vbSBhcyBhIGRvY3VtZW50XG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5nZC1kb2N1bWVudCBhcyBhIGNvbnRhaW5lclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5kb2NXaWR0aCA9IHRoaXMuZG9jLmNsaWVudFdpZHRoO1xuICAgIHRoaXMuZG9jSGVpZ2h0ID0gdGhpcy5kb2MuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHRoaXMuZG9jLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gRm9yIGNhc2VzIHdoZXJlIHdlIGFscmVhZHkgaGF2ZSB6b29tIGRlZmluZWQgd2Ugc2hvdWxkIGluY2x1ZGUgaXRcbiAgICB0aGlzLnNjYWxlID0gKHRoaXMudmlld3BvcnRXaWR0aCAvIHRoaXMuZG9jV2lkdGgpICogdGhpcy5fem9vbVNlcnZpY2Uuem9vbSAvIDEwMDtcblxuICAgIHRoaXMubGFzdFNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuY3VyV2lkdGggPSB0aGlzLmRvY1dpZHRoICogdGhpcy5zY2FsZTtcbiAgICB0aGlzLmN1ckhlaWdodCA9IHRoaXMuZG9jSGVpZ2h0ICogdGhpcy5zY2FsZTtcblxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgLy8gVE9ETzogdGhpcyB0ZW1wb3JhcnkgY3J1dGNoIGZvciBFeGNlbCBmaWxlcyBzaG91bGQgYmUgZG9jdW1lbnRlZFxuICBpZkV4Y2VsKCkge1xuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBFeGNlbFwiO1xuICB9XG5cbiAgaWZQcmVzZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IFBvd2VyUG9pbnRcIjtcbiAgfVxuXG4gIGdldERpbWVuc2lvbldpdGhVbml0KHZhbHVlOiBudW1iZXIsIHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmlmUHJlc2VudGF0aW9uKCkgJiYgdGhpcy5zaG93QWN0aXZlU2xpZGUgJiYgIXRoaXMuaXNWaXNpYmxlKHBhZ2VOdW1iZXIpID8gMCA6IHZhbHVlICsgKHRoaXMubW9kZSA/IEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS51bml0IDogJ3B4Jyk7XG4gIH1cblxuICBpZkVkZ2UoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdlZGdlJykgPiAtMTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAvLyBmb3Igbm93IHdlIGFyZSBub3Qgc3VyZSB0aGF0IG5lZWQgdGhpcyBhY3Rpb24gaW4gY3VycmVudCBpbXBsZW1lbnRhdGlvblxuICAgIC8vIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XG4gICAgLy8gY29uc3QgZWxlbWVudCA9IGVsZW1lbnROb2RlTGlzdE9mLml0ZW0oMCk7XG4gICAgLy8gaWYgKGVsZW1lbnQpIHtcbiAgICAvLyAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAvLyB9XG4gIH1cblxuICBpc1Zpc2libGUocGFnZU51bWJlcikge1xuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgIHJldHVybiBwYWdlTnVtYmVyID09PSB0aGlzLnNlbGVjdGVkUGFnZSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==