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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvYWNjb3JkaW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFPbkQsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQjtRQUhRLG9CQUFlLEdBQXVDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLG1CQUFjLEdBQWtDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHNUYsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxhQUFnQztRQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUFqQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBR0MsMkNBQXdGOzs7OztJQUN4RiwwQ0FBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgRmlsZVByb3BlcnR5TW9kZWwgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEFjY29yZGlvblNlcnZpY2Uge1xuICBwcml2YXRlIF9hZGRpbmdPYnNlcnZlcjogQmVoYXZpb3JTdWJqZWN0PEZpbGVQcm9wZXJ0eU1vZGVsPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHByaXZhdGUgX2FkZGVkUHJvcGVydHk6IE9ic2VydmFibGU8RmlsZVByb3BlcnR5TW9kZWw+ID0gdGhpcy5fYWRkaW5nT2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgYWRkZWRQcm9wZXJ0eSgpOiBPYnNlcnZhYmxlPEZpbGVQcm9wZXJ0eU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZGVkUHJvcGVydHk7XG4gIH1cblxuICBhZGRQcm9wZXJ0eShhZGRlZFByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbCkge1xuICAgIHRoaXMuX2FkZGluZ09ic2VydmVyLm5leHQoYWRkZWRQcm9wZXJ0eSk7XG4gIH1cbn0iXX0=