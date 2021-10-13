/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var SelectionService = /** @class */ (function () {
    function SelectionService() {
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    /**
     * @return {?}
     */
    SelectionService.prototype.restoreSelection = /**
     * @return {?}
     */
    function () {
        if (this.selection && !this.selection.collapsed || this.isIE) {
            this.putSelection(this.selection);
        }
    };
    /**
     * @return {?}
     */
    SelectionService.prototype.captureSelection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = window.getSelection();
        if (selection.rangeCount > 0) {
            this.selection = selection.getRangeAt(0);
        }
    };
    /**
     * @private
     * @param {?} selection
     * @return {?}
     */
    SelectionService.prototype.putSelection = /**
     * @private
     * @param {?} selection
     * @return {?}
     */
    function (selection) {
        /** @type {?} */
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(selection.cloneRange());
    };
    /**
     * @return {?}
     */
    SelectionService.prototype.refreshSelection = /**
     * @return {?}
     */
    function () {
        this.captureSelection();
        this.restoreSelection();
    };
    SelectionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SelectionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SelectionService_Factory() { return new SelectionService(); }, token: SelectionService, providedIn: "root" });
    return SelectionService;
}());
export { SelectionService };
if (false) {
    /** @type {?} */
    SelectionService.prototype.selection;
    /** @type {?} */
    SelectionService.prototype.isIE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDO0lBQUE7UUFLRSxTQUFJLEdBQWUsS0FBSyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBeUJwRjs7OztJQXZCQywyQ0FBZ0I7OztJQUFoQjtRQUNFLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFHLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsMkNBQWdCOzs7SUFBaEI7O1lBQ1EsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUU7UUFDdkMsSUFBSSxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDOzs7Ozs7SUFFTyx1Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsU0FBUzs7WUFDdEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUU7UUFDakMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELDJDQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBN0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzsyQkFKRDtDQWdDQyxBQTlCRCxJQThCQztTQTNCWSxnQkFBZ0I7OztJQUMzQixxQ0FBaUI7O0lBQ2pCLGdDQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvblNlcnZpY2Uge1xuICBzZWxlY3Rpb246IFJhbmdlO1xuICBpc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgcmVzdG9yZVNlbGVjdGlvbigpIHtcbiAgICBpZih0aGlzLnNlbGVjdGlvbiAmJiAhdGhpcy5zZWxlY3Rpb24uY29sbGFwc2VkIHx8IHRoaXMuaXNJRSl7XG4gICAgICB0aGlzLnB1dFNlbGVjdGlvbih0aGlzLnNlbGVjdGlvbiAgKTtcbiAgICB9XG4gIH1cblxuICBjYXB0dXJlU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICBpZiAoc2VsZWN0aW9uLnJhbmdlQ291bnQgPiAwKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHV0U2VsZWN0aW9uKHNlbGVjdGlvbikge1xuICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsLmFkZFJhbmdlKHNlbGVjdGlvbi5jbG9uZVJhbmdlKCkpO1xuICB9XG5cbiAgcmVmcmVzaFNlbGVjdGlvbigpIHtcbiAgICB0aGlzLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgfVxufVxuIl19