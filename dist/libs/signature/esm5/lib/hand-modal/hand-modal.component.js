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
            _this._signatureService.refreshSignatures();
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
                    template: "<gd-modal [id]=\"'gd-draw-hand-signature'\" [title]=\"'Draw signature'\" (visible)=\"onCloseOpen(canvasComponent, $event)\">\r\n  <div class=\"paint-body\">\r\n    <div class=\"bc-paint-header\">\r\n      <div class=\"bc-paint-palette\">\r\n        <gd-button name=\"button\" [icon]=\"'fill'\" [tooltip]=\"'Pencil color'\"\r\n                   (click)=\"toggleColorPicker($event)\">\r\n          <div class=\"bg-color-pic\" [style.background-color]=\"selectedColor\"></div>\r\n        </gd-button>\r\n        <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\r\n                         [className]=\"'palette'\"\r\n                         (selectedColor)=\"selectColor($event)\"></gd-color-picker>\r\n      </div>\r\n      <div class=\"bc-paint-export\" (click)=\"saveSign(canvasComponent)\">\r\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n        <span class=\"save-button\">Save</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"gd-draw-image\">\r\n      <gd-canvas #canvasComponent [color]=\"selectedColor\"></gd-canvas>\r\n    </div>\r\n  </div>\r\n</gd-modal>\r\n",
                    styles: [".paint-body{width:1036px;height:561px}.paint-body ::ng-deep .button{font-size:unset!important;color:#3e4e5a!important}.paint-body ::ng-deep .button ::ng-deep .text{padding-left:0!important}.gd-draw-image{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;overflow:hidden;overflow-y:auto;width:inherit}.bc-paint-header{height:60px;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .bcPicker-palette{position:absolute}.bc-paint-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;color:#fff;-webkit-box-align:center;align-items:center;cursor:pointer}.bc-paint-export .icon{display:-webkit-box;display:flex;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:0;flex:0 0 27px}.bc-paint-export .save-button{font-size:10px;display:-webkit-box;display:flex;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:0;flex:0 0 40px}@media (max-width:1037px){.paint-body{width:inherit;height:inherit}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL2hhbmQtbW9kYWwvaGFuZC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DLENBQUE7QUFFL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFekY7SUFVRSw0QkFBb0IsaUJBQW1DLEVBQ25DLHFCQUFtRCxFQUNuRCxhQUEyQjtRQUYzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBOEI7UUFDbkQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFOL0MsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFDekIsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2xDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBS3hCLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQscUNBQVE7Ozs7SUFBUixVQUFTLGVBQWdDO1FBQXpDLGlCQVFDOztZQVBPLEdBQUcsR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDOUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOzs7OztJQUVPLGtDQUFLOzs7O0lBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELDhDQUFpQjs7OztJQUFqQixVQUFrQixNQUFNO1FBQ3RCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksTUFBTTtRQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVELHdDQUFXOzs7OztJQUFYLFVBQVksZUFBZ0MsRUFBRSxNQUFNO1FBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRU8sa0NBQUs7Ozs7O0lBQWIsVUFBYyxlQUFnQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLCtvQ0FBMEM7O2lCQUUzQzs7OztnQkFWTyxnQkFBZ0I7Z0JBQ2hCLDRCQUE0QjtnQkFHZCxZQUFZOztJQXlEbEMseUJBQUM7Q0FBQSxBQXZERCxJQXVEQztTQWxEWSxrQkFBa0I7OztJQUM3QiwwQ0FBeUI7O0lBQ3pCLDJDQUFrQzs7SUFDbEMsNkNBQXdCOzs7OztJQUVaLCtDQUEyQzs7Ozs7SUFDM0MsbURBQTJEOzs7OztJQUMzRCwyQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLXRhYi1hY3RpdmF0b3Iuc2VydmljZVwiXHJcbmltcG9ydCB7Q2FudmFzQ29tcG9uZW50fSBmcm9tIFwiLi4vY2FudmFzL2NhbnZhcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWduYXR1cmVUeXBlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xyXG5pbXBvcnQge0NvbW1vbk1vZGFscywgTW9kYWxTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWhhbmQtbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oYW5kLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9oYW5kLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhhbmRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZGVmYXVsdENvbG9yID0gJyMwMDAwMDAnO1xyXG4gIHNlbGVjdGVkQ29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcclxuICBjb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2lnbmF0dXJlU2VydmljZTogU2lnbmF0dXJlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF90YWJBY3RpdmF0aW9uU2VydmljZTogU2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzYXZlU2lnbihjYW52YXNDb21wb25lbnQ6IENhbnZhc0NvbXBvbmVudCkge1xyXG4gICAgY29uc3QgaW1nID0gY2FudmFzQ29tcG9uZW50LmdldEltYWdlKCk7XHJcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnNhdmVJbWFnZShpbWcpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3RhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLkhBTkQuaWQpO1xyXG4gICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnJlZnJlc2hTaWduYXR1cmVzKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2xlYXIoY2FudmFzQ29tcG9uZW50KTtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoQ29tbW9uTW9kYWxzLkRyYXdIYW5kU2lnbmF0dXJlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNvbG9yUGlja2VyKCRldmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9ICF0aGlzLmNvbG9yUGlja2VyU2hvdztcclxuICB9XHJcblxyXG4gIGNsb3NlUGlja2VyKCRldmVudCkge1xyXG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSAhJGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgb25DbG9zZU9wZW4oY2FudmFzQ29tcG9uZW50OiBDYW52YXNDb21wb25lbnQsICRldmVudCkge1xyXG4gICAgdGhpcy5jbGVhcihjYW52YXNDb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhcihjYW52YXNDb21wb25lbnQ6IENhbnZhc0NvbXBvbmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZENvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XHJcbiAgICBjYW52YXNDb21wb25lbnQuY2xlYXIoKTtcclxuICB9XHJcbn1cclxuIl19