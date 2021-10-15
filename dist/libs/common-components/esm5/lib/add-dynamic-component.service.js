/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var AddDynamicComponentService = /** @class */ (function () {
    function AddDynamicComponentService(_factoryResolver, _appRef) {
        this._factoryResolver = _factoryResolver;
        this._appRef = _appRef;
    }
    /**
     * @param {?} viewContainerRef
     * @param {?} component
     * @return {?}
     */
    AddDynamicComponentService.prototype.addDynamicComponent = /**
     * @param {?} viewContainerRef
     * @param {?} component
     * @return {?}
     */
    function (viewContainerRef, component) {
        var _this = this;
        /** @type {?} */
        var factory = this._factoryResolver.resolveComponentFactory(component);
        /** @type {?} */
        var componentRef = viewContainerRef.createComponent(factory);
        componentRef.onDestroy((/**
         * @return {?}
         */
        function () {
            _this._appRef.detachView(componentRef.hostView);
        }));
        return componentRef;
    };
    AddDynamicComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AddDynamicComponentService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    /** @nocollapse */ AddDynamicComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AddDynamicComponentService_Factory() { return new AddDynamicComponentService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef)); }, token: AddDynamicComponentService, providedIn: "root" });
    return AddDynamicComponentService;
}());
export { AddDynamicComponentService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddDynamicComponentService.prototype._factoryResolver;
    /**
     * @type {?}
     * @private
     */
    AddDynamicComponentService.prototype._appRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWR5bmFtaWMtY29tcG9uZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvYWRkLWR5bmFtaWMtY29tcG9uZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBQ3hCLFVBQVUsRUFFWCxNQUFNLGVBQWUsQ0FBQzs7QUFFdkI7SUFLRSxvQ0FBb0IsZ0JBQTBDLEVBQzFDLE9BQXVCO1FBRHZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBMEI7UUFDMUMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsd0RBQW1COzs7OztJQUFuQixVQUFvQixnQkFBa0MsRUFBRSxTQUFjO1FBQXRFLGlCQVNDOztZQVJPLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDOztZQUNsRSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUU5RCxZQUFZLENBQUMsU0FBUzs7O1FBQUM7WUFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Z0JBbEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUEMsd0JBQXdCO2dCQUR4QixjQUFjOzs7cUNBRGhCO0NBMkJDLEFBcEJELElBb0JDO1NBakJZLDBCQUEwQjs7Ozs7O0lBRXpCLHNEQUFrRDs7Ozs7SUFDbEQsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblJlZixcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcclxuICB9XHJcblxyXG4gIGFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgY29tcG9uZW50OiBhbnkpIHtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9mYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG5cclxuICAgIGNvbXBvbmVudFJlZi5vbkRlc3Ryb3koKCkgPT4ge1xyXG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==