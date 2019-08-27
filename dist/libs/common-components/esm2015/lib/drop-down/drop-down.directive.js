/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, EventEmitter, forwardRef, HostBinding, HostListener, Inject, Input, Output, ViewEncapsulation } from '@angular/core';
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
                styles: [".show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:160px;max-height:300px;padding:5px 0;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto}.show .drop-down-items .drop-down-item{color:#959da5;height:25px;display:flex;flex-direction:row;cursor:pointer}.show .drop-down-items .drop-down-item fa-icon{margin:6px 10px;color:#959da5;font-size:12px;height:12px}.show .drop-down-items .drop-down-item:hover{background-color:#25c2d4;color:#fff}.show .drop-down-items .drop-down-item:hover .gd-type-warning fa-icon{color:#f2fa23}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownToggleComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownDirective)),] }] }
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
    get isOpen() {
        return this.dropdown._open;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        if (event && event['value'] === true) {
            this.dropdown.close();
        }
    }
}
DropDownItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down-items',
                template: '<div class="drop-down-items" gdOutside [clickOutsideEnabled]="isOpen" (clickOutside)="onClickOutside($event)"><ng-content></ng-content></div>',
                encapsulation: ViewEncapsulation.None,
                styles: [".show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:160px;max-height:300px;padding:5px 0;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto}.show .drop-down-items .drop-down-item{color:#959da5;height:25px;display:flex;flex-direction:row;cursor:pointer}.show .drop-down-items .drop-down-item fa-icon{margin:6px 10px;color:#959da5;font-size:12px;height:12px}.show .drop-down-items .drop-down-item:hover{background-color:#25c2d4;color:#fff}.show .drop-down-items .drop-down-item:hover .gd-type-warning fa-icon{color:#f2fa23}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownItemsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownDirective)),] }] }
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
                encapsulation: ViewEncapsulation.None,
                styles: [".show .drop-down-items{display:flex;flex-direction:column;position:absolute;z-index:1000;min-width:160px;max-height:300px;padding:5px 0;background-color:#fff;border:1px solid rgba(0,0,0,.15);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto}.show .drop-down-items .drop-down-item{color:#959da5;height:25px;display:flex;flex-direction:row;cursor:pointer}.show .drop-down-items .drop-down-item fa-icon{margin:6px 10px;color:#959da5;font-size:12px;height:12px}.show .drop-down-items .drop-down-item:hover{background-color:#25c2d4;color:#fff}.show .drop-down-items .drop-down-item:hover .gd-type-warning fa-icon{color:#f2fa23}.drop-down-items{display:none}"]
            }] }
];
/** @nocollapse */
DropDownItemComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => DropDownDirective)),] }] }
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
 *  DropDownDirective
 */
