/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var DifferencesService = /** @class */ (function () {
    function DifferencesService() {
        this._activeChange = new BehaviorSubject(null);
        this.activeChange = this._activeChange.asObservable();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    DifferencesService.prototype.setActiveChange = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._activeChange.next(id);
    };
    DifferencesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DifferencesService.ctorParameters = function () { return []; };
    /** @nocollapse */ DifferencesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DifferencesService_Factory() { return new DifferencesService(); }, token: DifferencesService, providedIn: "root" });
    return DifferencesService;
}());
export { DifferencesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DifferencesService.prototype._activeChange;
    /** @type {?} */
    DifferencesService.prototype.activeChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL2RpZmZlcmVuY2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFdEM7SUFRRTtRQUhRLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDMUQsaUJBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR2pELENBQUM7Ozs7O0lBRUQsNENBQWU7Ozs7SUFBZixVQUFnQixFQUFXO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzZCQUxEO0NBaUJDLEFBZEQsSUFjQztTQVhZLGtCQUFrQjs7Ozs7O0lBRTdCLDJDQUEwRDs7SUFDMUQsMENBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZXNTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9hY3RpdmVDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG4gIGFjdGl2ZUNoYW5nZSA9IHRoaXMuX2FjdGl2ZUNoYW5nZS5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHNldEFjdGl2ZUNoYW5nZShpZCA6IHN0cmluZyl7XG4gICAgdGhpcy5fYWN0aXZlQ2hhbmdlLm5leHQoaWQpO1xuICB9XG59XG4iXX0=