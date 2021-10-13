/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var DocumentPageService = /** @class */ (function () {
    function DocumentPageService() {
        this._activePageChangedSubject = new Subject();
        this._activePage = null;
        this.activePageChanged = this._activePageChangedSubject.asObservable();
    }
    Object.defineProperty(DocumentPageService.prototype, "activePage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activePage;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} activePage
     * @return {?}
     */
    DocumentPageService.prototype.setActivePage = /**
     * @param {?} activePage
     * @return {?}
     */
    function (activePage) {
        this._activePage = activePage;
        this._activePageChangedSubject.next(activePage);
    };
    DocumentPageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DocumentPageService.ctorParameters = function () { return []; };
    /** @nocollapse */ DocumentPageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DocumentPageService_Factory() { return new DocumentPageService(); }, token: DocumentPageService, providedIn: "root" });
    return DocumentPageService;
}());
export { DocumentPageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DocumentPageService.prototype._activePageChangedSubject;
    /**
     * @type {?}
     * @private
     */
    DocumentPageService.prototype._activePage;
    /** @type {?} */
    DocumentPageService.prototype.activePageChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9kb2N1bWVudC1wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7SUFRRTtRQUhRLDhCQUF5QixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDbEQsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFJMUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRjNELENBQUM7SUFJakIsc0JBQUksMkNBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWMsVUFBa0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkFuQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7OEJBTEQ7Q0F1QkMsQUFwQkQsSUFvQkM7U0FqQlksbUJBQW1COzs7Ozs7SUFFOUIsd0RBQTBEOzs7OztJQUMxRCwwQ0FBbUM7O0lBSW5DLGdEQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRQYWdlU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2FjdGl2ZVBhZ2VDaGFuZ2VkU3ViamVjdCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICBwcml2YXRlIF9hY3RpdmVQYWdlOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICByZWFkb25seSBhY3RpdmVQYWdlQ2hhbmdlZCA9IHRoaXMuX2FjdGl2ZVBhZ2VDaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZ2V0IGFjdGl2ZVBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVQYWdlO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlUGFnZShhY3RpdmVQYWdlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2FjdGl2ZVBhZ2UgPSBhY3RpdmVQYWdlO1xyXG4gICAgdGhpcy5fYWN0aXZlUGFnZUNoYW5nZWRTdWJqZWN0Lm5leHQoYWN0aXZlUGFnZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==