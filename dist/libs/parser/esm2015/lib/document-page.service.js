/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class DocumentPageService {
    constructor() {
        this._activePageChangedSubject = new Subject();
        this._activePage = null;
        this.activePageChanged = this._activePageChangedSubject.asObservable();
    }
    /**
     * @return {?}
     */
    get activePage() {
        return this._activePage;
    }
    /**
     * @param {?} activePage
     * @return {?}
     */
    setActivePage(activePage) {
        this._activePage = activePage;
        this._activePageChangedSubject.next(activePage);
    }
}
DocumentPageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DocumentPageService.ctorParameters = () => [];
/** @nocollapse */ DocumentPageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DocumentPageService_Factory() { return new DocumentPageService(); }, token: DocumentPageService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtcGFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL3BhcnNlci8iLCJzb3VyY2VzIjpbImxpYi9kb2N1bWVudC1wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0IsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QjtRQUhRLDhCQUF5QixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDbEQsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFJMUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRjNELENBQUM7Ozs7SUFJakIsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFVBQWtCO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUdDLHdEQUEwRDs7Ozs7SUFDMUQsMENBQW1DOztJQUluQyxnREFBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50UGFnZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2FjdGl2ZVBhZ2VDaGFuZ2VkU3ViamVjdCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfYWN0aXZlUGFnZTogbnVtYmVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHJlYWRvbmx5IGFjdGl2ZVBhZ2VDaGFuZ2VkID0gdGhpcy5fYWN0aXZlUGFnZUNoYW5nZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGdldCBhY3RpdmVQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVBhZ2U7XG4gIH1cblxuICBzZXRBY3RpdmVQYWdlKGFjdGl2ZVBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuX2FjdGl2ZVBhZ2UgPSBhY3RpdmVQYWdlO1xuICAgIHRoaXMuX2FjdGl2ZVBhZ2VDaGFuZ2VkU3ViamVjdC5uZXh0KGFjdGl2ZVBhZ2UpO1xuICB9XG59XG4iXX0=