/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChildren, QueryList, Renderer2, Output, EventEmitter } from '@angular/core';
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
     * @param {?} navigateService
     * @param {?} renderer
     */
    constructor(_elementRef, zoomService, windowService, navigateService, renderer) {
        super(_elementRef, zoomService, windowService, navigateService);
        this.renderer = renderer;
        this.panzoom = null;
        this.selectedSheet = new EventEmitter();
        this.navigateService = navigateService;
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
        this.navigateService.navigate.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.selectSheet(value);
            }
        }));
        /** @type {?} */
        const scrollbarWidth = this.getScrollBarWidth();
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'right', this.getScrollBarWidth() + 'px');
        this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'bottom', this.getScrollBarWidth() + 'px');
        if (scrollbarWidth === 0) {
            this.renderer.setStyle(this._elementRef.nativeElement.querySelector('.sheets'), 'padding-right', '17px');
        }
    }
    /**
     * @return {?}
     */
    getScrollBarWidth() {
        /** @type {?} */
        const documentBox = (/** @type {?} */ (document.querySelector('.gd-document')));
        /** @type {?} */
        const scrollbarWidth = documentBox.offsetWidth - documentBox.clientWidth;
        return scrollbarWidth;
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
        this.selectedSheet.emit(number);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getSheetName(page) {
        return page.sheetName ? page.sheetName : "Sheet " + page.number;
    }
}
ExcelDocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-excel-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\">\r\n  <div [ngClass]=\"isDesktop ? 'panzoom' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\r\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\r\n      <gd-excel-page *ngIf=\"currentPageNo == page.number || page.number == 0\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"sheets\">\r\n  <div class=\"sheets-wrapper\">\r\n    <div *ngFor=\"let page of file?.pages\">\r\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">{{getSheetName(page)}}</gd-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:-webkit-box;display:flex;border-top:1px solid #e7e7e7;position:fixed;width:100%}.sheets ::ng-deep gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets ::ng-deep gd-button .text{padding:1px 12px;color:#000}.sheets ::ng-deep gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:-webkit-box;display:flex}.page{position:relative;display:inline-block;-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}.page-grid-lines{background-color:#fff}@media (max-width:1037px){.document{overflow-x:auto!important}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
ExcelDocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService },
    { type: NavigateService },
    { type: Renderer2 }
];
ExcelDocumentComponent.propDecorators = {
    pages: [{ type: ViewChildren, args: [ExcelPageComponent,] }],
    selectedSheet: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLWRvY3VtZW50L2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsWUFBWSxFQUFFLFNBQVMsRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU8saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFReEUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjs7Ozs7Ozs7SUFRM0QsWUFBWSxXQUFvQyxFQUNwQyxXQUF3QixFQUN4QixhQUE0QixFQUM1QixlQUFnQyxFQUN4QixRQUFtQjtRQUNyQyxLQUFLLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFEOUMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVJ2QyxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRUwsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBUW5ELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGVBQWU7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MkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyMiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9jdW1lbnRDb21wb25lbnQgfSBmcm9tICcuLi9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi4vd2luZG93LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZVNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgWm9vbVNlcnZpY2UgfSBmcm9tICAnLi4vem9vbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhjZWxQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZXhjZWwtcGFnZS9leGNlbC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gJy4uL2ZpbGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWV4Y2VsLWRvY3VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC5sZXNzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeGNlbERvY3VtZW50Q29tcG9uZW50IGV4dGVuZHMgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQgIHtcclxuICBAVmlld0NoaWxkcmVuKEV4Y2VsUGFnZUNvbXBvbmVudCkgcGFnZXM6IFF1ZXJ5TGlzdDxFeGNlbFBhZ2VDb21wb25lbnQ+OyBcclxuICBcclxuICBjdXJyZW50UGFnZU5vOiBudW1iZXI7XHJcbiAgcGFuem9vbSA9IG51bGw7XHJcbiAgbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2U7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkU2hlZXQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgICAgICAgICAgIHpvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgICAgICAgICAgICB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIG5hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgc3VwZXIoX2VsZW1lbnRSZWYsIHpvb21TZXJ2aWNlLCB3aW5kb3dTZXJ2aWNlLCBuYXZpZ2F0ZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UgPSBuYXZpZ2F0ZVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZU5vID0gMTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMucmVmcmVzaEV4Y2VsRG9jSGVpZ2h0KCk7XHJcbiAgICB0aGlzLnBhZ2VzLmNoYW5nZXMuc3Vic2NyaWJlKCgpPT57XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoRXhjZWxEb2NIZWlnaHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlLnN1YnNjcmliZShcclxuICAgICB2YWx1ZSA9PiB7XHJcbiAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgdGhpcy5zZWxlY3RTaGVldCh2YWx1ZSk7XHJcbiAgICAgICB9XHJcbiAgICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbEJhcldpZHRoKCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2hlZXRzJyksICdyaWdodCcsIHRoaXMuZ2V0U2Nyb2xsQmFyV2lkdGgoKSArICdweCcpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNoZWV0cycpLCAnYm90dG9tJywgdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpICsgJ3B4Jyk7XHJcbiAgICBpZiAoc2Nyb2xsYmFyV2lkdGggPT09IDApIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNoZWV0cycpLCAncGFkZGluZy1yaWdodCcsICcxN3B4Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTY3JvbGxCYXJXaWR0aCgpIHtcclxuICAgIGNvbnN0IGRvY3VtZW50Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdkLWRvY3VtZW50JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGRvY3VtZW50Qm94Lm9mZnNldFdpZHRoIC0gZG9jdW1lbnRCb3guY2xpZW50V2lkdGg7XHJcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoRXhjZWxEb2NIZWlnaHQoKSB7XHJcbiAgICAvLyBGb3IgY3VycmVudCBpdGVyYXRpb24gd2UnbGwgY2hhbmdlIGFjdHVhbCBoZWlnaHQgb2YgLmRvY3VtZW50XHJcbiAgICB0aGlzLmRvYyA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgdGhpcy5wYW56b29tID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCkuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIC8vIG1hZ2ljIG51bWJlciAzNyBpcyB0aGUgaGVpZ2h0IG9mIHRoZSBib3R0b20tYmFyIHdpdGggbmF2aWdhdGlvbiBiZXR3ZWVuIHBhZ2VzXHJcbiAgICB0aGlzLmRvYy5zdHlsZS5oZWlnaHQgPSB0aGlzLnBhbnpvb20uc2Nyb2xsSGVpZ2h0ICsgMzcgKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTaGVldChudW1iZXIpe1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZU5vID0gbnVtYmVyO1xyXG4gICAgdGhpcy5zZWxlY3RlZFNoZWV0LmVtaXQobnVtYmVyKTtcclxuICB9XHJcblxyXG4gIGdldFNoZWV0TmFtZShwYWdlKSB7XHJcbiAgICByZXR1cm4gcGFnZS5zaGVldE5hbWUgPyBwYWdlLnNoZWV0TmFtZSA6IFwiU2hlZXQgXCIgKyBwYWdlLm51bWJlcjtcclxuICB9XHJcbn1cclxuIl19