/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { DocumentComponent, WindowService, NavigateService } from '@groupdocs.examples.angular/common-components';
import { ZoomService } from '@groupdocs.examples.angular/common-components';
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
        this.navigateService.navigate.subscribe((((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.selectSheet(value);
            }
        }))));
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
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" style=\"height: 100%\">\n  <div [ngClass]=\"isDesktop ? 'panzoom auto-height' : 'panzoom mobile'\" gdZoom [zoomActive]=\"true\" [file]=\"file\" gdSearchable>\n    <div [ngClass]=\"file.showGridLines ? 'page-grid-lines' : 'page'\" *ngFor=\"let page of file?.pages\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\n      <gd-excel-page *ngIf=\"currentPageNo == page.number\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\n    </div>\n  </div>\n</div>\n<div class=\"sheets\">\n  <div class=\"sheets-wrapper\">\n    <div *ngFor=\"let page of file?.pages\">\n      <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">{{page.sheetName}}</gd-button>\n    </div>\n  </div>\n</div>\n",
                styles: [":host{overflow:scroll;width:100%;background-color:#e7e7e7}.document{width:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.sheets{background-color:#fff;display:-webkit-box;display:flex;border-top:1px solid #e7e7e7;position:fixed;width:100%}.sheets ::ng-deep gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets ::ng-deep gd-button .text{padding:1px 12px;color:#000}.sheets ::ng-deep gd-button fa-icon{display:none}.sheets-wrapper{margin-left:29px;display:-webkit-box;display:flex}.page{position:relative;display:inline-block;background-color:#fff;-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom.auto-height{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;flex-wrap:wrap;height:auto!important}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}.page-grid-lines{background-color:#fff}@media (max-width:1037px){.document{overflow-x:auto!important}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1kb2N1bWVudC9leGNlbC1kb2N1bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFlBQVksRUFBRSxTQUFTLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTywrQ0FBK0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU94RSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsaUJBQWlCOzs7Ozs7OztJQU8zRCxZQUFZLFdBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ3hCLFFBQW1CO1FBQ3JDLEtBQUssQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUQ5QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBUHZDLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFTYixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7UUFDeEMsS0FBSyxDQUFDLEVBQUU7WUFDTixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOztjQUVBLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMxSCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzNILElBQUksY0FBYyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFHO0lBQ0gsQ0FBQzs7OztJQUVELGlCQUFpQjs7Y0FDVCxXQUFXLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsRUFBZTs7Y0FDbkUsY0FBYyxHQUFHLFdBQVcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVc7UUFDeEUsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLCsvQkFBOEM7O2FBRS9DOzs7O1lBVG1CLFVBQVU7WUFFckIsV0FBVztZQURRLGFBQWE7WUFBRSxlQUFlO1lBRHNCLFNBQVM7OztvQkFXdEYsWUFBWSxTQUFDLGtCQUFrQjs7OztJQUFoQyx1Q0FBdUU7O0lBRXZFLCtDQUFzQjs7SUFDdEIseUNBQWU7O0lBQ2YsaURBQWlDOzs7OztJQU1yQiwwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9jdW1lbnRDb21wb25lbnQsIFdpbmRvd1NlcnZpY2UsIE5hdmlnYXRlU2VydmljZSB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQgeyBab29tU2VydmljZSB9IGZyb20gICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRXhjZWxQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vZXhjZWwtcGFnZS9leGNlbC1wYWdlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWV4Y2VsLWRvY3VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhjZWxEb2N1bWVudENvbXBvbmVudCBleHRlbmRzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0ICB7XG4gIEBWaWV3Q2hpbGRyZW4oRXhjZWxQYWdlQ29tcG9uZW50KSBwYWdlczogUXVlcnlMaXN0PEV4Y2VsUGFnZUNvbXBvbmVudD47XG5cbiAgY3VycmVudFBhZ2VObzogbnVtYmVyO1xuICBwYW56b29tID0gbnVsbDtcbiAgbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgICAgICAgICB6b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHdpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIG5hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihfZWxlbWVudFJlZiwgem9vbVNlcnZpY2UsIHdpbmRvd1NlcnZpY2UsIG5hdmlnYXRlU2VydmljZSk7XG4gICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UgPSBuYXZpZ2F0ZVNlcnZpY2U7XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuY3VycmVudFBhZ2VObyA9IDE7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UubmF2aWdhdGUuc3Vic2NyaWJlKCgoXG4gICAgIHZhbHVlID0+IHtcbiAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgIHRoaXMuc2VsZWN0U2hlZXQodmFsdWUpO1xuICAgICAgIH1cbiAgICAgfSkpKTtcblxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGVldHMnKSwgJ3JpZ2h0JywgdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNoZWV0cycpLCAnYm90dG9tJywgdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpICsgJ3B4Jyk7XG4gICAgaWYgKHNjcm9sbGJhcldpZHRoID09PSAwKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2hlZXRzJyksICdwYWRkaW5nLXJpZ2h0JywgJzE3cHgnKTtcbiAgICB9XG4gIH1cblxuICBnZXRTY3JvbGxCYXJXaWR0aCgpIHtcbiAgICBjb25zdCBkb2N1bWVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZC1kb2N1bWVudCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZG9jdW1lbnRCb3gub2Zmc2V0V2lkdGggLSBkb2N1bWVudEJveC5jbGllbnRXaWR0aDtcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gIH1cblxuICBzZWxlY3RTaGVldChudW1iZXIpe1xuICAgIHRoaXMuY3VycmVudFBhZ2VObyA9IG51bWJlcjtcbiAgfVxufVxuIl19