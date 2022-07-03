/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export class OnCloseService {
    constructor() {
        this._observer = new Subject();
        this._onClose = this._observer.asObservable();
    }
    /**
     * @return {?}
     */
    get onClose() {
        return this._onClose;
    }
    /**
     * @param {?} close
     * @return {?}
     */
    close(close) {
        this._observer.next(close);
    }
}
OnCloseService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OnCloseService.ctorParameters = () => [];
/** @nocollapse */ OnCloseService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OnCloseService_Factory() { return new OnCloseService(); }, token: OnCloseService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tY2xvc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9vbi1jbG9zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBS3pDLE1BQU0sT0FBTyxjQUFjO0lBSXpCO1FBSFEsY0FBUyxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ25DLGFBQVEsR0FBd0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUcvRSxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQzs7O1lBaEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUVDLG1DQUFvRDs7Ozs7SUFDcEQsa0NBQStFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT25DbG9zZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9vbkNsb3NlOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9uQ2xvc2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fb25DbG9zZTtcclxuICB9XHJcblxyXG4gIGNsb3NlKGNsb3NlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KGNsb3NlKVxyXG4gIH1cclxufVxyXG4iXX0=