/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChildren, QueryList, Renderer2, Output, EventEmitter } from '@angular/core';
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
        _this.selectedSheet = new EventEmitter();
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
        this.selectedSheet.emit(number);
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
        pages: [{ type: ViewChildren, args: [ExcelPageComponent,] }],
        selectedSheet: [{ type: Output }]
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
    /** @type {?} */
    ExcelDocumentComponent.prototype.selectedSheet;
    /**
     * @type {?}
     * @private
     */
    ExcelDocumentComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLWRvY3VtZW50L2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBRSxTQUFTLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFPLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR3hFO0lBSzRDLGtEQUFpQjtJQVEzRCxnQ0FBWSxXQUFvQyxFQUNwQyxXQUF3QixFQUN4QixhQUE0QixFQUM1QixlQUFnQyxFQUN4QixRQUFtQjtRQUp2QyxZQUtFLGtCQUFNLFdBQVcsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyxTQUVoRTtRQUhtQixjQUFRLEdBQVIsUUFBUSxDQUFXO1FBUnZDLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFTCxtQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFRbkQsS0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7O0lBQ3pDLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsZ0RBQWU7OztJQUFmO1FB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WSxzQkFBc0I7OztJQUNqQyx1Q0FBdUU7O0lBRXZFLCtDQUFzQjs7SUFDdEIseUNBQWU7O0lBQ2YsaURBQWlDOztJQUNqQywrQ0FBcUQ7Ozs7O0lBTXpDLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb2N1bWVudENvbXBvbmVudCB9IGZyb20gJy4uL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuLi93aW5kb3cuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRlU2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBab29tU2VydmljZSB9IGZyb20gICcuLi96b29tLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeGNlbFBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9leGNlbC1wYWdlL2V4Y2VsLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSAnLi4vZmlsZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZXhjZWwtZG9jdW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4Y2VsRG9jdW1lbnRDb21wb25lbnQgZXh0ZW5kcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCAge1xyXG4gIEBWaWV3Q2hpbGRyZW4oRXhjZWxQYWdlQ29tcG9uZW50KSBwYWdlczogUXVlcnlMaXN0PEV4Y2VsUGFnZUNvbXBvbmVudD47IFxyXG4gIFxyXG4gIGN1cnJlbnRQYWdlTm86IG51bWJlcjtcclxuICBwYW56b29tID0gbnVsbDtcclxuICBuYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRTaGVldCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICAgICAgICAgICAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihfZWxlbWVudFJlZiwgem9vbVNlcnZpY2UsIHdpbmRvd1NlcnZpY2UsIG5hdmlnYXRlU2VydmljZSk7XHJcbiAgICB0aGlzLm5hdmlnYXRlU2VydmljZSA9IG5hdmlnYXRlU2VydmljZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlTm8gPSAxO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZWZyZXNoRXhjZWxEb2NIZWlnaHQoKTtcclxuICAgIHRoaXMucGFnZXMuY2hhbmdlcy5zdWJzY3JpYmUoKCk9PntcclxuICAgICAgICB0aGlzLnJlZnJlc2hFeGNlbERvY0hlaWdodCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKFxyXG4gICAgIHZhbHVlID0+IHtcclxuICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICB0aGlzLnNlbGVjdFNoZWV0KHZhbHVlKTtcclxuICAgICAgIH1cclxuICAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsQmFyV2lkdGgoKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGVldHMnKSwgJ3JpZ2h0JywgdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpICsgJ3B4Jyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2hlZXRzJyksICdib3R0b20nLCB0aGlzLmdldFNjcm9sbEJhcldpZHRoKCkgKyAncHgnKTtcclxuICAgIGlmIChzY3JvbGxiYXJXaWR0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2hlZXRzJyksICdwYWRkaW5nLXJpZ2h0JywgJzE3cHgnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNjcm9sbEJhcldpZHRoKCkge1xyXG4gICAgY29uc3QgZG9jdW1lbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2QtZG9jdW1lbnQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZG9jdW1lbnRCb3gub2Zmc2V0V2lkdGggLSBkb2N1bWVudEJveC5jbGllbnRXaWR0aDtcclxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hFeGNlbERvY0hlaWdodCgpIHtcclxuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSdsbCBjaGFuZ2UgYWN0dWFsIGhlaWdodCBvZiAuZG9jdW1lbnRcclxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICB0aGlzLnBhbnpvb20gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgLy8gbWFnaWMgbnVtYmVyIDM3IGlzIHRoZSBoZWlnaHQgb2YgdGhlIGJvdHRvbS1iYXIgd2l0aCBuYXZpZ2F0aW9uIGJldHdlZW4gcGFnZXNcclxuICAgIHRoaXMuZG9jLnN0eWxlLmhlaWdodCA9IHRoaXMucGFuem9vbS5zY3JvbGxIZWlnaHQgKyAzNyArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIHNlbGVjdFNoZWV0KG51bWJlcil7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlTm8gPSBudW1iZXI7XHJcbiAgICB0aGlzLnNlbGVjdGVkU2hlZXQuZW1pdChudW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2hlZXROYW1lKHBhZ2UpIHtcclxuICAgIHJldHVybiBwYWdlLnNoZWV0TmFtZSA/IHBhZ2Uuc2hlZXROYW1lIDogXCJTaGVldCBcIiArIHBhZ2UubnVtYmVyO1xyXG4gIH1cclxufVxyXG4iXX0=