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
                styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
        return this.dropdown.open;
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
                styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
        this.selected = new EventEmitter();
        this.click = (/**
         * @return {?}
         */
        () => this.selectEntry());
    }
    /**
     * @return {?}
     */
    selectEntry() {
        this.selected.next();
        this.dropdown.close();
    }
}
DropDownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-drop-down-item',
                template: '<div class="drop-down-item"><ng-content></ng-content></div>',
                styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
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
    selected: [{ type: Output }],
    click: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    DropDownItemComponent.prototype.class;
    /** @type {?} */
    DropDownItemComponent.prototype.selected;
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
        this.open = false;
        this.class = 'drop-down';
    }
    /**
     * @return {?}
     */
    close() {
        this.open = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        event.stopPropagation();
        this.open = !this.open;
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
                styles: [".drop-down{position:relative}.show .drop-down-items{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:absolute;z-index:1000;min-width:100%;max-height:300px;padding:0;background-color:#fff;box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;overflow-y:auto;overflow-x:hidden}.show .drop-down-items .drop-down-item,.show .drop-down-items gd-drop-down-item{color:#959da5;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;cursor:pointer;font-size:10px;line-height:28px;min-height:28px;width:100%}.show .drop-down-items .drop-down-item fa-icon svg,.show .drop-down-items gd-drop-down-item fa-icon svg{margin:0 10px;color:#959da5}.show .drop-down-items .drop-down-item .text,.show .drop-down-items gd-drop-down-item .text{width:100%;margin-right:10px}.show .drop-down-items .drop-down-item:hover,.show .drop-down-items gd-drop-down-item:hover{background-color:#25c2d4}.show .drop-down-items .drop-down-item:hover *,.show .drop-down-items gd-drop-down-item:hover *{color:#fff}.drop-down-items{display:none}"]
            }] }
];
DropDownComponent.propDecorators = {
    placement: [{ type: Input }],
    open: [{ type: Input }, { type: HostBinding, args: ['class.show',] }],
    class: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    DropDownComponent.prototype.placement;
    /** @type {?} */
    DropDownComponent.prototype.open;
    /** @type {?} */
    DropDownComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOztNQUdqQixtQkFBbUIsR0FBRztJQUMxQixNQUFNLEVBQUc7UUFDUCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEtBQUssRUFBRztRQUNOLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRjs7TUFFSyxpQkFBaUIsR0FBRztJQUN4QixNQUFNLEVBQUc7UUFDUCxHQUFHLEVBQUcsS0FBSztLQUNaO0lBQ0QsR0FBRyxFQUFHO1FBQ0osR0FBRyxFQUFHLE9BQU87UUFDYixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsTUFBTSxFQUFHO1FBQ1AsR0FBRyxFQUFFLE9BQU87S0FDYjtDQUNGOzs7O0FBV0QsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUdsQyxZQUFnRSxRQUFRO1FBQVIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUR4RSxVQUFLOzs7O1FBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDO0lBQ3VCLENBQUM7OztZQVQ3RSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFFckMsYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2FBQ3ZDOzs7OzRDQUljLE1BQU0sU0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7OztvQkFGdEQsWUFBWSxTQUFDLE9BQU8sRUFBQyxDQUFDLFFBQVEsQ0FBQzs7OztJQUFoQyx3Q0FDb0Q7O0lBQ3hDLDJDQUE0RDs7Ozs7QUFZMUUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQWNqQyxZQUFnRSxRQUFRO1FBQVIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtJQUFHLENBQUM7Ozs7SUFaNUUsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbkUsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFJRCxjQUFjLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGlNQUFpTTtnQkFFM00sYUFBYSxFQUFHLGlCQUFpQixDQUFDLElBQUk7O2FBQ3ZDOzs7OzRDQWVjLE1BQU0sU0FBQyxVQUFVOzs7b0JBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7Ozs7SUFBM0MsMENBQTREOzs7OztBQWUxRSxNQUFNLE9BQU8scUJBQXFCOzs7O0lBVWhDLFlBQWdFLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBUnhFLFVBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUd6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc5QixVQUFLOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUM7SUFFMEMsQ0FBQzs7OztJQUU1RSxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDZEQUE2RDs7YUFFeEU7Ozs7NENBV2MsTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBQzs7O29CQVR0RCxXQUFXLFNBQUMsT0FBTzt1QkFHbkIsTUFBTTtvQkFHTixZQUFZLFNBQUMsT0FBTzs7OztJQU5yQixzQ0FDeUI7O0lBRXpCLHlDQUM4Qjs7SUFFOUIsc0NBQ2lDOztJQUVyQix5Q0FBNEQ7Ozs7O0FBaUIxRSxNQUFNLE9BQU8saUJBQWlCO0lBTjlCO1FBUUUsY0FBUyxHQUFHO1lBQ1YsQ0FBQyxFQUFFLFFBQVE7WUFDWCxDQUFDLEVBQUUsUUFBUTtTQUNaLENBQUM7UUFLRixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBR2IsVUFBSyxHQUFHLFdBQVcsQ0FBQztJQWV0QixDQUFDOzs7O0lBYkMsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWtCO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSx3REFBd0Q7Z0JBRWxFLGFBQWEsRUFBRyxpQkFBaUIsQ0FBQyxJQUFJOzthQUN2Qzs7O3dCQUVFLEtBQUs7bUJBT0wsS0FBSyxZQUNMLFdBQVcsU0FBQyxZQUFZO29CQUd4QixXQUFXLFNBQUMsT0FBTzs7OztJQVhwQixzQ0FJRTs7SUFHRixpQ0FFYTs7SUFFYixrQ0FDb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmNvbnN0IGhvcml6b250YWxBbGlnbm1lbnQgPSB7XHJcbiAgY2VudGVyIDoge1xyXG4gICAgcmlnaHQ6ICdhdXRvJ1xyXG4gIH0sXHJcbiAgbGVmdCA6IHtcclxuICAgIHJpZ2h0OiAnMTAwJSdcclxuICB9LFxyXG4gIHJpZ2h0IDoge1xyXG4gICAgcmlnaHQ6ICctMTAwJSdcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCB2ZXJ0aWNhbEFsaWdubWVudCA9IHtcclxuICBjZW50ZXIgOiB7XHJcbiAgICB0b3AgOiAnMHB4JyxcclxuICB9LFxyXG4gIHRvcCA6IHtcclxuICAgIHRvcCA6ICctMTAwJScsXHJcbiAgICByaWdodDogJzEwMCUnXHJcbiAgfSxcclxuICBib3R0b20gOiB7XHJcbiAgICB0b3A6ICdhdXRvcydcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWRyb3AtZG93bi10b2dnbGUnLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC1kb3duLmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbiA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50e1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJyxbJyRldmVudCddKVxyXG4gIGNsaWNrID0gKGV2ZW50OiBhbnkpID0+IHRoaXMuZHJvcGRvd24udG9nZ2xlKGV2ZW50KTtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRHJvcERvd25Db21wb25lbnQpKSBwdWJsaWMgZHJvcGRvd24pIHt9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgRHJvcERvd25JdGVtc0NvbXBvbmVudFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24taXRlbXMnLFxyXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93bi1pdGVtc1wiIChjbGlja091dHNpZGUpPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiIFtjbGlja091dHNpZGVFbmFibGVkXT1cImlzT3BlblwiIFtzdHlsZS5yaWdodF09XCJob3Jpem9udGFsQWxpZ25cIiBbc3R5bGUudG9wXT1cInZlcnRpY2FsQWxpZ25cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcclxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcERvd25JdGVtc0NvbXBvbmVudHtcclxuXHJcbiAgZ2V0IGhvcml6b250YWxBbGlnbigpe1xyXG4gICAgcmV0dXJuIGhvcml6b250YWxBbGlnbm1lbnRbdGhpcy5kcm9wZG93bi5nZXRQbGFjZW1lbnQoKS5oXS5yaWdodDtcclxuICB9XHJcblxyXG4gIGdldCB2ZXJ0aWNhbEFsaWduKCl7XHJcbiAgICByZXR1cm4gdmVydGljYWxBbGlnbm1lbnRbdGhpcy5kcm9wZG93bi5nZXRQbGFjZW1lbnQoKS52XS50b3A7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNPcGVuKCl7XHJcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bi5vcGVuO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERyb3BEb3duQ29tcG9uZW50KSkgcHVibGljIGRyb3Bkb3duKSB7fVxyXG5cclxuICBvbkNsaWNrT3V0c2lkZShldmVudCA6IEV2ZW50ICApe1xyXG4gICAgICB0aGlzLmRyb3Bkb3duLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogIERyb3BEb3duSXRlbUNvbXBvbmVudFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24taXRlbScsXHJcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiZHJvcC1kb3duLWl0ZW1cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+JyxcclxuICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24uY29tcG9uZW50Lmxlc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3BEb3duSXRlbUNvbXBvbmVudHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBjbGFzcyA9ICdkcm9wLWRvd24taXRlbSc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgY2xpY2sgPSAoKSA9PiB0aGlzLnNlbGVjdEVudHJ5KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEcm9wRG93bkNvbXBvbmVudCkpIHB1YmxpYyBkcm9wZG93bikge31cclxuXHJcbiAgc2VsZWN0RW50cnkoKXtcclxuICAgIHRoaXMuc2VsZWN0ZWQubmV4dCgpO1xyXG4gICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqICBEcm9wRG93bkNvbXBvbmVudFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1kcm9wLWRvd24nLFxyXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImRyb3AtZG93blwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxyXG4gIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi5jb21wb25lbnQubGVzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb24gOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkNvbXBvbmVudHtcclxuICBASW5wdXQoKVxyXG4gIHBsYWNlbWVudCA9IHtcclxuICAgIGg6IFwiY2VudGVyXCIsXHJcbiAgICB2OiBcImJvdHRvbVwiXHJcbiAgfTtcclxuXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93JylcclxuICBvcGVuID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGNsYXNzID0gJ2Ryb3AtZG93bic7XHJcblxyXG4gIGNsb3NlKCl7XHJcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZShldmVudCA6IE1vdXNlRXZlbnQpe1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2VtZW50KCl7XHJcbiAgICByZXR1cm4gdGhpcy5wbGFjZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==