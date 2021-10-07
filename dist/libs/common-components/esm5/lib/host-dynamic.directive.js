/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ViewContainerRef } from '@angular/core';
import { HostingDynamicComponentService } from "./hosting-dynamic-component.service";
var HostDynamicDirective = /** @class */ (function () {
    function HostDynamicDirective(viewContainerRef, _hostingService) {
        this.viewContainerRef = viewContainerRef;
        this._hostingService = _hostingService;
    }
    /**
     * @return {?}
     */
    HostDynamicDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._hostingService.add(this);
    };
    /**
     * @return {?}
     */
    HostDynamicDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._hostingService.remove(this);
        this.viewContainerRef.clear();
    };
    HostDynamicDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdHostDynamic]'
                },] }
    ];
    /** @nocollapse */
    HostDynamicDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: HostingDynamicComponentService }
    ]; };
    HostDynamicDirective.propDecorators = {
        ident: [{ type: Input }]
    };
    return HostDynamicDirective;
}());
export { HostDynamicDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC1keW5hbWljLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9ob3N0LWR5bmFtaWMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxLQUFLLEVBQWEsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFFbkY7SUFNRSw4QkFBbUIsZ0JBQWtDLEVBQ2pDLGVBQStDO1FBRGhELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDakMsb0JBQWUsR0FBZixlQUFlLENBQWdDO0lBQ25FLENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBTG1ELGdCQUFnQjtnQkFDNUQsOEJBQThCOzs7d0JBTW5DLEtBQUs7O0lBZVIsMkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWhCWSxvQkFBb0I7OztJQUMvQixxQ0FBdUI7O0lBRVgsZ0RBQXlDOzs7OztJQUN6QywrQ0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZX0gZnJvbSBcIi4vaG9zdGluZy1keW5hbWljLWNvbXBvbmVudC5zZXJ2aWNlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZEhvc3REeW5hbWljXSdcbn0pXG5leHBvcnQgY2xhc3MgSG9zdER5bmFtaWNEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpZGVudDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9ob3N0aW5nU2VydmljZTogSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faG9zdGluZ1NlcnZpY2UuYWRkKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5faG9zdGluZ1NlcnZpY2UucmVtb3ZlKHRoaXMpO1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICB9XG5cbn1cbiJdfQ==