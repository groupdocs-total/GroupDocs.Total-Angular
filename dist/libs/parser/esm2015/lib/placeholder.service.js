/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class PlaceholderService {
    constructor() {
        this._descriptionSubject = new Subject();
        this._stateSubject = new Subject();
        this.descriptionChanged = this._descriptionSubject.asObservable();
        this.stateChanged = this._stateSubject.asObservable();
    }
    /**
     * @param {?} description
     * @return {?}
     */
    startOperation(description) {
        /** @type {?} */
        const subject = new Subject();
        this._descriptionSubject.next(description);
        this._stateSubject.next(subject);
        return subject;
    }
}
PlaceholderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PlaceholderService.ctorParameters = () => [];
/** @nocollapse */ PlaceholderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PlaceholderService_Factory() { return new PlaceholderService(); }, token: PlaceholderService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvcGxhY2Vob2xkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLckQsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QjtRQUhRLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDNUMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBc0IsQ0FBQztRQUlqRCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0QsaUJBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBSDFDLENBQUM7Ozs7O0lBS2pCLGNBQWMsQ0FBQyxXQUFvQjs7Y0FDM0IsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFVO1FBRXJDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUVDLGlEQUFvRDs7Ozs7SUFDcEQsMkNBQTBEOztJQUkxRCxnREFBc0U7O0lBQ3RFLDBDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyU2VydmljZSB7XG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uU3ViamVjdCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfc3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8T2JzZXJ2YWJsZTxudW1iZXI+PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb25DaGFuZ2VkID0gdGhpcy5fZGVzY3JpcHRpb25TdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICByZWFkb25seSBzdGF0ZUNoYW5nZWQgPSB0aGlzLl9zdGF0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgc3RhcnRPcGVyYXRpb24oZGVzY3JpcHRpb24gOiBzdHJpbmcpIDogT2JzZXJ2ZXI8bnVtYmVyPiB7XG4gICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgICBcbiAgICB0aGlzLl9kZXNjcmlwdGlvblN1YmplY3QubmV4dChkZXNjcmlwdGlvbik7XG4gICAgdGhpcy5fc3RhdGVTdWJqZWN0Lm5leHQoc3ViamVjdCk7XG5cbiAgICByZXR1cm4gc3ViamVjdDtcbiAgfVxufVxuIl19