/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export class AccordionService {
    constructor() {
        this._addingObserver = new BehaviorSubject(null);
        this._removingObserver = new BehaviorSubject(null);
        this._addedProperty = this._addingObserver.asObservable();
        this._removedProperty = this._removingObserver.asObservable();
    }
    /**
     * @return {?}
     */
    get addedProperty() {
        return this._addedProperty;
    }
    /**
     * @return {?}
     */
    get removedProperty() {
        return this._removedProperty;
    }
    /**
     * @param {?} addedProperty
     * @return {?}
     */
    addProperty(addedProperty) {
        this._addingObserver.next(addedProperty);
    }
    /**
     * @param {?} removedProperty
     * @return {?}
     */
    removeProperty(removedProperty) {
        this._removingObserver.next(removedProperty);
    }
}
AccordionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AccordionService.ctorParameters = () => [];
/** @nocollapse */ AccordionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AccordionService_Factory() { return new AccordionService(); }, token: AccordionService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvYWNjb3JkaW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFPbkQsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQjtRQUxRLG9CQUFlLEdBQXVDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLHNCQUFpQixHQUF1QyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixtQkFBYyxHQUFrQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BGLHFCQUFnQixHQUFrQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHaEcsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGFBQWdDO1FBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLGVBQWtDO1FBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBM0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUdDLDJDQUF3Rjs7Ozs7SUFDeEYsNkNBQTBGOzs7OztJQUMxRiwwQ0FBNEY7Ozs7O0lBQzVGLDRDQUFnRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBGaWxlUHJvcGVydHlNb2RlbCB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uU2VydmljZSB7XG4gIHByaXZhdGUgX2FkZGluZ09ic2VydmVyOiBCZWhhdmlvclN1YmplY3Q8RmlsZVByb3BlcnR5TW9kZWw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgcHJpdmF0ZSBfcmVtb3ZpbmdPYnNlcnZlcjogQmVoYXZpb3JTdWJqZWN0PEZpbGVQcm9wZXJ0eU1vZGVsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHByaXZhdGUgX2FkZGVkUHJvcGVydHk6IE9ic2VydmFibGU8RmlsZVByb3BlcnR5TW9kZWw+ID0gdGhpcy5fYWRkaW5nT2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgX3JlbW92ZWRQcm9wZXJ0eTogT2JzZXJ2YWJsZTxGaWxlUHJvcGVydHlNb2RlbD4gPSB0aGlzLl9yZW1vdmluZ09ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IGFkZGVkUHJvcGVydHkoKTogT2JzZXJ2YWJsZTxGaWxlUHJvcGVydHlNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLl9hZGRlZFByb3BlcnR5O1xuICB9XG5cbiAgZ2V0IHJlbW92ZWRQcm9wZXJ0eSgpOiBPYnNlcnZhYmxlPEZpbGVQcm9wZXJ0eU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZWRQcm9wZXJ0eTtcbiAgfVxuXG4gIGFkZFByb3BlcnR5KGFkZGVkUHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsKSB7XG4gICAgdGhpcy5fYWRkaW5nT2JzZXJ2ZXIubmV4dChhZGRlZFByb3BlcnR5KTtcbiAgfVxuXG4gIHJlbW92ZVByb3BlcnR5KHJlbW92ZWRQcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcbiAgICB0aGlzLl9yZW1vdmluZ09ic2VydmVyLm5leHQocmVtb3ZlZFByb3BlcnR5KTtcbiAgfVxufSJdfQ==