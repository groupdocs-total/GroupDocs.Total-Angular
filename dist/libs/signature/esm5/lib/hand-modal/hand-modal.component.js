/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SignatureService } from "../signature.service";
import { SignatureTabActivatorService } from "../signature-tab-activator.service";
import { SignatureType } from "../signature-models";
import { CommonModals, ModalService } from "@groupdocs.examples.angular/common-components";
var HandModalComponent = /** @class */ (function () {
    function HandModalComponent(_signatureService, _tabActivationService, _modalService) {
        this._signatureService = _signatureService;
        this._tabActivationService = _tabActivationService;
        this._modalService = _modalService;
        this.defaultColor = '#000000';
        this.selectedColor = this.defaultColor;
        this.colorPickerShow = false;
    }
    /**
     * @return {?}
     */
    HandModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} color
     * @return {?}
     */
    HandModalComponent.prototype.selectColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.selectedColor = color;
        this.colorPickerShow = false;
    };
    /**
     * @param {?} canvasComponent
     * @return {?}
     */
    HandModalComponent.prototype.saveSign = /**
     * @param {?} canvasComponent
     * @return {?}
     */
    function (canvasComponent) {
        var _this = this;
        /** @type {?} */
        var img = canvasComponent.getImage();
        this._signatureService.saveImage(img).subscribe((/**
         * @return {?}
         */
        function () {
            _this._tabActivationService.changeActiveTab(SignatureType.HAND.id);
        }));
        this.close();
    };
    /**
     * @private
     * @return {?}
     */
    HandModalComponent.prototype.close = /**
     * @private
     * @return {?}
     */
    function () {
        this._modalService.close(CommonModals.DrawHandSignature);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    HandModalComponent.prototype.toggleColorPicker = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.colorPickerShow = !this.colorPickerShow;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    HandModalComponent.prototype.closePicker = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.colorPickerShow = !$event;
    };
    HandModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-hand-modal',
                    template: "<gd-modal [id]=\"'gd-draw-hand-signature'\" [title]=\"'Draw signature'\">\n  <div class=\"paint-body\">\n    <div class=\"bc-paint-header\">\n      <div class=\"bc-paint-palette\">\n        <gd-button name=\"button\" [icon]=\"'fill'\" [tooltip]=\"'Pencil color'\"\n                   (click)=\"toggleColorPicker($event)\">\n          <div class=\"bg-color-pic\" [style.background-color]=\"selectedColor\"></div>\n        </gd-button>\n        <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                         [className]=\"'palette'\"\n                         (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n      </div>\n      <div class=\"bc-paint-export\" (click)=\"saveSign(canvasComponent)\">\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n        <span class=\"save-button\">Save</span>\n      </div>\n    </div>\n    <div class=\"gd-draw-image\">\n      <gd-canvas #canvasComponent [color]=\"selectedColor\"></gd-canvas>\n    </div>\n  </div>\n</gd-modal>\n",
                    styles: [".paint-body{width:1036px;height:561px}.gd-draw-image{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;overflow:hidden;overflow-y:auto;width:inherit}.bc-paint-header{height:60px;width:100%;display:flex;justify-content:space-between;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .button{font-size:unset!important}::ng-deep .button ::ng-deep .text{padding-left:0!important}::ng-deep .bcPicker-palette{position:absolute}.bc-paint-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:flex;justify-content:space-between;color:#fff;align-items:center;cursor:pointer}.bc-paint-export .icon{display:flex;text-align:center;justify-content:center;flex:0 0 27px}.bc-paint-export .save-button{font-size:10px;display:flex;text-align:center;justify-content:center;flex:0 0 45px}@media (max-width:1037px){.paint-body{width:inherit;height:inherit}}"]
                }] }
    ];
    /** @nocollapse */
    HandModalComponent.ctorParameters = function () { return [
        { type: SignatureService },
        { type: SignatureTabActivatorService },
        { type: ModalService }
    ]; };
    return HandModalComponent;
}());
export { HandModalComponent };
if (false) {
    /** @type {?} */
    HandModalComponent.prototype.defaultColor;
    /** @type {?} */
    HandModalComponent.prototype.selectedColor;
    /** @type {?} */
    HandModalComponent.prototype.colorPickerShow;
    /**
     * @type {?}
     * @private
     */
    HandModalComponent.prototype._signatureService;
    /**
     * @type {?}
     * @private
     */
    HandModalComponent.prototype._tabActivationService;
    /**
     * @type {?}
     * @private
     */
    HandModalComponent.prototype._modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL2hhbmQtbW9kYWwvaGFuZC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DLENBQUE7QUFFL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFekY7SUFVRSw0QkFBb0IsaUJBQW1DLEVBQ25DLHFCQUFtRCxFQUNuRCxhQUEyQjtRQUYzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBOEI7UUFDbkQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFOL0MsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFDekIsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2xDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBS3hCLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQscUNBQVE7Ozs7SUFBUixVQUFTLGVBQWdDO1FBQXpDLGlCQU1DOztZQUxPLEdBQUcsR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDOUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFTyxrQ0FBSzs7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCw4Q0FBaUI7Ozs7SUFBakIsVUFBa0IsTUFBTTtRQUN0QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLE1BQU07UUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDOztnQkEzQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixnakNBQTBDOztpQkFFM0M7Ozs7Z0JBVk8sZ0JBQWdCO2dCQUNoQiw0QkFBNEI7Z0JBR2QsWUFBWTs7SUE4Q2xDLHlCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F2Q1ksa0JBQWtCOzs7SUFDN0IsMENBQXlCOztJQUN6QiwyQ0FBa0M7O0lBQ2xDLDZDQUF3Qjs7Ozs7SUFFWiwrQ0FBMkM7Ozs7O0lBQzNDLG1EQUEyRDs7Ozs7SUFDM0QsMkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLXRhYi1hY3RpdmF0b3Iuc2VydmljZVwiXG5pbXBvcnQge0NhbnZhc0NvbXBvbmVudH0gZnJvbSBcIi4uL2NhbnZhcy9jYW52YXMuY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ25hdHVyZVR5cGV9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge0NvbW1vbk1vZGFscywgTW9kYWxTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWhhbmQtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGFuZC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hhbmQtbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIYW5kTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkZWZhdWx0Q29sb3IgPSAnIzAwMDAwMCc7XG4gIHNlbGVjdGVkQ29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2lnbmF0dXJlU2VydmljZTogU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdGFiQWN0aXZhdGlvblNlcnZpY2U6IFNpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbGVjdENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuICB9XG5cbiAgc2F2ZVNpZ24oY2FudmFzQ29tcG9uZW50OiBDYW52YXNDb21wb25lbnQpIHtcbiAgICBjb25zdCBpbWcgPSBjYW52YXNDb21wb25lbnQuZ2V0SW1hZ2UoKTtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnNhdmVJbWFnZShpbWcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl90YWJBY3RpdmF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIoU2lnbmF0dXJlVHlwZS5IQU5ELmlkKTtcbiAgICB9KTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlKCkge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShDb21tb25Nb2RhbHMuRHJhd0hhbmRTaWduYXR1cmUpO1xuICB9XG5cbiAgdG9nZ2xlQ29sb3JQaWNrZXIoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gIXRoaXMuY29sb3JQaWNrZXJTaG93O1xuICB9XG5cbiAgY2xvc2VQaWNrZXIoJGV2ZW50KSB7XG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSAhJGV2ZW50O1xuICB9XG59XG4iXX0=