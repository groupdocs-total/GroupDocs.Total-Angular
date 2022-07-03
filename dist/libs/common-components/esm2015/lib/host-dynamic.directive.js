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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC1keW5hbWljLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9ob3N0LWR5bmFtaWMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxLQUFLLEVBQWEsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFLbkYsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFHL0IsWUFBbUIsZ0JBQWtDLEVBQ2pDLGVBQStDO1FBRGhELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDakMsb0JBQWUsR0FBZixlQUFlLENBQWdDO0lBQ25FLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBTG1ELGdCQUFnQjtZQUM1RCw4QkFBOEI7OztvQkFNbkMsS0FBSzs7OztJQUFOLHFDQUF1Qjs7SUFFWCxnREFBeUM7Ozs7O0lBQ3pDLCtDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBJbnB1dCwgT25EZXN0cm95LCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2V9IGZyb20gXCIuL2hvc3RpbmctZHluYW1pYy1jb21wb25lbnQuc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2RIb3N0RHluYW1pY10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb3N0RHluYW1pY0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgaWRlbnQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaG9zdGluZ1NlcnZpY2U6IEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faG9zdGluZ1NlcnZpY2UuYWRkKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9ob3N0aW5nU2VydmljZS5yZW1vdmUodGhpcyk7XHJcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==