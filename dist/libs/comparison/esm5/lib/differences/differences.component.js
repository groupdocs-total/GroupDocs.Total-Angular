/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DifferencesService } from '../differences.service';
import { NavigateService } from '@groupdocs.examples.angular/common-components';
var DifferencesComponent = /** @class */ (function () {
    function DifferencesComponent(changeService, navigateService) {
        this.changes = [];
        this.changesService = changeService;
        this.navigateService = navigateService;
    }
    /**
     * @return {?}
     */
    DifferencesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} id
     * @param {?} page
     * @param {?} event
     * @return {?}
     */
    DifferencesComponent.prototype.highlightDifference = /**
     * @param {?} id
     * @param {?} page
     * @param {?} event
     * @return {?}
     */
    function (id, page, event) {
        event.stopPropagation();
        this.changesService.setActiveChange(id);
        this.navigateService.navigateTo(page + 1);
    };
    DifferencesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-differences',
                    template: "<div *ngFor=\"let change of changes; let i = index\" data-id=\"{{i}}\" (click)=\"highlightDifference(change.id,change.pageInfo.pageNumber,$event)\">\r\n  <gd-comparison-difference [change]=\"change\"></gd-comparison-difference>\r\n</div>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DifferencesComponent.ctorParameters = function () { return [
        { type: DifferencesService },
        { type: NavigateService }
    ]; };
    DifferencesComponent.propDecorators = {
        changes: [{ type: Input }]
    };
    return DifferencesComponent;
}());
export { DifferencesComponent };
if (false) {
    /** @type {?} */
    DifferencesComponent.prototype.changes;
    /**
     * @type {?}
     * @private
     */
    DifferencesComponent.prototype.changesService;
    /**
     * @type {?}
     * @private
     */
    DifferencesComponent.prototype.navigateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvZGlmZmVyZW5jZXMvZGlmZmVyZW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFaEY7SUFXRSw4QkFBWSxhQUFrQyxFQUFDLGVBQWdDO1FBSnRFLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBS25DLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7Ozs7O0lBR2Isa0RBQW1COzs7Ozs7SUFBbkIsVUFBb0IsRUFBVSxFQUFDLElBQVksRUFBQyxLQUFrQjtRQUM1RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsNlBBQTJDOztpQkFFNUM7Ozs7Z0JBUFEsa0JBQWtCO2dCQUNsQixlQUFlOzs7MEJBU3JCLEtBQUs7O0lBaUJSLDJCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FuQlksb0JBQW9COzs7SUFFL0IsdUNBQXFDOzs7OztJQUNyQyw4Q0FBNEM7Ozs7O0lBQzVDLCtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VJbmZvIH0gZnJvbSAnLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBEaWZmZXJlbmNlc1NlcnZpY2UgfSBmcm9tICcuLi9kaWZmZXJlbmNlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2aWdhdGVTZXJ2aWNlIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZGlmZmVyZW5jZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWZmZXJlbmNlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGlmZmVyZW5jZXMuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjaGFuZ2VzIDogQ2hhbmdlSW5mb1tdID0gW107XHJcbiAgcHJpdmF0ZSBjaGFuZ2VzU2VydmljZSA6IERpZmZlcmVuY2VzU2VydmljZTtcclxuICBwcml2YXRlIG5hdmlnYXRlU2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2hhbmdlU2VydmljZSA6IERpZmZlcmVuY2VzU2VydmljZSxuYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSwpIHtcclxuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2UgPSBjaGFuZ2VTZXJ2aWNlO1xyXG4gICAgdGhpcy5uYXZpZ2F0ZVNlcnZpY2UgPSBuYXZpZ2F0ZVNlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG5cclxuICBoaWdobGlnaHREaWZmZXJlbmNlKGlkOiBzdHJpbmcscGFnZTogbnVtYmVyLGV2ZW50IDogTW91c2VFdmVudCl7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2Uuc2V0QWN0aXZlQ2hhbmdlKGlkKTtcclxuICAgIHRoaXMubmF2aWdhdGVTZXJ2aWNlLm5hdmlnYXRlVG8ocGFnZSsxKTtcclxuICB9XHJcbn1cclxuIl19