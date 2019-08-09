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
     * @param {?} id
     * @param {?} event
     * @return {?}
     */
    DifferenceHighlightComponent.prototype.close = /**
     * @param {?} id
     * @param {?} event
     * @return {?}
     */
    function (id, event) {
        if (event && event['value'] === true) {
            this.changesService.setActiveChange(null);
        }
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
                    template: "<div\n  class=\"gd-difference-{{change.type}} highlight-difference\"\n  gdOutside\n  [clickOutsideEnabled]=\"active\"\n  (clickOutside)=\"close(change.id,$event)\"\n  (click)=\"highlight(change.id)\"\n  [ngClass]=\"{'active': active}\"\n  [ngStyle]=\"{\n    width: change.normalized.width + '%',\n    height: change.normalized.height + '%',\n    left: change.normalized.x + '%',\n    top: change.normalized.y + '%'\n  }\"\n  data-id=\"{{change.id}}\">\n\n</div>\n\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvZGlmZmVyZW5jZS1oaWdobGlnaHQvZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztJQUMzQixDQUFDLEdBQUcsTUFBTTtBQUVoQjtJQVVFLHNDQUFZLGFBQWtDO1FBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDRCwrQ0FBUTs7O0lBQVI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUF6QyxDQUF5QyxFQUFDLENBQUM7SUFDcEcsQ0FBQzs7Ozs7O0lBRUQsNENBQUs7Ozs7O0lBQUwsVUFBTSxFQUFXLEVBQUUsS0FBWTtRQUM3QixJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnREFBUzs7OztJQUFULFVBQVUsRUFBVztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDZkQUFvRDs7aUJBRXJEOzs7O2dCQVJRLGtCQUFrQjs7O3lCQVV4QixLQUFLO3lCQUNMLEtBQUs7O0lBbUJSLG1DQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FyQlksNEJBQTRCOzs7SUFDdkMsOENBQTRCOztJQUM1Qiw4Q0FBeUI7Ozs7O0lBQ3pCLHNEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFuZ2VJbmZvfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBEaWZmZXJlbmNlc1NlcnZpY2UgfSBmcm9tICcuLi9kaWZmZXJlbmNlcy5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kaWZmZXJlbmNlLWhpZ2hsaWdodCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWZmZXJlbmNlLWhpZ2hsaWdodC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpZmZlcmVuY2UtaGlnaGxpZ2h0LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUhpZ2hsaWdodENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgQElucHV0KCkgY2hhbmdlOiBDaGFuZ2VJbmZvO1xuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XG4gIHByaXZhdGUgY2hhbmdlc1NlcnZpY2UgOiBEaWZmZXJlbmNlc1NlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoY2hhbmdlU2VydmljZSA6IERpZmZlcmVuY2VzU2VydmljZSkge1xuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2UgPSBjaGFuZ2VTZXJ2aWNlO1xuICB9XG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKGFjdGl2ZUlEID0+IHRoaXMuYWN0aXZlID0gdGhpcy5jaGFuZ2UuaWQgPT09IGFjdGl2ZUlEKTtcbiAgfVxuXG4gIGNsb3NlKGlkIDogc3RyaW5nLCBldmVudDogRXZlbnQpe1xuICAgIGlmKGV2ZW50ICYmIGV2ZW50Wyd2YWx1ZSddID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNoYW5nZXNTZXJ2aWNlLnNldEFjdGl2ZUNoYW5nZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBoaWdobGlnaHQoaWQgOiBzdHJpbmcpe1xuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2Uuc2V0QWN0aXZlQ2hhbmdlKGlkKTtcbiAgfVxufVxuIl19