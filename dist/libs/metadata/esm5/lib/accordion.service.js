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
        this._addedProperty = this._addingObserver.asObservable();
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
    AccordionService.prototype._addedProperty;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvYWNjb3JkaW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFHbkQ7SUFRRTtRQUhRLG9CQUFlLEdBQXVDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLG1CQUFjLEdBQWtDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHNUYsQ0FBQztJQUVELHNCQUFJLDJDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxhQUFnQztRQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MkJBTkQ7Q0FzQkMsQUFsQkQsSUFrQkM7U0FkWSxnQkFBZ0I7Ozs7OztJQUMzQiwyQ0FBd0Y7Ozs7O0lBQ3hGLDBDQUE0RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBGaWxlUHJvcGVydHlNb2RlbCB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uU2VydmljZSB7XG4gIHByaXZhdGUgX2FkZGluZ09ic2VydmVyOiBCZWhhdmlvclN1YmplY3Q8RmlsZVByb3BlcnR5TW9kZWw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgcHJpdmF0ZSBfYWRkZWRQcm9wZXJ0eTogT2JzZXJ2YWJsZTxGaWxlUHJvcGVydHlNb2RlbD4gPSB0aGlzLl9hZGRpbmdPYnNlcnZlci5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldCBhZGRlZFByb3BlcnR5KCk6IE9ic2VydmFibGU8RmlsZVByb3BlcnR5TW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5fYWRkZWRQcm9wZXJ0eTtcbiAgfVxuXG4gIGFkZFByb3BlcnR5KGFkZGVkUHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKSB7XG4gICAgdGhpcy5fYWRkaW5nT2JzZXJ2ZXIubmV4dChhZGRlZFByb3BlcnR5KTtcbiAgfVxufSJdfQ==