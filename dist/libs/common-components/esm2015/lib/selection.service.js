/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SelectionService {
    constructor() {
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    /**
     * @return {?}
     */
    restoreSelection() {
        if (this.selection && !this.selection.collapsed || this.isIE) {
            this.putSelection(this.selection);
        }
    }
    /**
     * @return {?}
     */
    captureSelection() {
        this.selection = window.getSelection().getRangeAt(0);
    }
    /**
     * @private
     * @param {?} selection
     * @return {?}
     */
    putSelection(selection) {
        /** @type {?} */
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(selection.cloneRange());
    }
    /**
     * @return {?}
     */
    refreshSelection() {
        this.captureSelection();
        this.restoreSelection();
    }
}
SelectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SelectionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SelectionService_Factory() { return new SelectionService(); }, token: SelectionService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SelectionService.prototype.selection;
    /** @type {?} */
    SelectionService.prototype.isIE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDLE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7UUFLRSxTQUFJLEdBQWUsS0FBSyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBc0JwRjs7OztJQXBCQyxnQkFBZ0I7UUFDZCxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsU0FBUzs7Y0FDdEIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUU7UUFDakMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQTFCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMscUNBQWlCOztJQUNqQixnQ0FBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25TZXJ2aWNlIHtcbiAgc2VsZWN0aW9uOiBSYW5nZTtcbiAgaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhLyhNU0lFfFRyaWRlbnRcXC98RWRnZVxcLykvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIHJlc3RvcmVTZWxlY3Rpb24oKSB7XG4gICAgaWYodGhpcy5zZWxlY3Rpb24gJiYgIXRoaXMuc2VsZWN0aW9uLmNvbGxhcHNlZCB8fCB0aGlzLmlzSUUpe1xuICAgICAgdGhpcy5wdXRTZWxlY3Rpb24odGhpcy5zZWxlY3Rpb24gICk7XG4gICAgfVxuICB9XG5cbiAgY2FwdHVyZVNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXRTZWxlY3Rpb24oc2VsZWN0aW9uKSB7XG4gICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWwuYWRkUmFuZ2Uoc2VsZWN0aW9uLmNsb25lUmFuZ2UoKSk7XG4gIH1cblxuICByZWZyZXNoU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuY2FwdHVyZVNlbGVjdGlvbigpO1xuICAgIHRoaXMucmVzdG9yZVNlbGVjdGlvbigpO1xuICB9XG59XG4iXX0=