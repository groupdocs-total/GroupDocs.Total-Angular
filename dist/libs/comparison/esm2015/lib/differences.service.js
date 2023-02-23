/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class DifferencesService {
    constructor() {
        this._activeChange = new BehaviorSubject(null);
        this.activeChange = this._activeChange.asObservable();
        this._comparisonActionsMap = new Map(null);
        this.comparisonActionsMap = this._comparisonActionsMap;
        this.subject = new Subject();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setActiveChange(id) {
        this._activeChange.next(id);
    }
    /**
     * @param {?} id
     * @param {?} action
     * @return {?}
     */
    addToComparisonActions(id, action) {
        this._comparisonActionsMap.set(id, action);
    }
    /**
     * @return {?}
     */
    sendClickEvent() {
        this.subject.next();
    }
    /**
     * @return {?}
     */
    getClickEvent() {
        return this.subject.asObservable();
    }
}
DifferencesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DifferencesService.ctorParameters = () => [];
/** @nocollapse */ DifferencesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DifferencesService_Factory() { return new DifferencesService(); }, token: DifferencesService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DifferencesService.prototype._activeChange;
    /** @type {?} */
    DifferencesService.prototype.activeChange;
    /**
     * @type {?}
     * @private
     */
    DifferencesService.prototype._comparisonActionsMap;
    /** @type {?} */
    DifferencesService.prototype.comparisonActionsMap;
    /** @type {?} */
    DifferencesService.prototype.comparisonActionsList;
    /**
     * @type {?}
     * @private
     */
    DifferencesService.prototype.subject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL2RpZmZlcmVuY2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUszQyxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCO1FBR1Esa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUMxRCxpQkFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFekMsMEJBQXFCLEdBQUcsSUFBSSxHQUFHLENBQWlCLElBQUksQ0FBQyxDQUFDO1FBQzlELHlCQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUkxQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQVZyQyxDQUFDOzs7OztJQVlELGVBQWUsQ0FBQyxFQUFXO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELHNCQUFzQixDQUFDLEVBQVUsRUFBRSxNQUFjO1FBQy9DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsYUFBYTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7WUFoQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBTUMsMkNBQTBEOztJQUMxRCwwQ0FBaUQ7Ozs7O0lBRWpELG1EQUE4RDs7SUFDOUQsa0RBQWtEOztJQUVsRCxtREFBZ0M7Ozs7O0lBRWhDLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwcml2YXRlIF9hY3RpdmVDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG4gIGFjdGl2ZUNoYW5nZSA9IHRoaXMuX2FjdGl2ZUNoYW5nZS5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIF9jb21wYXJpc29uQWN0aW9uc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KG51bGwpO1xuICBjb21wYXJpc29uQWN0aW9uc01hcCA9IHRoaXMuX2NvbXBhcmlzb25BY3Rpb25zTWFwO1xuXG4gIGNvbXBhcmlzb25BY3Rpb25zTGlzdDogbnVtYmVyW107XG5cbiAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIHNldEFjdGl2ZUNoYW5nZShpZCA6IHN0cmluZyl7XG4gICAgdGhpcy5fYWN0aXZlQ2hhbmdlLm5leHQoaWQpO1xuICB9XG5cbiAgYWRkVG9Db21wYXJpc29uQWN0aW9ucyhpZDogc3RyaW5nLCBhY3Rpb246IG51bWJlcil7XG4gICAgdGhpcy5fY29tcGFyaXNvbkFjdGlvbnNNYXAuc2V0KGlkLCBhY3Rpb24pO1xuICB9XG5cbiAgc2VuZENsaWNrRXZlbnQoKXtcbiAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICB9XG5cbiAgZ2V0Q2xpY2tFdmVudCgpOk9ic2VydmFibGU8YW55PntcbiAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuIl19