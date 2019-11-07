/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import { DocumentComponent, WindowService } from '@groupdocs.examples.angular/common-components';
import { ZoomService, ZoomDirective } from '@groupdocs.examples.angular/common-components';
var ExcelDocumentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExcelDocumentComponent, _super);
    function ExcelDocumentComponent(_elementRef, zoomService, windowService) {
        return _super.call(this, _elementRef, zoomService, windowService) || this;
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
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div class=\"panzoom\">\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\">\n      <gd-excel-page *ngIf=\"currentPageNo == page.number\" [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-excel-page>\n    </div>\n  </div>\n</div>\n<div class=\"sheets\">\n  <div *ngFor=\"let page of file?.pages\">\n    <gd-button [icon]=\"'eye'\" [ngClass]=\"{'active': currentPageNo == page.number }\" (click)=\"selectSheet(page.number)\">Sheet {{page.number}}</gd-button>\n  </div>\n</div>\n",
                    // @TODO: this is replicated from base component until styles inheritance supported added to angular
                    providers: [ZoomService],
                    viewProviders: [ZoomDirective],
                    styles: [":host{overflow:scroll;width:100%}.document{width:100%;height:calc(100% - 40px);transition:.4s;padding:0;margin:0;position:relative}.sheets{padding-left:12px;display:flex;border-top:1px solid #e7e7e7}.sheets /deep/ gd-button.active .text{background-color:#272727;border-radius:10px;color:#eee}.sheets /deep/ gd-button .text{padding:1px 12px}.sheets /deep/ gd-button fa-icon{display:none}.page{position:relative;display:inline-block;background-color:#fff;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    ExcelDocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: WindowService }
    ]; };
    return ExcelDocumentComponent;
}(DocumentComponent));
export { ExcelDocumentComponent };
if (false) {
    /** @type {?} */
    ExcelDocumentComponent.prototype.currentPageNo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9leGNlbC1kb2N1bWVudC9leGNlbC1kb2N1bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakcsT0FBTyxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsTUFBTywrQ0FBK0MsQ0FBQztBQUV6RjtJQU80QyxrREFBaUI7SUFHM0QsZ0NBQVksV0FBb0MsRUFDcEMsV0FBd0IsRUFDeEIsYUFBNEI7ZUFDdEMsa0JBQU0sV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsNENBQVc7Ozs7SUFBWCxVQUFZLE1BQU07UUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDOUIsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixxeUJBQThDOztvQkFFOUMsU0FBUyxFQUFHLENBQUMsV0FBVyxDQUFDO29CQUN6QixhQUFhLEVBQUcsQ0FBQyxhQUFhLENBQUM7O2lCQUNoQzs7OztnQkFWbUIsVUFBVTtnQkFFdEIsV0FBVztnQkFEUyxhQUFhOztJQTBCekMsNkJBQUM7Q0FBQSxBQXZCRCxDQU80QyxpQkFBaUIsR0FnQjVEO1NBaEJZLHNCQUFzQjs7O0lBQ2pDLCtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudENvbXBvbmVudCwgV2luZG93U2VydmljZSB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQge1pvb21TZXJ2aWNlLFpvb21EaXJlY3RpdmV9IGZyb20gICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1leGNlbC1kb2N1bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudC5sZXNzJ10sIC8vIEBUT0RPOiB0aGlzIGlzIHJlcGxpY2F0ZWQgZnJvbSBiYXNlIGNvbXBvbmVudCB1bnRpbCBzdHlsZXMgaW5oZXJpdGFuY2Ugc3VwcG9ydGVkIGFkZGVkIHRvIGFuZ3VsYXJcbiAgcHJvdmlkZXJzIDogW1pvb21TZXJ2aWNlXSxcbiAgdmlld1Byb3ZpZGVycyA6IFtab29tRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBFeGNlbERvY3VtZW50Q29tcG9uZW50IGV4dGVuZHMgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcbiAgY3VycmVudFBhZ2VObzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlKSB7XG4gICAgc3VwZXIoX2VsZW1lbnRSZWYsIHpvb21TZXJ2aWNlLCB3aW5kb3dTZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5jdXJyZW50UGFnZU5vID0gMTtcbiAgfVxuXG4gIHNlbGVjdFNoZWV0KG51bWJlcil7XG4gICAgdGhpcy5jdXJyZW50UGFnZU5vID0gbnVtYmVyO1xuICB9XG59XG4iXX0=