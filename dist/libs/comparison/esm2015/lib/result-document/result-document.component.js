/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { DocumentComponent, NavigateService, WindowService } from '@groupdocs.examples.angular/common-components';
import { ZoomService, ZoomDirective } from '@groupdocs.examples.angular/common-components';
import * as jquery from 'jquery';
import { DifferencesService } from '../differences.service';
/** @type {?} */
const $ = jquery;
export class ResultDocumentComponent extends DocumentComponent {
    /**
     * @param {?} _elementRef
     * @param {?} zoomService
     * @param {?} changeService
     * @param {?} windowService
     * @param {?} navigateService
     */
    constructor(_elementRef, zoomService, changeService, windowService, navigateService) {
        super(_elementRef, zoomService, windowService, navigateService);
        this.changesService = changeService;
    }
    /**
     * @return {?}
     */
    close() {
        this.changesService.setActiveChange(null);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ResultDocumentComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-result-document',
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\">\n  <div class=\"panzoom\">\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\n         [style.height]=\"getDimensionWithUnit(page.height, page.number)\"\n         [style.width]=\"getDimensionWithUnit(page.width, page.number)\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n      <div class=\"highlights\">\n        <gd-difference-highlight\n          *ngFor=\"let change of page?.changes\"\n          [change]=\"change\">\n        </gd-difference-highlight>\n      </div>\n    </div>\n  </div>\n</div>\n",
                // @TODO: this is replicated from base component until styles inheritance supported added to angular
                providers: [ZoomService],
                viewProviders: [ZoomDirective],
                styles: [":host{overflow:scroll}.document{background-color:#e7e7e7;width:100%;height:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.page{position:relative;display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.panzoom{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
ResultDocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: DifferencesService },
    { type: WindowService },
    { type: NavigateService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResultDocumentComponent.prototype.changesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWRvY3VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL3Jlc3VsdC1kb2N1bWVudC9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsSCxPQUFPLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxNQUFPLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztNQUN0RCxDQUFDLEdBQUcsTUFBTTtBQVNoQixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsaUJBQWlCOzs7Ozs7OztJQUc1RCxZQUFZLFdBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLGFBQWtDLEVBQ2xDLGFBQTRCLEVBQzVCLGVBQWdDO1FBQzFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QiwwNEJBQStDOztnQkFFL0MsU0FBUyxFQUFHLENBQUMsV0FBVyxDQUFDO2dCQUN6QixhQUFhLEVBQUcsQ0FBQyxhQUFhLENBQUM7O2FBQ2hDOzs7O1lBYm1CLFVBQVU7WUFFdEIsV0FBVztZQUVWLGtCQUFrQjtZQUhrQixhQUFhO1lBQTlCLGVBQWU7Ozs7Ozs7SUFjekMsaURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudENvbXBvbmVudCwgTmF2aWdhdGVTZXJ2aWNlLCBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7Wm9vbVNlcnZpY2UsWm9vbURpcmVjdGl2ZX0gZnJvbSAgJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IERpZmZlcmVuY2VzU2VydmljZSB9IGZyb20gJy4uL2RpZmZlcmVuY2VzLnNlcnZpY2UnO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcmVzdWx0LWRvY3VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3VsdC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3VsdC1kb2N1bWVudC5jb21wb25lbnQubGVzcyddLCAvLyBAVE9ETzogdGhpcyBpcyByZXBsaWNhdGVkIGZyb20gYmFzZSBjb21wb25lbnQgdW50aWwgc3R5bGVzIGluaGVyaXRhbmNlIHN1cHBvcnRlZCBhZGRlZCB0byBhbmd1bGFyXG4gIHByb3ZpZGVycyA6IFtab29tU2VydmljZV0sXG4gIHZpZXdQcm92aWRlcnMgOiBbWm9vbURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVzdWx0RG9jdW1lbnRDb21wb25lbnQgZXh0ZW5kcyBEb2N1bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xuICBwcml2YXRlIGNoYW5nZXNTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBjaGFuZ2VTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICB3aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBuYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSkge1xuICAgIHN1cGVyKF9lbGVtZW50UmVmLCB6b29tU2VydmljZSwgd2luZG93U2VydmljZSwgbmF2aWdhdGVTZXJ2aWNlKTtcbiAgICB0aGlzLmNoYW5nZXNTZXJ2aWNlID0gY2hhbmdlU2VydmljZTtcbiAgfVxuXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZS5zZXRBY3RpdmVDaGFuZ2UobnVsbClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gIH1cbn1cbiJdfQ==