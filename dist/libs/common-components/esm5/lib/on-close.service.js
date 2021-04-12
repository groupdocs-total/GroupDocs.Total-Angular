/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
var OnCloseService = /** @class */ (function () {
    function OnCloseService() {
        this._observer = new Subject();
        this._onClose = this._observer.asObservable();
    }
    Object.defineProperty(OnCloseService.prototype, "onClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._onClose;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} close
     * @return {?}
     */
    OnCloseService.prototype.close = /**
     * @param {?} close
     * @return {?}
     */
    function (close) {
        this._observer.next(close);
    };
    OnCloseService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OnCloseService.ctorParameters = function () { return []; };
    /** @nocollapse */ OnCloseService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OnCloseService_Factory() { return new OnCloseService(); }, token: OnCloseService, providedIn: "root" });
    return OnCloseService;
}());
export { OnCloseService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnCloseService.prototype._observer;
    /**
     * @type {?}
     * @private
     */
    OnCloseService.prototype._onClose;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tY2xvc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9vbi1jbG9zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRXpDO0lBT0U7UUFIUSxjQUFTLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUF3QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRy9FLENBQUM7SUFFRCxzQkFBSSxtQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBOzs7OztJQUVELDhCQUFLOzs7O0lBQUwsVUFBTSxLQUFjO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7O2dCQWhCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt5QkFMRDtDQW9CQyxBQWpCRCxJQWlCQztTQWRZLGNBQWM7Ozs7OztJQUN6QixtQ0FBb0Q7Ozs7O0lBQ3BELGtDQUErRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9uQ2xvc2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9vYnNlcnZlcjogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfb25DbG9zZTogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIGdldCBvbkNsb3NlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX29uQ2xvc2U7XHJcbiAgfVxyXG5cclxuICBjbG9zZShjbG9zZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChjbG9zZSlcclxuICB9XHJcbn1cclxuIl19