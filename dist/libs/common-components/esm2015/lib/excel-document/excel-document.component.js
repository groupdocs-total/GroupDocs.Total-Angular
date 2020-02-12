/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { DocumentComponent } from '../document/document.component';
import { WindowService } from '../window.service';
import { NavigateService } from '../navigate.service';
import { ZoomService } from '../zoom.service';
import { ExcelPageComponent } from '../excel-page/excel-page.component';
export class ExcelDocumentComponent extends DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} zoomService
     * @param {?} windowService
     * @param {?} _navigateService
     */
    constructor(_elementRef, zoomService, windowService, _navigateService) {
        super(_elementRef, zoomService, windowService);
        this._navigateService = _navigateService;
        this.panzoom = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentPageNo = 1;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.refreshExcelDocHeight();
        this.pages.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this.refreshExcelDocHeight();
        }));
        this._navigateService.navigate.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.selectSheet(value);
        }));
    }
    /**
     * @return {?}
     */
    refreshExcelDocHeight() {
        // For current iteration we'll change actual height of .document
        this.doc = this._elementRef.nativeElement.children.item(0);
        this.panzoom = this._elementRef.nativeElement.children.item(0).children.item(0);
        // magic number 37 is the height of the bottom-bar with navigation between pages
        this.doc.style.height = this.panzoom.scrollHeight + 37 + "px";
    }
    /**
     * @param {?} number
     * @return {?}
     */
    selectSheet(number) {
        this.currentPageNo = number;
    }
}
ExcelDocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-excel-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\r\n      <gd-excel-page *ngIf=\"currentPageNo == page.number || page.number == 0\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sheets\">\r\n  <div class=\"sheets-wrapper\">\r\n    <div *ngFor=\"let page of file?.pages\">\r\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">Sheet {{page.number}}</gd-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:flex;border-top:1px solid #e7e7e7;position:fixed;bottom:17px;right:17px;width:100%}.sheets /deep/ gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets /deep/ gd-button .text{padding:1px 12px;color:#000}.sheets /deep/ gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:flex}.page{position:relative;display:inline-block;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
ExcelDocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService }
];
ExcelDocumentComponent.propDecorators = {
    pages: [{ type: ViewChildren, args: [ExcelPageComponent,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLWRvY3VtZW50L2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsWUFBWSxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU8saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFPeEUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjs7Ozs7OztJQU0zRCxZQUFZLFdBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQ3BCLGdCQUFpQztRQUNuRCxLQUFLLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUQ3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBTHJELFlBQU8sR0FBRyxJQUFJLENBQUM7SUFPZixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUzs7O1FBQUMsR0FBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQ3ZDLEtBQUssQ0FBQyxFQUFFO1lBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRixnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHFoQ0FBOEM7O2FBRS9DOzs7O1lBWG1CLFVBQVU7WUFJckIsV0FBVztZQUZYLGFBQWE7WUFDYixlQUFlOzs7b0JBVXJCLFlBQVksU0FBQyxrQkFBa0I7Ozs7SUFBaEMsdUNBQXVFOztJQUV2RSwrQ0FBc0I7O0lBQ3RCLHlDQUFlOzs7OztJQUtILGtEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb2N1bWVudENvbXBvbmVudCB9IGZyb20gJy4uL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuLi93aW5kb3cuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRlU2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBab29tU2VydmljZSB9IGZyb20gICcuLi96b29tLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeGNlbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9leGNlbC1wYWdlL2V4Y2VsLXBhZ2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZXhjZWwtZG9jdW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4Y2VsRG9jdW1lbnRDb21wb25lbnQgZXh0ZW5kcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCAge1xyXG4gIEBWaWV3Q2hpbGRyZW4oRXhjZWxQYWdlQ29tcG9uZW50KSBwYWdlczogUXVlcnlMaXN0PEV4Y2VsUGFnZUNvbXBvbmVudD47IFxyXG4gIFxyXG4gIGN1cnJlbnRQYWdlTm86IG51bWJlcjtcclxuICBwYW56b29tID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHpvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgICAgICAgICAgICB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihfZWxlbWVudFJlZiwgem9vbVNlcnZpY2UsIHdpbmRvd1NlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuY3VycmVudFBhZ2VObyA9IDE7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnJlZnJlc2hFeGNlbERvY0hlaWdodCgpO1xyXG4gICAgdGhpcy5wYWdlcy5jaGFuZ2VzLnN1YnNjcmliZSgoKT0+e1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEV4Y2VsRG9jSGVpZ2h0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKFxyXG4gICAgIHZhbHVlID0+IHtcclxuICAgICAgICAgdGhpcy5zZWxlY3RTaGVldCh2YWx1ZSk7XHJcbiAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoRXhjZWxEb2NIZWlnaHQoKSB7XHJcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UnbGwgY2hhbmdlIGFjdHVhbCBoZWlnaHQgb2YgLmRvY3VtZW50XHJcbiAgICB0aGlzLmRvYyA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgdGhpcy5wYW56b29tID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIC8vIG1hZ2ljIG51bWJlciAzNyBpcyB0aGUgaGVpZ2h0IG9mIHRoZSBib3R0b20tYmFyIHdpdGggbmF2aWdhdGlvbiBiZXR3ZWVuIHBhZ2VzXHJcbiAgICB0aGlzLmRvYy5zdHlsZS5oZWlnaHQgPSB0aGlzLnBhbnpvb20uc2Nyb2xsSGVpZ2h0ICsgMzcgKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTaGVldChudW1iZXIpe1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZU5vID0gbnVtYmVyO1xyXG4gIH1cclxufVxyXG4iXX0=