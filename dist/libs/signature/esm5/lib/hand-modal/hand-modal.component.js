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
        this.clear(canvasComponent);
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
    /**
     * @param {?} canvasComponent
     * @param {?} $event
     * @return {?}
     */
    HandModalComponent.prototype.onCloseOpen = /**
     * @param {?} canvasComponent
     * @param {?} $event
     * @return {?}
     */
    function (canvasComponent, $event) {
        this.clear(canvasComponent);
    };
    /**
     * @private
     * @param {?} canvasComponent
     * @return {?}
     */
    HandModalComponent.prototype.clear = /**
     * @private
     * @param {?} canvasComponent
     * @return {?}
     */
    function (canvasComponent) {
        this.selectedColor = this.defaultColor;
        canvasComponent.clear();
    };
    HandModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-hand-modal',
                    template: "<gd-modal [id]=\"'gd-draw-hand-signature'\" [title]=\"'Draw signature'\" (visible)=\"onCloseOpen(canvasComponent, $event)\">\n  <div class=\"paint-body\">\n    <div class=\"bc-paint-header\">\n      <div class=\"bc-paint-palette\">\n        <gd-button name=\"button\" [icon]=\"'fill'\" [tooltip]=\"'Pencil color'\"\n                   (click)=\"toggleColorPicker($event)\">\n          <div class=\"bg-color-pic\" [style.background-color]=\"selectedColor\"></div>\n        </gd-button>\n        <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                         [className]=\"'palette'\"\n                         (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n      </div>\n      <div class=\"bc-paint-export\" (click)=\"saveSign(canvasComponent)\">\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n        <span class=\"save-button\">Save</span>\n      </div>\n    </div>\n    <div class=\"gd-draw-image\">\n      <gd-canvas #canvasComponent [color]=\"selectedColor\"></gd-canvas>\n    </div>\n  </div>\n</gd-modal>\n",
                    styles: [".paint-body{width:1036px;height:561px}.paint-body ::ng-deep .button{font-size:unset!important;color:#3e4e5a!important}.paint-body ::ng-deep .button ::ng-deep .text{padding-left:0!important}.gd-draw-image{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;overflow:hidden;overflow-y:auto;width:inherit}.bc-paint-header{height:60px;width:100%;display:flex;justify-content:space-between;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .bcPicker-palette{position:absolute}.bc-paint-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:flex;justify-content:space-between;color:#fff;align-items:center;cursor:pointer}.bc-paint-export .icon{display:flex;text-align:center;justify-content:center;flex:0 0 27px}.bc-paint-export .save-button{font-size:10px;display:flex;text-align:center;justify-content:center;flex:0 0 40px}@media (max-width:1037px){.paint-body{width:inherit;height:inherit}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL2hhbmQtbW9kYWwvaGFuZC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DLENBQUE7QUFFL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFekY7SUFVRSw0QkFBb0IsaUJBQW1DLEVBQ25DLHFCQUFtRCxFQUNuRCxhQUEyQjtRQUYzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBOEI7UUFDbkQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFOL0MsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFDekIsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2xDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBS3hCLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQscUNBQVE7Ozs7SUFBUixVQUFTLGVBQWdDO1FBQXpDLGlCQU9DOztZQU5PLEdBQUcsR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDOUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOzs7OztJQUVPLGtDQUFLOzs7O0lBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELDhDQUFpQjs7OztJQUFqQixVQUFrQixNQUFNO1FBQ3RCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksTUFBTTtRQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVELHdDQUFXOzs7OztJQUFYLFVBQVksZUFBZ0MsRUFBRSxNQUFNO1FBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sa0NBQUs7Ozs7O0lBQWIsVUFBYyxlQUFnQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLG1tQ0FBMEM7O2lCQUUzQzs7OztnQkFWTyxnQkFBZ0I7Z0JBQ2hCLDRCQUE0QjtnQkFHZCxZQUFZOztJQXdEbEMseUJBQUM7Q0FBQSxBQXRERCxJQXNEQztTQWpEWSxrQkFBa0I7OztJQUM3QiwwQ0FBeUI7O0lBQ3pCLDJDQUFrQzs7SUFDbEMsNkNBQXdCOzs7OztJQUVaLCtDQUEyQzs7Ozs7SUFDM0MsbURBQTJEOzs7OztJQUMzRCwyQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUtdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCJcbmltcG9ydCB7Q2FudmFzQ29tcG9uZW50fSBmcm9tIFwiLi4vY2FudmFzL2NhbnZhcy5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lnbmF0dXJlVHlwZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7Q29tbW9uTW9kYWxzLCBNb2RhbFNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtaGFuZC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9oYW5kLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGFuZC1tb2RhbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhhbmRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRlZmF1bHRDb2xvciA9ICcjMDAwMDAwJztcbiAgc2VsZWN0ZWRDb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICBjb2xvclBpY2tlclNob3cgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF90YWJBY3RpdmF0aW9uU2VydmljZTogU2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2VsZWN0Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuc2VsZWN0ZWRDb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XG4gIH1cblxuICBzYXZlU2lnbihjYW52YXNDb21wb25lbnQ6IENhbnZhc0NvbXBvbmVudCkge1xuICAgIGNvbnN0IGltZyA9IGNhbnZhc0NvbXBvbmVudC5nZXRJbWFnZSgpO1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2Uuc2F2ZUltYWdlKGltZykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3RhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLkhBTkQuaWQpO1xuICAgIH0pO1xuICAgIHRoaXMuY2xlYXIoY2FudmFzQ29tcG9uZW50KTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlKCkge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShDb21tb25Nb2RhbHMuRHJhd0hhbmRTaWduYXR1cmUpO1xuICB9XG5cbiAgdG9nZ2xlQ29sb3JQaWNrZXIoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gIXRoaXMuY29sb3JQaWNrZXJTaG93O1xuICB9XG5cbiAgY2xvc2VQaWNrZXIoJGV2ZW50KSB7XG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSAhJGV2ZW50O1xuICB9XG5cbiAgb25DbG9zZU9wZW4oY2FudmFzQ29tcG9uZW50OiBDYW52YXNDb21wb25lbnQsICRldmVudCkge1xuICAgIHRoaXMuY2xlYXIoY2FudmFzQ29tcG9uZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXIoY2FudmFzQ29tcG9uZW50OiBDYW52YXNDb21wb25lbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICBjYW52YXNDb21wb25lbnQuY2xlYXIoKTtcbiAgfVxufVxuIl19