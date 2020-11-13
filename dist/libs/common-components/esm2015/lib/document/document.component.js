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
const $ = jquery;
export class DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} _navigateService
     */
    constructor(_elementRef, _zoomService, _windowService, _navigateService) {
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
        (val) => {
            this.zoom = val;
        }));
        this.isDesktop = _windowService.isDesktop();
        this._navigateService.navigate.subscribe((((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.selectedPage = value;
        }))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.ifPresentation()) {
            this.selectedPage = this._navigateService.currentPage;
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
        const hammer = new Hammer(this.container);
    }
    // TODO: this temporary crutch for Excel files should be documented
    /**
     * @return {?}
     */
    ifExcel() {
        return FileUtil.find(this.file.guid, false).format === "Microsoft Excel";
    }
    /**
     * @return {?}
     */
    ifPresentation() {
        return FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint";
    }
    /**
     * @param {?} value
     * @param {?} pageNumber
     * @return {?}
     */
    getDimensionWithUnit(value, pageNumber) {
        return this.ifPresentation() && this.showActiveSlide && !this.isVisible(pageNumber) ? 0 : value + (this.mode ? FileUtil.find(this.file.guid, false).unit : 'px');
    }
    /**
     * @return {?}
     */
    ifEdge() {
        return navigator.userAgent.toLowerCase().indexOf('edge') > -1;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const elementNodeListOf = this._elementRef.nativeElement.querySelectorAll('.gd-wrapper');
        /** @type {?} */
        const element = elementNodeListOf.item(0);
        if (element) {
            $(element).trigger('focus');
        }
    }
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    isVisible(pageNumber) {
        if (this.ifPresentation()) {
            return pageNumber === this.selectedPage ? true : false;
        }
        else {
            return true;
        }
    }
}
DocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"ifExcel() ? 'page excel' : ifPresentation() && showActiveSlide ? (isVisible(page.number) ? 'page presentation active' : 'page presentation') : 'page'\" *ngFor=\"let page of file?.pages\"\r\n      [style.height]=\"getDimensionWithUnit(page.height, page.number)\" [style.width]=\"getDimensionWithUnit(page.width, page.number)\" gdRotation\r\n      [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page *ngIf=\"!showActiveSlide || isVisible(page.number)\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\" [width]=\"page.width\"\r\n        [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host{-webkit-box-flex:1;flex:1;-webkit-transition:.4s;transition:.4s;background-color:#e7e7e7;height:100%;overflow:scroll;touch-action:auto!important}:host .document{-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;touch-action:auto!important}.page{display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);-webkit-transition:.3s;transition:.3s}.page.excel{overflow:auto}.page.presentation{margin:0;-webkit-transition:unset;transition:unset}.page.presentation.active{margin:20px}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center;align-content:flex-start}@media (max-width:1037px){.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
DocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService }
];
DocumentComponent.propDecorators = {
    mode: [{ type: Input }],
    preloadPageCount: [{ type: Input }],
    file: [{ type: Input }],
    selectedPage: [{ type: Input }],
    showActiveSlide: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQU1OLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O01BRWhELENBQUMsR0FBRyxNQUFNO0FBT2hCLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7SUE0QjVCLFlBQXNCLFdBQW9DLEVBQ3RDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGdCQUFpQztRQUgvQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDdEMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQXhCckQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUdiLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUyxHQUFHLElBQUks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QVNKLFdBQVc7WUFFWCxhQUFhO1lBRVosZUFBZTs7O21CQVdyQixLQUFLOytCQUNMLEtBQUs7bUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7Ozs7SUFKTixpQ0FBdUI7O0lBQ3ZCLDZDQUFrQzs7SUFDbEMsaUNBQStCOztJQUMvQix5Q0FBOEI7O0lBQzlCLDRDQUFrQzs7SUFDbEMsaUNBQWE7O0lBQ2IsaUNBQWE7O0lBRWIscUNBQWdCOztJQUNoQixzQ0FBaUI7O0lBQ2pCLDBDQUFxQjs7SUFDckIsMkNBQXNCOztJQUN0QixrQ0FBYTs7SUFDYixzQ0FBaUI7O0lBQ2pCLHNDQUFpQjs7SUFDakIsZ0NBQVc7O0lBQ1gsOEJBQU07O0lBQ04sa0NBQVU7O0lBQ1YsOEJBQU07O0lBQ04sa0NBQVU7O0lBQ1Ysd0NBQW1COztJQUNuQiw4Q0FBeUI7O0lBQ3pCLHFDQUFhOztJQUNiLHNDQUFjOztJQUNkLHNDQUFtQjs7Ozs7SUFFUCx3Q0FBOEM7Ozs7O0lBQzlDLHlDQUFpQzs7Ozs7SUFDakMsMkNBQXFDOzs7OztJQUNyQyw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGaWxlRGVzY3JpcHRpb24sIEZpbGVVdGlsfSBmcm9tIFwiLi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcclxuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tICcuLi93aW5kb3cuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0ZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWRvY3VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RvY3VtZW50LmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHByZWxvYWRQYWdlQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBmaWxlOiBGaWxlRGVzY3JpcHRpb247XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRQYWdlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc2hvd0FjdGl2ZVNsaWRlOiBib29sZWFuO1xyXG4gIHdhaXQgPSBmYWxzZTtcclxuICB6b29tOiBudW1iZXI7XHJcblxyXG4gIGRvY1dpZHRoID0gbnVsbDtcclxuICBkb2NIZWlnaHQgPSBudWxsO1xyXG4gIHZpZXdwb3J0V2lkdGggPSBudWxsO1xyXG4gIHZpZXdwb3J0SGVpZ2h0ID0gbnVsbDtcclxuICBzY2FsZSA9IG51bGw7XHJcbiAgbGFzdFNjYWxlID0gbnVsbDtcclxuICBjb250YWluZXIgPSBudWxsO1xyXG4gIGRvYyA9IG51bGw7XHJcbiAgeCA9IDA7XHJcbiAgbGFzdFggPSAwO1xyXG4gIHkgPSAwO1xyXG4gIGxhc3RZID0gMDtcclxuICBwaW5jaENlbnRlciA9IG51bGw7XHJcbiAgcGluY2hDZW50ZXJPZmZzZXQgPSBudWxsO1xyXG4gIGN1cldpZHRoID0gMDtcclxuICBjdXJIZWlnaHQgPSAwO1xyXG4gIGlzRGVza3RvcDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSwpIHtcclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgodmFsOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy56b29tID0gdmFsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKCgoXHJcbiAgICAgIHZhbHVlID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUGFnZSA9IHZhbHVlO1xyXG4gICAgICB9KSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUGFnZSA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLnBhbnpvb20gYXMgYSBkb2N1bWVudFxyXG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlIHRha2UgLmdkLWRvY3VtZW50IGFzIGEgY29udGFpbmVyXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLmRvY1dpZHRoID0gdGhpcy5kb2MuY2xpZW50V2lkdGg7XHJcbiAgICB0aGlzLmRvY0hlaWdodCA9IHRoaXMuZG9jLmNsaWVudEhlaWdodDtcclxuICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHRoaXMuZG9jLm9mZnNldFdpZHRoO1xyXG5cclxuICAgIC8vIEZvciBjYXNlcyB3aGVyZSB3ZSBhbHJlYWR5IGhhdmUgem9vbSBkZWZpbmVkIHdlIHNob3VsZCBpbmNsdWRlIGl0XHJcbiAgICB0aGlzLnNjYWxlID0gKHRoaXMudmlld3BvcnRXaWR0aCAvIHRoaXMuZG9jV2lkdGgpICogdGhpcy5fem9vbVNlcnZpY2Uuem9vbSAvIDEwMDtcclxuXHJcbiAgICB0aGlzLmxhc3RTY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGhpcy5jdXJXaWR0aCA9IHRoaXMuZG9jV2lkdGggKiB0aGlzLnNjYWxlO1xyXG4gICAgdGhpcy5jdXJIZWlnaHQgPSB0aGlzLmRvY0hlaWdodCAqIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgY29uc3QgaGFtbWVyID0gbmV3IEhhbW1lcih0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiB0aGlzIHRlbXBvcmFyeSBjcnV0Y2ggZm9yIEV4Y2VsIGZpbGVzIHNob3VsZCBiZSBkb2N1bWVudGVkXHJcbiAgaWZFeGNlbCgpIHtcclxuICAgIHJldHVybiBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIk1pY3Jvc29mdCBFeGNlbFwiO1xyXG4gIH1cclxuXHJcbiAgaWZQcmVzZW50YXRpb24oKSB7XHJcbiAgICByZXR1cm4gRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJNaWNyb3NvZnQgUG93ZXJQb2ludFwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGltZW5zaW9uV2l0aFVuaXQodmFsdWU6IG51bWJlciwgcGFnZU51bWJlcjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZlByZXNlbnRhdGlvbigpICYmIHRoaXMuc2hvd0FjdGl2ZVNsaWRlICYmICF0aGlzLmlzVmlzaWJsZShwYWdlTnVtYmVyKSA/IDAgOiB2YWx1ZSArICh0aGlzLm1vZGUgPyBGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkudW5pdCA6ICdweCcpO1xyXG4gIH1cclxuXHJcbiAgaWZFZGdlKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdlZGdlJykgPiAtMTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnROb2RlTGlzdE9mID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nZC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE5vZGVMaXN0T2YuaXRlbSgwKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcignZm9jdXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzVmlzaWJsZShwYWdlTnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5pZlByZXNlbnRhdGlvbigpKSB7XHJcbiAgICAgIHJldHVybiBwYWdlTnVtYmVyID09PSB0aGlzLnNlbGVjdGVkUGFnZSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19