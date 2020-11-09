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
        this._addedProperty = this._addingObserver.asObservable();
    }
    /**
     * @return {?}
     */
    get addedProperty() {
        return this._addedProperty;
    }
    /**
     * @param {?} addedProperty
     * @return {?}
     */
    addProperty(addedProperty) {
        this._addingObserver.next(addedProperty);
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
    AccordionService.prototype._addedProperty;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvYWNjb3JkaW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFPbkQsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQjtRQUhRLG9CQUFlLEdBQXVDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLG1CQUFjLEdBQWtDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHNUYsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxhQUFnQztRQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUFqQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBR0MsMkNBQXdGOzs7OztJQUN4RiwwQ0FBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZpbGVQcm9wZXJ0eU1vZGVsIH0gZnJvbSAnLi9tZXRhZGF0YS1tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2FkZGluZ09ic2VydmVyOiBCZWhhdmlvclN1YmplY3Q8RmlsZVByb3BlcnR5TW9kZWw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcclxuICBwcml2YXRlIF9hZGRlZFByb3BlcnR5OiBPYnNlcnZhYmxlPEZpbGVQcm9wZXJ0eU1vZGVsPiA9IHRoaXMuX2FkZGluZ09ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCBhZGRlZFByb3BlcnR5KCk6IE9ic2VydmFibGU8RmlsZVByb3BlcnR5TW9kZWw+IHtcclxuICAgIHJldHVybiB0aGlzLl9hZGRlZFByb3BlcnR5O1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvcGVydHkoYWRkZWRQcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcclxuICAgIHRoaXMuX2FkZGluZ09ic2VydmVyLm5leHQoYWRkZWRQcm9wZXJ0eSk7XHJcbiAgfVxyXG59Il19