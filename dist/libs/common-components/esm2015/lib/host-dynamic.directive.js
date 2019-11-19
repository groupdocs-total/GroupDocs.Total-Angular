/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ViewContainerRef } from '@angular/core';
import { HostingDynamicComponentService } from "./hosting-dynamic-component.service";
export class HostDynamicDirective {
    /**
     * @param {?} viewContainerRef
     * @param {?} _hostingService
     */
    constructor(viewContainerRef, _hostingService) {
        this.viewContainerRef = viewContainerRef;
        this._hostingService = _hostingService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._hostingService.add(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._hostingService.remove(this);
        this.viewContainerRef.clear();
    }
}
HostDynamicDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdHostDynamic]'
            },] }
];
/** @nocollapse */
HostDynamicDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: HostingDynamicComponentService }
];
HostDynamicDirective.propDecorators = {
    ident: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HostDynamicDirective.prototype.ident;
    /** @type {?} */
    HostDynamicDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    HostDynamicDirective.prototype._hostingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC1keW5hbWljLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9ob3N0LWR5bmFtaWMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxLQUFLLEVBQWEsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFLbkYsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFHL0IsWUFBbUIsZ0JBQWtDLEVBQ2pDLGVBQStDO1FBRGhELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDakMsb0JBQWUsR0FBZixlQUFlLENBQWdDO0lBQ25FLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBTG1ELGdCQUFnQjtZQUM1RCw4QkFBOEI7OztvQkFNbkMsS0FBSzs7OztJQUFOLHFDQUF1Qjs7SUFFWCxnREFBeUM7Ozs7O0lBQ3pDLCtDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBJbnB1dCwgT25EZXN0cm95LCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlfSBmcm9tIFwiLi9ob3N0aW5nLWR5bmFtaWMtY29tcG9uZW50LnNlcnZpY2VcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkSG9zdER5bmFtaWNdJ1xufSlcbmV4cG9ydCBjbGFzcyBIb3N0RHluYW1pY0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlkZW50OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2hvc3RpbmdTZXJ2aWNlOiBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9ob3N0aW5nU2VydmljZS5hZGQodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9ob3N0aW5nU2VydmljZS5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gIH1cblxufVxuIl19