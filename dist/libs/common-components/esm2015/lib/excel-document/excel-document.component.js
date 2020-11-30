/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';
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
    pages: [{ type: ViewChildren, args: [ExcelPageComponent,] }]
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
    /**
     * @type {?}
     * @private
     */
    ExcelDocumentComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2V4Y2VsLWRvY3VtZW50L2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsWUFBWSxFQUFFLFNBQVMsRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFPLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBUXhFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxpQkFBaUI7Ozs7Ozs7O0lBTzNELFlBQVksV0FBb0MsRUFDcEMsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDeEIsUUFBbUI7UUFDckMsS0FBSyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRDlDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQdkMsWUFBTyxHQUFHLElBQUksQ0FBQztRQVNiLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7UUFBQyxHQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQ3RDLEtBQUssQ0FBQyxFQUFFO1lBQ04sSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsRUFBQyxDQUFDOztjQUVFLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMxSCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzNILElBQUksY0FBYyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFHO0lBQ0gsQ0FBQzs7OztJQUVELGlCQUFpQjs7Y0FDVCxXQUFXLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBZTs7Y0FDbkUsY0FBYyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVc7UUFDeEUsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNuQixnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLGdGQUFnRjtRQUNoRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQUk7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2xFLENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isc2hDQUE4Qzs7YUFFL0M7Ozs7WUFabUIsVUFBVTtZQUlyQixXQUFXO1lBRlgsYUFBYTtZQUNiLGVBQWU7WUFId0QsU0FBUzs7O29CQWN0RixZQUFZLFNBQUMsa0JBQWtCOzs7O0lBQWhDLHVDQUF1RTs7SUFFdkUsK0NBQXNCOztJQUN0Qix5Q0FBZTs7SUFDZixpREFBaUM7Ozs7O0lBTXJCLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvY3VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4uL3dpbmRvdy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2aWdhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vbmF2aWdhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFpvb21TZXJ2aWNlIH0gZnJvbSAgJy4uL3pvb20uc2VydmljZSc7XHJcbmltcG9ydCB7IEV4Y2VsUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2V4Y2VsLXBhZ2UvZXhjZWwtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tICcuLi9maWxlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1leGNlbC1kb2N1bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9leGNlbC1kb2N1bWVudC5jb21wb25lbnQubGVzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhjZWxEb2N1bWVudENvbXBvbmVudCBleHRlbmRzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0ICB7XHJcbiAgQFZpZXdDaGlsZHJlbihFeGNlbFBhZ2VDb21wb25lbnQpIHBhZ2VzOiBRdWVyeUxpc3Q8RXhjZWxQYWdlQ29tcG9uZW50PjsgXHJcbiAgXHJcbiAgY3VycmVudFBhZ2VObzogbnVtYmVyO1xyXG4gIHBhbnpvb20gPSBudWxsO1xyXG4gIG5hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICAgICAgICAgICAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICBzdXBlcihfZWxlbWVudFJlZiwgem9vbVNlcnZpY2UsIHdpbmRvd1NlcnZpY2UsIG5hdmlnYXRlU2VydmljZSk7XHJcbiAgICB0aGlzLm5hdmlnYXRlU2VydmljZSA9IG5hdmlnYXRlU2VydmljZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlTm8gPSAxO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZWZyZXNoRXhjZWxEb2NIZWlnaHQoKTtcclxuICAgIHRoaXMucGFnZXMuY2hhbmdlcy5zdWJzY3JpYmUoKCk9PntcclxuICAgICAgICB0aGlzLnJlZnJlc2hFeGNlbERvY0hlaWdodCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKFxyXG4gICAgIHZhbHVlID0+IHtcclxuICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICB0aGlzLnNlbGVjdFNoZWV0KHZhbHVlKTtcclxuICAgICAgIH1cclxuICAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsQmFyV2lkdGgoKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGVldHMnKSwgJ3JpZ2h0JywgdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpICsgJ3B4Jyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2hlZXRzJyksICdib3R0b20nLCB0aGlzLmdldFNjcm9sbEJhcldpZHRoKCkgKyAncHgnKTtcclxuICAgIGlmIChzY3JvbGxiYXJXaWR0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2hlZXRzJyksICdwYWRkaW5nLXJpZ2h0JywgJzE3cHgnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNjcm9sbEJhcldpZHRoKCkge1xyXG4gICAgY29uc3QgZG9jdW1lbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2QtZG9jdW1lbnQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZG9jdW1lbnRCb3gub2Zmc2V0V2lkdGggLSBkb2N1bWVudEJveC5jbGllbnRXaWR0aDtcclxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hFeGNlbERvY0hlaWdodCgpIHtcclxuICAgIC8vIEZvciBjdXJyZW50IGl0ZXJhdGlvbiB3ZSdsbCBjaGFuZ2UgYWN0dWFsIGhlaWdodCBvZiAuZG9jdW1lbnRcclxuICAgIHRoaXMuZG9jID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICB0aGlzLnBhbnpvb20gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbSgwKS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgLy8gbWFnaWMgbnVtYmVyIDM3IGlzIHRoZSBoZWlnaHQgb2YgdGhlIGJvdHRvbS1iYXIgd2l0aCBuYXZpZ2F0aW9uIGJldHdlZW4gcGFnZXNcclxuICAgIHRoaXMuZG9jLnN0eWxlLmhlaWdodCA9IHRoaXMucGFuem9vbS5zY3JvbGxIZWlnaHQgKyAzNyArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIHNlbGVjdFNoZWV0KG51bWJlcil7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlTm8gPSBudW1iZXI7XHJcbiAgfVxyXG5cclxuICBnZXRTaGVldE5hbWUocGFnZSkge1xyXG4gICAgcmV0dXJuIHBhZ2Uuc2hlZXROYW1lID8gcGFnZS5zaGVldE5hbWUgOiBcIlNoZWV0IFwiICsgcGFnZS5udW1iZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ==