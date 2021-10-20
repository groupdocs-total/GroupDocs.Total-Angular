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
                template: "<div\n  class=\"gd-difference-{{change.type}} highlight-difference\"\n  (clickOutside)=\"close($event)\"\n  [clickOutsideEnabled]=\"active\"\n  (click)=\"highlight(change.id)\"\n  [ngClass]=\"{'active': active}\"\n  [ngStyle]=\"{\n    width: change.normalized.width + '%',\n    height: change.normalized.height + '%',\n    left: change.normalized.x + '%',\n    top: change.normalized.y + '%'\n  }\"\n  data-id=\"{{change.id}}\">\n\n</div>\n\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbXBhcmlzb24vIiwic291cmNlcyI6WyJsaWIvZGlmZmVyZW5jZS1oaWdobGlnaHQvZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztNQUMzQixDQUFDLEdBQUcsTUFBTTtBQU9oQixNQUFNLE9BQU8sNEJBQTRCOzs7O0lBS3ZDLFlBQVksYUFBa0M7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFDdEMsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBQyxDQUFDO0lBQ3BHLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVk7UUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxFQUFXO1FBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsc2NBQW9EOzthQUVyRDs7OztZQVJRLGtCQUFrQjs7O3FCQVV4QixLQUFLO3FCQUNMLEtBQUs7Ozs7SUFETiw4Q0FBNEI7O0lBQzVCLDhDQUF5Qjs7Ozs7SUFDekIsc0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZUluZm99IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7IERpZmZlcmVuY2VzU2VydmljZSB9IGZyb20gJy4uL2RpZmZlcmVuY2VzLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRpZmZlcmVuY2UtaGlnaGxpZ2h0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpZmZlcmVuY2UtaGlnaGxpZ2h0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlSGlnaGxpZ2h0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBASW5wdXQoKSBjaGFuZ2U6IENoYW5nZUluZm87XG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBjaGFuZ2VzU2VydmljZSA6IERpZmZlcmVuY2VzU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcihjaGFuZ2VTZXJ2aWNlIDogRGlmZmVyZW5jZXNTZXJ2aWNlKSB7XG4gICAgdGhpcy5jaGFuZ2VzU2VydmljZSA9IGNoYW5nZVNlcnZpY2U7XG4gIH1cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmNoYW5nZXNTZXJ2aWNlLmFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoYWN0aXZlSUQgPT4gdGhpcy5hY3RpdmUgPSB0aGlzLmNoYW5nZS5pZCA9PT0gYWN0aXZlSUQpO1xuICB9XG5cbiAgY2xvc2UoZXZlbnQ6IEV2ZW50KXtcbiAgICAgIHRoaXMuY2hhbmdlc1NlcnZpY2Uuc2V0QWN0aXZlQ2hhbmdlKG51bGwpO1xuICB9XG5cbiAgaGlnaGxpZ2h0KGlkIDogc3RyaW5nKXtcbiAgICB0aGlzLmNoYW5nZXNTZXJ2aWNlLnNldEFjdGl2ZUNoYW5nZShpZCk7XG4gIH1cbn1cbiJdfQ==