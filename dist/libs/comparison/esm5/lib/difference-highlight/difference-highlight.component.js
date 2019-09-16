/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ChangeInfo } from "../models";
import { DifferencesService } from '../differences.service';
import * as jquery from "jquery";
/** @type {?} */
var $ = jquery;
var DifferenceHighlightComponent = /** @class */ (function () {
    function DifferenceHighlightComponent(changeService) {
        this.changesService = changeService;
    }
    /**
     * @return {?}
     */
    DifferenceHighlightComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.changesService.activeChange.subscribe((/**
         * @param {?} activeID
         * @return {?}
         */
        function (activeID) { return _this.active = _this.change.id === activeID; }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DifferenceHighlightComponent.prototype.close = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changesService.setActiveChange(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DifferenceHighlightComponent.prototype.highlight = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.changesService.setActiveChange(id);
    };
    DifferenceHighlightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-difference-highlight',
                    template: "<div\n  class=\"gd-difference-{{change.type}} highlight-difference\"\n  (clickOutside)=\"close($event)\"\n  [clickOutsideEnabled]=\"active\"\n  (click)=\"highlight(change.id)\"\n  [ngClass]=\"{'active': active}\"\n  [ngStyle]=\"{\n    width: change.normalized.width + '%',\n    height: change.normalized.height + '%',\n    left: change.normalized.x + '%',\n    top: change.normalized.y + '%'\n  }\"\n  data-id=\"{{change.id}}\">\n\n</div>\n\n",
                    styles: [".highlight-difference{position:absolute;cursor:pointer;z-index:1}.gd-difference.active,.highlight-difference.active{box-shadow:0 0 0 9999px rgba(0,0,0,.5);z-index:999}.gd-difference-1{background-color:rgba(0,122,255,.4)}.gd-difference-2,.gd-difference-4{background-color:rgba(46,237,0,.4)}.gd-difference-3{background-color:rgba(237,0,0,.4)}.gd-difference-6{background-color:rgba(215,224,0,.4)}"]
                }] }
    ];
    /** @nocollapse */
    DifferenceHighlightComponent.ctorParameters = function () { return [
        { type: DifferencesService }
    ]; };
    DifferenceHighlightComponent.propDecorators = {
        change: [{ type: Input }],
        active: [{ type: Input }]
    };
    return DifferenceHighlightComponent;
}());
export { DifferenceHighlightComponent };
if (false) {
    /** @type {?} */
    DifferenceHighlightComponent.prototype.change;
    /** @type {?} */
    DifferenceHighlightComponent.prototype.active;
    /**
     * @type {?}
     * @private
     */
    DifferenceHighlightComponent.prototype.changesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvZGlmZmVyZW5jZS1oaWdobGlnaHQvZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQVVFLHNDQUFZLGFBQWtDO1FBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDRCwrQ0FBUTs7O0lBQVI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUF6QyxDQUF5QyxFQUFDLENBQUM7SUFDcEcsQ0FBQzs7Ozs7SUFFRCw0Q0FBSzs7OztJQUFMLFVBQU0sS0FBWTtRQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsZ0RBQVM7Ozs7SUFBVCxVQUFVLEVBQVc7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxzY0FBb0Q7O2lCQUVyRDs7OztnQkFSUSxrQkFBa0I7Ozt5QkFVeEIsS0FBSzt5QkFDTCxLQUFLOztJQWlCUixtQ0FBQztDQUFBLEFBeEJELElBd0JDO1NBbkJZLDRCQUE0Qjs7O0lBQ3ZDLDhDQUE0Qjs7SUFDNUIsOENBQXlCOzs7OztJQUN6QixzREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlSW5mb30gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHsgRGlmZmVyZW5jZXNTZXJ2aWNlIH0gZnJvbSAnLi4vZGlmZmVyZW5jZXMuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZGlmZmVyZW5jZS1oaWdobGlnaHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWZmZXJlbmNlLWhpZ2hsaWdodC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VIaWdobGlnaHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIEBJbnB1dCgpIGNoYW5nZTogQ2hhbmdlSW5mbztcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuICBwcml2YXRlIGNoYW5nZXNTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKGNoYW5nZVNlcnZpY2UgOiBEaWZmZXJlbmNlc1NlcnZpY2UpIHtcbiAgICB0aGlzLmNoYW5nZXNTZXJ2aWNlID0gY2hhbmdlU2VydmljZTtcbiAgfVxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2UuYWN0aXZlQ2hhbmdlLnN1YnNjcmliZShhY3RpdmVJRCA9PiB0aGlzLmFjdGl2ZSA9IHRoaXMuY2hhbmdlLmlkID09PSBhY3RpdmVJRCk7XG4gIH1cblxuICBjbG9zZShldmVudDogRXZlbnQpe1xuICAgICAgdGhpcy5jaGFuZ2VzU2VydmljZS5zZXRBY3RpdmVDaGFuZ2UobnVsbCk7XG4gIH1cblxuICBoaWdobGlnaHQoaWQgOiBzdHJpbmcpe1xuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2Uuc2V0QWN0aXZlQ2hhbmdlKGlkKTtcbiAgfVxufVxuIl19