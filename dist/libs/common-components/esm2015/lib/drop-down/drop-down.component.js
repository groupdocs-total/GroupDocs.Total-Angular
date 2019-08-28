/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, forwardRef, HostBinding, HostListener, Inject, Input, Output, ViewEncapsulation } from '@angular/core';
/** @type {?} */
const horizontalAlignment = {
    center: {
        right: 'auto'
    },
    left: {
        right: '100%'
    },
    right: {
        right: '-100%'
    }
};
/** @type {?} */
const verticalAlignment = {
    center: {
        top: '0px',
    },
    top: {
        top: '-100%',
        right: '100%'
    },
    bottom: {
        top: 'autos'
    }
};
/**
 *  DropDownToggleComponent
 */
export class DropDownToggleComponent {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
        this.click = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.dropdown.toggle(event));
    }
}
DropDownToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down-toggle',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;min-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownToggleComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownComponent)),] }] }
];
DropDownToggleComponent.propDecorators = {
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DropDownToggleComponent.prototype.click;
    /** @type {?} */
    DropDownToggleComponent.prototype.dropdown;
}
/**
 *  DropDownItemsComponent
 */
export class DropDownItemsComponent {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @return {?}
     */
    get horizontalAlign() {
        return horizontalAlignment[this.dropdown.getPlacement().h].right;
    }
    /**
     * @return {?}
     */
    get verticalAlign() {
        return verticalAlignment[this.dropdown.getPlacement().v].top;
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this.dropdown._open;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        this.dropdown.close();
    }
}
DropDownItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down-items',
                template: '<div class="drop-down-items" (clickOutside)="onClickOutside($event)" [clickOutsideEnabled]="isOpen" [style.right]="horizontalAlign" [style.top]="verticalAlign"><ng-content></ng-content></div>',
                encapsulation: ViewEncapsulation.None,
                styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;min-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownItemsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownComponent)),] }] }
];
if (false) {
    /** @type {?} */
    DropDownItemsComponent.prototype.dropdown;
}
/**
 *  DropDownItemComponent
 */
export class DropDownItemComponent {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
        this.class = 'drop-down-item';
        this.select = new EventEmitter();
        this.click = (/**
         * @return {?}
         */
        () => this.selectEntry());
    }
    /**
     * @return {?}
     */
    selectEntry() {
        this.select.next();
        this.dropdown.close();
    }
}
DropDownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down-item',
                template: '<div class="drop-down-item"><ng-content></ng-content></div>',
                styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;min-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownItemComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownComponent)),] }] }
];
DropDownItemComponent.propDecorators = {
    class: [{ type: HostBinding, args: ['class',] }],
    select: [{ type: Output }],
    click: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    DropDownItemComponent.prototype.class;
    /** @type {?} */
    DropDownItemComponent.prototype.select;
    /** @type {?} */
    DropDownItemComponent.prototype.click;
    /** @type {?} */
    DropDownItemComponent.prototype.dropdown;
}
/**
 *  DropDownComponent
 */
