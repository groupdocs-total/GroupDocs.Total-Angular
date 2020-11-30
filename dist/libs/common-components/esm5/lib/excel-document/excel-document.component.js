/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { DocumentComponent } from '../document/document.component';
import { WindowService } from '../window.service';
import { NavigateService } from '../navigate.service';
import { ZoomService } from '../zoom.service';
import { ExcelPageComponent } from '../excel-page/excel-page.component';
var ExcelDocumentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExcelDocumentComponent, _super);
    function ExcelDocumentComponent(_elementRef, zoomService, windowService, navigateService, renderer) {
        var _this = _super.call(this, _elementRef, zoomService, windowService, navigateService) || this;
        _this.renderer = renderer;
        _this.panzoom = null;
        _this.navigateService = navigateService;
        return _this;
    }
    /**
     * @return {?}
     */
    ExcelDocumentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.currentPageNo = 1;
    };
    /**
     * @return {?}
     */
    ExcelDocumentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.refreshExcelDocHeight();
        this.pages.changes.subscribe((/**
         * @return {?}
         */
        function () {
            _this.refreshExcelDocHeight();
        }));
        this.navigateService.navigate.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.selectSheet(value);
            }
        }));
        /** @type {?} */
        var scrollbarWidth = this.getScrollBarWidth();
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'right', this.getScrollBarWidth() + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'bottom', this.getScrollBarWidth() + 'px');
        if (scrollbarWidth === 0) {
            this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'padding-right', '17px');
        }
    };
    /**
     * @return {?}
     */
    ExcelDocumentComponent.prototype.getScrollBarWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var documentBox = (/** @type {?} */ (document.querySelector('.gd-document')));
        /** @type {?} */
        var scrollbarWidth = documentBox.offsetWidth - documentBox.clientWidth;
        return scrollbarWidth;
    };
    /**
     * @return {?}
     */
    ExcelDocumentComponent.prototype.refreshExcelDocHeight = /**
     * @return {?}
     */
    function () {
        // For current iteration we'll change actual height of .document
        this.doc = this._elementRef.nativeElement.children.item(0);
        this.panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
        // magic number 37 is the height of the bottom-bar with navigation between pages
        this.doc.style.height = this.panzoom.scrollHeight + 37 + "px";
    };
    /**
     * @param {?} number
     * @return {?}
     */
    ExcelDocumentComponent.prototype.selectSheet = /**
     * @param {?} number
     * @return {?}
     */
    function (number) {
        this.currentPageNo = number;
    };
    /**
     * @param {?} page
     * @return {?}
     */
    ExcelDocumentComponent.prototype.getSheetName = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return page.sheetName ? page.sheetName : "Sheet " + page.number;
    };
    ExcelDocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-excel-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\r\n      <gd-excel-page *ngIf=\"currentPageNo == page.number || page.number == 0\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sheets\">\r\n  <div class=\"sheets-wrapper\">\r\n    <div *ngFor=\"let page of file?.pages\">\r\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">{{getSheetName(page)}}</gd-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:-webkit-box;display:flex;border-top:1px solid #e7e7e7;position:fixed;width:100%}.sheets ::ng-deep gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets ::ng-deep gd-button .text{padding:1px 12px;color:#000}.sheets ::ng-deep gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:-webkit-box;display:flex}.page{position:relative;display:inline-block;-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}.page-grid-lines{background-color:#fff}@media (max-width:1037px){.document{overflow-x:auto!important}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    ExcelDocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: WindowService },
        { type: NavigateService },
        { type: Renderer2 }
    ]; };
    ExcelDocumentComponent.propDecorators = {
        pages: [{ type: ViewChildren, args: [ExcelPageComponent,] }]
    };
    return ExcelDocumentComponent;
}(DocumentComponent));
export { ExcelDocumentComponent };
if (false) {
    /** @type {?} */
    ExcelDocumentComponent.prototype.pages;
    /** @type {?} */
    ExcelDocumentComponent.prototype.currentPageNo;
    /** @type {?} */
    ExcelDocumentComponent.prototype.panzoom;
    /** @type {?} */
    ExcelDocumentComponent.prototype.navigateService;
    /**
     * @type {?}
     * @private
     */
    ExcelDocumentComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLWRvY3VtZW50L2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBRSxTQUFTLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTyxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUd4RTtJQUs0QyxrREFBaUI7SUFPM0QsZ0NBQVksV0FBb0MsRUFDcEMsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDeEIsUUFBbUI7UUFKdkMsWUFLRSxrQkFBTSxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUMsU0FFaEU7UUFIbUIsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQVB2QyxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBU2IsS0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7O0lBQ3pDLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FB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LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9jdW1lbnRDb21wb25lbnQgfSBmcm9tICcuLi9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vd2luZG93LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tICAnLi4vem9vbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhjZWxQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZXhjZWwtcGFnZS9leGNlbC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gJy4uL2ZpbGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWV4Y2VsLWRvY3VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC5sZXNzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlbERvY3VtZW50Q29tcG9uZW50IGV4dGVuZHMgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQgIHtcclxuICBAVmlld0NoaWxkcmVuKEV4Y2VsUGFnZUNvbXBvbmVudCkgcGFnZXM6IFF1ZXJ5TGlzdDxFeGNlbFBhZ2VDb21wb25lbnQ+OyBcclxuICBcclxuICBjdXJyZW50UGFnZU5vOiBudW1iZXI7XHJcbiAgcGFuem9vbSA9IG51bGw7XHJcbiAgbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICB6b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBuYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHN1cGVyKF9lbGVtZW50UmVmLCB6b29tU2VydmljZSwgd2luZG93U2VydmljZSwgbmF2aWdhdGVTZXJ2aWNlKTtcclxuICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlID0gbmF2aWdhdGVTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuY3VycmVudFBhZ2VObyA9IDE7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnJlZnJlc2hFeGNlbERvY0hlaWdodCgpO1xyXG4gICAgdGhpcy5wYWdlcy5jaGFuZ2VzLnN1YnNjcmliZSgoKT0+e1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEV4Y2VsRG9jSGVpZ2h0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm5hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZS5zdWJzY3JpYmUoXHJcbiAgICAgdmFsdWUgPT4ge1xyXG4gICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgIHRoaXMuc2VsZWN0U2hlZXQodmFsdWUpO1xyXG4gICAgICAgfVxyXG4gICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNoZWV0cycpLCAncmlnaHQnLCB0aGlzLmdldFNjcm9sbEJhcldpZHRoKCkgKyAncHgnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGVldHMnKSwgJ2JvdHRvbScsIHRoaXMuZ2V0U2Nyb2xsQmFyV2lkdGgoKSArICdweCcpO1xyXG4gICAgaWYgKHNjcm9sbGJhcldpZHRoID09PSAwKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGVldHMnKSwgJ3BhZGRpbmctcmlnaHQnLCAnMTdweCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2Nyb2xsQmFyV2lkdGgoKSB7XHJcbiAgICBjb25zdCBkb2N1bWVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZC1kb2N1bWVudCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBkb2N1bWVudEJveC5vZmZzZXRXaWR0aCAtIGRvY3VtZW50Qm94LmNsaWVudFdpZHRoO1xyXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaEV4Y2VsRG9jSGVpZ2h0KCkge1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlJ2xsIGNoYW5nZSBhY3R1YWwgaGVpZ2h0IG9mIC5kb2N1bWVudFxyXG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIHRoaXMucGFuem9vbSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICAvLyBtYWdpYyBudW1iZXIgMzcgaXMgdGhlIGhlaWdodCBvZiB0aGUgYm90dG9tLWJhciB3aXRoIG5hdmlnYXRpb24gYmV0d2VlbiBwYWdlc1xyXG4gICAgdGhpcy5kb2Muc3R5bGUuaGVpZ2h0ID0gdGhpcy5wYW56b29tLnNjcm9sbEhlaWdodCArIDM3ICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0U2hlZXQobnVtYmVyKXtcclxuICAgIHRoaXMuY3VycmVudFBhZ2VObyA9IG51bWJlcjtcclxuICB9XHJcblxyXG4gIGdldFNoZWV0TmFtZShwYWdlKSB7XHJcbiAgICByZXR1cm4gcGFnZS5zaGVldE5hbWUgPyBwYWdlLnNoZWV0TmFtZSA6IFwiU2hlZXQgXCIgKyBwYWdlLm51bWJlcjtcclxuICB9XHJcbn1cclxuIl19