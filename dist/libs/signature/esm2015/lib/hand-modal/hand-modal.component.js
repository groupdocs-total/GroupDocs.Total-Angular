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
        }));
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
}
HandModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-hand-modal',
                template: "<gd-modal [id]=\"'gd-draw-hand-signature'\" [title]=\"'Draw signature'\">\n  <div class=\"paint-body\">\n    <div class=\"bc-paint-header\">\n      <div class=\"bc-paint-palette\">\n        <gd-button name=\"button\" [icon]=\"'fill'\" [tooltip]=\"'Pencil color'\"\n                   (click)=\"toggleColorPicker($event)\">\n          <div class=\"bg-color-pic\" [style.background-color]=\"selectedColor\"></div>\n        </gd-button>\n        <gd-color-picker [isOpen]=\"colorPickerShow\" (closeOutside)=\"closePicker($event)\"\n                         [className]=\"'palette'\"\n                         (selectedColor)=\"selectColor($event)\"></gd-color-picker>\n      </div>\n      <div class=\"bc-paint-export\" (click)=\"saveSign(canvasComponent)\">\n        <fa-icon [icon]=\"['fa','save']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n        <span class=\"save-button\">Save</span>\n      </div>\n    </div>\n    <div class=\"gd-draw-image\">\n      <gd-canvas #canvasComponent [color]=\"selectedColor\"></gd-canvas>\n    </div>\n  </div>\n</gd-modal>\n",
                styles: [".paint-body{width:1036px;height:561px}.gd-draw-image{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVR4nO2WbQuDMAyE+///q0WhKiiacYFK7BeXK2OMJXC2SF8er2kwiTPO81St6yo5ZxmGQdsnYZwdi/6yLJICIAACIAAC4KcA6uYMgN34BmAX9QgA9atYuQGO47j6mMw4YDXPsyQ8PCqlaAsAuNAjdYC1DyDeY7MOQuoAY10L0CboO0KoAywA6NsFn26QBaUB6hFYAO8VrhEAAfC/APQ1tJXQC9CCXABsKQZAW1qpStgDwG7+kVL8dQBPAnYDQN4cwFgrvFOAfd/Fq23b9IdiHEeZpokWAF41ugKO5u7gN6EQAAAFZL5NAAAAAElFTkSuQmCC)!important;position:absolute;padding:0!important;background-color:#fff;overflow:hidden;overflow-y:auto;width:inherit}.bc-paint-header{height:60px;width:100%;display:flex;justify-content:space-between;align-items:center}.bg-color-pic{border-radius:100%;border:1px solid #ccc;position:absolute;height:8px;width:8px;right:6px;bottom:6px}::ng-deep .button{font-size:unset!important}::ng-deep .button ::ng-deep .text{padding-left:0!important}::ng-deep .bcPicker-palette{position:absolute}.bc-paint-export{background-color:#25c2d4;margin-right:10px;width:68px;height:37px;display:flex;justify-content:space-between;color:#fff;align-items:center;cursor:pointer}.bc-paint-export .icon{display:flex;text-align:center;justify-content:center;flex:0 0 27px}.bc-paint-export .save-button{font-size:10px;display:flex;text-align:center;justify-content:center;flex:0 0 45px}@media (max-width:1037px){.paint-body{width:inherit;height:inherit}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL2hhbmQtbW9kYWwvaGFuZC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sb0NBQW9DLENBQUE7QUFFL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFPekYsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBSzdCLFlBQW9CLGlCQUFtQyxFQUNuQyxxQkFBbUQsRUFDbkQsYUFBMkI7UUFGM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQywwQkFBcUIsR0FBckIscUJBQXFCLENBQThCO1FBQ25ELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBTi9DLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNsQyxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUt4QixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsZUFBZ0M7O2NBQ2pDLEdBQUcsR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ25ELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7O0lBRU8sS0FBSztRQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBTTtRQUN0QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE1BQU07UUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixnakNBQTBDOzthQUUzQzs7OztZQVZPLGdCQUFnQjtZQUNoQiw0QkFBNEI7WUFHZCxZQUFZOzs7O0lBUWhDLDBDQUF5Qjs7SUFDekIsMkNBQWtDOztJQUNsQyw2Q0FBd0I7Ozs7O0lBRVosK0NBQTJDOzs7OztJQUMzQyxtREFBMkQ7Ozs7O0lBQzNELDJDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4uL3NpZ25hdHVyZS10YWItYWN0aXZhdG9yLnNlcnZpY2VcIlxuaW1wb3J0IHtDYW52YXNDb21wb25lbnR9IGZyb20gXCIuLi9jYW52YXMvY2FudmFzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWduYXR1cmVUeXBlfSBmcm9tIFwiLi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuaW1wb3J0IHtDb21tb25Nb2RhbHMsIE1vZGFsU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1oYW5kLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hhbmQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oYW5kLW1vZGFsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGFuZE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGVmYXVsdENvbG9yID0gJyMwMDAwMDAnO1xuICBzZWxlY3RlZENvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gIGNvbG9yUGlja2VyU2hvdyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ25hdHVyZVNlcnZpY2U6IFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RhYkFjdGl2YXRpb25TZXJ2aWNlOiBTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBzZWxlY3RDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZENvbG9yID0gY29sb3I7XG4gICAgdGhpcy5jb2xvclBpY2tlclNob3cgPSBmYWxzZTtcbiAgfVxuXG4gIHNhdmVTaWduKGNhbnZhc0NvbXBvbmVudDogQ2FudmFzQ29tcG9uZW50KSB7XG4gICAgY29uc3QgaW1nID0gY2FudmFzQ29tcG9uZW50LmdldEltYWdlKCk7XG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5zYXZlSW1hZ2UoaW1nKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdGFiQWN0aXZhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKFNpZ25hdHVyZVR5cGUuSEFORC5pZCk7XG4gICAgfSk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZSgpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoQ29tbW9uTW9kYWxzLkRyYXdIYW5kU2lnbmF0dXJlKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbG9yUGlja2VyKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmNvbG9yUGlja2VyU2hvdyA9ICF0aGlzLmNvbG9yUGlja2VyU2hvdztcbiAgfVxuXG4gIGNsb3NlUGlja2VyKCRldmVudCkge1xuICAgIHRoaXMuY29sb3JQaWNrZXJTaG93ID0gISRldmVudDtcbiAgfVxufVxuIl19