/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var DifferencesService = /** @class */ (function () {
    function DifferencesService() {
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
    DifferencesService.prototype.setActiveChange = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._activeChange.next(id);
    };
    /**
     * @param {?} id
     * @param {?} action
     * @return {?}
     */
    DifferencesService.prototype.addToComparisonActions = /**
     * @param {?} id
     * @param {?} action
     * @return {?}
     */
    function (id, action) {
        this._comparisonActionsMap.set(id, action);
    };
    /**
     * @return {?}
     */
    DifferencesService.prototype.sendClickEvent = /**
     * @return {?}
     */
    function () {
        this.subject.next();
    };
    /**
     * @return {?}
     */
    DifferencesService.prototype.getClickEvent = /**
     * @return {?}
     */
    function () {
        return this.subject.asObservable();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL2RpZmZlcmVuY2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUUzQztJQUtFO1FBR1Esa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUMxRCxpQkFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFekMsMEJBQXFCLEdBQUcsSUFBSSxHQUFHLENBQWlCLElBQUksQ0FBQyxDQUFDO1FBQzlELHlCQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUkxQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQVZyQyxDQUFDOzs7OztJQVlELDRDQUFlOzs7O0lBQWYsVUFBZ0IsRUFBVztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxtREFBc0I7Ozs7O0lBQXRCLFVBQXVCLEVBQVUsRUFBRSxNQUFjO1FBQy9DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCwyQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7UUFDRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0JBaENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzZCQU5EO0NBcUNDLEFBakNELElBaUNDO1NBOUJZLGtCQUFrQjs7Ozs7O0lBSzdCLDJDQUEwRDs7SUFDMUQsMENBQWlEOzs7OztJQUVqRCxtREFBOEQ7O0lBQzlELGtEQUFrRDs7SUFFbEQsbURBQWdDOzs7OztJQUVoQyxxQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZlQ2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICBhY3RpdmVDaGFuZ2UgPSB0aGlzLl9hY3RpdmVDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBfY29tcGFyaXNvbkFjdGlvbnNNYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPihudWxsKTtcbiAgY29tcGFyaXNvbkFjdGlvbnNNYXAgPSB0aGlzLl9jb21wYXJpc29uQWN0aW9uc01hcDtcblxuICBjb21wYXJpc29uQWN0aW9uc0xpc3Q6IG51bWJlcltdO1xuXG4gIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBzZXRBY3RpdmVDaGFuZ2UoaWQgOiBzdHJpbmcpe1xuICAgIHRoaXMuX2FjdGl2ZUNoYW5nZS5uZXh0KGlkKTtcbiAgfVxuXG4gIGFkZFRvQ29tcGFyaXNvbkFjdGlvbnMoaWQ6IHN0cmluZywgYWN0aW9uOiBudW1iZXIpe1xuICAgIHRoaXMuX2NvbXBhcmlzb25BY3Rpb25zTWFwLnNldChpZCwgYWN0aW9uKTtcbiAgfVxuXG4gIHNlbmRDbGlja0V2ZW50KCl7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcbiAgfVxuXG4gIGdldENsaWNrRXZlbnQoKTpPYnNlcnZhYmxlPGFueT57XG4gICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==