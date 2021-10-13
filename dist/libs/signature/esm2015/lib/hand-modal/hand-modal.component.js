/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SignatureService } from "../signature.service";
import { SignatureTabActivatorService } from "../signature-tab-activator.service";
import { SignatureType } from "../signature-models";
import { CommonModals, ModalService } from "@groupdocs.examples.angular/common-components";
export class HandModalComponent {
    /**
     * @param {?} _signatureService
     * @param {?} _tabActivationService
     * @param {?} _modalService
     */
    constructor(_signatureService, _tabActivationService, _modalService) {
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
    ngOnInit() {
    }
    /**
     * @param {?} color
     * @return {?}
     */
    selectColor(color) {
        this.selectedColor = color;
        this.colorPickerShow = false;
    }
    /**
     * @param {?} canvasComponent
     * @return {?}
     */
    saveSign(canvasComponent) {
        /** @type {?} */
        const img = canvasComponent.getImage();
        this._signatureService.saveImage(img).subscribe((/**
         * @return {?}
         */
        () => {
            this._tabActivationService.changeActiveTab(SignatureType.HAND.id);
            this._signatureService.refreshSignatures();
        }));
        this.clear(canvasComponent);
        this.close();
    }
    /**
     * @private
     * @return {?}
     */
    close() {
        this._modalService.close(CommonModals.DrawHandSignature);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleColorPicker($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.colorPickerShow = !this.colorPickerShow;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    closePicker($event) {
        this.colorPickerShow = !$event;
    }
    /**
     * @param {?} canvasComponent
     * @param {?} $event
     * @return {?}
     */
    onCloseOpen(canvasComponent, $event) {
        this.clear(canvasComponent);
    }
    /**
     * @private
     * @param {?} canvasComponent
     * @return {?}
     */
    clear(canvasComponent) {
        this.selectedColor = this.defaultColor;
        canvasComponent.clear();
    }
}
HandModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-hand-modal',
                template: "<gd-modal [id]=\"'gd-draw-hand-signature'\" [title]=\"'Draw signature'\" (visible)=\"onCloseOpen(canvasComponent, $event)\">\r\n  <div class=\"paint-body\">\r\n    <div class=\"bc-paint-header\">\r\n      <div class=\"bc-paint-palette\">\r\n        <gd-button name=\"button\" [icon]=\"'fill'\" [tooltip]=\"'Pencil color'\"\r\n                   (click)=\"toggleColorPicker($event)\">\r\n          <div class=\"bg-color-pic\" [style.background-color]=\"selectedColor\"></div>\r\n        </gd-button>\r\n        <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\r\n                         [className]=\"'palette'\"\r\n                         (selectedColor)=\"selectColor($event)\"></gd-color-picker>\r\n      </div>\r\n      <div class=\"bc-paint-export\" (click)=\"saveSign(canvasComponent)\">\r\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n        <span class=\"save-button\">Save</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"gd-draw-image\">\r\n      <gd-canvas #canvasComponent [color]=\"selectedColor\"></gd-canvas>\r\n    </div>\r\n  </div>\r\n</gd-modal>\r\n",
                styles: [".paint-body{width:1036px;height:561px}.paint-body ::ng-deep .button{font-size:unset!important;color:#3e4e5a!important}.paint-body ::ng-deep .button ::ng-deep .text{padding-left:0!important}.gd-draw-image{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;overflow:hidden;overflow-y:auto;width:inherit}.bc-paint-header{height:60px;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .bcPicker-palette{position:absolute}.bc-paint-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;color:#fff;-webkit-box-align:center;align-items:center;cursor:pointer}.bc-paint-export .icon{display:-webkit-box;display:flex;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:0;flex:0 0 27px}.bc-paint-export .save-button{font-size:10px;display:-webkit-box;display:flex;text-align:center;-webkit-box-pack:center;justify-content:center;-webkit-box-flex:0;flex:0 0 40px}@media (max-width:1037px){.paint-body{width:inherit;height:inherit}}"]
            }] }
];
/** @nocollapse */
HandModalComponent.ctorParameters = () => [
    { type: SignatureService },
    { type: SignatureTabActivatorService },
    { type: ModalService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL2hhbmQtbW9kYWwvaGFuZC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DLENBQUE7QUFFL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFPekYsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBSzdCLFlBQW9CLGlCQUFtQyxFQUNuQyxxQkFBbUQsRUFDbkQsYUFBMkI7UUFGM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQywwQkFBcUIsR0FBckIscUJBQXFCLENBQThCO1FBQ25ELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBTi9DLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNsQyxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUt4QixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsZUFBZ0M7O2NBQ2pDLEdBQUcsR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ25ELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFTyxLQUFLO1FBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxNQUFNO1FBQ3RCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxlQUFnQyxFQUFFLE1BQU07UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFTyxLQUFLLENBQUMsZUFBZ0M7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qiwrb0NBQTBDOzthQUUzQzs7OztZQVZPLGdCQUFnQjtZQUNoQiw0QkFBNEI7WUFHZCxZQUFZOzs7O0lBUWhDLDBDQUF5Qjs7SUFDekIsMkNBQWtDOztJQUNsQyw2Q0FBd0I7Ozs7O0lBRVosK0NBQTJDOzs7OztJQUMzQyxtREFBMkQ7Ozs7O0lBQzNELDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge1NpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuLi9zaWduYXR1cmUtdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCJcclxuaW1wb3J0IHtDYW52YXNDb21wb25lbnR9IGZyb20gXCIuLi9jYW52YXMvY2FudmFzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25hdHVyZVR5cGV9IGZyb20gXCIuLi9zaWduYXR1cmUtbW9kZWxzXCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kYWxzLCBNb2RhbFNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtaGFuZC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hhbmQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hhbmQtbW9kYWwuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGFuZE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBkZWZhdWx0Q29sb3IgPSAnIzAwMDAwMCc7XHJcbiAgc2VsZWN0ZWRDb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xyXG4gIGNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RhYkFjdGl2YXRpb25TZXJ2aWNlOiBTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHNlbGVjdENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNhdmVTaWduKGNhbnZhc0NvbXBvbmVudDogQ2FudmFzQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBpbWcgPSBjYW52YXNDb21wb25lbnQuZ2V0SW1hZ2UoKTtcclxuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2Uuc2F2ZUltYWdlKGltZykuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5fdGFiQWN0aXZhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKFNpZ25hdHVyZVR5cGUuSEFORC5pZCk7XHJcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UucmVmcmVzaFNpZ25hdHVyZXMoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jbGVhcihjYW52YXNDb21wb25lbnQpO1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZSgpIHtcclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShDb21tb25Nb2RhbHMuRHJhd0hhbmRTaWduYXR1cmUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ29sb3JQaWNrZXIoJGV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gIXRoaXMuY29sb3JQaWNrZXJTaG93O1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQaWNrZXIoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9ICEkZXZlbnQ7XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlT3BlbihjYW52YXNDb21wb25lbnQ6IENhbnZhc0NvbXBvbmVudCwgJGV2ZW50KSB7XHJcbiAgICB0aGlzLmNsZWFyKGNhbnZhc0NvbXBvbmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyKGNhbnZhc0NvbXBvbmVudDogQ2FudmFzQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcclxuICAgIGNhbnZhc0NvbXBvbmVudC5jbGVhcigpO1xyXG4gIH1cclxufVxyXG4iXX0=