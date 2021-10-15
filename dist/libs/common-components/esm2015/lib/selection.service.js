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
        /** @type {?} */
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            this.selection = selection.getRangeAt(0);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDLE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7UUFLRSxTQUFJLEdBQWUsS0FBSyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBeUJwRjs7OztJQXZCQyxnQkFBZ0I7UUFDZCxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7OztJQUVELGdCQUFnQjs7Y0FDUixTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRTtRQUN2QyxJQUFJLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxTQUFTOztjQUN0QixHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRTtRQUNqQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBN0JGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7SUFFQyxxQ0FBaUI7O0lBQ2pCLGdDQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25TZXJ2aWNlIHtcclxuICBzZWxlY3Rpb246IFJhbmdlO1xyXG4gIGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgcmVzdG9yZVNlbGVjdGlvbigpIHtcclxuICAgIGlmKHRoaXMuc2VsZWN0aW9uICYmICF0aGlzLnNlbGVjdGlvbi5jb2xsYXBzZWQgfHwgdGhpcy5pc0lFKXtcclxuICAgICAgdGhpcy5wdXRTZWxlY3Rpb24odGhpcy5zZWxlY3Rpb24gICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYXB0dXJlU2VsZWN0aW9uKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50ID4gMCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdXRTZWxlY3Rpb24oc2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWwuYWRkUmFuZ2Uoc2VsZWN0aW9uLmNsb25lUmFuZ2UoKSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoU2VsZWN0aW9uKCkge1xyXG4gICAgdGhpcy5jYXB0dXJlU2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLnJlc3RvcmVTZWxlY3Rpb24oKTtcclxuICB9XHJcbn1cclxuIl19