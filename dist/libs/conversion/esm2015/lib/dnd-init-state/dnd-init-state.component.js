/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CommonModals, ModalService } from "@groupdocs.examples.angular/common-components";
export class DndInitStateComponent {
    /**
     * @param {?} _modalService
     */
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dropped($event) {
        if ($event) {
            this._modalService.open(CommonModals.BrowseFiles);
        }
    }
}
DndInitStateComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-dnd-init-state',
                template: "<div class=\"wrapper\" gdDnd (dropped)=\"dropped($event)\">\n  <fa-icon class=\"icon\" [icon]=\"['fas',icon]\"></fa-icon>\n  <span class=\"text\">Conversion queue is empty</span>\n  <span class=\"start\">Drag your document here or click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file</span>\n</div>\n",
                styles: [".wrapper{color:#959da5;background-color:#e7e7e7;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100%;height:100%}.icon{font-size:65px;text-align:center;margin-bottom:38px}.start,.text{font-size:15px;text-align:center}.active{background-color:#bababa}"]
            }] }
];
/** @nocollapse */
DndInitStateComponent.ctorParameters = () => [
    { type: ModalService }
];
DndInitStateComponent.propDecorators = {
    icon: [{ type: Input }],
    text: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DndInitStateComponent.prototype.icon;
    /** @type {?} */
    DndInitStateComponent.prototype.text;
    /**
     * @type {?}
     * @private
     */
    DndInitStateComponent.prototype._modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5kLWluaXQtc3RhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbnZlcnNpb24vIiwic291cmNlcyI6WyJsaWIvZG5kLWluaXQtc3RhdGUvZG5kLWluaXQtc3RhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBT3pGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFJaEMsWUFBb0IsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDL0MsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxNQUFNO1FBQ1osSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDJVQUE4Qzs7YUFFL0M7Ozs7WUFOcUIsWUFBWTs7O21CQVEvQixLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixxQ0FBc0I7O0lBQ3RCLHFDQUFzQjs7Ozs7SUFFViw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZGFscywgTW9kYWxTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRuZC1pbml0LXN0YXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RuZC1pbml0LXN0YXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG5kLWluaXQtc3RhdGUuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEbmRJbml0U3RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBkcm9wcGVkKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcyk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==