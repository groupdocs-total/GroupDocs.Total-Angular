/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { DocumentComponent, WindowService, NavigateService } from '@groupdocs.examples.angular/common-components';
import { ZoomService } from '@groupdocs.examples.angular/common-components';
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
        this.navigateService.navigate.subscribe((((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.selectSheet(value);
            }
        }))));
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
    ExcelDocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-excel-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div [ngClass]=\"isDesktop ? 'panzoom auto-height' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\n      <gd-excel-page *ngIf=\"currentPageNo == page.number\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\n    </div>\n  </div>\n</div>\n<div class=\"sheets\">\n  <div class=\"sheets-wrapper\">\n    <div *ngFor=\"let page of file?.pages\">\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">{{page.sheetName}}</gd-button>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:-webkit-box;display:flex;border-top:1px solid #e7e7e7;position:fixed;width:100%}.sheets ::ng-deep gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets ::ng-deep gd-button .text{padding:1px 12px;color:#000}.sheets ::ng-deep gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:-webkit-box;display:flex}.page{position:relative;display:inline-block;background-color:#fff;-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom.auto-height{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;flex-wrap:wrap;height:auto!important}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}.page-grid-lines{background-color:#fff}@media (max-width:1037px){.document{overflow-x:auto!important}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1kb2N1bWVudC9leGNlbC1kb2N1bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxZQUFZLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU8sK0NBQStDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFeEU7SUFLNEMsa0RBQWlCO0lBTzNELGdDQUFZLFdBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ3hCLFFBQW1CO1FBSnZDLFlBS0Usa0JBQU0sV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDLFNBRWhFO1FBSG1CLGNBQVEsR0FBUixRQUFRLENBQVc7UUFQdkMsYUFBTyxHQUFHLElBQUksQ0FBQztRQVNiLEtBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDOztJQUN6QyxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQztZQUN6QixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O1FBQ3hDLFVBQUEsS0FBSztZQUNILElBQUksS0FBSyxFQUFFO2dCQUNULEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7UUFDSCxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRUEsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFILElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDM0gsSUFBSSxjQUFjLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUc7SUFDSCxDQUFDOzs7O0lBRUQsa0RBQWlCOzs7SUFBakI7O1lBQ1EsV0FBVyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQWU7O1lBQ25FLGNBQWMsR0FBRyxXQUFXLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXO1FBQ3hFLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxzREFBcUI7OztJQUFyQjtRQUNFLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEYsZ0ZBQWdGO1FBQ2hGLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLE1BQU07UUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDOUIsQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qix3K0JBQThDOztpQkFFL0M7Ozs7Z0JBVG1CLFVBQVU7Z0JBRXJCLFdBQVc7Z0JBRFEsYUFBYTtnQkFBRSxlQUFlO2dCQURzQixTQUFTOzs7d0JBV3RGLFlBQVksU0FBQyxrQkFBa0I7O0lBeURsQyw2QkFBQztDQUFBLEFBL0RELENBSzRDLGlCQUFpQixHQTBENUQ7U0ExRFksc0JBQXNCOzs7SUFDakMsdUNBQXVFOztJQUV2RSwrQ0FBc0I7O0lBQ3RCLHlDQUFlOztJQUNmLGlEQUFpQzs7Ozs7SUFNckIsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50Q29tcG9uZW50LCBXaW5kb3dTZXJ2aWNlLCBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tICAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7IEV4Y2VsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2V4Y2VsLXBhZ2UvZXhjZWwtcGFnZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1leGNlbC1kb2N1bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC5sZXNzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VsRG9jdW1lbnRDb21wb25lbnQgZXh0ZW5kcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCAge1xuICBAVmlld0NoaWxkcmVuKEV4Y2VsUGFnZUNvbXBvbmVudCkgcGFnZXM6IFF1ZXJ5TGlzdDxFeGNlbFBhZ2VDb21wb25lbnQ+OyBcbiAgXG4gIGN1cnJlbnRQYWdlTm86IG51bWJlcjtcbiAgcGFuem9vbSA9IG51bGw7XG4gIG5hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBuYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoX2VsZW1lbnRSZWYsIHpvb21TZXJ2aWNlLCB3aW5kb3dTZXJ2aWNlLCBuYXZpZ2F0ZVNlcnZpY2UpO1xuICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlID0gbmF2aWdhdGVTZXJ2aWNlO1xuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmN1cnJlbnRQYWdlTm8gPSAxO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVmcmVzaEV4Y2VsRG9jSGVpZ2h0KCk7XG4gICAgdGhpcy5wYWdlcy5jaGFuZ2VzLnN1YnNjcmliZSgoKT0+e1xuICAgICAgICB0aGlzLnJlZnJlc2hFeGNlbERvY0hlaWdodCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKCgoXG4gICAgIHZhbHVlID0+IHtcbiAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgIHRoaXMuc2VsZWN0U2hlZXQodmFsdWUpO1xuICAgICAgIH1cbiAgICAgfSkpKTtcblxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGVldHMnKSwgJ3JpZ2h0JywgdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNoZWV0cycpLCAnYm90dG9tJywgdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpICsgJ3B4Jyk7XG4gICAgaWYgKHNjcm9sbGJhcldpZHRoID09PSAwKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2hlZXRzJyksICdwYWRkaW5nLXJpZ2h0JywgJzE3cHgnKTtcbiAgICB9XG4gIH1cblxuICBnZXRTY3JvbGxCYXJXaWR0aCgpIHtcbiAgICBjb25zdCBkb2N1bWVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZC1kb2N1bWVudCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZG9jdW1lbnRCb3gub2Zmc2V0V2lkdGggLSBkb2N1bWVudEJveC5jbGllbnRXaWR0aDtcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gIH1cblxuICByZWZyZXNoRXhjZWxEb2NIZWlnaHQoKSB7XG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlJ2xsIGNoYW5nZSBhY3R1YWwgaGVpZ2h0IG9mIC5kb2N1bWVudFxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCk7XG4gICAgdGhpcy5wYW56b29tID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAvLyBtYWdpYyBudW1iZXIgMzcgaXMgdGhlIGhlaWdodCBvZiB0aGUgYm90dG9tLWJhciB3aXRoIG5hdmlnYXRpb24gYmV0d2VlbiBwYWdlc1xuICAgIHRoaXMuZG9jLnN0eWxlLmhlaWdodCA9IHRoaXMucGFuem9vbS5zY3JvbGxIZWlnaHQgKyAzNyArIFwicHhcIjtcbiAgfVxuXG4gIHNlbGVjdFNoZWV0KG51bWJlcil7XG4gICAgdGhpcy5jdXJyZW50UGFnZU5vID0gbnVtYmVyO1xuICB9XG59XG4iXX0=