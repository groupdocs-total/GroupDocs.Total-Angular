/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { DocumentComponent, WindowService, NavigateService } from '@groupdocs.examples.angular/common-components';
import { ZoomService } from '@groupdocs.examples.angular/common-components';
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
        this._navigateService.navigate.subscribe((((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.selectSheet(value);
        }))));
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
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\n      <gd-excel-page *ngIf=\"currentPageNo == page.number\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\n    </div>\n  </div>\n</div>\n<div class=\"sheets\">\n  <div class=\"sheets-wrapper\">\n    <div *ngFor=\"let page of file?.pages\">\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">Sheet {{page.number}}</gd-button>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:flex;border-top:1px solid #e7e7e7;position:fixed;bottom:17px;right:17px;width:100%}.sheets /deep/ gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets /deep/ gd-button .text{padding:1px 12px;color:#000}.sheets /deep/ gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:flex}.page{position:relative;display:inline-block;background-color:#fff;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1kb2N1bWVudC9leGNlbC1kb2N1bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxZQUFZLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTywrQ0FBK0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV4RTtJQUs0QyxrREFBaUI7SUFNM0QsZ0NBQVksV0FBb0MsRUFDcEMsV0FBd0IsRUFDeEIsYUFBNEIsRUFDcEIsZ0JBQWlDO1FBSHJELFlBSUUsa0JBQU0sV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsU0FDL0M7UUFGbUIsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUxyRCxhQUFPLEdBQUcsSUFBSSxDQUFDOztJQU9mLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQztZQUN6QixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7UUFDekMsVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7O0lBRUQsc0RBQXFCOzs7SUFBckI7UUFDRSxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLGdGQUFnRjtRQUNoRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxNQUFNO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7O2dCQTVDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsKzlCQUE4Qzs7aUJBRS9DOzs7O2dCQVRtQixVQUFVO2dCQUVyQixXQUFXO2dCQURRLGFBQWE7Z0JBQUUsZUFBZTs7O3dCQVV2RCxZQUFZLFNBQUMsa0JBQWtCOztJQXVDbEMsNkJBQUM7Q0FBQSxBQTdDRCxDQUs0QyxpQkFBaUIsR0F3QzVEO1NBeENZLHNCQUFzQjs7O0lBQ2pDLHVDQUF1RTs7SUFFdkUsK0NBQXNCOztJQUN0Qix5Q0FBZTs7Ozs7SUFLSCxrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50Q29tcG9uZW50LCBXaW5kb3dTZXJ2aWNlLCBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tICAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7IEV4Y2VsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2V4Y2VsLXBhZ2UvZXhjZWwtcGFnZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1leGNlbC1kb2N1bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC5sZXNzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VsRG9jdW1lbnRDb21wb25lbnQgZXh0ZW5kcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCAge1xuICBAVmlld0NoaWxkcmVuKEV4Y2VsUGFnZUNvbXBvbmVudCkgcGFnZXM6IFF1ZXJ5TGlzdDxFeGNlbFBhZ2VDb21wb25lbnQ+OyBcbiAgXG4gIGN1cnJlbnRQYWdlTm86IG51bWJlcjtcbiAgcGFuem9vbSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICB6b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlKSB7XG4gICAgc3VwZXIoX2VsZW1lbnRSZWYsIHpvb21TZXJ2aWNlLCB3aW5kb3dTZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5jdXJyZW50UGFnZU5vID0gMTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2hFeGNlbERvY0hlaWdodCgpO1xuICAgIHRoaXMucGFnZXMuY2hhbmdlcy5zdWJzY3JpYmUoKCk9PntcbiAgICAgICAgdGhpcy5yZWZyZXNoRXhjZWxEb2NIZWlnaHQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5uYXZpZ2F0ZS5zdWJzY3JpYmUoKChcbiAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgdGhpcy5zZWxlY3RTaGVldCh2YWx1ZSk7XG4gICAgIH0pKSk7XG4gIH1cblxuICByZWZyZXNoRXhjZWxEb2NIZWlnaHQoKSB7XG4gICAgLy8gRm9yIGN1cnJlbnQgaXRlcmF0aW9uIHdlJ2xsIGNoYW5nZSBhY3R1YWwgaGVpZ2h0IG9mIC5kb2N1bWVudFxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCk7XG4gICAgdGhpcy5wYW56b29tID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAvLyBtYWdpYyBudW1iZXIgMzcgaXMgdGhlIGhlaWdodCBvZiB0aGUgYm90dG9tLWJhciB3aXRoIG5hdmlnYXRpb24gYmV0d2VlbiBwYWdlc1xuICAgIHRoaXMuZG9jLnN0eWxlLmhlaWdodCA9IHRoaXMucGFuem9vbS5zY3JvbGxIZWlnaHQgKyAzNyArIFwicHhcIjtcbiAgfVxuXG4gIHNlbGVjdFNoZWV0KG51bWJlcil7XG4gICAgdGhpcy5jdXJyZW50UGFnZU5vID0gbnVtYmVyO1xuICB9XG59XG4iXX0=