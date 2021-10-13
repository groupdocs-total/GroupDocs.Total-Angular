/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import { DocumentComponent, NavigateService, WindowService } from '@groupdocs.examples.angular/common-components';
import { ZoomService, ZoomDirective } from '@groupdocs.examples.angular/common-components';
import * as jquery from 'jquery';
import { DifferencesService } from '../differences.service';
/** @type {?} */
var $ = jquery;
var ResultDocumentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ResultDocumentComponent, _super);
    function ResultDocumentComponent(_elementRef, zoomService, changeService, windowService, navigateService) {
        var _this = _super.call(this, _elementRef, zoomService, windowService, navigateService) || this;
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
                    template: "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\r\n<div id=\"document\" class=\"document\">\r\n  <div class=\"panzoom\">\r\n    <div [ngClass]=\"'page'\" *ngFor=\"let page of file?.pages\"\r\n         [style.height]=\"getDimensionWithUnit(page.height, page.number)\"\r\n         [style.width]=\"getDimensionWithUnit(page.width, page.number)\"\r\n         gdRotation [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\r\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\r\n               [width]=\"page.width\" [height]=\"page.height\" [editable]=\"page.editable\"></gd-page>\r\n      <div class=\"highlights\">\r\n        <gd-difference-highlight\r\n          *ngFor=\"let change of page?.changes\"\r\n          [change]=\"change\">\r\n        </gd-difference-highlight>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    // @TODO: this is replicated from base component until styles inheritance supported added to angular
                    providers: [ZoomService],
                    viewProviders: [ZoomDirective],
                    styles: [":host{overflow:scroll}.document{background-color:#e7e7e7;width:100%;height:100%;-webkit-transition:.4s;transition:.4s;padding:0;margin:0;position:relative}.page{position:relative;display:inline-block;background-color:#fff;margin:20px;box-shadow:0 3px 6px rgba(0,0,0,.16);-webkit-transition:.3s;transition:.3s}.wait{position:absolute;top:55px;left:Calc(30%)}.panzoom{-webkit-transform:none;transform:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;flex-wrap:wrap}.gd-zoomed{margin:10px 98px}.highlights{position:absolute;top:0;left:0;bottom:0;right:0}@media (max-width:1037px){.panzoom{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.page{min-width:unset!important;min-height:unset!important;margin:5px 0}}"]
                }] }
    ];
    /** @nocollapse */
    ResultDocumentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ZoomService },
        { type: DifferencesService },
        { type: WindowService },
        { type: NavigateService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LWRvY3VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL3Jlc3VsdC1kb2N1bWVudC9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEgsT0FBTyxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsTUFBTywrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFDdEQsQ0FBQyxHQUFHLE1BQU07QUFFaEI7SUFPNkMsbURBQWlCO0lBRzVELGlDQUFZLFdBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLGFBQWtDLEVBQ2xDLGFBQTRCLEVBQzVCLGVBQWdDO1FBSjVDLFlBS0Usa0JBQU0sV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDLFNBRWhFO1FBREMsS0FBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7O0lBQ3RDLENBQUM7Ozs7SUFFRCx1Q0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMzQyxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qiw4NkJBQStDOztvQkFFL0MsU0FBUyxFQUFHLENBQUMsV0FBVyxDQUFDO29CQUN6QixhQUFhLEVBQUcsQ0FBQyxhQUFhLENBQUM7O2lCQUNoQzs7OztnQkFibUIsVUFBVTtnQkFFdEIsV0FBVztnQkFFVixrQkFBa0I7Z0JBSGtCLGFBQWE7Z0JBQTlCLGVBQWU7O0lBK0IzQyw4QkFBQztDQUFBLEFBekJELENBTzZDLGlCQUFpQixHQWtCN0Q7U0FsQlksdUJBQXVCOzs7Ozs7SUFDbEMsaURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvY3VtZW50Q29tcG9uZW50LCBOYXZpZ2F0ZVNlcnZpY2UsIFdpbmRvd1NlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlLFpvb21EaXJlY3RpdmV9IGZyb20gICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgRGlmZmVyZW5jZXNTZXJ2aWNlIH0gZnJvbSAnLi4vZGlmZmVyZW5jZXMuc2VydmljZSc7XHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXJlc3VsdC1kb2N1bWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3VsdC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdWx0LWRvY3VtZW50LmNvbXBvbmVudC5sZXNzJ10sIC8vIEBUT0RPOiB0aGlzIGlzIHJlcGxpY2F0ZWQgZnJvbSBiYXNlIGNvbXBvbmVudCB1bnRpbCBzdHlsZXMgaW5oZXJpdGFuY2Ugc3VwcG9ydGVkIGFkZGVkIHRvIGFuZ3VsYXJcclxuICBwcm92aWRlcnMgOiBbWm9vbVNlcnZpY2VdLFxyXG4gIHZpZXdQcm92aWRlcnMgOiBbWm9vbURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc3VsdERvY3VtZW50Q29tcG9uZW50IGV4dGVuZHMgRG9jdW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcclxuICBwcml2YXRlIGNoYW5nZXNTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICAgICAgICAgICAgem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIGNoYW5nZVNlcnZpY2UgOiBEaWZmZXJlbmNlc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBuYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSkge1xyXG4gICAgc3VwZXIoX2VsZW1lbnRSZWYsIHpvb21TZXJ2aWNlLCB3aW5kb3dTZXJ2aWNlLCBuYXZpZ2F0ZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZSA9IGNoYW5nZVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpe1xyXG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZS5zZXRBY3RpdmVDaGFuZ2UobnVsbClcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgfVxyXG59XHJcbiJdfQ==