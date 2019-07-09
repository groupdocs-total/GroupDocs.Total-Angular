import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let SelectionService = class SelectionService {
    constructor() {
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    restoreSelection() {
        if (!this.selection.collapsed || this.isIE) {
            this.putSelection(this.selection);
        }
    }
    captureSelection() {
        this.selection = window.getSelection().getRangeAt(0);
    }
    putSelection(selection) {
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(selection.cloneRange());
    }
    refreshSelection() {
        this.captureSelection();
        this.restoreSelection();
    }
};
SelectionService.ngInjectableDef = i0.defineInjectable({ factory: function SelectionService_Factory() { return new SelectionService(); }, token: SelectionService, providedIn: "root" });
SelectionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], SelectionService);
export { SelectionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBSDdCO1FBS0UsU0FBSSxHQUFlLEtBQUssSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQXNCcEY7SUFwQkMsZ0JBQWdCO1FBQ2QsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFHLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxZQUFZLENBQUMsU0FBUztRQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBOztBQXhCWSxnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQXdCNUI7U0F4QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uU2VydmljZSB7XG4gIHNlbGVjdGlvbjogUmFuZ2U7XG4gIGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIS8oTVNJRXxUcmlkZW50XFwvfEVkZ2VcXC8pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICByZXN0b3JlU2VsZWN0aW9uKCkge1xuICAgIGlmKCF0aGlzLnNlbGVjdGlvbi5jb2xsYXBzZWQgfHwgdGhpcy5pc0lFKXtcbiAgICAgIHRoaXMucHV0U2VsZWN0aW9uKHRoaXMuc2VsZWN0aW9uICApO1xuICAgIH1cbiAgfVxuXG4gIGNhcHR1cmVTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKTtcbiAgfVxuXG4gIHByaXZhdGUgcHV0U2VsZWN0aW9uKHNlbGVjdGlvbikge1xuICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsLmFkZFJhbmdlKHNlbGVjdGlvbi5jbG9uZVJhbmdlKCkpO1xuICB9XG5cbiAgcmVmcmVzaFNlbGVjdGlvbigpIHtcbiAgICB0aGlzLmNhcHR1cmVTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnJlc3RvcmVTZWxlY3Rpb24oKTtcbiAgfVxufVxuIl19