/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var SourceFileService = /** @class */ (function () {
    function SourceFileService() {
        this._sourceFileChangedSubject = new Subject();
        this.sourceFileChanged = this._sourceFileChangedSubject.asObservable();
    }
    Object.defineProperty(SourceFileService.prototype, "sourceFile", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sourceFile;
        },
        set: /**
         * @param {?} sourceFile
         * @return {?}
         */
        function (sourceFile) {
            this._sourceFile = sourceFile;
            this._sourceFileChangedSubject.next(sourceFile);
        },
        enumerable: true,
        configurable: true
    });
    SourceFileService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SourceFileService.ctorParameters = function () { return []; };
    /** @nocollapse */ SourceFileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SourceFileService_Factory() { return new SourceFileService(); }, token: SourceFileService, providedIn: "root" });
    return SourceFileService;
}());
export { SourceFileService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWZpbGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvc291cmNlLWZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUczQztJQU9FO1FBRlEsOEJBQXlCLEdBQUcsSUFBSSxPQUFPLEVBQWMsQ0FBQztRQUlyRCxzQkFBaUIsR0FBNEIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRnBGLENBQUM7SUFJakIsc0JBQUkseUNBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQUVELFVBQWUsVUFBc0I7WUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FMQTs7Z0JBYkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7NEJBTkQ7Q0F1QkMsQUFuQkQsSUFtQkM7U0FoQlksaUJBQWlCOzs7Ozs7SUFDNUIsd0NBQWlDOzs7OztJQUNqQyxzREFBOEQ7O0lBSTlELDhDQUFvRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNvdXJjZUZpbGUgfSBmcm9tICcuL2FwcC1tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VGaWxlU2VydmljZSB7XG4gIHByaXZhdGUgX3NvdXJjZUZpbGUgOiBTb3VyY2VGaWxlO1xuICBwcml2YXRlIF9zb3VyY2VGaWxlQ2hhbmdlZFN1YmplY3QgPSBuZXcgU3ViamVjdDxTb3VyY2VGaWxlPigpO1xuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICByZWFkb25seSBzb3VyY2VGaWxlQ2hhbmdlZCA6IE9ic2VydmFibGU8U291cmNlRmlsZT4gPSB0aGlzLl9zb3VyY2VGaWxlQ2hhbmdlZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgZ2V0IHNvdXJjZUZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZUZpbGU7XG4gIH1cblxuICBzZXQgc291cmNlRmlsZShzb3VyY2VGaWxlOiBTb3VyY2VGaWxlKSB7XG4gICAgdGhpcy5fc291cmNlRmlsZSA9IHNvdXJjZUZpbGU7XG4gICAgdGhpcy5fc291cmNlRmlsZUNoYW5nZWRTdWJqZWN0Lm5leHQoc291cmNlRmlsZSk7XG4gIH1cbn1cbiJdfQ==