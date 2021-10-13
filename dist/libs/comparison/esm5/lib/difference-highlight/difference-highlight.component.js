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
                    template: "<div\r\n  class=\"gd-difference-{{change.type}} highlight-difference\"\r\n  (clickOutside)=\"close($event)\"\r\n  [clickOutsideEnabled]=\"active\"\r\n  (click)=\"highlight(change.id)\"\r\n  [ngClass]=\"{'active': active}\"\r\n  [ngStyle]=\"{\r\n    width: change.normalized.width + '%',\r\n    height: change.normalized.height + '%',\r\n    left: change.normalized.x + '%',\r\n    top: change.normalized.y + '%'\r\n  }\"\r\n  data-id=\"{{change.id}}\">\r\n\r\n</div>\r\n\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvZGlmZmVyZW5jZS1oaWdobGlnaHQvZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQVVFLHNDQUFZLGFBQWtDO1FBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDRCwrQ0FBUTs7O0lBQVI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUF6QyxDQUF5QyxFQUFDLENBQUM7SUFDcEcsQ0FBQzs7Ozs7SUFFRCw0Q0FBSzs7OztJQUFMLFVBQU0sS0FBWTtRQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsZ0RBQVM7Ozs7SUFBVCxVQUFVLEVBQVc7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxzZUFBb0Q7O2lCQUVyRDs7OztnQkFSUSxrQkFBa0I7Ozt5QkFVeEIsS0FBSzt5QkFDTCxLQUFLOztJQWlCUixtQ0FBQztDQUFBLEFBeEJELElBd0JDO1NBbkJZLDRCQUE0Qjs7O0lBQ3ZDLDhDQUE0Qjs7SUFDNUIsOENBQXlCOzs7OztJQUN6QixzREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDaGFuZ2VJbmZvfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IERpZmZlcmVuY2VzU2VydmljZSB9IGZyb20gJy4uL2RpZmZlcmVuY2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1kaWZmZXJlbmNlLWhpZ2hsaWdodCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RpZmZlcmVuY2UtaGlnaGxpZ2h0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kaWZmZXJlbmNlLWhpZ2hsaWdodC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlSGlnaGxpZ2h0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gIEBJbnB1dCgpIGNoYW5nZTogQ2hhbmdlSW5mbztcclxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBjaGFuZ2VzU2VydmljZSA6IERpZmZlcmVuY2VzU2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2hhbmdlU2VydmljZSA6IERpZmZlcmVuY2VzU2VydmljZSkge1xyXG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZSA9IGNoYW5nZVNlcnZpY2U7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICB0aGlzLmNoYW5nZXNTZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoYWN0aXZlSUQgPT4gdGhpcy5hY3RpdmUgPSB0aGlzLmNoYW5nZS5pZCA9PT0gYWN0aXZlSUQpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgdGhpcy5jaGFuZ2VzU2VydmljZS5zZXRBY3RpdmVDaGFuZ2UobnVsbCk7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHQoaWQgOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZS5zZXRBY3RpdmVDaGFuZ2UoaWQpO1xyXG4gIH1cclxufVxyXG4iXX0=