export class DropDownComponent {
    constructor() {
        this.placement = {
            h: "center",
            v: "bottom"
        };
        this._open = false;
        this.class = 'drop-down';
    }
    /**
     * @return {?}
     */
    close() {
        this._open = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        event.stopPropagation();
        this._open = !this._open;
        document.body.click();
    }
    /**
     * @return {?}
     */
    getPlacement() {
        return this.placement;
    }
}
DropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down',
                template: '<div class="drop-down"><ng-content></ng-content></div>',
                encapsulation: ViewEncapsulation.None,
                styles: [".drop-down{position:relative}.show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;font-size:13px;line-height:26px;min-height:26px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
DropDownComponent.propDecorators = {
    placement: [{ type: Input }],
    _open: [{ type: Input, args: ['open',] }, { type: HostBinding, args: ['class.show',] }],
    class: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.placement;
    /** @type {?} */
    DropDownComponent.prototype._open;
    /** @type {?} */
    DropDownComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOztNQUdqQixtQkFBbUIsR0FBRztJQUMxQixNQUFNLEVBQUc7UUFDUCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEtBQUssRUFBRztRQUNOLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRjs7TUFFSyxpQkFBaUIsR0FBRztJQUN4QixNQUFNLEVBQUc7UUFDUCxHQUFHLEVBQUcsS0FBSztLQUNaO0lBQ0QsR0FBRyxFQUFHO1FBQ0osR0FBRyxFQUFHLE9BQU87UUFDYixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsTUFBTSxFQUFHO1FBQ1AsR0FBRyxFQUFFLE9BQU87S0FDYjtDQUNGOzs7O0FBV0QsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUdsQyxZQUFnRSxRQUFRO1FBQVIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUR4RSxVQUFLOzs7O1FBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDO0lBQ3VCLENBQUM7OztZQVQ3RSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFFckMsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2FBQ3ZDOzs7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QVEsRUFBRSx3REFBd0Q7Z0JBRWxFLGFBQWEsRUFBRyxpQkFBaUIsQ0FBQyxJQUFJOzthQUN2Qzs7O3dCQUVFLEtBQUs7b0JBT0wsS0FBSyxTQUFDLE1BQU0sY0FDWixXQUFXLFNBQUMsWUFBWTtvQkFHeEIsV0FBVyxTQUFDLE9BQU87Ozs7SUFYcEIsc0NBSUU7O0lBR0Ysa0NBRWM7O0lBRWQsa0NBQ29CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuY29uc3QgaG9yaXpvbnRhbEFsaWdubWVudCA9IHtcbiAgY2VudGVyIDoge1xuICAgIHJpZ2h0OiAnYXV0bydcbiAgfSxcbiAgbGVmdCA6IHtcbiAgICByaWdodDogJzEwMCUnXG4gIH0sXG4gIHJpZ2h0IDoge1xuICAgIHJpZ2h0OiAnLTEwMCUnXG4gIH1cbn07XG5cbmNvbnN0IHZlcnRpY2FsQWxpZ25tZW50ID0ge1xuICBjZW50ZXIgOiB7XG4gICAgdG9wIDogJzBweCcsXG4gIH0sXG4gIHRvcCA6IHtcbiAgICB0b3AgOiAnLTEwMCUnLFxuICAgIHJpZ2h0OiAnMTAwJSdcbiAgfSxcbiAgYm90dG9tIDoge1xuICAgIHRvcDogJ2F1dG9zJ1xuICB9XG59O1xuXG4vKipcbiAqICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24tdG9nZ2xlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb24gOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50e1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsWyckZXZlbnQnXSlcbiAgY2xpY2sgPSAoZXZlbnQ6IGFueSkgPT4gdGhpcy5kcm9wZG93bi50b2dnbGUoZXZlbnQpO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRHJvcERvd25Db21wb25lbnQpKSBwdWJsaWMgZHJvcGRvd24pIHt9XG59XG5cbi8qKlxuICogIERyb3BEb3duSXRlbXNDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duLWl0ZW1zJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiZHJvcC1kb3duLWl0ZW1zXCIgKGNsaWNrT3V0c2lkZSk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCIgW2NsaWNrT3V0c2lkZUVuYWJsZWRdPVwiaXNPcGVuXCIgW3N0eWxlLnJpZ2h0XT1cImhvcml6b250YWxBbGlnblwiIFtzdHlsZS50b3BdPVwidmVydGljYWxBbGlnblwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbiA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25JdGVtc0NvbXBvbmVudHtcblxuICBnZXQgaG9yaXpvbnRhbEFsaWduKCl7XG4gICAgcmV0dXJuIGhvcml6b250YWxBbGlnbm1lbnRbdGhpcy5kcm9wZG93bi5nZXRQbGFjZW1lbnQoKS5oXS5yaWdodDtcbiAgfVxuXG4gIGdldCB2ZXJ0aWNhbEFsaWduKCl7XG4gICAgcmV0dXJuIHZlcnRpY2FsQWxpZ25tZW50W3RoaXMuZHJvcGRvd24uZ2V0UGxhY2VtZW50KCkudl0udG9wO1xuICB9XG5cbiAgZ2V0IGlzT3Blbigpe1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLl9vcGVuO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duQ29tcG9uZW50KSkgcHVibGljIGRyb3Bkb3duKSB7fVxuXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50IDogRXZlbnQgICl7XG4gICAgICB0aGlzLmRyb3Bkb3duLmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiAgRHJvcERvd25JdGVtQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRyb3AtZG93bi1pdGVtJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiZHJvcC1kb3duLWl0ZW1cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duSXRlbUNvbXBvbmVudHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGNsYXNzID0gJ2Ryb3AtZG93bi1pdGVtJztcblxuICBAT3V0cHV0KClcbiAgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgY2xpY2sgPSAoKSA9PiB0aGlzLnNlbGVjdEVudHJ5KCk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duQ29tcG9uZW50KSkgcHVibGljIGRyb3Bkb3duKSB7fVxuXG4gIHNlbGVjdEVudHJ5KCl7XG4gICAgdGhpcy5zZWxlY3QubmV4dCgpO1xuICAgIHRoaXMuZHJvcGRvd24uY2xvc2UoKTtcbiAgfVxufVxuXG4vKipcbiAqICBEcm9wRG93bkNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24nLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJkcm9wLWRvd25cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb24gOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duQ29tcG9uZW50e1xuICBASW5wdXQoKVxuICBwbGFjZW1lbnQgPSB7XG4gICAgaDogXCJjZW50ZXJcIixcbiAgICB2OiBcImJvdHRvbVwiXG4gIH07XG5cblxuICBASW5wdXQoJ29wZW4nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxuICBfb3BlbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBjbGFzcyA9ICdkcm9wLWRvd24nO1xuXG4gIGNsb3NlKCl7XG4gICAgdGhpcy5fb3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlKGV2ZW50IDogTW91c2VFdmVudCl7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5fb3BlbiA9ICF0aGlzLl9vcGVuO1xuICAgIGRvY3VtZW50LmJvZHkuY2xpY2soKTtcbiAgfVxuXG4gIGdldFBsYWNlbWVudCgpe1xuICAgIHJldHVybiB0aGlzLnBsYWNlbWVudDtcbiAgfVxufVxuIl19