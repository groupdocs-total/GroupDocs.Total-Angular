/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
var AccordionService = /** @class */ (function () {
    function AccordionService() {
        this._addingObserver = new BehaviorSubject(null);
        this._removingObserver = new BehaviorSubject(null);
        this._addedProperty = this._addingObserver.asObservable();
        this._removedProperty = this._removingObserver.asObservable();
    }
    Object.defineProperty(AccordionService.prototype, "addedProperty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._addedProperty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionService.prototype, "removedProperty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._removedProperty;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} addedProperty
     * @return {?}
     */
    AccordionService.prototype.addProperty = /**
     * @param {?} addedProperty
     * @return {?}
     */
    function (addedProperty) {
        this._addingObserver.next(addedProperty);
    };
    /**
     * @param {?} removedProperty
     * @return {?}
     */
    AccordionService.prototype.removeProperty = /**
     * @param {?} removedProperty
     * @return {?}
     */
    function (removedProperty) {
        this._removingObserver.next(removedProperty);
    };
    AccordionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AccordionService.ctorParameters = function () { return []; };
    /** @nocollapse */ AccordionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AccordionService_Factory() { return new AccordionService(); }, token: AccordionService, providedIn: "root" });
    return AccordionService;
}());
export { AccordionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccordionService.prototype._addingObserver;
    /**
     * @type {?}
     * @private
     */
    AccordionService.prototype._removingObserver;
    /**
     * @type {?}
     * @private
     */
    AccordionService.prototype._addedProperty;
    /**
     * @type {?}
     * @private
     */
    AccordionService.prototype._removedProperty;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvYWNjb3JkaW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFHbkQ7SUFVRTtRQUxRLG9CQUFlLEdBQXVDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLHNCQUFpQixHQUF1QyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixtQkFBYyxHQUFrQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BGLHFCQUFnQixHQUFrQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHaEcsQ0FBQztJQUVELHNCQUFJLDJDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkNBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksYUFBZ0M7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCx5Q0FBYzs7OztJQUFkLFVBQWUsZUFBa0M7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkEzQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MkJBTkQ7Q0FnQ0MsQUE1QkQsSUE0QkM7U0F4QlksZ0JBQWdCOzs7Ozs7SUFDM0IsMkNBQXdGOzs7OztJQUN4Riw2Q0FBMEY7Ozs7O0lBQzFGLDBDQUE0Rjs7Ozs7SUFDNUYsNENBQWdHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEZpbGVQcm9wZXJ0eU1vZGVsIH0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfYWRkaW5nT2JzZXJ2ZXI6IEJlaGF2aW9yU3ViamVjdDxGaWxlUHJvcGVydHlNb2RlbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwcml2YXRlIF9yZW1vdmluZ09ic2VydmVyOiBCZWhhdmlvclN1YmplY3Q8RmlsZVByb3BlcnR5TW9kZWw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgcHJpdmF0ZSBfYWRkZWRQcm9wZXJ0eTogT2JzZXJ2YWJsZTxGaWxlUHJvcGVydHlNb2RlbD4gPSB0aGlzLl9hZGRpbmdPYnNlcnZlci5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfcmVtb3ZlZFByb3BlcnR5OiBPYnNlcnZhYmxlPEZpbGVQcm9wZXJ0eU1vZGVsPiA9IHRoaXMuX3JlbW92aW5nT2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgYWRkZWRQcm9wZXJ0eSgpOiBPYnNlcnZhYmxlPEZpbGVQcm9wZXJ0eU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZGVkUHJvcGVydHk7XG4gIH1cblxuICBnZXQgcmVtb3ZlZFByb3BlcnR5KCk6IE9ic2VydmFibGU8RmlsZVByb3BlcnR5TW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlZFByb3BlcnR5O1xuICB9XG5cbiAgYWRkUHJvcGVydHkoYWRkZWRQcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcbiAgICB0aGlzLl9hZGRpbmdPYnNlcnZlci5uZXh0KGFkZGVkUHJvcGVydHkpO1xuICB9XG5cbiAgcmVtb3ZlUHJvcGVydHkocmVtb3ZlZFByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCkge1xuICAgIHRoaXMuX3JlbW92aW5nT2JzZXJ2ZXIubmV4dChyZW1vdmVkUHJvcGVydHkpO1xuICB9XG59Il19