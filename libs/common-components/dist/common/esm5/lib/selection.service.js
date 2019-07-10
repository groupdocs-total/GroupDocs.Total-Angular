import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var SelectionService = /** @class */ (function () {
    function SelectionService() {
        this.isIE = false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    }
    SelectionService.prototype.restoreSelection = function () {
        if (!this.selection.collapsed || this.isIE) {
            this.putSelection(this.selection);
        }
    };
    SelectionService.prototype.captureSelection = function () {
        this.selection = window.getSelection().getRangeAt(0);
    };
    SelectionService.prototype.putSelection = function (selection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(selection.cloneRange());
    };
    SelectionService.prototype.refreshSelection = function () {
        this.captureSelection();
        this.restoreSelection();
    };
    SelectionService.ngInjectableDef = i0.defineInjectable({ factory: function SelectionService_Factory() { return new SelectionService(); }, token: SelectionService, providedIn: "root" });
    SelectionService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], SelectionService);
    return SelectionService;
}());
export { SelectionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDO0lBSEE7UUFLRSxTQUFJLEdBQWUsS0FBSyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBc0JwRjtJQXBCQywyQ0FBZ0IsR0FBaEI7UUFDRSxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksRUFBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLHVDQUFZLEdBQXBCLFVBQXFCLFNBQVM7UUFDNUIsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOztJQXZCVSxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQXdCNUI7MkJBN0JEO0NBNkJDLEFBeEJELElBd0JDO1NBeEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvblNlcnZpY2Uge1xuICBzZWxlY3Rpb246IFJhbmdlO1xuICBpc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISEvKE1TSUV8VHJpZGVudFxcL3xFZGdlXFwvKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgcmVzdG9yZVNlbGVjdGlvbigpIHtcbiAgICBpZighdGhpcy5zZWxlY3Rpb24uY29sbGFwc2VkIHx8IHRoaXMuaXNJRSl7XG4gICAgICB0aGlzLnB1dFNlbGVjdGlvbih0aGlzLnNlbGVjdGlvbiAgKTtcbiAgICB9XG4gIH1cblxuICBjYXB0dXJlU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCk7XG4gIH1cblxuICBwcml2YXRlIHB1dFNlbGVjdGlvbihzZWxlY3Rpb24pIHtcbiAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbC5hZGRSYW5nZShzZWxlY3Rpb24uY2xvbmVSYW5nZSgpKTtcbiAgfVxuXG4gIHJlZnJlc2hTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5jYXB0dXJlU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5yZXN0b3JlU2VsZWN0aW9uKCk7XG4gIH1cbn1cbiJdfQ==