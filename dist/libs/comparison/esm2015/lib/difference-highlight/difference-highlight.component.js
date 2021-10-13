/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ChangeInfo } from "../models";
import { DifferencesService } from '../differences.service';
import * as jquery from "jquery";
/** @type {?} */
const $ = jquery;
export class DifferenceHighlightComponent {
    /**
     * @param {?} changeService
     */
    constructor(changeService) {
        this.changesService = changeService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.changesService.activeChange.subscribe((/**
         * @param {?} activeID
         * @return {?}
         */
        activeID => this.active = this.change.id === activeID));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    close(event) {
        this.changesService.setActiveChange(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    highlight(id) {
        this.changesService.setActiveChange(id);
    }
}
DifferenceHighlightComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-difference-highlight',
                template: "<div\r\n  class=\"gd-difference-{{change.type}} highlight-difference\"\r\n  (clickOutside)=\"close($event)\"\r\n  [clickOutsideEnabled]=\"active\"\r\n  (click)=\"highlight(change.id)\"\r\n  [ngClass]=\"{'active': active}\"\r\n  [ngStyle]=\"{\r\n    width: change.normalized.width + '%',\r\n    height: change.normalized.height + '%',\r\n    left: change.normalized.x + '%',\r\n    top: change.normalized.y + '%'\r\n  }\"\r\n  data-id=\"{{change.id}}\">\r\n\r\n</div>\r\n\r\n",
                styles: [".highlight-difference{position:absolute;cursor:pointer;z-index:1}.gd-difference.active,.highlight-difference.active{box-shadow:0 0 0 9999px rgba(0,0,0,.5);z-index:999}.gd-difference-1{background-color:rgba(0,122,255,.4)}.gd-difference-2,.gd-difference-4{background-color:rgba(46,237,0,.4)}.gd-difference-3{background-color:rgba(237,0,0,.4)}.gd-difference-6{background-color:rgba(215,224,0,.4)}"]
            }] }
];
/** @nocollapse */
DifferenceHighlightComponent.ctorParameters = () => [
    { type: DifferencesService }
];
DifferenceHighlightComponent.propDecorators = {
    change: [{ type: Input }],
    active: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvZGlmZmVyZW5jZS1oaWdobGlnaHQvZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTtBQU9oQixNQUFNLE9BQU8sNEJBQTRCOzs7O0lBS3ZDLFlBQVksYUFBa0M7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFDdEMsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVk7UUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxFQUFXO1FBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsc2VBQW9EOzthQUVyRDs7OztZQVJRLGtCQUFrQjs7O3FCQVV4QixLQUFLO3FCQUNMLEtBQUs7Ozs7SUFETiw4Q0FBNEI7O0lBQzVCLDhDQUF5Qjs7Ozs7SUFDekIsc0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2hhbmdlSW5mb30gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBEaWZmZXJlbmNlc1NlcnZpY2UgfSBmcm9tICcuLi9kaWZmZXJlbmNlcy5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtZGlmZmVyZW5jZS1oaWdobGlnaHQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWZmZXJlbmNlLWhpZ2hsaWdodC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUhpZ2hsaWdodENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBASW5wdXQoKSBjaGFuZ2U6IENoYW5nZUluZm87XHJcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xyXG4gIHByaXZhdGUgY2hhbmdlc1NlcnZpY2UgOiBEaWZmZXJlbmNlc1NlcnZpY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNoYW5nZVNlcnZpY2UgOiBEaWZmZXJlbmNlc1NlcnZpY2UpIHtcclxuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2UgPSBjaGFuZ2VTZXJ2aWNlO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZS5hY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKGFjdGl2ZUlEID0+IHRoaXMuYWN0aXZlID0gdGhpcy5jaGFuZ2UuaWQgPT09IGFjdGl2ZUlEKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKGV2ZW50OiBFdmVudCl7XHJcbiAgICAgIHRoaXMuY2hhbmdlc1NlcnZpY2Uuc2V0QWN0aXZlQ2hhbmdlKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0KGlkIDogc3RyaW5nKXtcclxuICAgIHRoaXMuY2hhbmdlc1NlcnZpY2Uuc2V0QWN0aXZlQ2hhbmdlKGlkKTtcclxuICB9XHJcbn1cclxuIl19