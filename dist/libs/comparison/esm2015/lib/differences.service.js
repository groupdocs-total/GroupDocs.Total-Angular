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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21wYXJpc29uLyIsInNvdXJjZXMiOlsibGliL2RpZmZlcmVuY2VzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFLdEMsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QjtRQUhRLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDMUQsaUJBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR2pELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEVBQVc7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBYkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBR0MsMkNBQTBEOztJQUMxRCwwQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2FjdGl2ZUNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcbiAgYWN0aXZlQ2hhbmdlID0gdGhpcy5fYWN0aXZlQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgc2V0QWN0aXZlQ2hhbmdlKGlkIDogc3RyaW5nKXtcbiAgICB0aGlzLl9hY3RpdmVDaGFuZ2UubmV4dChpZCk7XG4gIH1cbn1cbiJdfQ==