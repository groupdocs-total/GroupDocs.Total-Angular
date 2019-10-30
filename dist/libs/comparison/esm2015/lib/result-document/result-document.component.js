/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { DocumentComponent, WindowService } from '@groupdocs.examples.angular/common-components';
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
     */
    constructor(_elementRef, zoomService, changeService, windowService) {
        super(_elementRef, zoomService, windowService);
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
                template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable>\n  <div class=\"panzoom\">\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\n         [style.height]=\"getDimensionWithUnit(page.height)\"\n         [style.width]=\"getDimensionWithUnit(page.width)\"\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\n      <div class=\"highlights\">\n        <gd-difference-highlight\n          *ngFor=\"let change of page?.changes\"\n          [change]=\"change\">\n        </gd-difference-highlight>\n      </div>\n    </div>\n  </div>\n</div>\n",
                // @TODO: this is replicated from base component until styles inheritance supported added to angular
                providers: [ZoomService],
                viewProviders: [ZoomDirective],
                styles: [".document{background-color:#e7e7e7;width:100%;height:100%;overflow-x:hidden;overflow-y:auto!important;transition:.4s;padding:0;margin:0;position:relative}.page{position:relative;display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:50% 50% 0;display:flex;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.document{overflow-x:auto!important}.panzoom{flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
            }] }
];
/** @nocollapse */
ResultDocumentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ZoomService },
    { type: DifferencesService },
    { type: WindowService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResultDocumentComponent.prototype.changesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWRvY3VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL3Jlc3VsdC1kb2N1bWVudC9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLE1BQU8sK0NBQStDLENBQUM7QUFDekYsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O01BQ3RELENBQUMsR0FBRyxNQUFNO0FBU2hCLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxpQkFBaUI7Ozs7Ozs7SUFHNUQsWUFBWSxXQUFvQyxFQUNwQyxXQUF3QixFQUN4QixhQUFrQyxFQUNsQyxhQUE0QjtRQUN0QyxLQUFLLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw2M0JBQStDOztnQkFFL0MsU0FBUyxFQUFHLENBQUMsV0FBVyxDQUFDO2dCQUN6QixhQUFhLEVBQUcsQ0FBQyxhQUFhLENBQUM7O2FBQ2hDOzs7O1lBYm1CLFVBQVU7WUFFdEIsV0FBVztZQUVWLGtCQUFrQjtZQUhDLGFBQWE7Ozs7Ozs7SUFjdkMsaURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudENvbXBvbmVudCwgV2luZG93U2VydmljZSB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQge1pvb21TZXJ2aWNlLFpvb21EaXJlY3RpdmV9IGZyb20gICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBEaWZmZXJlbmNlc1NlcnZpY2UgfSBmcm9tICcuLi9kaWZmZXJlbmNlcy5zZXJ2aWNlJztcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXJlc3VsdC1kb2N1bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MnXSwgLy8gQFRPRE86IHRoaXMgaXMgcmVwbGljYXRlZCBmcm9tIGJhc2UgY29tcG9uZW50IHVudGlsIHN0eWxlcyBpbmhlcml0YW5jZSBzdXBwb3J0ZWQgYWRkZWQgdG8gYW5ndWxhclxuICBwcm92aWRlcnMgOiBbWm9vbVNlcnZpY2VdLFxuICB2aWV3UHJvdmlkZXJzIDogW1pvb21EaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdERvY3VtZW50Q29tcG9uZW50IGV4dGVuZHMgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcbiAgcHJpdmF0ZSBjaGFuZ2VzU2VydmljZSA6IERpZmZlcmVuY2VzU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHpvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgY2hhbmdlU2VydmljZSA6IERpZmZlcmVuY2VzU2VydmljZSxcbiAgICAgICAgICAgICAgd2luZG93U2VydmljZTogV2luZG93U2VydmljZSkge1xuICAgIHN1cGVyKF9lbGVtZW50UmVmLCB6b29tU2VydmljZSwgd2luZG93U2VydmljZSk7XG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZSA9IGNoYW5nZVNlcnZpY2U7XG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2Uuc2V0QWN0aXZlQ2hhbmdlKG51bGwpXG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICB9XG59XG4iXX0=