export class DropDownDirective {
    constructor() {
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
    }
}
DropDownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdDropDown]'
            },] }
];
DropDownDirective.propDecorators = {
    _open: [{ type: Input, args: ['open',] }, { type: HostBinding, args: ['class.show',] }],
    class: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    DropDownDirective.prototype._open;
    /** @type {?} */
    DropDownDirective.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7OztBQVl2QixNQUFNLE9BQU8sdUJBQXVCOzs7O0lBR2xDLFlBQWdFLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBRHhFLFVBQUs7Ozs7UUFBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUM7SUFDdUIsQ0FBQzs7O1lBVDdFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsMkJBQTJCO2dCQUVyQyxhQUFhLEVBQUcsaUJBQWlCLENBQUMsSUFBSTs7YUFDdkM7Ozs7NENBSWMsTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBQzs7O29CQUZ0RCxZQUFZLFNBQUMsT0FBTyxFQUFDLENBQUMsUUFBUSxDQUFDOzs7O0lBQWhDLHdDQUNvRDs7SUFDeEMsMkNBQTREOzs7OztBQVkxRSxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBTWpDLFlBQWdFLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO0lBQUcsQ0FBQzs7OztJQUo1RSxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBSUQsY0FBYyxDQUFDLEtBQWE7UUFDMUIsSUFBRyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsK0lBQStJO2dCQUV6SixhQUFhLEVBQUcsaUJBQWlCLENBQUMsSUFBSTs7YUFDdkM7Ozs7NENBT2MsTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBQzs7OztJQUEzQywwQ0FBNEQ7Ozs7O0FBa0IxRSxNQUFNLE9BQU8scUJBQXFCOzs7O0lBVWhDLFlBQWdFLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBUnhFLFVBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUd6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc1QixVQUFLOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUM7SUFFMEMsQ0FBQzs7OztJQUU1RSxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDZEQUE2RDtnQkFFdkUsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2FBQ3ZDOzs7OzRDQVdjLE1BQU0sU0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7OztvQkFUdEQsV0FBVyxTQUFDLE9BQU87cUJBR25CLE1BQU07b0JBR04sWUFBWSxTQUFDLE9BQU87Ozs7SUFOckIsc0NBQ3lCOztJQUV6Qix1Q0FDNEI7O0lBRTVCLHNDQUNpQzs7SUFFckIseUNBQTREOzs7OztBQWMxRSxNQUFNLE9BQU8saUJBQWlCO0lBSDlCO1FBT0UsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUdkLFVBQUssR0FBRyxXQUFXLENBQUM7SUFVdEIsQ0FBQzs7OztJQVJDLEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFrQjtRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7O29CQUdFLEtBQUssU0FBQyxNQUFNLGNBQ1osV0FBVyxTQUFDLFlBQVk7b0JBR3hCLFdBQVcsU0FBQyxPQUFPOzs7O0lBSnBCLGtDQUVjOztJQUVkLGtDQUNvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLyoqXG4gKiAgRHJvcERvd25Ub2dnbGVDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtZHJvcC1kb3duLXRvZ2dsZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93blRvZ2dsZUNvbXBvbmVudHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLFsnJGV2ZW50J10pXG4gIGNsaWNrID0gKGV2ZW50OiBhbnkpID0+IHRoaXMuZHJvcGRvd24udG9nZ2xlKGV2ZW50KTtcbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duRGlyZWN0aXZlKSkgcHVibGljIGRyb3Bkb3duKSB7fVxufVxuXG4vKipcbiAqICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRyb3AtZG93bi1pdGVtcycsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93bi1pdGVtc1wiIGdkT3V0c2lkZSBbY2xpY2tPdXRzaWRlRW5hYmxlZF09XCJpc09wZW5cIiAoY2xpY2tPdXRzaWRlKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb24gOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duSXRlbXNDb21wb25lbnR7XG5cbiAgZ2V0IGlzT3Blbigpe1xuICAgIHJldHVybiB0aGlzLmRyb3Bkb3duLl9vcGVuO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duRGlyZWN0aXZlKSkgcHVibGljIGRyb3Bkb3duKSB7fVxuXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50IDogRXZlbnQgICl7XG4gICAgaWYoZXZlbnQgJiYgZXZlbnRbJ3ZhbHVlJ10gPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZHJvcGRvd24uY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAgRHJvcERvd25JdGVtQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLWRyb3AtZG93bi1pdGVtJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiZHJvcC1kb3duLWl0ZW1cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb24gOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duSXRlbUNvbXBvbmVudHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGNsYXNzID0gJ2Ryb3AtZG93bi1pdGVtJztcblxuICBAT3V0cHV0KClcbiAgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgY2xpY2sgPSAoKSA9PiB0aGlzLnNlbGVjdEVudHJ5KCk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duRGlyZWN0aXZlKSkgcHVibGljIGRyb3Bkb3duKSB7fVxuXG4gIHNlbGVjdEVudHJ5KCl7XG4gICAgdGhpcy5zZWxlY3QubmV4dCgpO1xuICAgIHRoaXMuZHJvcGRvd24uY2xvc2UoKTtcbiAgfVxufVxuXG4vKipcbiAqICBEcm9wRG93bkRpcmVjdGl2ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2REcm9wRG93bl0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duRGlyZWN0aXZle1xuXG4gIEBJbnB1dCgnb3BlbicpXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpXG4gIF9vcGVuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGNsYXNzID0gJ2Ryb3AtZG93bic7XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLl9vcGVuID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGUoZXZlbnQgOiBNb3VzZUV2ZW50KXtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9vcGVuID0gIXRoaXMuX29wZW47XG4gIH1cbn1cbiJdfQ==