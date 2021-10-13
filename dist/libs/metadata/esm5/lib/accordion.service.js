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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvbWV0YWRhdGEvIiwic291cmNlcyI6WyJsaWIvYWNjb3JkaW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFHbkQ7SUFRRTtRQUhRLG9CQUFlLEdBQXVDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLG1CQUFjLEdBQWtDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHNUYsQ0FBQztJQUVELHNCQUFJLDJDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxhQUFnQztRQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MkJBTkQ7Q0FzQkMsQUFsQkQsSUFrQkM7U0FkWSxnQkFBZ0I7Ozs7OztJQUMzQiwyQ0FBd0Y7Ozs7O0lBQ3hGLDBDQUE0RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBGaWxlUHJvcGVydHlNb2RlbCB9IGZyb20gJy4vbWV0YWRhdGEtbW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfYWRkaW5nT2JzZXJ2ZXI6IEJlaGF2aW9yU3ViamVjdDxGaWxlUHJvcGVydHlNb2RlbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwcml2YXRlIF9hZGRlZFByb3BlcnR5OiBPYnNlcnZhYmxlPEZpbGVQcm9wZXJ0eU1vZGVsPiA9IHRoaXMuX2FkZGluZ09ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IGFkZGVkUHJvcGVydHkoKTogT2JzZXJ2YWJsZTxGaWxlUHJvcGVydHlNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLl9hZGRlZFByb3BlcnR5O1xuICB9XG5cbiAgYWRkUHJvcGVydHkoYWRkZWRQcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWwpIHtcbiAgICB0aGlzLl9hZGRpbmdPYnNlcnZlci5uZXh0KGFkZGVkUHJvcGVydHkpO1xuICB9XG59Il19