/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { DocumentComponent } from '../document/document.component';
import { WindowService } from '../window.service';
import { NavigateService } from '../navigate.service';
import { ZoomService } from '../zoom.service';
import { ExcelPageComponent } from '../excel-page/excel-page.component';
var ExcelDocumentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExcelDocumentComponent, _super);
    function ExcelDocumentComponent(_elementRef, zoomService, windowService, _navigateService) {
        var _this = _super.call(this, _elementRef, zoomService, windowService) || this;
        _this._navigateService = _navigateService;
        _this.panzoom = null;
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
        this._navigateService.navigate.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.selectSheet(value);
        }));
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
    ExcelDocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-excel-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\r\n      <gd-excel-page *ngIf=\"currentPageNo == page.number || page.number == 0\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sheets\">\r\n  <div class=\"sheets-wrapper\">\r\n    <div *ngFor=\"let page of file?.pages\">\r\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">Sheet {{page.number}}</gd-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:flex;border-top:1px solid #e7e7e7;position:fixed;bottom:17px;right:17px;width:100%}.sheets /deep/ gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets /deep/ gd-button .text{padding:1px 12px;color:#000}.sheets /deep/ gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:flex}.page{position:relative;display:inline-block;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    ExcelDocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: WindowService },
        { type: NavigateService }
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
    /**
     * @type {?}
     * @private
     */
    ExcelDocumentComponent.prototype._navigateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLWRvY3VtZW50L2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFPLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXhFO0lBSzRDLGtEQUFpQjtJQU0zRCxnQ0FBWSxXQUFvQyxFQUNwQyxXQUF3QixFQUN4QixhQUE0QixFQUNwQixnQkFBaUM7UUFIckQsWUFJRSxrQkFBTSxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQyxTQUMvQztRQUZtQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBTHJELGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBT2YsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVM7OztRQUFDO1lBQ3pCLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQ3ZDLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsc0RBQXFCOzs7SUFBckI7UUFDRSxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLGdGQUFnRjtRQUNoRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxNQUFNO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7O2dCQTVDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IscWhDQUE4Qzs7aUJBRS9DOzs7O2dCQVhtQixVQUFVO2dCQUlyQixXQUFXO2dCQUZYLGFBQWE7Z0JBQ2IsZUFBZTs7O3dCQVVyQixZQUFZLFNBQUMsa0JBQWtCOztJQXVDbEMsNkJBQUM7Q0FBQSxBQTdDRCxDQUs0QyxpQkFBaUIsR0F3QzVEO1NBeENZLHNCQUFzQjs7O0lBQ2pDLHVDQUF1RTs7SUFFdkUsK0NBQXNCOztJQUN0Qix5Q0FBZTs7Ozs7SUFLSCxrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9jdW1lbnRDb21wb25lbnQgfSBmcm9tICcuLi9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vd2luZG93LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tICAnLi4vem9vbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhjZWxQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZXhjZWwtcGFnZS9leGNlbC1wYWdlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWV4Y2VsLWRvY3VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC5sZXNzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlbERvY3VtZW50Q29tcG9uZW50IGV4dGVuZHMgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQgIHtcclxuICBAVmlld0NoaWxkcmVuKEV4Y2VsUGFnZUNvbXBvbmVudCkgcGFnZXM6IFF1ZXJ5TGlzdDxFeGNlbFBhZ2VDb21wb25lbnQ+OyBcclxuICBcclxuICBjdXJyZW50UGFnZU5vOiBudW1iZXI7XHJcbiAgcGFuem9vbSA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgICAgICAgICAgICB6b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSkge1xyXG4gICAgc3VwZXIoX2VsZW1lbnRSZWYsIHpvb21TZXJ2aWNlLCB3aW5kb3dTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlTm8gPSAxO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZWZyZXNoRXhjZWxEb2NIZWlnaHQoKTtcclxuICAgIHRoaXMucGFnZXMuY2hhbmdlcy5zdWJzY3JpYmUoKCk9PntcclxuICAgICAgICB0aGlzLnJlZnJlc2hFeGNlbERvY0hlaWdodCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZShcclxuICAgICB2YWx1ZSA9PiB7XHJcbiAgICAgICAgIHRoaXMuc2VsZWN0U2hlZXQodmFsdWUpO1xyXG4gICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaEV4Y2VsRG9jSGVpZ2h0KCkge1xyXG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlJ2xsIGNoYW5nZSBhY3R1YWwgaGVpZ2h0IG9mIC5kb2N1bWVudFxyXG4gICAgdGhpcy5kb2MgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIHRoaXMucGFuem9vbSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5pdGVtKDApLmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICAvLyBtYWdpYyBudW1iZXIgMzcgaXMgdGhlIGhlaWdodCBvZiB0aGUgYm90dG9tLWJhciB3aXRoIG5hdmlnYXRpb24gYmV0d2VlbiBwYWdlc1xyXG4gICAgdGhpcy5kb2Muc3R5bGUuaGVpZ2h0ID0gdGhpcy5wYW56b29tLnNjcm9sbEhlaWdodCArIDM3ICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0U2hlZXQobnVtYmVyKXtcclxuICAgIHRoaXMuY3VycmVudFBhZ2VObyA9IG51bWJlcjtcclxuICB9XHJcbn1cclxuIl19