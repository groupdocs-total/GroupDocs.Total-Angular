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
        /** @type {?} */
        var elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        /** @type {?} */
        var element = elementNodeListOf.item(0);
        if (element) {
            $(element).trigger('focus');
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQU1OLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRWhELENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBaUNFLDJCQUFzQixXQUFvQyxFQUN0QyxZQUF5QixFQUN6QixjQUE2QixFQUM3QixnQkFBaUM7UUFIckQsaUJBY0M7UUFkcUIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUF4QnJELFNBQUksR0FBRyxLQUFLLENBQUM7UUFHYixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIs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UyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwyK0JBQXdDOztpQkFFekM7Ozs7Z0JBckJDLFVBQVU7Z0JBU0osV0FBVztnQkFFWCxhQUFhO2dCQUVaLGVBQWU7Ozt1QkFXckIsS0FBSzttQ0FDTCxLQUFLO3VCQUNMLEtBQUs7K0JBQ0wsS0FBSztrQ0FDTCxLQUFLOztJQXNHUix3QkFBQztDQUFBLEFBakhELElBaUhDO1NBNUdZLGlCQUFpQjs7O0lBRTVCLGlDQUF1Qjs7SUFDdkIsNkNBQWtDOztJQUNsQyxpQ0FBK0I7O0lBQy9CLHlDQUE4Qjs7SUFDOUIsNENBQWtDOztJQUNsQyxpQ0FBYTs7SUFDYixpQ0FBYTs7SUFFYixxQ0FBZ0I7O0lBQ2hCLHNDQUFpQjs7SUFDakIsMENBQXFCOztJQUNyQiwyQ0FBc0I7O0lBQ3RCLGtDQUFhOztJQUNiLHNDQUFpQjs7SUFDakIsc0NBQWlCOztJQUNqQixnQ0FBVzs7SUFDWCw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDViw4QkFBTTs7SUFDTixrQ0FBVTs7SUFDVix3Q0FBbUI7O0lBQ25CLDhDQUF5Qjs7SUFDekIscUNBQWE7O0lBQ2Isc0NBQWM7O0lBQ2Qsc0NBQW1COzs7OztJQUVQLHdDQUE4Qzs7Ozs7SUFDOUMseUNBQWlDOzs7OztJQUNqQywyQ0FBcUM7Ozs7O0lBQ3JDLDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsZURlc2NyaXB0aW9uLCBGaWxlVXRpbH0gZnJvbSBcIi4uL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4uL3pvb20uc2VydmljZVwiO1xuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSAnLi4vd2luZG93LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0ZS5zZXJ2aWNlJztcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZG9jdW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kb2N1bWVudC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIG1vZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByZWxvYWRQYWdlQ291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xuICBASW5wdXQoKSBzZWxlY3RlZFBhZ2U6IG51bWJlcjtcbiAgQElucHV0KCkgc2hvd0FjdGl2ZVNsaWRlOiBib29sZWFuO1xuICB3YWl0ID0gZmFsc2U7XG4gIHpvb206IG51bWJlcjtcblxuICBkb2NXaWR0aCA9IG51bGw7XG4gIGRvY0hlaWdodCA9IG51bGw7XG4gIHZpZXdwb3J0V2lkdGggPSBudWxsO1xuICB2aWV3cG9ydEhlaWdodCA9IG51bGw7XG4gIHNjYWxlID0gbnVsbDtcbiAgbGFzdFNjYWxlID0gbnVsbDtcbiAgY29udGFpbmVyID0gbnVsbDtcbiAgZG9jID0gbnVsbDtcbiAgeCA9IDA7XG4gIGxhc3RYID0gMDtcbiAgeSA9IDA7XG4gIGxhc3RZID0gMDtcbiAgcGluY2hDZW50ZXIgPSBudWxsO1xuICBwaW5jaENlbnRlck9mZnNldCA9IG51bGw7XG4gIGN1cldpZHRoID0gMDtcbiAgY3VySGVpZ2h0ID0gMDtcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsKSB7XG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcblxuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZS5zdWJzY3JpYmUoKChcbiAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBhZ2UgPSB2YWx1ZTtcbiAgICAgIH0pKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpKVxuICAgIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRQYWdlID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSB0YWtlIC5wYW56b29tIGFzIGEgZG9jdW1lbnRcbiAgICB0aGlzLmRvYyA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCk7XG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLmdkLWRvY3VtZW50IGFzIGEgY29udGFpbmVyXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvY1dpZHRoID0gdGhpcy5kb2MuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5kb2NIZWlnaHQgPSB0aGlzLmRvYy5jbGllbnRIZWlnaHQ7XG4gICAgdGhpcy52aWV3cG9ydFdpZHRoID0gdGhpcy5kb2Mub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyBGb3IgY2FzZXMgd2hlcmUgd2UgYWxyZWFkeSBoYXZlIHpvb20gZGVmaW5lZCB3ZSBzaG91bGQgaW5jbHVkZSBpdFxuICAgIHRoaXMuc2NhbGUgPSAodGhpcy52aWV3cG9ydFdpZHRoIC8gdGhpcy5kb2NXaWR0aCkgKiB0aGlzLl96b29tU2VydmljZS56b29tIC8gMTAwO1xuXG4gICAgdGhpcy5sYXN0U2NhbGUgPSB0aGlzLnNjYWxlO1xuICAgIHRoaXMudmlld3BvcnRIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgdGhpcy5jdXJXaWR0aCA9IHRoaXMuZG9jV2lkdGggKiB0aGlzLnNjYWxlO1xuICAgIHRoaXMuY3VySGVpZ2h0ID0gdGhpcy5kb2NIZWlnaHQgKiB0aGlzLnNjYWxlO1xuXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBUT0RPOiB0aGlzIHRlbXBvcmFyeSBjcnV0Y2ggZm9yIEV4Y2VsIGZpbGVzIHNob3VsZCBiZSBkb2N1bWVudGVkXG4gIGlmRXhjZWwoKSB7XG4gICAgcmV0dXJuIEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiTWljcm9zb2Z0IEV4Y2VsXCI7XG4gIH1cblxuICBpZlByZXNlbnRhdGlvbigpIHtcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgUG93ZXJQb2ludFwiO1xuICB9XG5cbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlciwgcGFnZU51bWJlcjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZQcmVzZW50YXRpb24oKSAmJiB0aGlzLnNob3dBY3RpdmVTbGlkZSAmJiAhdGhpcy5pc1Zpc2libGUocGFnZU51bWJlcikgPyAwIDogdmFsdWUgKyAodGhpcy5tb2RlID8gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLnVuaXQgOiAncHgnKTtcbiAgfVxuXG4gIGlmRWRnZSgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2VkZ2UnKSA+IC0xO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnROb2RlTGlzdE9mLml0ZW0oMCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9XG4gIH1cblxuICBpc1Zpc2libGUocGFnZU51bWJlcikge1xuICAgIGlmICh0aGlzLmlmUHJlc2VudGF0aW9uKCkpIHtcbiAgICAgIHJldHVybiBwYWdlTnVtYmVyID09PSB0aGlzLnNlbGVjdGVkUGFnZSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==