/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { DocumentComponent, WindowService } from '@groupdocs.examples.angular/common-components';
import { ZoomService, ZoomDirective } from '@groupdocs.examples.angular/common-components';
export class ExcelDocumentComponent extends DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} zoomService
     * @param {?} windowService
     */
    constructor(_elementRef, zoomService, windowService) {
        super(_elementRef, zoomService, windowService);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentPageNo = 1;
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
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div class=\"panzoom\">\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\n      <gd-excel-page *ngIf=\"currentPageNo == page.number\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\n    </div>\n  </div>\n</div>\n<div class=\"sheets\">\n  <div *ngFor=\"let page of file?.pages\">\n    <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">Sheet {{page.number}}</gd-button>\n  </div>\n</div>\n",
                // @TODO: this is replicated from base component until styles inheritance supported added to angular
                providers: [ZoomService],
                viewProviders: [ZoomDirective],
                styles: [":host{overflow:scroll;width:100%}.document{width:100%;height:calc(100% - 40px);transition:.4s;padding:0;margin:0;position:relative}.sheets{padding-left:12px;display:flex;border-top:1px solid #e7e7e7}.sheets /deep/ gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets /deep/ gd-button .text{padding:1px 12px}.sheets /deep/ gd-button fa-icon{display:none}.page{position:relative;display:inline-block;background-color:#fff;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
ExcelDocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: WindowService }
];
if (false) {
    /** @type {?} */
    ExcelDocumentComponent.prototype.currentPageNo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1kb2N1bWVudC9leGNlbC1kb2N1bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxNQUFPLCtDQUErQyxDQUFDO0FBU3pGLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxpQkFBaUI7Ozs7OztJQUczRCxZQUFZLFdBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLGFBQTRCO1FBQ3RDLEtBQUssQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHF5QkFBOEM7O2dCQUU5QyxTQUFTLEVBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQ3pCLGFBQWEsRUFBRyxDQUFDLGFBQWEsQ0FBQzs7YUFDaEM7Ozs7WUFWbUIsVUFBVTtZQUV0QixXQUFXO1lBRFMsYUFBYTs7OztJQVd2QywrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9jdW1lbnRDb21wb25lbnQsIFdpbmRvd1NlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtab29tU2VydmljZSxab29tRGlyZWN0aXZlfSBmcm9tICAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZXhjZWwtZG9jdW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9leGNlbC1kb2N1bWVudC5jb21wb25lbnQubGVzcyddLCAvLyBAVE9ETzogdGhpcyBpcyByZXBsaWNhdGVkIGZyb20gYmFzZSBjb21wb25lbnQgdW50aWwgc3R5bGVzIGluaGVyaXRhbmNlIHN1cHBvcnRlZCBhZGRlZCB0byBhbmd1bGFyXG4gIHByb3ZpZGVycyA6IFtab29tU2VydmljZV0sXG4gIHZpZXdQcm92aWRlcnMgOiBbWm9vbURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgRXhjZWxEb2N1bWVudENvbXBvbmVudCBleHRlbmRzIERvY3VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XG4gIGN1cnJlbnRQYWdlTm86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHpvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuICAgIHN1cGVyKF9lbGVtZW50UmVmLCB6b29tU2VydmljZSwgd2luZG93U2VydmljZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuY3VycmVudFBhZ2VObyA9IDE7XG4gIH1cblxuICBzZWxlY3RTaGVldChudW1iZXIpe1xuICAgIHRoaXMuY3VycmVudFBhZ2VObyA9IG51bWJlcjtcbiAgfVxufVxuIl19