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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWZpbGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvc291cmNlLWZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU0zQyxNQUFNLE9BQU8saUJBQWlCO0lBSTVCO1FBRlEsOEJBQXlCLEdBQUcsSUFBSSxPQUFPLEVBQWMsQ0FBQztRQUlyRCxzQkFBaUIsR0FBNEIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRnBGLENBQUM7Ozs7SUFJakIsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsVUFBc0I7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7WUFsQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBRUMsd0NBQWlDOzs7OztJQUNqQyxzREFBOEQ7O0lBSTlELDhDQUFvRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTb3VyY2VGaWxlIH0gZnJvbSAnLi9hcHAtbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUZpbGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9zb3VyY2VGaWxlIDogU291cmNlRmlsZTtcclxuICBwcml2YXRlIF9zb3VyY2VGaWxlQ2hhbmdlZFN1YmplY3QgPSBuZXcgU3ViamVjdDxTb3VyY2VGaWxlPigpO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHJlYWRvbmx5IHNvdXJjZUZpbGVDaGFuZ2VkIDogT2JzZXJ2YWJsZTxTb3VyY2VGaWxlPiA9IHRoaXMuX3NvdXJjZUZpbGVDaGFuZ2VkU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZ2V0IHNvdXJjZUZpbGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc291cmNlRmlsZTtcclxuICB9XHJcblxyXG4gIHNldCBzb3VyY2VGaWxlKHNvdXJjZUZpbGU6IFNvdXJjZUZpbGUpIHtcclxuICAgIHRoaXMuX3NvdXJjZUZpbGUgPSBzb3VyY2VGaWxlO1xyXG4gICAgdGhpcy5fc291cmNlRmlsZUNoYW5nZWRTdWJqZWN0Lm5leHQoc291cmNlRmlsZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==