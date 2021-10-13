/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var PlaceholderService = /** @class */ (function () {
    function PlaceholderService() {
        this._descriptionSubject = new Subject();
        this._stateSubject = new Subject();
        this.descriptionChanged = this._descriptionSubject.asObservable();
        this.stateChanged = this._stateSubject.asObservable();
    }
    /**
     * @param {?} description
     * @return {?}
     */
    PlaceholderService.prototype.startOperation = /**
     * @param {?} description
     * @return {?}
     */
    function (description) {
        /** @type {?} */
        var subject = new Subject();
        this._descriptionSubject.next(description);
        this._stateSubject.next(subject);
        return subject;
    };
    PlaceholderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PlaceholderService.ctorParameters = function () { return []; };
    /** @nocollapse */ PlaceholderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PlaceholderService_Factory() { return new PlaceholderService(); }, token: PlaceholderService, providedIn: "root" });
    return PlaceholderService;
}());
export { PlaceholderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PlaceholderService.prototype._descriptionSubject;
    /**
     * @type {?}
     * @private
     */
    PlaceholderService.prototype._stateSubject;
    /** @type {?} */
    PlaceholderService.prototype.descriptionChanged;
    /** @type {?} */
    PlaceholderService.prototype.stateChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvcGxhY2Vob2xkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFckQ7SUFPRTtRQUhRLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDNUMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBc0IsQ0FBQztRQUlqRCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0QsaUJBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBSDFDLENBQUM7Ozs7O0lBS2pCLDJDQUFjOzs7O0lBQWQsVUFBZSxXQUFvQjs7WUFDM0IsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFVO1FBRXJDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Z0JBbkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzZCQUxEO0NBdUJDLEFBcEJELElBb0JDO1NBakJZLGtCQUFrQjs7Ozs7O0lBQzdCLGlEQUFvRDs7Ozs7SUFDcEQsMkNBQTBEOztJQUkxRCxnREFBc0U7O0lBQ3RFLDBDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb25TdWJqZWN0ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gIHByaXZhdGUgX3N0YXRlU3ViamVjdCA9IG5ldyBTdWJqZWN0PE9ic2VydmFibGU8bnVtYmVyPj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcmVhZG9ubHkgZGVzY3JpcHRpb25DaGFuZ2VkID0gdGhpcy5fZGVzY3JpcHRpb25TdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlZCA9IHRoaXMuX3N0YXRlU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgc3RhcnRPcGVyYXRpb24oZGVzY3JpcHRpb24gOiBzdHJpbmcpIDogT2JzZXJ2ZXI8bnVtYmVyPiB7XHJcbiAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gICAgXHJcbiAgICB0aGlzLl9kZXNjcmlwdGlvblN1YmplY3QubmV4dChkZXNjcmlwdGlvbik7XHJcbiAgICB0aGlzLl9zdGF0ZVN1YmplY3QubmV4dChzdWJqZWN0KTtcclxuXHJcbiAgICByZXR1cm4gc3ViamVjdDtcclxuICB9XHJcbn1cclxuIl19