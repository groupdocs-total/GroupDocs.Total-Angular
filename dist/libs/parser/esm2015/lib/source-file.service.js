/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class SourceFileService {
    constructor() {
        this._sourceFileChangedSubject = new Subject();
        this.sourceFileChanged = this._sourceFileChangedSubject.asObservable();
    }
    /**
     * @return {?}
     */
    get sourceFile() {
        return this._sourceFile;
    }
    /**
     * @param {?} sourceFile
     * @return {?}
     */
    set sourceFile(sourceFile) {
        this._sourceFile = sourceFile;
        this._sourceFileChangedSubject.next(sourceFile);
    }
}
SourceFileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SourceFileService.ctorParameters = () => [];
/** @nocollapse */ SourceFileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SourceFileService_Factory() { return new SourceFileService(); }, token: SourceFileService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceFileService.prototype._sourceFile;
    /**
     * @type {?}
     * @private
     */
    SourceFileService.prototype._sourceFileChangedSubject;
    /** @type {?} */
    SourceFileService.prototype.sourceFileChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWZpbGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvc291cmNlLWZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU0zQyxNQUFNLE9BQU8saUJBQWlCO0lBSTVCO1FBRlEsOEJBQXlCLEdBQUcsSUFBSSxPQUFPLEVBQWMsQ0FBQztRQUlyRCxzQkFBaUIsR0FBNEIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRnBGLENBQUM7Ozs7SUFJakIsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsVUFBc0I7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7WUFsQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBRUMsd0NBQWlDOzs7OztJQUNqQyxzREFBOEQ7O0lBSTlELDhDQUFvRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNvdXJjZUZpbGUgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VGaWxlU2VydmljZSB7XG4gIHByaXZhdGUgX3NvdXJjZUZpbGUgOiBTb3VyY2VGaWxlO1xuICBwcml2YXRlIF9zb3VyY2VGaWxlQ2hhbmdlZFN1YmplY3QgPSBuZXcgU3ViamVjdDxTb3VyY2VGaWxlPigpO1xuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICByZWFkb25seSBzb3VyY2VGaWxlQ2hhbmdlZCA6IE9ic2VydmFibGU8U291cmNlRmlsZT4gPSB0aGlzLl9zb3VyY2VGaWxlQ2hhbmdlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgZ2V0IHNvdXJjZUZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUZpbGU7XG4gIH1cblxuICBzZXQgc291cmNlRmlsZShzb3VyY2VGaWxlOiBTb3VyY2VGaWxlKSB7XG4gICAgdGhpcy5fc291cmNlRmlsZSA9IHNvdXJjZUZpbGU7XG4gICAgdGhpcy5fc291cmNlRmlsZUNoYW5nZWRTdWJqZWN0Lm5leHQoc291cmNlRmlsZSk7XG4gIH1cbn1cbiJdfQ==