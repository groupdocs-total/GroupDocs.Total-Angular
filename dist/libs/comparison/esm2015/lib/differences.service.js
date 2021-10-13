/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class DifferencesService {
    constructor() {
        this._activeChange = new BehaviorSubject(null);
        this.activeChange = this._activeChange.asObservable();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setActiveChange(id) {
        this._activeChange.next(id);
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL2RpZmZlcmVuY2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFLdEMsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QjtRQUhRLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDMUQsaUJBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR2pELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEVBQVc7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBYkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBR0MsMkNBQTBEOztJQUMxRCwwQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlc1NlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9hY3RpdmVDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgYWN0aXZlQ2hhbmdlID0gdGhpcy5fYWN0aXZlQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHNldEFjdGl2ZUNoYW5nZShpZCA6IHN0cmluZyl7XHJcbiAgICB0aGlzLl9hY3RpdmVDaGFuZ2UubmV4dChpZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==