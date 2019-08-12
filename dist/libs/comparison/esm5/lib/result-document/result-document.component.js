/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import { DocumentComponent } from '@groupdocs.examples.angular/common-components';
import { ZoomService, ZoomDirective } from '@groupdocs.examples.angular/common-components';
import * as jquery from 'jquery';
import { DifferencesService } from '../differences.service';
/** @type {?} */
var $ = jquery;
var ResultDocumentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ResultDocumentComponent, _super);
    function ResultDocumentComponent(_elementRef, zoomService, changeService) {
        var _this = _super.call(this, _elementRef, zoomService) || this;
        _this.changesService = changeService;
        return _this;
    }
    /**
     * @return {?}
     */
    ResultDocumentComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.changesService.setActiveChange(null);
    };
    /**
     * @return {?}
     */
    ResultDocumentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ResultDocumentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-result-document',
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\">\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n      <div class=\"highlights\">\n        <gd-difference-highlight\n          *ngFor=\"let change of page?.changes\"\n          [change]=\"change\">\n        </gd-difference-highlight>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    // @TODO: this is replicated from base component until styles inheritance supported added to angular
                    providers: [ZoomService],
                    viewProviders: [ZoomDirective],
                    styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0;position:relative}.page{position:relative;display:inline-block;background-color:#fff;margin:20px;box-shadow:0 4px 12px -4px rgba(0,0,0,.38);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1025px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    ResultDocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: DifferencesService }
    ]; };
    return ResultDocumentComponent;
}(DocumentComponent));
export { ResultDocumentComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResultDocumentComponent.prototype.changesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWRvY3VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL3Jlc3VsdC1kb2N1bWVudC9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLE1BQU8sK0NBQStDLENBQUM7QUFDekYsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBQ3RELENBQUMsR0FBRyxNQUFNO0FBRWhCO0lBTzZDLG1EQUFpQjtJQUc1RCxpQ0FBWSxXQUFvQyxFQUNwQyxXQUF3QixFQUN4QixhQUFrQztRQUY5QyxZQUdFLGtCQUFNLFdBQVcsRUFBRSxXQUFXLENBQUMsU0FFaEM7UUFEQyxLQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQzs7SUFDdEMsQ0FBQzs7OztJQUVELHVDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLGsvQkFBK0M7O29CQUUvQyxTQUFTLEVBQUcsQ0FBQyxXQUFXLENBQUM7b0JBQ3pCLGFBQWEsRUFBRyxDQUFDLGFBQWEsQ0FBQzs7aUJBQ2hDOzs7O2dCQWJtQixVQUFVO2dCQUV0QixXQUFXO2dCQUVWLGtCQUFrQjs7SUEwQjNCLDhCQUFDO0NBQUEsQUF2QkQsQ0FPNkMsaUJBQWlCLEdBZ0I3RDtTQWhCWSx1QkFBdUI7Ozs7OztJQUNsQyxpREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50Q29tcG9uZW50IH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7Wm9vbVNlcnZpY2UsWm9vbURpcmVjdGl2ZX0gZnJvbSAgJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IERpZmZlcmVuY2VzU2VydmljZSB9IGZyb20gJy4uL2RpZmZlcmVuY2VzLnNlcnZpY2UnO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcmVzdWx0LWRvY3VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3VsdC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3VsdC1kb2N1bWVudC5jb21wb25lbnQubGVzcyddLCAvLyBAVE9ETzogdGhpcyBpcyByZXBsaWNhdGVkIGZyb20gYmFzZSBjb21wb25lbnQgdW50aWwgc3R5bGVzIGluaGVyaXRhbmNlIHN1cHBvcnRlZCBhZGRlZCB0byBhbmd1bGFyXG4gIHByb3ZpZGVycyA6IFtab29tU2VydmljZV0sXG4gIHZpZXdQcm92aWRlcnMgOiBbWm9vbURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0RG9jdW1lbnRDb21wb25lbnQgZXh0ZW5kcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xuICBwcml2YXRlIGNoYW5nZXNTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBjaGFuZ2VTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoX2VsZW1lbnRSZWYsIHpvb21TZXJ2aWNlKTtcbiAgICB0aGlzLmNoYW5nZXNTZXJ2aWNlID0gY2hhbmdlU2VydmljZTtcbiAgfVxuXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZS5zZXRBY3RpdmVDaGFuZ2UobnVsbClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gIH1cbn1cbiJdfQ==