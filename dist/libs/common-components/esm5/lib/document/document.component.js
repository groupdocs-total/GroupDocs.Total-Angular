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
        return this.ifPresentation() && !this.isVisible(pageNumber) ? 0 : value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
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
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"ifExcel() ? 'page excel' : ifPresentation() ? (isVisible(page.number) ? 'page presentation active' : 'page presentation') : 'page'\" *ngFor=\"let page of file?.pages\"\r\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\r\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page *ngIf=\"isVisible(page.number)\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\r\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [":host{flex:1;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll;touch-action:auto!important}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.page.excel{overflow:auto}.page.presentation{margin:0;transition:unset}.page.presentation.active{margin:20px}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
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
        selectedPage: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRWhELENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBZ0NFLDJCQUFzQixXQUFvQyxFQUN0QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFIckQsaUJBY0M7UUFkcUIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUF4QnJELFNBQUksR0FBRyxLQUFLLENBQUM7UUFHYixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIs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O0lBdUdSLHdCQUFDO0NBQUEsQUFqSEQsSUFpSEM7U0E1R1ksaUJBQWlCOzs7SUFFNUIsaUNBQXVCOztJQUN2Qiw2Q0FBa0M7O0lBQ2xDLGlDQUErQjs7SUFDL0IseUNBQThCOztJQUM5QixpQ0FBYTs7SUFDYixpQ0FBYTs7SUFFYixxQ0FBZ0I7O0lBQ2hCLHNDQUFpQjs7SUFDakIsMENBQXFCOztJQUNyQiwyQ0FBc0I7O0lBQ3RCLGtDQUFhOztJQUNiLHNDQUFpQjs7SUFDakIsc0NBQWlCOztJQUNqQixnQ0FBVzs7SUFDWCw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDViw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDVix3Q0FBbUI7O0lBQ25CLDhDQUF5Qjs7SUFDekIscUNBQWE7O0lBQ2Isc0NBQWM7O0lBQ2Qsc0NBQW1COzs7OztJQUVQLHdDQUE4Qzs7Ozs7SUFDOUMseUNBQWlDOzs7OztJQUNqQywyQ0FBcUM7Ozs7O0lBQ3JDLDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBPbkNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGaWxlRGVzY3JpcHRpb24sIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcclxuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tICcuLi93aW5kb3cuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0ZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWRvY3VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByZWxvYWRQYWdlQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRQYWdlOiBudW1iZXI7XHJcbiAgd2FpdCA9IGZhbHNlO1xyXG4gIHpvb206IG51bWJlcjtcclxuXHJcbiAgZG9jV2lkdGggPSBudWxsO1xyXG4gIGRvY0hlaWdodCA9IG51bGw7XHJcbiAgdmlld3BvcnRXaWR0aCA9IG51bGw7XHJcbiAgdmlld3BvcnRIZWlnaHQgPSBudWxsO1xyXG4gIHNjYWxlID0gbnVsbDtcclxuICBsYXN0U2NhbGUgPSBudWxsO1xyXG4gIGNvbnRhaW5lciA9IG51bGw7XHJcbiAgZG9jID0gbnVsbDtcclxuICB4ID0gMDtcclxuICBsYXN0WCA9IDA7XHJcbiAgeSA9IDA7XHJcbiAgbGFzdFkgPSAwO1xyXG4gIHBpbmNoQ2VudGVyID0gbnVsbDtcclxuICBwaW5jaENlbnRlck9mZnNldCA9IG51bGw7XHJcbiAgY3VyV2lkdGggPSAwO1xyXG4gIGN1ckhlaWdodCA9IDA7XHJcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlKSB7XHJcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHZhbDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuem9vbSA9IHZhbDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZSgoKFxyXG4gICAgICB2YWx1ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2UgPSB2YWx1ZTtcclxuICAgICAgfSkpKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuaWZQcmVzZW50YXRpb24oKSlcclxuICAgIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFBhZ2UgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5wYW56b29tIGFzIGEgZG9jdW1lbnRcclxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5nZC1kb2N1bWVudCBhcyBhIGNvbnRhaW5lclxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5kb2NXaWR0aCA9IHRoaXMuZG9jLmNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5kb2NIZWlnaHQgPSB0aGlzLmRvYy5jbGllbnRIZWlnaHQ7XHJcbiAgICB0aGlzLnZpZXdwb3J0V2lkdGggPSB0aGlzLmRvYy5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAvLyBGb3IgY2FzZXMgd2hlcmUgd2UgYWxyZWFkeSBoYXZlIHpvb20gZGVmaW5lZCB3ZSBzaG91bGQgaW5jbHVkZSBpdFxyXG4gICAgdGhpcy5zY2FsZSA9ICh0aGlzLnZpZXdwb3J0V2lkdGggLyB0aGlzLmRvY1dpZHRoKSAqIHRoaXMuX3pvb21TZXJ2aWNlLnpvb20gLyAxMDA7XHJcblxyXG4gICAgdGhpcy5sYXN0U2NhbGUgPSB0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuICAgIHRoaXMuY3VyV2lkdGggPSB0aGlzLmRvY1dpZHRoICogdGhpcy5zY2FsZTtcclxuICAgIHRoaXMuY3VySGVpZ2h0ID0gdGhpcy5kb2NIZWlnaHQgKiB0aGlzLnNjYWxlO1xyXG5cclxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogdGhpcyB0ZW1wb3JhcnkgY3J1dGNoIGZvciBFeGNlbCBmaWxlcyBzaG91bGQgYmUgZG9jdW1lbnRlZFxyXG4gIGlmRXhjZWwoKSB7XHJcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgRXhjZWxcIjtcclxuICB9XHJcblxyXG4gIGlmUHJlc2VudGF0aW9uKCkge1xyXG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IFBvd2VyUG9pbnRcIjtcclxuICB9XHJcblxyXG4gIGdldERpbWVuc2lvbldpdGhVbml0KHZhbHVlOiBudW1iZXIsIHBhZ2VOdW1iZXI6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiAhdGhpcy5pc1Zpc2libGUocGFnZU51bWJlcikgPyAwIDogdmFsdWUgKyAodGhpcy5tb2RlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLnVuaXQgOiAncHgnKTtcclxuICB9XHJcblxyXG4gIGlmRWRnZSgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZWRnZScpID4gLTE7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgICAvLyBmb3Igbm93IHdlIGFyZSBub3Qgc3VyZSB0aGF0IG5lZWQgdGhpcyBhY3Rpb24gaW4gY3VycmVudCBpbXBsZW1lbnRhdGlvblxyXG4gICAgLy8gY29uc3QgZWxlbWVudE5vZGVMaXN0T2YgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdkLXdyYXBwZXInKTtcclxuICAgIC8vIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50Tm9kZUxpc3RPZi5pdGVtKDApO1xyXG4gICAgLy8gaWYgKGVsZW1lbnQpIHtcclxuICAgIC8vICAgJChlbGVtZW50KS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgaXNWaXNpYmxlKHBhZ2VOdW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcclxuICAgICAgcmV0dXJuIHBhZ2VOdW1iZXIgPT09IHRoaXMuc2VsZWN0ZWRQYWdlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=